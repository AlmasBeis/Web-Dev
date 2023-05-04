from django.http import HttpResponse
from django.shortcuts import get_object_or_404

from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .models import Product, Category, Cart
from .serializer import ProductSerializer, CategorySerializer, CartSerializer


# Create your views here.
def index(request):
    return HttpResponse("Welcome to the shop")


class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (AllowAny,)


class ProductByID(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (AllowAny,)


class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryByID(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CartList(generics.ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class CartById(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def cart_list(request):
    # Получаем ID пользователя из токена
    user_id = request.user.id
    if request.method == 'GET':
        carts = Cart.objects.filter(user_id=user_id)
        serializer = CartSerializer(carts, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        request.data['user'] = user_id
        serializer = CartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def cart_detail(request, pk):
    # Получаем ID пользователя из токена
    user_id = request.user.id
    cart = get_object_or_404(Cart.objects.filter(user_id=user_id), pk=pk)
    if request.method == 'GET':
        serializer = CartSerializer(cart)
        return Response(serializer.data)
    elif request.method == 'PUT':
        request.data['user'] = user_id
        serializer = CartSerializer(cart, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        cart.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


class ProductByCategory(APIView):
    def get(self, request, category_id):
        category = Category.objects.get(id=category_id)
        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


def get_user_id_from_jwt(request):
    """
    Возвращает ID пользователя из JWT-токена
    """
    jwt_auth = JSONWebTokenAuthentication()
    try:
        user, _ = jwt_auth.authenticate(request)
        return user.id
    except:
        return None


class UserId(APIView):
    def get(self, request):
        user_id = get_user_id_from_jwt(request)
        if user_id is not None:
            return Response({'id': user_id}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)
