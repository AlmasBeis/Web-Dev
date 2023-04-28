from django.contrib.auth import get_user_model
from django.db import models

from django.utils import timezone

User = get_user_model()

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    image = models.TextField(default="https://m.media-amazon.com/images/I/517gfFg6I6L._AC_.jpg")
    description = models.TextField(default="...")
    created_at = models.DateTimeField(default=timezone.now, editable=False)


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default="...")
    price = models.DecimalField(max_digits=6, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image = models.TextField(default="https://m.media-amazon.com/images/I/517gfFg6I6L._AC_.jpg")
    created_at = models.DateTimeField(default=timezone.now, editable=False)


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    created_at = models.DateTimeField(default=timezone.now, editable=False)


class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    rating = models.IntegerField(0)
    comment = models.TextField(default="...")
    created_at = models.DateTimeField(default=timezone.now, editable=False)
