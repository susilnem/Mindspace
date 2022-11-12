from django.contrib import admin

from apps.booking.models import Booking, BookingRequest


class BookingAdmin(admin.ModelAdmin):
    list_display = ('patient', 'id', 'counsellor',  'date',
                    'time', 'status')
    list_filter = ('patient', 'counsellor', 'date', 'status')
    search_fields = ['patient', 'counsellor', 'date']


admin.site.register(Booking, BookingAdmin)


@admin.register(BookingRequest)
class RequestBookingAdmin(admin.ModelAdmin):
    list_display = ('requested_by', 'booking', 'message',)
    fieldsets = (
        ('Requested', {
            'fields': (
                'requested_by',
            )}),
        ('Booking', {
            'fields': (
                'booking',
            )}),
        ('Send Message', {
            'fields': (
                'message',
            )}),
    )
