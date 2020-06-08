from django.db import models
from users.models import MyUser


class Pedido(models.Model):
    user = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    status = models.IntegerField()
