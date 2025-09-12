from django.shortcuts import render

# Create your views here.
import random
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Stock
from .serializers import StockSerializer
from rest_framework import generics

# List + Create Stocks
class StockListCreateView(generics.ListCreateAPIView):
    serializer_class = StockSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Stock.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # dummy prediction
        random_prediction = round(random.uniform(100, 500), 2)
        serializer.save(user=self.request.user, prediction=random_prediction)
        
    def perform_create(self, serializer):
    symbol = serializer.validated_data['symbol'].upper()
    company_lookup = {
        "TCS": "Tata Consultancy Services",
        "INFY": "Infosys",
        "RELIANCE": "Reliance Industries",
        "HDFC": "HDFC Bank",
        # Add more mappings as needed
    }
    company_name = company_lookup.get(symbol, "Unknown Company")
    random_prediction = round(random.uniform(100, 500), 2)
    serializer.save(user=self.request.user, prediction=random_prediction, company_name=company_name)

    @action(detail=False, methods=['get'])
    def my_stocks(self, request):
        stocks = Stock.objects.filter(user=request.user)
        serializer = self.get_serializer(stocks, many=True)
        return Response(serializer.data)

# Delete Stock
class StockDeleteView(generics.DestroyAPIView):
    serializer_class = StockSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Stock.objects.filter(user=self.request.user)
