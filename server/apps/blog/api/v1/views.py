from rest_framework import viewsets
from apps.blog.models import Blog
from apps.blog.api.v1.serializers import BlogSerializer
# Create your views here.


class BlogViewset(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
