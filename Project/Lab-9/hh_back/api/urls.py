from django.urls import path

from . import views

urlpatterns = [
    path('companies/', views.companies),
    path('companies/<int:c_id>/', views.company_by_id),
    path('companies/<int:c_id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.vacancies),
    path('vacancies/<int:v_id>/', views.vacancy_by_id),
    path('vacancies/top_ten/', views.top_ten)
]