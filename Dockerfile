FROM node:22-alpine
WORKDIR /app
COPY proxy.mjs .
EXPOSE 8080
CMD ["node", "proxy.mjs"]
