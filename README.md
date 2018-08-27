# list-django-drf-react
----------------------------
## A concept of separating frontend from backend, which using *Django REST framework* module for providing API endpoints to React. 
- You should install djangorestframework and add `rest_framework` in `INSTALLED_APPS`, then the Django restful api can work well.

- The models、views and app's urls are similar to Django, but the serializer is unique. It can display Django models in a browser by converting them to JSON's format (Use ModelSerializer is convenient as it is like ModelForm).

- When you want to give a demo with some data, you can use Django fixtures (`app/fixtures/app.json`) with JSON file and load via `python manage.py loaddata app`.

- *How to glue Django and React together?* The useful way is load a single HTML template and let React manage the frontend.
+ Set up webpack through ``
