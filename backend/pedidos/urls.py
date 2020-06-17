from rest_framework import routers
from . import views
from django.urls import path

pedido_atual = views.PedidoAtual.as_view()

router = routers.DefaultRouter()
router.register(r"pedidos", views.PedidoViewSets, basename="pedido")

urlpatterns = router.urls

urlpatterns.append(path("pedido-atual/", pedido_atual, name="pedido-atual"))

