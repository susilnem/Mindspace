from rest_framework import serializers
from apps.booking.models import Booking, BookingRequest


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'


class RequestSerializer(serializers.ModelSerializer):

    class Meta:
        model = BookingRequest
        fields = ['requested_by', 'booking', 'message']
        read_only_fields = ['requested_by', ]
