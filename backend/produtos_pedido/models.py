from django.db import models
from produtos.models import Produto
from pedidos.models import Pedido

# Create your models here.
class ProdutosPedido(models.Model):

    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    preco_venda = models.FloatField()
    quantidade = models.IntegerField()

