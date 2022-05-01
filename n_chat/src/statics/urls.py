from django.urls import path
from .views import *


urlpatterns = [
    path('', HtmlChatView.as_view()),
]
