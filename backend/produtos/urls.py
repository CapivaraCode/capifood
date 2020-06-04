from rest_framework import routers
from .views import ProdutoViewSet

router = routers.SimpleRouter()
router.register(r"produtos", ProdutoViewSet)

urlpatterns = router.urls
