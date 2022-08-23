from rest_framework.decorators import api_view
# from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response


@api_view('GET')
# @permission_classes([AllowAny])
def comment_list(request):


    return Response('ok')
