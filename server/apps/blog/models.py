from django.db import models
from django.utils.translation import gettext as _
# Create your models here.
from core.utils.models import BaseModel


class Blog(BaseModel):
    title = models.CharField(_('Title'), max_length=255, blank=False)
    description = models.TextField(
        _('Description'), max_length=255, blank=False)
    image = models.ImageField(upload_to="images/")

    def __str__(self):
        return self.title
