from django.urls import path, include
from rest_framework import routers
from apps.blog.api.v1.views import BlogViewset

# Create your url here.

router = routers.DefaultRouter()
router.register(r'', BlogViewset, 'blogs')

urlpatterns = [
    path('', include(router.urls)),
]
