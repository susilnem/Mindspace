from django.urls import path, include
from rest_framework import routers
from apps.counsellor.api.v1.views import CounsellorViewset

# Create your url here.

router = routers.DefaultRouter()
router.register(r'', CounsellorViewset, 'counsellors')

urlpatterns = [
    path('', include(router.urls)),
]
