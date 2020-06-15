from django.shortcuts import render
from rest_framework.parsers import JSONParser
from rest_framework import viewsets

# from produtos_pedido.models import ProdutosPedido
from produtos.models import Produto
from . import models
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema
from . import seralizer
from . import services


class PedidoViewSets(viewsets.ModelViewSet):
    def get_queryset(self):
        return models.Pedido.objects.prefetch_related().all()

    def get_serializer_class(self):
        if self.request.method == "POST":
            return seralizer.PedidoCreateSeralizer
        return seralizer.PedidoSeralizer
