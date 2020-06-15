from .models import Pedido
from produtos.models import Produto
from .enumerators import PedidoEnum


def get_total_pedido(pedido):
    return sum([x.preco_venda * x.quantidade for x in pedido.produtos])


def create_pedido(user, produtos):

    pedido = Pedido()
    pedido.user = user
    pedido.status = PedidoEnum.PENDENTE.value
    pedido.save()

    produtos_vendidos = []
    for p in produtos:

        obj_produto = Produto.objects.get(pk=p["id_produto"])
        produtos_vendidos.append(
            ProdutosPedido.create(
                obj_produto, p["quantidade"], obj_produto.preco, pedido
            )
        )

    pedido.produtos = produtos_vendidos
    pedido.total = get_total_pedido(pedido)
    return pedido


def get_pedidos(user,):
    pedidos = Pedido.objects.select_related().filter(user=user).all()
    for pedido in pedidos:
        x.produtos = x.produtospedido_set.all()
        x.total = get_total_pedido(pedido)
    return pedidos
