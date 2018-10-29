#!/bin/sh

set -e

CONTAINER_NAME=eol-local-db


if [[ $(docker ps -a | grep $CONTAINER_NAME) ]];
then
    docker start $CONTAINER_NAME
else
    docker run -d \
        -e 'MYSQL_DATABASE=eol-local-db' \
        -e 'MYSQL_USER=' \
        -e 'MYSQL_PASSWORD=' \
        -e 'MYSQL_ROOT_PASSWORD=' \
        -e 'TZ=Asia/Singapore' \
        -p 3306:3306 \
        --name $CONTAINER_NAME \
        mysql:5.7

fi

echo $'[Local EOL DB is up] \n'
