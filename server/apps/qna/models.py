from django.db import models
from django.utils.translation import gettext as _
# Create your models here.
from core.utils.models import BaseModel

QUESTIONS = [
    ('question1', 'Question1'),
    ('question2', 'Question2'),
]


class Qna(BaseModel):
    title = models.CharField(_('title'), max_length=255, blank=False)
    answer = models.CharField(
        _('Answer'), max_length=255, choices=QUESTIONS, null=False)

    def __str__(self):
        return self.title
