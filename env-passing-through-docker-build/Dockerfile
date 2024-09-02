FROM node:22.4.1-slim as build

ARG APP_API_URL
ARG APP_ENV

ENV VITE_API_URL=$APP_API_URL
ENV VITE_APP_ENV=$APP_ENV

WORKDIR /app
COPY . .

RUN rm -rf node_modules package-lock.json

RUN npm install
RUN npm run build

FROM nginx:1.27.0-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80