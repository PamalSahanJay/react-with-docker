FROM node:22.4.1-slim as build

ARG OIDC_CLIENT_ID
ARG OIDC_AUTHORITY
ARG OIDC_CLIENT_SECRET

ENV VITE_OIDC_CLIENT_ID=$OIDC_CLIENT_ID
ENV VITE_OIDC_AUTHORITY=$OIDC_AUTHORITY
ENV VITE_OIDC_CLIENT_SECRET=$OIDC_CLIENT_SECRET

WORKDIR /app
COPY . .

RUN rm -rf node_modules package-lock.json

RUN npm install
RUN npm run build

FROM nginx:1.27.0-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80