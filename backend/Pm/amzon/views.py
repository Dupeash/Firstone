from django.shortcuts import render

# Create your views here.
def main(request):
    return render(request, 'amzon/index.html')

def register(request):
    return render(request, 'amzon/register.html')

def login(request):
    return render(request, 'amzon/login.html')

def about(request):
    return render(request, 'amzon/about.html')
