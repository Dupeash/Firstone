from django.contrib import admin
from django.urls import path , include
from . import views

urlpatterns = [
    path('', views.main, name='amz-home'),
    path('register',views.register, name='amz-reg' ),
    path('login', views.login, name = 'amz-log'),
    path('About', views.about, name='amz-abt'),
]
