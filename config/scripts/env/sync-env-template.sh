#!/bin/sh

env=$(sed 's/\=.*/=/' .env) #| tee .env.template
template=$(sed 's/\=.*/=/' .env.template)

if [ "${env}" == "${template}" ]; 
then
  echo ".env.template already sync-ed"
else 
  echo ".env.template not updated, sync-ing now"
  sed 's/\=.*/=/' .env | tee .env.template
  echo ".env.template successfully sync-ed"
fi