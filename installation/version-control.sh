#! /usr/local/bin

git init && git add -A && git commit -m "init"

git remote add origin $1 && git checkout -b $2