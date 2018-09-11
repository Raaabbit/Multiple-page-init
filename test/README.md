## 多页面应用脚手架
基于webpack的多页面应用脚手架，推荐拓展pug,stylus

### 开发
安装依赖
```
npm install
```
### 项目解析
- dist:生成文件夹
- src:源代码
  - index.html:首页
  - common:通用部分
    - js:工具
    - css:通用css
      - base.css:初始化css
  - pages:页面
    - page.html
  - work
    - js:入口js,和页面一一对应
    - css:各页面主css,和页面一一对应,和页面一一对应
- .babelrc:babel配置
- package.json
- webpack.config.js


