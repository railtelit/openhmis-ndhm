#!/bin/bash

echo "Add Secret JFRONCRED"
$SECRET_PASSWORD
$DOCKER_EMAIL=
kc create secret docker-registry jfrogcred --docker-server=${DOCKER_EMAIL} --docker-username=${DOCKER_EMAIL} --docker-password=${SECRET_PASSWORD} --docker-email=${DOCKER_EMAIL}