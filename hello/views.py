from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    return render(request, "hello/home.html")

def brian(request):
    return HttpResponse("Hello, Brian")

def david(request):
    return HttpResponse("Hello, David")

def greet(request, name):
    return HttpResponse(f"Hello, {name.capitalize()}!")