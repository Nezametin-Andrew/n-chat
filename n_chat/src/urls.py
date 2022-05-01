from django.urls import include, path

urlpatterns = [
    path('app/', include('main_app.urls')),
    path('statics/', include('statics.urls')),
]
