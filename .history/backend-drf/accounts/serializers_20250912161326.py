from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Stock

# ---------------- User Serializer ----------------
class UserSerializer(serializers.ModelSerializer): 
    password = serializers.CharField(
        write_only=True, 
        min_length=10, 
        style={'input_type': 'password'}
    )

    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        
    def create(self, validated_data):
        # Agar hum simple create kare to password plain text me save hota
        # isliye hum create_user use kar rahe hain jo password hash karta hai
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        return user


