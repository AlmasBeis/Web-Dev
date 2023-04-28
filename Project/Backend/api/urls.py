from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from . import views
from .views import ProductList, ProductByID, CategoryList, CategoryByID

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', obtain_jwt_token),
    path('products/', ProductList.as_view()),
    path('categories/',CategoryList.as_view()),
    path('products/<int:pk>/', ProductByID.as_view()),
    path('categories/<int:pk>/', CategoryByID.as_view()),
]
