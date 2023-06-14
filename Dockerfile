FROM diproart/nuxt-ci:lts-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN  npm install --force
COPY . .
# COPY production.env ./production.env
RUN npm run build
RUN ls

# Stage 2 - production
FROM node:lts AS final
WORKDIR /app
ADD package.json .
ADD nuxt.config.js .
COPY --from=builder /app/. ./.
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/static ./static
ADD production .env
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000
CMD ["npm", "start"]