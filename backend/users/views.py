from django.shortcuts import render
from rest_framework import viewsets, response, status
from .models import MyUser
from .serializers import UserSerializer, LoginSerializer
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action
from rest_framework import exceptions


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = MyUser.objects.all()

    @action(detail=False, methods=["post"])
    def login(self, request, *args, **kwargs):

        serializer = LoginSerializer(data=request.data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        pwd = serializer.validated_data["password"]
        email = serializer.validated_data["email"]
        user = MyUser.objects.get(email=email)
        if not user.check_password(pwd):
            raise exceptions.PermissionDenied()
        token, created = Token.objects.get_or_create(user=user)
        return response.Response(
            {"token": token.key, "user_id": user.pk, "email": user.email}
        )
