from django.urls import path
from . import views
from .views import ProductList, ProductByID, CategoryList, CategoryByID, ProductByCategory

urlpatterns = [
    path('', views.index, name='index'),
    path('products/', ProductList.as_view()),
    path('products/<int:pk>/', ProductByID.as_view()),
    path('categories/', CategoryList.as_view()),
    path('categories/<int:pk>/', CategoryByID.as_view()),
    path('categories/<int:category_id>/products/', ProductByCategory.as_view()),
]
