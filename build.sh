#!/usr/bin/env bash

set -o errexit
set -o nounset

corepack enable

corepack prepare yarn@4.10.3 --activate

yarn install --no-immutable

yarn build