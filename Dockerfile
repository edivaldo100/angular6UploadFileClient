FROM node:11.15.0-alpine as build-step
WORKDIR /app
# Copies all the content
COPY package.json ./
# Install all the packages
RUN npm install
COPY . .
RUN npm run build


FROM nginx:1.16.0-alpine as prod-stage
COPY --from=build-step /app/dist/Angular6Upload /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
