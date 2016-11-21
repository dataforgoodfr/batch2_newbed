# batch2_newbed
Le but de newbed est d'identifier des hébergements succeptibles d'accueillir des réfugiés

## Running the app locally
* [Install virtualenv][venv]
* Create a new virtualenv environment: ```virtualenv --python=python3 env```
* Activate the environement: ```source env/bin/activate```
* Install requirements: ```pip install -r requirements.txt```
* Run the app: ```gunicorn -w 4 newbed_app:app```

## Deploying the app
To deploy the app, you need access to a Heroku account, you can set one up [this way][setup].
Once you have an account, you can [deploy the app][deploy], see "Existing Git repository".

## Demo
The app is currently running on:
https://newbed.herokuapp.com/

[venv]: https://virtualenv.pypa.io/en/stable/
[setup]: https://devcenter.heroku.com/articles/getting-started-with-python#introduction
[deploy]: https://dashboard.heroku.com/apps/newbed/deploy/heroku-git
