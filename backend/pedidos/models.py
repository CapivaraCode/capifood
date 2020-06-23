from django.db import models
from users.models import MyUser
from produtos.models import Produto
from django.utils.safestring import mark_safe


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
    STATUS_CHOICE = [
        ("PENDENTE", 1),
        ("ENTREGE", 2),
    ]
    status = models.IntegerField(choices=STATUS_CHOICE)
    produtos = models.ManyToManyField(ProdutoPedido, related_name="produtos")
    created_at = models.DateTimeField(
        verbose_name="data do pedido", null=True, blank=True
    )

    def total_pedido(self,):
        return sum([x.preco_venda * x.quantidade for x in pedido.produtos])

    @property
    def total(self,):
        return sum([x.preco_venda * x.quantidade for x in self.produtos.all()])

    @property
    def items(self,):

        return mark_safe(
            "<br>".join(
                [f"{x.produto.nome}, qtd: {x.quantidade}" for x in self.produtos.all()]
            )
        )

