from .base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-x_l!gn0zknyus!+l-zgp=l)a)o2qpi*$^au^#pp0@=0ypr05@k'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

CORS_ALLOWED_ORIGINS = [
    "https://example.com",
    "https://sub.example.com",
    "http://localhost:8080",
    "http://127.0.0.1:9000",
]

INSTALLED_APPS = [
    'debug_toolbar',
    'drf_yasg',
    'django_extensions'
]

MIDDLEWARE += (
    'debug_toolbar.middleware.DebugToolbarMiddleware',
)
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

# database for sqllite3
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# Database for postgres
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': "Your DB Name",
        'USER': "Your Username",
        'PASSWORD': "Your Password",
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

# mailtrap

EMAIL_HOST = 'smtp.mailtrap.io'
EMAIL_HOST_USER = 'Your User'
EMAIL_HOST_PASSWORD = 'Your Password'
EMAIL_PORT = '2525'
