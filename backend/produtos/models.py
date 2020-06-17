from django.db import models


class Produto(models.Model):
    CATEGORIA_ENUM = (
        ("Salgados", "Salgados"),
        ("Sucos", "Sucos"),
        ("Bebidas", "Bebidas"),
    )

    nome = models.CharField(max_length=255)
    descricao = models.CharField(max_length=255)
    categoria = models.CharField(max_length=255, choices=CATEGORIA_ENUM)
    preco = models.FloatField()
