# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class Stock(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="stocks")
    symbol = models.CharField(max_length=10)  # e.g. TCS, INFY
    company_name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)  # latest price
    prediction = models.FloatField(default=0.0)  # model ke prediction
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.symbol} - {self.company_name}"
