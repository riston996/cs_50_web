from django.urls import path
from hello import views

urlpatterns = [
    path("", views.home, name="home"),
    path("brian", views.brian, name="brian"),
    path("david", views.david, name="david")
]