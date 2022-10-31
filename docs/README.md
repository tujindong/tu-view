# 快速开始

#### 安装组件库

```bash
npm i t-mooc-ui
```

#### 引用组件库

> 在 main.js 中引用组件库

```javascript
// 全部引入
import "t-mooc-ui/dist/css/index.css";
import MUI from "t-mooc-ui";
Vue.use(MUI);

// 按需引入
import "t-mooc-ui/dist/css/demo.css";
import { Demo } from "t-mooc-ui";
Vue.use(Demo);
```
