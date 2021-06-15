### webpack 官網 https://www.webpackjs.com/concepts/

-   npm i -D webpack webpack-cli webpack-dev-server <br/>
-   創建 src <br/>
-   webpack 預設 src 裡的 index.js 為入口 dist 資料夾為出口<br/>
-   webpack.config.js 設定 webpack<br/>

### Loader 辨識文件

#### css loader https://webpack.js.org/loaders/css-loader/#root

#### sass loader https://awdr74100.github.io/2020-03-04-webpack-sassloader/

#### css-hot-loader https://github.com/shepherdwind/css-hot-loader

-   npm install --save-dev css-loader style-loader css-hot-loader<br/>
-   預設 css 插入 head 中的 style 可用 plugins MiniCssExtractPlugin 解決此問題<br/>

#### babel loader https://babeljs.io/setup#installation

-   npm install --save-dev babel-loader @babel/core<br/>
-   npm install @babel/preset-env --save-dev<br/>
-   使用 babel.config.json 設定 babel<br/>

### Asset Modules https://webpack.js.org/guides/asset-modules/#root

### Plugins 功能

#### HtmlWebpackPlugin https://webpack.js.org/plugins/html-webpack-plugin/#root

-   複製 html 檔案到 output 並且自動引入 js 檔案<br/>
-   npm install --save-dev html-webpack-plugin<br/>
-   template 設定範本<br/>

#### MiniCssExtractPlugin https://webpack.js.org/plugins/mini-css-extract-plugin/#root

-   自動引入 css 檔案<br/>
-   npm npm install --save-dev mini-css-extract-plugin<br/>
-   filename 設定名稱<br/>

#### CleanWebpackPlugin https://www.npmjs.com/package/clean-webpack-plugin

-   打包時刪除前一次 dist 目錄 <br/>
-   npm install --save-dev clean-webpack-plugin<br/>

### Mode 分為開發與上線模式

### DevServer 啟動一個測試 server https://webpack.js.org/configuration/dev-server/#root

### Devtool https://webpack.js.org/configuration/devtool/#root

-   source-map 幫助 debug<br/>

### 雷

-window 下使用 env 環境變數要安裝 cross-env -安装 cross-env:npm install cross-env --save-dev -在 NODE_ENV=xxxxxxx 前面添加 cross-env 就可以了<br/>
-css-hot-loader 檔案名稱要是同一個不能用[hash]<br/>

### React 安裝

-   npm install react react-dom react-router-dom<br/>
-   利用 babel 設置 JSX 語法 https://babeljs.io/setup#installation<br/>
-   npm install @babel/preset-env @babel/preset-react --save-dev<br/>

### react hot 不重整頁面

-   https://shubo.io/react-hot-module-replacement/<br/>
-   https://dev.to/paulallies/react-hot-loader-with-web-dev-server-aop<br/>
-   https://www.gushiciku.cn/pl/g8GU/zh-tw<br/>
