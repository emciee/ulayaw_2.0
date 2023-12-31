from django.shortcuts import get_object_or_404, render
from .models import MentalHealthIllness



# Create your views here.
def blogpage(request, mhl_id):
    mhldetail = get_object_or_404(MentalHealthIllness, pk=mhl_id)
    return render(request, 'mhlblogs/blogpage.html', {'id':mhl_id, 'illness':mhldetail})

    


