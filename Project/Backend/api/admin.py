from django.contrib import admin
from user.models import CustomUser

from .models import Product, Category, Cart

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(CustomUser)
admin.site.register(Cart)


# Register your models here.
