from rest_framework import serializers
from apps.counsellor.models import Counsellor


class CounsellorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Counsellor
        fields = '__all__'
