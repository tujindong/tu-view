## 定制主题

Tu-View 默认提供了一套 UI 主题，并且可以在一定程度上定制新主题，基于拟物风格的组件建议用户确定一款合适的背景色，并在此基础上拓展组件阴影以及文字颜色。

Tu-View 的样式是基于 Sass 进行开发的，默认以前缀 .tu- 作为命名空间，并且定义了一套样式变量，定制主题，就是编辑这个变量列表。

### 变量覆盖

如果你的项目也使用了 SCSS，那么可以直接在项目中改变 TuView 的样式变量，可以通过变量覆盖的方式来实现主题定制。

新建一个样式文件，例如 user-theme.scss，写入以下内容：

```scss
/* 改变主题色变量 */
$--color-primary: teal;
/* 改变 icon 字体路径变量，必需 */
$--font-path: "~tu-view/packages/style/components/fonts/";

@import "~tu-view/packages/style/index";
```
