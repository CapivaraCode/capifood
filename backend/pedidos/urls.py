from rest_framework import routers
from .views import PedidoViewSets

router = routers.DefaultRouter()
router.register(r"pedidos", PedidoViewSets, basename="pedido")

urlpatterns = router.urls
