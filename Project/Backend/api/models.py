
from django.contrib.auth.models import User
from django.db import models

from django.utils import timezone

from user.models import CustomUser


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    image = models.TextField(default="https://m.media-amazon.com/images/I/517gfFg6I6L._AC_.jpg")
    description = models.TextField(default="...")
    created_at = models.DateTimeField(default=timezone.now, editable=False)

    def __str__(self):
        return self.name


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default="...")
    price = models.DecimalField(max_digits=6, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image = models.TextField(default="https://m.media-amazon.com/images/I/517gfFg6I6L._AC_.jpg")
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    def __str__(self):
        return self.name

class Cart(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    created_at = models.DateTimeField(default=timezone.now, editable=False)



class Review(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    rating = models.IntegerField(0)
    comment = models.TextField(default="...")
    created_at = models.DateTimeField(default=timezone.now, editable=False)
