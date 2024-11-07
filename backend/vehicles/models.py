from django.db import models

class Vehicle(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    brand = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    year = models.PositiveIntegerField()
    mileage = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=[
        ('available', 'Available'),
        ('reserved', 'Reserved'),
        ('sold', 'Sold')
    ], default='available')

    def __str__(self):
        return f"{self.brand} {self.model} ({self.year})"

