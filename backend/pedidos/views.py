from django.shortcuts import render
from produtos_pedido.seralizer import CreateProdutosPedidoSeralizer
from rest_framework.parsers import JSONParser
from rest_framework.viewsets import ViewSet
from produtos_pedido.models import ProdutosPedido
from produtos.models import Produto
from .models import Pedido
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema
from .seralizer import PedidoSeralizer
from . import services


class PedidoViewSets(ViewSet):
    @swagger_auto_schema(
        operation_description="GET /pedidos/",
        responses={200: PedidoSeralizer(many=True)},
    )
    def list(self, request):
        services.get_pedidos(request.user)
        json = PedidoSeralizer(pedidos, many=True)
        return Response(data=json.data)

    @swagger_auto_schema(
        operation_description="POST /pedidos/",
        request_body=CreateProdutosPedidoSeralizer(many=True),
        responses={200: PedidoSeralizer},
    )
    def create(self, request):
        serializer = CreateProdutosPedidoSeralizer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)
        pedido = services.create_pedido(request.user, serializer.validated_data)
        json = PedidoSeralizer(pedido)
        return Response(data=json.data, status=200)
