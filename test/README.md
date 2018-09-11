## lexian-mall-user

### 开发
安装依赖
```
npm install
```
### 项目解析
- dist:生成文件夹
- mock:测试用数据
- src:源代码
  - index.html:首页
  - common:通用部分
    - js:工具
      - myzepto.js:定制版zepto
      - cookie.js:自定义cookie操作函数
    - css:通用css
      - base.css:初始化css
      - init.css:css工具
  - component:自定义模块
    - Banner:轮播组件
    - Map:定位组件
    - TypeList:种类列表组件
  - pages:页面
    - bill:订单
    - cart:购物车
    - good:单个商品详情
    - goodsList:商品列表
    - like:收藏
    - msg:系统消息
    - person:个人信息
    - search:搜索结果
    - shop:商家详情
  - work
    - js:入口js,和页面一一对应
    - css:各页面主css,和页面一一对应,和页面一一对应
- .babelrc:babel配置
- package.json
- webpack.config.js


