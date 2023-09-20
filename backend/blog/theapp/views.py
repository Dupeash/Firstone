from django.shortcuts import render
from . models import Fills

# Create your views here.
def min(request):
    posts=Fills.objects.all()
    
    return render(request, 'index.html', {'posts':posts})

def man(request,pk):
    posts=Fills.objects.get(id=pk)
    return render(request, 'content.html',{'posts':posts})
