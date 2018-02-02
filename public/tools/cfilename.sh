#!/bin/bash
readonly DEST_PATH=~/.../api/
readonly TMPL_NAME=ModelName
cp -rf ./$TMPL_NAME ($DEST_PATH$1 + "s")
for f in ./$TMPL_NAME/*/*.php; do sudo mv "$f" "`echo $f | sed s/$TMPL_NAME/$1/`"; done
for f in ./$TMPL_NAME/*.php; do sudo mv "$f" "`echo $f | sed s/$TMPL_NAME/$1/`"; done
