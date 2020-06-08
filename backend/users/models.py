from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


class UserMgr(BaseUserManager):
    def create_user(self, email, username, password):
        return MyUser.create(username, email, password, False, False)

    def create_superuser(self, email, username, password):
        return MyUser.create(username, email, password, False, True)


class MyUser(AbstractBaseUser):
    email = models.CharField(max_length=250, unique=True)
    is_client = models.BooleanField()
    username = models.CharField(max_length=250)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
    objects = UserMgr()

    @property
    def is_staff(self):
        return self.is_admin

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @classmethod
    def create(cls, username, email, password, is_cliente=True, is_admin=False):
        u = MyUser()
        u.set_password(password)
        u.nome = username
        u.email = email
        u.is_client = is_cliente
        u.is_admin = is_admin
        u.save()
        return u
