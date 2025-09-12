from django.urls import path
from accounts import views as UserViews
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import StockListCreateView, StockDeleteView



urlpatterns = [
    path('register/', UserViews.RegisterView.as_view()),
    #Include the accounts app urls
    
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    path('protected-view/', UserViews.ProtectedView.as_view()),
    
     path("stocks/", StockListCreateView.as_view(), name="stock-list-create"),
    path("stocks/<int:pk>/", StockDeleteView.as_view(), name="stock-delete"),
    
    
]
    