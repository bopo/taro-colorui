# -*- coding: utf-8 -*-

import environ
from fabric.api import cd, env, local, run, task
from fabric.contrib import project

@task
def dev():
    '''运行开发环境'''
    local('yarn dev:weapp')


@task
def bin():
    ''' 编译微信小程序 '''
    local('yarn build:weapp')

