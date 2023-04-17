from abc import ABC

from rest_framework import serializers
from .models import Company, Vacancy


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'


class CompanyCreateSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=200)
    description = serializers.CharField(max_length=200, required=False, allow_blank=True, default="")
    city = serializers.CharField(max_length=200)
    address = serializers.CharField(max_length=200, required=False, allow_blank=True, default="")

    def create(self, validated_data):
        return Company.objects.create(**validated_data)


class VacancySerializer(serializers.ModelSerializer):
    company_id = serializers.IntegerField(write_only=True)
    company = CompanySerializer(read_only=True)

    class Meta:
        model = Vacancy
        fields = '__all__'

    def create(self, validated_data):
        company_id = validated_data.pop('company_id')
        company = Company.objects.get(id=company_id)
        vacancy = Vacancy.objects.create(company=company, **validated_data)
        return vacancy
