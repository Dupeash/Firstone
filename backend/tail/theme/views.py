from django.shortcuts import render

# Create your views here.
def main(request):
    # posts = Do.objects.all()

    return render(request , 'base.html' )
    