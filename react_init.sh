#!/bin/bash

npm init -y &&
npm install react react-dom react-router-dom &&
npm install --save-dev webpack webpack-cli \
            @babel/core @babel/preset-react &&
touch .babelrc 
echo '{ "presets": ["@babel/preset-react"] }' > .babelrc
npm install --save-dev babel-loader \
                    html-loader \
                    style-loader \ 
                    css-loader \ 
                    sass-loader
