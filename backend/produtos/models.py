from django.db import models

# Create your models here.


class Produto(models.Model):
    nome = models.CharField(max_length=255)
    descricao = models.CharField(max_length=255)
    categoria = models.CharField(max_length=255)
    preco = models.FloatField()

