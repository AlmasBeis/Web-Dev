from django.urls import path
# from rest_framework_jwt.views import obtain_jwt_token

from . import views
from .views import CompanyByID, VacancyList, VacancyByID, VacancyTopTen, VacancyListByCompany, CompanyList

urlpatterns = [
    path('', views.index, name='index'),
    # path('login/', obtain_jwt_token),
    path('companies/', views.company_list, name='companyList'),
    path('company/',CompanyList.as_view()),
    path('companies/<int:pk>/', CompanyByID.as_view()),
    path('companies/<int:pk>/vacancies', VacancyListByCompany.as_view()),
    path('vacancies/', VacancyList.as_view()),
    path('vacancies/<int:pk>/', VacancyByID.as_view()),
    path('vacancies/top_ten/', VacancyTopTen.as_view()),
]
