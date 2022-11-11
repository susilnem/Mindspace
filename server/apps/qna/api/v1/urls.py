from django.urls import path, include
from rest_framework import routers
from apps.qna.api.v1.views import QnaViewset

# Create your url here.

router = routers.DefaultRouter()
router.register(r'', QnaViewset, 'Qna')

urlpatterns = [
    path('', include(router.urls)),
]
