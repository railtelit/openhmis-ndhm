#!/bin/bash

echo "Add Secret JFRONCRED"
$SECRET_PASSWORD
$DOCKER_EMAIL=railtelhrit@gmail.com
kc create secret docker-registry jfrogcred --docker-registry=railtelhrit.jfrog.io --docker-username=${DOCKER_EMAIL} --docker-password=${SECRET_PASSWORD} --docker-email=${DOCKER_EMAIL}