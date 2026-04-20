#!/bin/sh
set -eu

mkdir -p /data/uploads

if [ -x ./node_modules/.bin/prisma ]; then
  if [ -d ./prisma ]; then
    ./node_modules/.bin/prisma db push --skip-generate >/tmp/prisma-init.log 2>&1 || cat /tmp/prisma-init.log >&2
  fi
fi

exec node server.js
