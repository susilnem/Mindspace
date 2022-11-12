from django.urls import path, include
from rest_framework import routers
from apps.booking.api.v1.views import BookingViewset, RequestViewset, RequestCreate

# Create your url here.

router = routers.DefaultRouter()
router.register(r'', BookingViewset, 'booking')

urlpatterns = [
    path('requests/', RequestViewset.as_view(), name="requestlist"),
    path('request/', RequestCreate.as_view(), name="requestcreate"),
    path('', include(router.urls)),
]
