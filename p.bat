@echo off
git config --global user.name wducko
git config --global user.email wducko@gmail.com
git add .
git commit -m %1
git push