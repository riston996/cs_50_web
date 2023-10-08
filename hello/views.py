from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello,riston")

def brian(request):
    return HttpResponse("Hello, Brian")

def david(request):
    return HttpResponse("Hello, David")
