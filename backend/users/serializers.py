from rest_framework import serializers
from .models import MyUser


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ["email", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = MyUser.create(
            validated_data["username"],
            validated_data["email"],
            validated_data["password"],
            True,
        )
        user.save()
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()
