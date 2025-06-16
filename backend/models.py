from django.db import models

class Userdata(models.Model):
    USER_TYPES = (
        ('customer', 'Customer'),
        ('vendor', 'Vendor'),
    )

    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    confirm_password = models.CharField(max_length=100)  # Optional but matches your signup code
    user_type = models.CharField(max_length=10, choices=USER_TYPES)
    mobile = models.CharField(max_length=15)
    location = models.CharField(max_length=100)
    experience = models.TextField(blank=True, null=True)  # Only for vendors
    image = models.ImageField(upload_to='profile_images/', blank=True, null=True)

    def __str__(self):
        return f"{self.name} ({self.user_type})"
