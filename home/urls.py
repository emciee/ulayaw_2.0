from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('mentalhealthlibrary/', views.mhl, name='mentalhealthlibrary'),

]