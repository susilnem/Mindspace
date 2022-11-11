from django.db import models
from django.utils.translation import gettext as _


from core.utils.models import BaseModel
from apps.patient.models import Patient
from apps.counsellor.models import Counsellor


CONFIRM, DENIED, PENDING = 'Confirm', 'Denied', 'Pending'
CONFIRMATION = (
    (CONFIRM, 'Confirm'),
    (PENDING, 'Pending'),
    (DENIED, 'Denied'),
)


class Booking(BaseModel):
    patient = models.ForeignKey(
        Patient, on_delete=models.CASCADE, related_name="users")
    counsellor = models.ForeignKey(
        Counsellor, on_delete=models.CASCADE, related_name="items")
    date = models.DateField(_('Booking Date'),)
    time = models.TimeField(_('Booking Time'))
    # priority = models.CharField(
    #     _('Priority of Bookings'), max_length=20, choices=PRIORITY)
    is_deleted = models.BooleanField(default=False)
    status = models.CharField(
        _('Status of Booking'), max_length=255, choices=CONFIRMATION, default=PENDING)

    def __str__(self):
        return str(self.patient)


class BookingRequest(models.Model):
    requested_by = models.ForeignKey(
        Patient, on_delete=models.SET_NULL, null=True, related_name="requested_patient")
    booking = models.ForeignKey(
        Booking, on_delete=models.CASCADE, related_name="bookings")
    message = models.TextField(_('Request message'))
