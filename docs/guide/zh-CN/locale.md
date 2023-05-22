## 国际化

TuView 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置。以英文为例，在 main.js 中：

```javascript
// 完整引入 TuView
import Vue from "vue";
import TuView from "tu-view";
import locale from "tu-view/lib/src/locale/lang/en";

Vue.use(TuView, { locale });
```

或

```javascript
// 按需引入 TuView
import Vue from "vue";
import Button from "tu-view/lib/packages/button";
import lang from "tu-view/lib/src/locale/lang/en";
import locale from "tu-view/lib/src/locale";

// 设置语言
locale.use(lang);

// 引入组件
Vue.component(Button.name, Button);
```
