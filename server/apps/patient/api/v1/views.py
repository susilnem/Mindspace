from rest_framework import viewsets
from apps.patient.models import Patient
from apps.patient.api.v1.serializers import PatientSerializer
# Create your views here.


class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
