from rest_framework import serializers
from .models import ProdutosPedido


class CreateProdutosPedidoSeralizer(serializers.Serializer):
    quantidade = serializers.IntegerField()
    id_produto = serializers.IntegerField()


class ProdutosPedidoSeralizer(serializers.ModelSerializer):
    class Meta:
        model = ProdutosPedido
        fields = "__all__"
