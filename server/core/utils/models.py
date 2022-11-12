from django.core.exceptions import ValidationError
from django.db import models


class BaseModel(models.Model):
    """
        Implemented this 'BaseModel' by 'any django_apps' using abstract
    """
    # auto_now_add ==> set timezone.now() when instance is created.
    created_at = models.DateTimeField(auto_now_add=True)

    # auto_now ==>  update fields everytime when save method is called
    update_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
