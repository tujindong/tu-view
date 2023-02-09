## Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

### 基础用法

移动到下拉菜单上，展开更多操作。

:::demo 通过组件`slot`来设置下拉触发的元素以及需要通过具名`slot`为`dropdown` 来设置下拉菜单。默认情况下，下拉按钮只要`hover`即可，无需点击也会显示下拉菜单。

```html
<tu-dropdown>
	<span class="tu-dropdown-link"> 下拉菜单<i class="tu-icon-down"></i> </span>
	<tu-dropdown-menu slot="dropdown">
		<tu-dropdown-item>苹果</tu-dropdown-item>
		<tu-dropdown-item>微软</tu-dropdown-item>
		<tu-dropdown-item>雅虎</tu-dropdown-item>
		<tu-dropdown-item disabled>谷歌</tu-dropdown-item>
		<tu-dropdown-item divided>微信</tu-dropdown-item>
	</tu-dropdown-menu>
</tu-dropdown>

<style>
	.tu-dropdown-link {
		cursor: pointer;
		color: #6d5dfc;
	}
</style>
```

:::

### 触发对象

可使用按钮触发下拉菜单。

:::demo 设置`split-button`属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为`true`即可。

```html
<tu-dropdown>
	<tu-button> 更多菜单<i class="tu-icon-arrow-down tu-icon--right"></i> </tu-button>
	<tu-dropdown-menu slot="dropdown">
		<tu-dropdown-item>苹果</tu-dropdown-item>
		<tu-dropdown-item>微软</tu-dropdown-item>
		<tu-dropdown-item>雅虎</tu-dropdown-item>
		<tu-dropdown-item>谷歌</tu-dropdown-item>
		<tu-dropdown-item>微信</tu-dropdown-item>
	</tu-dropdown-menu>
</tu-dropdown>
<tu-dropdown split-button @click="handleClick">
	更多菜单
	<tu-dropdown-menu slot="dropdown">
		<tu-dropdown-item>苹果</tu-dropdown-item>
		<tu-dropdown-item>微软</tu-dropdown-item>
		<tu-dropdown-item>雅虎</tu-dropdown-item>
		<tu-dropdown-item>谷歌</tu-dropdown-item>
		<tu-dropdown-item>微信</tu-dropdown-item>
	</tu-dropdown-menu>
</tu-dropdown>

<script>
	export default {
		methods: {
			handleClick() {
				alert("button click");
			},
		},
	};
</script>

<style>
	.tu-dropdown + .tu-dropdown {
		margin-left: 15px;
	}
</style>
```

:::

### 触发方式

可以配置 click 激活或者 hover 激活。

:::demo 在`trigger`属性设置为`click`即可。

```html
<tu-row>
	<tu-col :span="12">
		<p>hover 激活</p>
		<tu-dropdown>
			<span class="tu-dropdown-link"> 下拉菜单<i class="tu-icon-down tu-icon--right"></i> </span>
			<tu-dropdown-menu slot="dropdown">
				<tu-dropdown-item icon="tu-icon-apple">苹果</tu-dropdown-item>
				<tu-dropdown-item icon="tu-icon-windows">微软</tu-dropdown-item>
				<tu-dropdown-item icon="tu-icon-yahoo">雅虎</tu-dropdown-item>
				<tu-dropdown-item icon="tu-icon-google" disabled>谷歌</tu-dropdown-item>
				<tu-dropdown-item icon="tu-icon-wechat-fill" divided>微信</tu-dropdown-item>
			</tu-dropdown-menu>
		</tu-dropdown>
	</tu-col>
	<tu-col :span="12">
		<p>click 激活</p>
		<tu-dropdown trigger="click">
			<span class="tu-dropdown-link"> 下拉菜单<i class="tu-icon-down tu-icon--right"></i> </span>
			<tu-dropdown-menu slot="dropdown">
				<tu-dropdown-item icon="tu-icon-apple">苹果</tu-dropdown-item>
				<tu-dropdown-item icon="tu-icon-windows">微软</tu-dropdown-item>
				<tu-dropdown-item icon="tu-icon-yahoo">雅虎</tu-dropdown-item>
				<tu-dropdown-item icon="tu-icon-google" disabled>谷歌</tu-dropdown-item>
				<tu-dropdown-item icon="tu-icon-wechat-fill" divided>微信</tu-dropdown-item>
			</tu-dropdown-menu>
		</tu-dropdown>
	</tu-col>
</tu-row>

<style></style>
```

:::

### 菜单隐藏方式

可以`hide-on-click`属性来配置。

:::demo 下拉菜单默认在点击菜单项后会被隐藏，将`hide-on-click`属性默认为`false`可以关闭此功能。

```html
<tu-dropdown :hide-on-click="false">
	<span class="tu-dropdown-link"> 下拉菜单<i class="tu-icon-arrow-down tu-icon--right"></i> </span>
	<tu-dropdown-menu slot="dropdown">
		<tu-dropdown-item>苹果</tu-dropdown-item>
		<tu-dropdown-item>微软</tu-dropdown-item>
		<tu-dropdown-item>雅虎</tu-dropdown-item>
		<tu-dropdown-item disabled>谷歌</tu-dropdown-item>
		<tu-dropdown-item divided>微信</tu-dropdown-item>
	</tu-dropdown-menu>
</tu-dropdown>

<style>
	.tu-dropdown-link {
		cursor: pointer;
		color: #6d5dfc;
	}
</style>
```

:::

### 指令事件

点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作

:::demo

```html
<tu-dropdown @command="handleCommand">
	<span class="tu-dropdown-link"> 下拉菜单<i class="tu-icon-arrow-down tu-icon--right"></i> </span>
	<tu-dropdown-menu slot="dropdown">
		<tu-dropdown-item command="apple">苹果</tu-dropdown-item>
		<tu-dropdown-item command="windows">微软</tu-dropdown-item>
		<tu-dropdown-item command="yahoo">雅虎</tu-dropdown-item>
		<tu-dropdown-item command="google" disabled>谷歌</tu-dropdown-item>
		<tu-dropdown-item command="wechat" divided>微信</tu-dropdown-item>
	</tu-dropdown-menu>
</tu-dropdown>

<style>
	.tu-dropdown-link {
		cursor: pointer;
		color: #6d5dfc;
	}
</style>

<script>
	export default {
		methods: {
			handleCommand(command) {
				console.log(`click on item ${command}`);
			},
		},
	};
</script>
```

:::

### 不同尺寸

Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<tu-dropdown split-button>
	默认尺寸
	<tu-dropdown-menu slot="dropdown">
		<tu-dropdown-item icon="tu-icon-apple">苹果</tu-dropdown-item>
		<tu-dropdown-item icon="tu-icon-windows">微软</tu-dropdown-item>
		<tu-dropdown-item icon="tu-icon-yahoo">雅虎</tu-dropdown-item>
		<tu-dropdown-item icon="tu-icon-google">谷歌</tu-dropdown-item>
		<tu-dropdown-item icon="tu-icon-wechat-fill">微信</tu-dropdown-item>
	</tu-dropdown-menu>
</tu-dropdown>

<tu-dropdown size="medium" split-button>
	中等尺寸
	<tu-dropdown-menu slot="dropdown">
		<tu-dropdown-item icon="tu-icon-apple">苹果</tu-dropdown-item>
		<tu-dropdown-item icon="tu-icon-windows">微软</tu-dropdown-item>
		<tu-dropdown-item icon="tu-icon-yahoo">雅虎</tu-dropdown-item>
		<tu-dropdown-item icon="tu-icon-google">谷歌</tu-dropdown-item>
		<tu-dropdown-item icon="tu-icon-wechat-fill">微信</tu-dropdown-item>
	</tu-dropdown-menu>
</tu-dropdown>

<tu-dropdown size="small" split-button>
	小型尺寸
	<tu-dropdown-menu slot="dropdown">
		<tu-dropdown-item icon="tu-icon-apple">苹果</tu-dropdown-item>
		<tu-dropdown-item icon="tu-icon-windows">微软</tu-dropdown-item>
		<tu-dropdown-item icon="tu-icon-yahoo">雅虎</tu-dropdown-item>
		<tu-dropdown-item icon="tu-icon-google">谷歌</tu-dropdown-item>
		<tu-dropdown-item icon="tu-icon-wechat-fill">微信</tu-dropdown-item>
	</tu-dropdown-menu>
</tu-dropdown>

<tu-dropdown size="mini" split-button>
	超小尺寸
	<tu-dropdown-menu slot="dropdown">
		<tu-dropdown-item icon="tu-icon-apple">苹果</tu-dropdown-item>
		<tu-dropdown-item icon="tu-icon-windows">微软</tu-dropdown-item>
		<tu-dropdown-item icon="tu-icon-yahoo">雅虎</tu-dropdown-item>
		<tu-dropdown-item icon="tu-icon-google">谷歌</tu-dropdown-item>
		<tu-dropdown-item icon="tu-icon-wechat-fill">微信</tu-dropdown-item>
	</tu-dropdown-menu>
</tu-dropdown>
```

:::

### Dropdown Attributes

| 参数          | 说明                                                                                                     | 类型    | 可选值                                               | 默认值     |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------- | ---------- |
| type          | 菜单按钮类型，同 Button 组件(只在`split-button`为 true 的情况下有效)                                     | string  | —                                                    | —          |
| size          | 菜单尺寸，在`split-button`为 true 的情况下也对触发按钮生效                                               | string  | medium / small / mini                                | —          |
| split-button  | 下拉触发元素呈现为按钮组                                                                                 | boolean | —                                                    | false      |
| placement     | 菜单弹出位置                                                                                             | string  | top/top-start/top-end/bottom/bottom-start/bottom-end | bottom-end |
| trigger       | 触发下拉的行为                                                                                           | string  | hover, click                                         | hover      |
| hide-on-click | 是否在点击菜单项后隐藏菜单                                                                               | boolean | —                                                    | true       |
| show-timeout  | 展开下拉菜单的延时（仅在 trigger 为 hover 时有效）                                                       | number  | —                                                    | 250        |
| hide-timeout  | 收起下拉菜单的延时（仅在 trigger 为 hover 时有效）                                                       | number  | —                                                    | 150        |
| tabindex      | Dropdown 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) | number  | —                                                    | 0          |
| disabled      | 是否禁用                                                                                                 | boolean | —                                                    | false      |

### Dropdown Slots

| Name     | 说明                                                       |
| -------- | ---------------------------------------------------------- |
| —        | 触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件 |
| dropdown | 下拉列表，通常是 `<tu-dropdown-menu>` 组件                 |

### Dropdown Events

| 事件名称       | 说明                                          | 回调参数                      |
| -------------- | --------------------------------------------- | ----------------------------- |
| click          | `split-button` 为 true 时，点击左侧按钮的回调 | —                             |
| command        | 点击菜单项触发的事件回调                      | dropdown-item 的指令          |
| visible-change | 下拉框出现/隐藏时触发                         | 出现则为 true，隐藏则为 false |

### Dropdown Menu Item Attributes

| 参数     | 说明       | 类型                 | 可选值 | 默认值 |
| -------- | ---------- | -------------------- | ------ | ------ |
| command  | 指令       | string/number/object | —      | —      |
| disabled | 禁用       | boolean              | —      | false  |
| divided  | 显示分割线 | boolean              | —      | false  |
| icon     | 图标类名   | string               | —      | —      |
