from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.
from .models import Produto
from .serialazers import ProdutoSerializer


class ProdutoViewSet(ModelViewSet):
    serializer_class = ProdutoSerializer
    queryset = Produto.objects.all()

    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['categoria']