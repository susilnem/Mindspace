from django.db import models
from django.utils.translation import gettext as _
# Create your models here.
from core.utils.models import BaseModel


class Counsellor(BaseModel):
    name = models.CharField(_('Name'), max_length=255, blank=False)
    contact = models.CharField(
        _('phone number'),
        max_length=10,
    )
    address = models.CharField(
        _('location'),
        max_length=255,
        help_text=_(
            'Please enter your current location.')
    )
    email = models.EmailField(
        _('Email'),
        unique=True,
        error_messages={
            'unique': _("A user with that email already exists."),
        }
    )

    def __str__(self):
        return self.name
