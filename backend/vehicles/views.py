from django.shortcuts import render
from rest_framework import viewsets
from .models import Vehicle
from .serializers import VehicleSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes

@permission_classes([IsAuthenticated])
def VehicleListView(request):
    # Tvoje implementace


class VehicleViewSet(viewsets.ModelViewSet):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer


# vehicles/views.py
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes



