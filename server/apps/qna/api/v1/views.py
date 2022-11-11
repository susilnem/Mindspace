from rest_framework import viewsets
from apps.qna.models import Qna
from apps.qna.api.v1.serializers import QnaSerializer
# Create your views here.


class QnaViewset(viewsets.ModelViewSet):
    queryset = Qna.objects.all()
    serializer_class = QnaSerializer
