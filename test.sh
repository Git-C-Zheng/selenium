#!/bin/bash
echo "Hello World !"
for ((i = 1; i <6; i++))
do
printf "it's "
echo -e "$i\c"
printf " times!"
node seventest.js
done