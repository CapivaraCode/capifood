from rest_framework import serializers
from produtos_pedido.seralizer import ProdutosPedidoSeralizer
from .models import Pedido


class PedidoSeralizer(serializers.ModelSerializer):
    produtos = ProdutosPedidoSeralizer(many=True)
    total = serializers.FloatField()

    class Meta:
        model = Pedido
        fields = ["produtos", "total", "status"]
