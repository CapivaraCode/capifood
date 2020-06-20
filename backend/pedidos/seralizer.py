from rest_framework import serializers
from . import models
from produtos.serialazers import ProdutoSerializer
import datetime


class ProdutoPedidoSeralizer(serializers.ModelSerializer):
    produto = ProdutoSerializer(read_only=True)

    class Meta:
        model = models.ProdutoPedido
        fields = "__all__"


class ProdutoPedidoCreateSeralizer(serializers.Serializer):
    produto_id = serializers.IntegerField()
    quantidade = serializers.IntegerField()


class PedidoSeralizer(serializers.ModelSerializer):
    produtos = ProdutoPedidoSeralizer(many=True)
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = models.Pedido
        fields = "__all__"


class PedidoCreateSeralizer(serializers.Serializer):

    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    produtos = ProdutoPedidoCreateSeralizer(many=True)

    def create(self, validated_data):
        breakpoint()
        produtos = [x["produto_id"] for x in validated_data["produtos"]]
        produtos = models.Produto.objects.filter(id__in=produtos)
        pedido = models.Pedido()
        pedido.status = 1
        pedido.user = validated_data["user"]
        pedido.created_at = datetime.datetime.now()
        pedido.save()
        for p in produtos:
            for x in validated_data["produtos"]:
                if p.id == x["produto_id"]:
                    pp = models.ProdutoPedido.create(p, x["quantidade"], p.preco)
                    pp.save()
                    pedido.produtos.add(pp)

        return pedido
