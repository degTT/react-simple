## Steps to create a react project without create-react-app
create project folder
``` bash 
mkdir my-project
```
inside the folder that was created
```bash
git init
git remote add origin https://github.com/degTT/react-simple.git
nano .gitignore
```
## Install Dependencies
React
``` bash 
npm install react react-dom --save
```
Babel
``` bash 
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev
npm install babel-plugin-transform-class-properties --save-dev
```
Webpack
``` bash 
npm install webpack webpack-cli html-webpack-plugin html-loader --save-dev
```
## Configurate .babelrc
1- create file nano .babelrc
``` javascript 
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "plugins": [
        "transform-class-properties"
    ]
}
```
## Configurate webpack
1- create file nano webpack.config.js
``` javascript 
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
```

# Create Folder
``` bash 
mkdir src 
mkdir public
```
inside src
``` bash 
nano App.js
nano index.js
```
## index.js
``` javascript 
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<App />, document.getElementById("app"));
```

inside public
``` bash 
nano index.html
```
## index.html
``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React</title>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
```
# Usage
## create local server
``` bash
npm install webpack-dev-server --save-dev
```
## add scripts to package.json 
``` javascript
  "start": "webpack-cli serve --open --mode development",
  "build": "webpack --mode production",
``` 
## build
``` bash 
npm build
```
## run 
``` bash 
npm start
```

