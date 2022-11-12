from rest_framework import serializers
from apps.qna.models import Qna


class QnaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Qna
        fields = '__all__'
