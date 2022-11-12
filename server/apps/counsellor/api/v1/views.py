from rest_framework import viewsets
from apps.counsellor.api.v1.serializers import CounsellorSerializer
from apps.counsellor.models import Counsellor
# Create your views here.


class CounsellorViewset(viewsets.ModelViewSet):
    queryset = Counsellor.objects.all()
    serializer_class = CounsellorSerializer
