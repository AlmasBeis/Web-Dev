from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from user.views import UserCreateView, UserUpdateView, UserRetrieveView
from . import views
from .views import ProductList, ProductByID, CategoryList, CategoryByID, UserId, CartList, CartById

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', obtain_jwt_token),
    path('signup/', UserCreateView.as_view()),
    path('password/<int:pk>/', UserUpdateView.as_view()),
    path('userid/', UserId.as_view()),
    path('userinfo/', UserRetrieveView.as_view()),
    path('products/', ProductList.as_view()),
    path('cart/',views.cart_list),
    path('cart/<int:pk>/', views.cart_detail),
    path('categories/',CategoryList.as_view()),
    path('products/<int:pk>/', ProductByID.as_view()),
    path('categories/<int:pk>/', CategoryByID.as_view()),
]
