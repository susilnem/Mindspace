from django.contrib import admin
from apps.patient.models import Patient
# Register your models here.


class PatientAdmin(admin.ModelAdmin):
    list_display = ('name', 'id', 'contact', 'address', 'email', 'password')
    list_filter = ('name', 'contact', 'address')
    search_fields = ['name', 'contact', 'address']


admin.site.register(Patient, PatientAdmin)
