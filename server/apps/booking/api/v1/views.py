from django.core.mail import send_mail

from rest_framework import viewsets
from rest_framework.mixins import ListModelMixin, CreateModelMixin
from rest_framework import generics
from rest_framework.response import Response

from apps.booking.models import Booking, BookingRequest
from apps.booking.api.v1.serializers import BookingSerializer, RequestSerializer
from config.settings.env import EMAIL_HOST_USER
# Create your views here.


class BookingViewset(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer


class RequestViewset(ListModelMixin, generics.GenericAPIView):
    queryset = BookingRequest.objects.all()
    serializer_class = RequestSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class RequestCreate(CreateModelMixin, generics.GenericAPIView):
    serializer_class = RequestSerializer
    queryset = BookingRequest.objects.all()

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def send_message(self, message, existBooker):
        send_mail(
            'Request Message',
            message,
            EMAIL_HOST_USER,
            [existBooker],
            fail_silently=True,
        )

    def create(self, request, *args, **kwargs):
        booking = Booking.objects.filter(
            id=request.data.get('booking')).first()
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(requested_by=request.user, booking=booking)
        data = serializer.validated_data
        existbooker = request.user.email
        message = data.get('message')
        self.send_message(message, existbooker)
        return Response(serializer.data)
