from django.views import View
from django.http import JsonResponse
from .data import btn


class HtmlChatView(View):

    def get(self, request):
        response = JsonResponse({
            'btn': [
                {'el': 'div', 'class': 'n-chat-wrapper-btn'},
                {'el': 'div', 'class': 'n-chat-container-btn'},
                {'el': 'img', 'class': 'n-chat-msg-img', 'attribute': [
                    {'key': 'src', 'value': 'http://localhost:8000/static/statics/img/n-chat-msg.png'},
                    {'key': 'width', 'value': '50px'}
                ]}
            ]
        })
        response.headers['Content-Type'] = 'application/json'
        response.headers['Access-Control-Allow-Origin'] = '*'
        return response
