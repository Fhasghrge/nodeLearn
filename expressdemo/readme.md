## npm常用命令

- `npm init`创建`package.json`文件
- `npm install pack --save`下载依赖项
- 其中`--save`就是为了在`package.json`保存第三方包的依赖信息
  - 简写`npm i -S`
- `npm uninstall pack`只删除保存依赖项
- 简写`npm un pack`
- `npm --help`帮助查看某个命令的帮助
- `mkdir`创建文件
- `rmdir`删除文件
- `npm install jquery --registry=https://registry.npm.taobao.org`通过淘宝镜像下载npm包

### 文件操作路径和模块标识路径

- 文件操作路径`./`可以省略
- 模块标识路径不可以省略
  - `/data/main.js`表示在磁盘根目录下寻找文件

### 服务器的热更新
- `npm install nodemon --global`
- `nodemon app.js`



