FROM diproart/nuxt-ci:lts-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN  npm install --force
COPY . .
RUN npm run build

# Stage 2 - production
FROM node:lts AS final
WORKDIR /app
ADD package.json .
ADD nuxt.config.js .
COPY --from=builder /app/. ./.
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/static ./static
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80
EXPOSE 80
CMD ["npm", "start"]