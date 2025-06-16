from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField()
    mobile = forms.CharField(max_length=10, widget=forms.TextInput(attrs={'pattern': '[0-9]{10}'}))
    location = forms.CharField(max_length=255)
    profile_image = forms.ImageField(required=False)
    experience = forms.IntegerField(required=False)
    user_type = forms.ChoiceField(choices=[('customer', 'Customer'), ('vendor', 'Vendor')], widget=forms.HiddenInput())

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password1', 'password2', 'mobile', 'location', 'profile_image', 'experience', 'user_type']

    # Conditional validation for 'experience' field based on 'user_type'
    def clean(self):
        cleaned_data = super().clean()
        user_type = cleaned_data.get('user_type')
        experience = cleaned_data.get('experience')

        # Validate experience only for vendor
        if user_type == 'vendor' and not experience:
            self.add_error('experience', 'Experience is required for vendors.')

        return cleaned_data
