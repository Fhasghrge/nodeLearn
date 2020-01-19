### day4-04express中的static-server静态资源服务

- ```javascript
  app.use(pathnam1, express.static(pathname2))
  ```
- pathname1表示请求的的文件前缀，相当于实际服务器路径的别名，为了更好的辨识
- pathname2表示服务器开放的资源路径

### day4-05在express中配置使用art-template模板引擎

- 如果想修改默认的render路径
  - `app.set('views', newname)`

### 如何处理post请求--在express中
-  如何获取post数据
  - express本身是没有获取post数据的api
  - 通过插件`body-parser`实现