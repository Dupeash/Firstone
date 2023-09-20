from django.shortcuts import render
import urllib.request
import json
from .models import Cidy
# Create your views here.
def main(request):
    if request.method=='POST':
        city=request.POST['city']
    
        
               
  
        res = urllib.request.urlopen('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=cb771e45ac79a4e8e2205c0ce66ff633').read()
  

        list_of_data = json.loads(res)
  
         # data for variable list_of_data
        data = {
            
            "country_code": str(list_of_data['sys']['country']),
            "coordinate": str(list_of_data['coord']['lon']) + ' '
                        + str(list_of_data['coord']['lat']),
            "temp": str(list_of_data['main']['temp']) + 'k',
            "pressure": str(list_of_data['main']['pressure']),
            "humidity": str(list_of_data['main']['humidity']),
        }
        print(data)

        
        olla = Cidy(cname=city)
        olla.save()
        




    else:
        city=''
        data={}

    return render(request, 'index.html', {'data': data, 'city':city})
    