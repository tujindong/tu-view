<p align="center">
    <img alt="logo" src="https://github.com/tujindong/tu-view/blob/main/docs/.vuePress/public/logo.png" width="120" height="120" style="margin-bottom: 10px;">
</p>
<h3 align="center" style="margin: 30px 0 30px;font-weight: bold;font-size:40px;">TuView</h3>
<h3 align="center">一款有触觉的UI组件库</h3>

### 快速开始

#### 1.安装组件库

```bash
npm i tu-view
```

#### 2.引用组件库

> 在 main.js 中引入组件库

```javascript
// 全部引入
import TuView from "tu-view";
import "tu-view/lib/tuview.css";
Vue.use(TuView);

// 按需引入
import Button from "tu-view/lib/packages/button";
import "tu-view/lib/packages/button/style.css";
Vue.use(Button);
```
