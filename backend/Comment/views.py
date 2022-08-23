from rest_framework.decorators import api_view
# from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from .serializers import CommentSerializer
from .models import Comment
# from django.shortcuts import get_object_or_404
from rest_framework import status


@api_view(['GET', 'POST'])
# @permission_classes([AllowAny])
def comment_list(request):

    if request.method == 'GET':
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

