from django.contrib.auth.models import User
from rest_framework import serializers
#  Create your serializers here.
#   why we need a serializer?
# // Serializer is used to convert complex data such as querysets and model instances to native Python datatypes that can then be easily rendered into JSON, XML or other content types.
# // It also provides deserialization, allowing parsed data to be converted back into complex types, after first validating the incoming data.

class UserSerializer(serializers.ModelSerializer): 
    password = serializers.CharField(write_only=True, min_length = 10, style = {'input_type': 'password'})
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        
    def create(self, validated_data):
        
        #if we do 
        #User.objects.create = save the password as plain text which is a security issue
        #so we use create_user method which hashes the password before saving it to the database
        
       # user = User.objects.create_user(**validated_data) #if this is confusing then another way to write it is:
        user = User.objects.create_user( 
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        ) #this is how we manually pass the fields to create_user method
        return user
    
    