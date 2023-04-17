import json
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from .models import Company, Vacancy
from django.shortcuts import render


@csrf_exempt
def companies(request):
    if request.method == 'GET':
        company_list = Company.objects.all()
        companies_json = [c.to_json() for c in company_list]
        return JsonResponse(companies_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        c_name = data.get('name', '')
        c_description = data.get('description', '')
        c_city = data.get('city', '')
        c_address = data.get('address', '')
        c = Company.objects.create(name=c_name, description=c_description, city=c_city, address=c_address)
        return JsonResponse(c.to_json())


@csrf_exempt
def company_by_id(request, c_id):
    try:
        company = Company.objects.get(id=c_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        # update
        c_name = data.get('name', company.name)
        company.name = c_name

        c_description = data.get('description', company.description)
        company.description = c_description

        c_city = data.get('city', company.city)
        company.city = c_city

        c_address = data.get('address', company.address)
        company.address = c_address

        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})


@csrf_exempt
def vacancies(request):
    if request.method == 'GET':
        vacancy_list = Vacancy.objects.all()
        vacancies_json = [v.to_json() for v in vacancy_list]
        return JsonResponse(vacancies_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        v_name = data.get('name', '')
        v_description = data.get('description', '')
        v_salary = data.get('salary', '')
        v_company = data.get('company', '')
        try:
            company_obj = Company.objects.get(name=v_company)
        except Company.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=400)
        v = Vacancy.objects.create(name=v_name, description=v_description, salary=v_salary, company=company_obj)
        return JsonResponse(v.to_json())


@csrf_exempt
def vacancy_by_id(request, v_id):
    try:
        vacancy = Vacancy.objects.get(id=v_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        # update
        v_name = data.get('name', vacancy.name)
        vacancy.name = v_name

        v_description = data.get('description', vacancy.description)
        vacancy.description = v_description

        v_salary = data.get('salary', vacancy.salary)
        vacancy.salary = v_salary

        v_company = data.get('company', vacancy.company)
        try:
            company_obj = Company.objects.get(name=v_company)
            vacancy.company = company_obj
        except Company.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=400)

        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'delete': True})


@csrf_exempt
def company_vacancies(request, c_id):
    if request.method == 'GET':
        try:
            company = Company.objects.get(id=c_id)
            vacancy_list = Vacancy.objects.filter(company=company)
            vacancies_json = [v.to_json() for v in vacancy_list]
            return JsonResponse(vacancies_json, safe=False)
        except Company.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=400)


@csrf_exempt
def top_ten(request):
    if request.method == 'GET':
        vacancy_list = Vacancy.objects.order_by("-salary")[:10]
        vacancies_json = [v.to_json() for v in vacancy_list]
        return JsonResponse(vacancies_json, safe=False)