from django.shortcuts import render
from . models import Member

# Create your views here.
def main(request):
    title =  'Johnson'
    Recpes = Member.objects.all()
    return render(request, 'index.html', {'title':title, 'Receps':Recpes})

