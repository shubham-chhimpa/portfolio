from django.urls import path

from . import views

urlpatterns = [
    path('userdetails', views.UserDetailsView.as_view(), name='UserDetailsView'),
]
