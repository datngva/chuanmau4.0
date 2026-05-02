FROM node:lts AS base
WORKDIR /app

FROM base AS deps
COPY package*.json ./
RUN npm ci

FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:stable-alpine AS deploy
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Run as non-root user for security
RUN chown -R nginx:nginx /usr/share/nginx/html
USER nginx

EXPOSE 8080
