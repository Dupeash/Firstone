from django.db import models
from datetime import datetime

# Create your models here.
class Fills(models.Model):
    heading=models.CharField(max_length=1000)
    created_at=models.DateTimeField(default=datetime.now(), blank=True)
    content=models.TextField(max_length=10000)
    def __str__(self):
        return self.heading