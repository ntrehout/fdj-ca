FROM node:16-alpine3.17

WORKDIR /usr/src/app

COPY ./dist/projects/apps/server ./

COPY ./pdocker
rojects/apps/server/docker ./
RUN apk add npm supervisor
RUN npm i

ADD ./projects/apps/server/docker/supervisord.conf /etc/supervisor/supervisord.conf

RUN chmod 755 docker/start.sh

CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/supervisord.conf"]

EXPOSE 80
