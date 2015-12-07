FROM alpine:3.2
RUN apk update && apk add nodejs
ADD . /opt/workshop
WORKDIR /opt/workshop
RUN npm install
EXPOSE 3000
ENV DEBUG=*
CMD ["node", "index.js"]