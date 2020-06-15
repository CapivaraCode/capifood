from django.db import models
from users.models import MyUser
from produtos.models import Produto


class ProdutoPedido(models.Model):

    produto = models.ForeignKey(
        Produto, on_delete=models.CASCADE, related_name="produto"
    )
    preco_venda = models.FloatField()
    quantidade = models.IntegerField()

    def __str__(self):
        return self.produto.nome

    @classmethod
    def create(cls, produto, quantidade, preco_venda):

        p = ProdutoPedido()
        p.produto = produto
        p.preco_venda = preco_venda
        p.quantidade = quantidade
        return p


class Pedido(models.Model):
    user = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    status = models.IntegerField()
    produtos = models.ManyToManyField(ProdutoPedido, related_name="produtos")

    def total_pedido(self,):
        return sum([x.preco_venda * x.quantidade for x in pedido.produtos])
