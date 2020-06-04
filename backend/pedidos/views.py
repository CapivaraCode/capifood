from django.shortcuts import render
from produtos_pedido.seralizer import CreateProdutosPedidoSeralizer
from rest_framework.parsers import JSONParser

# Create your views here.
from rest_framework.viewsets import ViewSet
from produtos_pedido.models import ProdutosPedido
from produtos.models import Produto
from .models import Pedido
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema
from .seralizer import PedidoSeralizer


class PedidoViewSets(ViewSet):
    @swagger_auto_schema(
        operation_description="GET /pedidos/",
        responses={200: PedidoSeralizer(many=True)},
    )
    def list(self, request):
        pedidos = Pedido.objects.select_related().all()

        for x in pedidos:
            x.produtos = x.produtospedido_set.all()
            x.total = sum(map(lambda x: x.preco_venda, x.produtos))

        json = PedidoSeralizer(pedidos, many=True)
        return Response(data=json.data)

    @swagger_auto_schema(
        operation_description="POST /pedidos/",
        request_body=CreateProdutosPedidoSeralizer(many=True),
        responses={200: PedidoSeralizer},
    )
    def create(self, request):
        user = request.user
        produtos = CreateProdutosPedidoSeralizer(data=request.data, many=True)

        if produtos.is_valid():
            produtos = produtos.validated_data

        pedido = Pedido()
        pedido.user = user
        pedido.status = 1
        pedido.save()

        produtos_vendidos = []
        total = 0
        for p in produtos:

            obj_produto = Produto.objects.get(pk=p["id_produto"])
            pp = ProdutosPedido()
            pp.produto = obj_produto
            pp.preco_venda = obj_produto.preco
            pp.quantidade = p["quantidade"]
            pp.pedido = pedido
            pp.save()
            total += pp.preco_venda
            produtos_vendidos.append(pp)
        pedido.produtos = produtos_vendidos
        pedido.total = total

        json = PedidoSeralizer(pedido)
        return Response(data=json.data, status=200)
