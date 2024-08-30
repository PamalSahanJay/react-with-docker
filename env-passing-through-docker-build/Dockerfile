FROM node:22.4.1-slim as build

ARG NAME

ENV VITE_NAME=$NAME

# RUN apk add git
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:22.4.1-slim
RUN npm install -g http-server
COPY --from=build /app/dist ./    

EXPOSE 8080

CMD ["http-server", "-p", "8080"]