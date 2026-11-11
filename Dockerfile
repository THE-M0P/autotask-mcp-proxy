FROM node:22-alpine
WORKDIR /app
COPY proxy.mjs .
# The docs corpus is served by autotask_docs_search / autotask_docs_get at
# runtime — it must be in the image (DOCS_DIR defaults to ./docs/).
COPY docs/ ./docs/
EXPOSE 8080
CMD ["node", "proxy.mjs"]
