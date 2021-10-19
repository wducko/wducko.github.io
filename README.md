# 블로그

## 출처
https://mitny.github.io/  
https://github.com/Simpleyyt/jekyll-theme-next  

## install & run - win
https://shryu8902.github.io/jekyll/jekyll-on-windows/

## install & run - mac
```sh
brew install rbenv ruby-build
rbenv versions
rbenv install -l
rbenv install 2.6.6
rbenv global 2.6.6
vim ~/.zshrc

[[ -d ~/.rbenv  ]] && \
  export PATH=${HOME}/.rbenv/bin:${PATH} && \
  eval "$(rbenv init -)"

source ~/.zshrc

gem install jekyll
gem install minima
gem install bundler
gem install jekyll-feed
gem install tzinfo-data
bundle
bundle exec jekyll serve
```

## install 공통
gem install kramdown rouge

## bundle install error 시 - window
```sh
chcp 65001
jekyll serve
```

## bundle install error 시 - mac
xcode 설치 해야함.

## run - win
1. `Start Command Prompt with Ruby` 실행
2. `cd C:\wducko\wducko.github.io`
3. `bundle exec jekyll serve`

## posting - win
1. posting..
2. cmd 오픈
3. p "\<commit message\>"