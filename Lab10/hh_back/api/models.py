from django.db import models


# Create your models here.

class Company(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(default="text")
    city = models.CharField(max_length=200)
    address = models.TextField(default = "...")

    def __str__(self):
        return self.name


class Vacancy(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name
