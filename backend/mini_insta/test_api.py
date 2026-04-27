import pytest
from django.urls import reverse
from rest_framework.test import APIClient

@pytest.mark.django_db
def test_get_posts():
    client = APIClient()
    url = reverse('get-posts')
    response = client.get(url)

    assert response.status_code == 200