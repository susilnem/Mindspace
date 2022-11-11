from django.urls import path, include
from rest_framework import routers
from apps.patient.api.v1.views import PatientViewSet

# Create your url here.

router = routers.DefaultRouter()
router.register(r'', PatientViewSet, 'patients')

urlpatterns = [
    path('', include(router.urls)),
]
