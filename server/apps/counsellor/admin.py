from django.contrib import admin
from apps.counsellor.models import Counsellor
# Register your models here.


class CousellorAdmin(admin.ModelAdmin):
    list_display = ('name', 'id', 'contact', 'address', 'email', )
    list_filter = ('name', 'contact', 'address')
    search_fields = ['name', 'contact', 'address']


admin.site.register(Counsellor, CousellorAdmin)
