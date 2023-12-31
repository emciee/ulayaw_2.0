from django.urls import path
from . import views


urlpatterns = [
    path('<int:mhl_id>', views.blogpage, name="mhlblogs"),

]

