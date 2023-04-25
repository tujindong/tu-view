# 快速开始

#### 安装组件库

```bash
npm i tu-view
```

#### 引用组件库

> 在 main.js 中引用组件库

```javascript
// 全部引入
import TuView from "tu-view";
import "tu-view/lib/styles/tuview.css";
Vue.use(TuView);

// 按需引入
import Button from "tu-view/lib/packages/button";
import "tu-view/lib/styles/tuview.css";
Vue.use(Button);
```
