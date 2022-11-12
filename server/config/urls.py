from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('patient/', include('apps.patient.api.v1.urls')),
    path('counsellor/', include('apps.counsellor.api.v1.urls')),
    path('qna/', include('apps.qna.api.v1.urls')),
    path('blog/', include('apps.blog.api.v1.urls')),
    path('booking/', include('apps.booking.api.v1.urls')),
    # path('auth/', include('djoser.urls')),
    # path('auth/', include('djoser.urls.jwt')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
