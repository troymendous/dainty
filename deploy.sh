#!/bin/sh
mv .env ./env.backup
cp production ./prodenv

gcloud builds submit --tag gcr.io/dainty-inc/dainty-web && gcloud run deploy dainty-web --region us-east1 --allow-unauthenticated --image gcr.io/dainty-inc/dainty-web --platform managed --port=3000