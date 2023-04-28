from django.db.models import Sum
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import status, generics, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Vacancy, Company
from api.serializer import CompanySerializer, VacancySerializer, CompanyCreateSerializer



def index(request):
    return HttpResponse("Welcome to the shop")


# class CompanyList(generics.GenericAPIView, mixins.ListModelMixin,
#                   mixins.CreateModelMixin):
#     queryset = Company.objects.all()
#     serializer_class = CompanySerializer
#
#     def get(self, request, *args, **kwargs):
#         return self.list(request, *args, **kwargs)
#
#     def post(self, request, *args, **kwargs):
#         return self.create(request, *args, **kwargs)

class CompanyList(generics.GenericAPIView, mixins.ListModelMixin,
                  mixins.CreateModelMixin):
    queryset = Company.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CompanyCreateSerializer
        return CompanySerializer

    def get(self, request, *args, **kwargs):
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(self.queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = CompanyCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CompanyByID(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin,
                  mixins.DestroyModelMixin):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    def get(self, request, pk, *args, **kwargs):
        return self.retrieve(request, pk, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class VacancyListByCompany(generics.GenericAPIView, mixins.ListModelMixin):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['pk']
        return Vacancy.objects.filter(company_id=company_id)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class VacancyList(generics.GenericAPIView, mixins.ListModelMixin,
                  mixins.CreateModelMixin, ):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class VacancyByID(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin,
                  mixins.DestroyModelMixin):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def get(self, request, pk, *args, **kwargs):
        return self.retrieve(request, pk, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class VacancyTopTen(generics.GenericAPIView, mixins.ListModelMixin):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.all().order_by('-salary')[:10]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

#
# class ProductByCategory(APIView):
#     def get(self, request, category_id):
#         category = Category.objects.get(id=category_id)
#         products = category.products.all()
#         serializer = ProductSerializer(products, many=True)
#         return Response(serializer.data)
# Create your views here.
