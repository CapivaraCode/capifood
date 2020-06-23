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
from rest_framework import generics, exceptions, permissions


class PedidoViewSets(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return models.Pedido.objects.filter(user=self.request.user)

    def get_serializer_class(self):
        if self.request.method == "POST":
            return seralizer.PedidoCreateSeralizer
        return seralizer.PedidoSeralizer


class PedidoAtual(generics.RetrieveAPIView):
    def get(self, request, *args, **kwargs):
        pedido = (
            models.Pedido.objects.prefetch_related()
            .filter(user=request.user)
            .filter(status=1)
            .last()
        )
        if pedido is None:
            raise exceptions.NotFound()
        pedido_serializer = seralizer.PedidoSeralizer(pedido)
        return Response(pedido_serializer.data)
