from rest_framework import serializers
from .models import Stock

class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ['id', 'user', 'symbol', 'company_name', 'price', 'prediction', 'created_at']
        read_only_fields = ['id', 'created_at', 'user']


