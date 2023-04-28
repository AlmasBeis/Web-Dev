# Generated by Django 4.1.7 on 2023-04-27 10:04

<<<<<<< HEAD
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models
=======
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
>>>>>>> ea18350e6d55ed8b2c871f567a6ad7e7c39d7eb2


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('image', models.TextField(default='https://m.media-amazon.com/images/I/517gfFg6I6L._AC_.jpg')),
                ('description', models.TextField(default='...')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(default='...')),
                ('price', models.DecimalField(decimal_places=2, max_digits=6)),
                ('image', models.TextField(default='https://m.media-amazon.com/images/I/517gfFg6I6L._AC_.jpg')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.category')),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField(verbose_name=0)),
                ('comment', models.TextField(default='...')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.product')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=1)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.product')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
