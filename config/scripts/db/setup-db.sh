#!/bin/sh

set -e

set -a
source .env
set +a

CONTAINER_NAME=eol-local-db

if [[ $(docker ps -a | grep $CONTAINER_NAME) ]];
then
    docker start $CONTAINER_NAME
else
    docker run -d \
        -e 'MYSQL_DATABASE='"$CONTAINER_NAME" \
        -e 'MYSQL_USER='"$DB_USERNAME" \
        -e 'MYSQL_PASSWORD='"$DB_PASSWORD" \
        -e 'MYSQL_ROOT_PASSWORD='"$DB_PASSWORD" \
        -e 'TZ=Asia/Singapore' \
        -p 3306:3306 \
        --name $CONTAINER_NAME \
        mysql:5.7

fi

echo $'[Local EOL DB is up] \n'
