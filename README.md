# dainty

## Build Setup

```bash
# install yarn and vercel
npm i -g yarn vercel@latest

# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn run dev

# serve with hot reload and serverless functions at localhost:3000
$ vercel dev -A vercel.dev.json

Note: requires `yarn run dev` be added as development command override in vercel project

# build for production and launch server
$ yarn run build
$ yarn run start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

gcloud builds submit --tag gcr.io/dainty-inc/dainty-web && gcloud run deploy dainty-web --region us-east1 --allow-unauthenticated --image gcr.io/dainty-inc/dainty-web --platform managed --port=3000


export NODE_OPTIONS=--openssl-legacy-provider && npx nuxt build
export NODE_OPTIONS=--openssl-legacy-provider && npx nuxt