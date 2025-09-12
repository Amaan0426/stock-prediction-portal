from django.shortcuts import render

# Create your views here.
import random
from rest_framework import generics, permissions
from .models import Stock
from .serializers import StockSerializer

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

    

# Delete Stock
class StockDeleteView(generics.DestroyAPIView):
    serializer_class = StockSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Stock.objects.filter(user=self.request.user)
