from django.shortcuts import render
from . models import Do 
# Create your views here.
def main(request):
    posts = Do.objects.all()

    return render(request , 'base.html',{ 'posts':posts } )
    