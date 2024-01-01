from django.shortcuts import get_object_or_404, render
from mhlblogs.models import MentalHealthIllness 

# Create your views here.
def home(request):
    illness = MentalHealthIllness.objects.all()[:5]
    return render(request, "home/home.html", {'illness':illness})

def mhl(request):
    illness = MentalHealthIllness.objects.all()
    return render(request, "home/mentalhealthlibrary.html", {'illness':illness})


def aboutus(request):
    return render(request, "home/aboutus.html")

