from django.db import models

# Create your models here.
class Member(models.Model):
  RecipeName =models.CharField(max_length=50)
  MadeBy = models.CharField(max_length=70)
  MakingTime = models.CharField(max_length=20)
  def __str__(self):
        return self.RecipeName

