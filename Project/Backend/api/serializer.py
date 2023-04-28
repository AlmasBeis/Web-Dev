from abc import ABC

from rest_framework import serializers
<<<<<<< HEAD

=======
>>>>>>> ea18350e6d55ed8b2c871f567a6ad7e7c39d7eb2
from .models import Product, Category, Cart, Review


class CategorySerializer(serializers.ModelSerializer):
    # catedory_id = serializers.IntegerField(write_only=True)
    # product = ProductSerializer(read_only=True)

    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    category_id = serializers.IntegerField(write_only=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Product
        fields = '__all__'

    def create(self, validated_data):
        category_id = validated_data.pop('category_id')
        category = Category.objects.get(id=category_id)
        product = Product.objects.create(category=category, **validated_data)
        return product


class CartSerializer(serializers.ModelSerializer):
    product_id = serializers.IntegerField(write_only=True)
    product = ProductSerializer()

    class Meta:
        model = Cart
        fields = '__all__'

    def create(self, validated_data):
        product_id = validated_data.pop('product_id')
        product = Category.objects.get(id=product_id)
        cart = Product.objects.create(product=product, **validated_data)
        return cart


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
