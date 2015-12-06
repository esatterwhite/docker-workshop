FROM alpine:3.2
RUN apk update && apk add nodejs
COPY run.js /opt/run.js
CMD ["node", "/opt/run.js"]
