# Makefile six

PIP=$(VIRTUAL_ENV)/bin/pip 
PY=$(VIRTUAL_ENV)/bin/python

.PHONY: clean-pyc clean-build clean clean-others pep8 start shell

help:
	@echo "start - start a django runserver"
	@echo "shell - execute a django shell_plus"
	@echo "clean - remove all build, test, coverage and Python artifacts"
	@echo "clean-build - remove build artifacts"
	@echo "clean-pyc - remove Python file artifacts"
	@echo "clean-others - remove Thumbs.db, etc file artifacts"
	@echo "clean-test - remove test and coverage artifacts"
	@echo "lint - check style with pycodestyle"
	@echo "test - run tests quickly with the default Python"


clean: clean-build clean-others clean-test clean-pyc

clean-build:
	rm -rf '*.tgz'
	rm -fr dist/
	rm -fr build/
	rm -fr .eggs/
	rm -fr __pycache__/
	find . -name '*.egg-info' -exec rm -fr {} +
	find . -name '*.egg' -exec rm -f {} +
	find . -name '*.log' -exec rm -f {} +
	find . -name '*.sql' -exec rm -f {} +

clean-others:
	rm -fr runtime/**/**
	rm -rf celerybeat-schedule
	rm -rf dump.rdb
	find . -name 'Thumbs.db' -exec rm -f {} +
	find . -name '*.tgz' -exec rm -f {} +
	find . -name 'dump.rdb' -exec rm -f {} +
	find . -name 'celery*.db' -exec rm -f {} +

clean-pyc:
	find . -name '*.pyc' -exec rm -f {} +
	find . -name '*.pyo' -exec rm -f {} +
	find . -name '*~' -exec rm -f {} +
	find . -name '__pycache__' -exec rm -fr {} +

clean-test:
	rm -rf nosetests.html
	rm -rf .coverage
	rm -rf htmlcov/
	rm -rf reports/
	rm -rf .tox/
	
lint:
	@pycodestyle --ignore=E501,F403,E122 **/*.py

test:
	DJANGO_SETTINGS_MODULE=config.settings.test $(PY) manage.py test --traceback -v2

start:
	@$(PY) manage.py runserver

shell:
	@$(PY) manage.py shell_plus


# DO NOT DELETE
