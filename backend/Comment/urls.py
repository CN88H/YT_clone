from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_all_comment),
    path('', views.post_comments)
]
