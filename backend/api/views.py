from django.http import JsonResponse
from django.views import View
from .constants import SHUBHAM_DATA


class UserDetailsView(View):
    def get(self, request):
        return JsonResponse({
            "data": SHUBHAM_DATA
        })
