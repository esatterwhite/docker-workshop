FROM alpine:3.2
RUN apk update && apk add nodejs
ADD . /opt/workshop
WORKDIR /opt/workshop
RUN npm install

ENV DEBUG=*
EXPOSE 3000
VOLUME /etc/config

CMD ["node", "index.js"]