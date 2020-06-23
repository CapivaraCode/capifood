from django.contrib import admin
from . import models
from django.utils.html import format_html_join
from django.utils.safestring import mark_safe


class PedidoAdmin(admin.ModelAdmin):
    list_display = ("created_at", "items", "total")


admin.site.register(models.Pedido, PedidoAdmin)
admin.site.register(models.ProdutoPedido)
