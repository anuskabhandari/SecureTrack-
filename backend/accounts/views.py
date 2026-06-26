from .models import User
from django.contrib.auth import authenticate
from django.contrib.auth import logout as django_logout

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import RegisterSerializer


@api_view(['POST'])
def register(request):

    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():
        User.objects.create_user(
            username=serializer.validated_data['username'],
            email=serializer.validated_data['email'],
            password=serializer.validated_data['password'],
            role=serializer.validated_data['role']
        )

        return Response({
            "message": "User registered successfully"
        })

    return Response(serializer.errors, status=400)


@api_view(['POST'])
def login(request):

    user = authenticate(
        username=request.data.get('username'),
        password=request.data.get('password')
    )

    if user:

        role = "Admin" if user.is_superuser else user.role

        return Response({
            "message": "Login success",
            "role": role,
            "username": user.username
        })

    return Response({
        "message": "Invalid credentials"
    }, status=400)


@api_view(['POST'])
def logout(request):

    django_logout(request)

    return Response({
        "message": "Logout successful"
    })