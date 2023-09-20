from django.urls import path 
from . import views

urlpatterns=[
    path('', views.min),
    path('posts/<str:pk>', views.man)
]