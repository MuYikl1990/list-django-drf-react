# list-django-drf-react
----------------------------
## A concept of separating frontend from backend, which using *Django REST framework* module for providing API endpoints to React. 
- You should install djangorestframework and add `rest_framework` in `INSTALLED_APPS`, then the Django restful api can work well.

- The models、views and app's urls are similar to Django, but the serializer is unique. It can display Django models in a browser by converting them to JSON's format (Use ModelSerializer is convenient as it is like ModelForm).

- When you want to give a demo with some data, you can use Django fixtures (`app/fixtures/app.json`) with JSON file and load via `python manage.py loaddata app`.

- *How to glue Django and React together?* The useful way is load a single HTML template and let React manage the frontend.
+ Set up *Webpack* through `npm i webpack webpack-cli --save-dev` as loader tool to pack resources respectively, and configure the `scripts` of *package.json*.
+ Babel is a transcoder whose function is to change ES6 codes to ES5 codes for compatibility of browsers. Set up *Babel* via `npm i babel-core babel-loader babel-preset-env babel-preset-react babel-plugin-transform-class-properties --save-dev`.
+ Configure the *.babelrc* (set up presets and plugins) and *webpack.config.js* ( set up entry、output and loader) when React、Webpack and Babel are ready.
+ Then you could change some codes in `App.js` which bindings with *index.html* to effect the display of browser.
- Also in the *beta* branch, you could use `Router` and `Route` modules of *React* to paginate the views whose function is same as Paginator of Django.
