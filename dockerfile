FROM node:alpine as build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM nginx:stable-alpine
COPY --from=build /app/dist /root/share/nginx/html
COPY --from=build /app/.nginx/nginx.conf /etx/nginx/sites-available/default

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]