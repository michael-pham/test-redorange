#!/bin/bash
find ./ -type f -readable -writable -exec sed -i "s/$1/$2/g" {} \;
