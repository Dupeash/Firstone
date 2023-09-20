from django.db import models

# Create your models here.
class Cidy(models.Model):
    city_name=models.CharField(max_length=100)
    temperature=models.CharField(max_length=100)
    Humidity = models.CharField(max_length=100)
    Longitude = models.CharField(max_length=100)
    Latitude = models.CharField(max_length=100)
    



