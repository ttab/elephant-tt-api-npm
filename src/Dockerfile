FROM node:24.14-alpine

ARG protoc_version

RUN apk add --no-cache jq protoc=$protoc_version

ENV PATH="$PATH:/usr/src/node_modules/.bin"
