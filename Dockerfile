FROM node:20-alpine3.22 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . ./

RUN npm run build

FROM nginx:1.28-alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
