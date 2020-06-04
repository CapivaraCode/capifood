from django.db import models
from django.contrib.auth.models import User


class Pedido(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.IntegerField()
