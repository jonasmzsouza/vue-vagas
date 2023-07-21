#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:jonasmzsouza/vue-vagas.git main:gh-pages

cd -