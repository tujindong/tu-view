## NavMenu 导航菜单

为网站提供导航功能的菜单。

### 顶栏

适用广泛的基础用法。

:::demo 导航菜单默认为垂直模式，通过`mode`属性可以使导航菜单变更为水平模式。另外，在菜单中通过`submenu`组件可以生成二级菜单。

```html
<template>
	<div>
		<tu-menu
			:default-active="activeIndex"
			mode="horizontal"
			@select="handleSelect"
		>
			<tu-menu-item index="1">导航一</tu-menu-item>
			<tu-submenu
				index="2"
				title="导航二"
			>
				<tu-menu-item index="2-1">选项1</tu-menu-item>
				<tu-menu-item index="2-2">选项2</tu-menu-item>
				<tu-menu-item index="2-3">选项3</tu-menu-item>
				<tu-submenu index="2-4">
					<template slot="title">选项4</template>
					<tu-menu-item index="2-4-1">选项1</tu-menu-item>
					<tu-menu-item index="2-4-2">选项2</tu-menu-item>
					<tu-menu-item index="2-4-3">选项3</tu-menu-item>
				</tu-submenu>
			</tu-submenu>
			<tu-menu-item
				index="3"
				disabled
				>导航三</tu-menu-item
			>
			<tu-menu-item index="4"
				><a
					href="https://github.com/tujindong/tu-view"
					target="_blank"
					>导航四</a
				></tu-menu-item
			>
		</tu-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: "1",
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
		},
	};
</script>
```

:::

### 定义主题色

通过配置属性自定义导航栏的主题色。

:::demo Menu 还提供了`background-color`、`text-color`和`active-text-color`，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。

```html
<template>
	<tu-menu
		:default-active="activeIndex"
		class="tu-menu-demo"
		mode="horizontal"
		@select="handleSelect"
		background-color="#545c64"
		text-color="#fff"
		active-text-color="#ffd04b"
	>
		<tu-menu-item index="1">导航一</tu-menu-item>
		<tu-submenu
			index="2"
			title="导航二"
		>
			<tu-menu-item index="2-1">选项1</tu-menu-item>
			<tu-menu-item index="2-2">选项2</tu-menu-item>
			<tu-menu-item index="2-3">选项3</tu-menu-item>
			<tu-submenu index="2-4">
				<template slot="title">选项4</template>
				<tu-menu-item index="2-4-1">选项1</tu-menu-item>
				<tu-menu-item index="2-4-2">选项2</tu-menu-item>
				<tu-menu-item index="2-4-3">选项3</tu-menu-item>
			</tu-submenu>
		</tu-submenu>
		<tu-menu-item
			index="3"
			disabled
			>导航三</tu-menu-item
		>
		<tu-menu-item index="4"
			><a
				href="https://github.com/tujindong/tu-view"
				target="_blank"
				>导航四</a
			></tu-menu-item
		>
	</tu-menu>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: "1",
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
		},
	};
</script>
```

:::

### 侧栏

垂直菜单，可内嵌子菜单。

:::demo 通过`tu-menu-item-group`组件可以实现菜单进行分组，分组名可以通过`title`属性直接设定，也可以通过具名 slot 来设定。

```html
<template>
	<tu-row :gutter="200">
		<tu-col :span="12">
			<p>默认颜色</p>
			<tu-menu
				default-active="2"
				class="tu-menu-vertical-demo"
				@open="handleOpen"
				@close="handleClose"
			>
				<tu-submenu index="1">
					<template slot="title">
						<i class="tu-icon-location-fill"></i>
						<span>导航一</span>
					</template>
					<tu-menu-item-group>
						<template slot="title">分组一</template>
						<tu-menu-item index="1-1">选项1</tu-menu-item>
						<tu-menu-item index="1-2">选项2</tu-menu-item>
					</tu-menu-item-group>
					<tu-menu-item-group title="分组2">
						<tu-menu-item index="1-3">选项3</tu-menu-item>
					</tu-menu-item-group>
					<tu-submenu index="1-4">
						<template slot="title">选项4</template>
						<tu-menu-item index="1-4-1">选项1</tu-menu-item>
					</tu-submenu>
				</tu-submenu>
				<tu-menu-item index="2">
					<i class="tu-icon-appstore-fill"></i>
					<span slot="title">导航二</span>
				</tu-menu-item>
				<tu-menu-item
					index="3"
					disabled
				>
					<i class="tu-icon-star-fill"></i>
					<span slot="title">导航三</span>
				</tu-menu-item>
				<tu-menu-item index="4">
					<i class="tu-icon-appstore-fill"></i>
					<span slot="title">导航四</span>
				</tu-menu-item>
			</tu-menu>
		</tu-col>
		<tu-col :span="12">
			<p>自定义颜色</p>
			<tu-menu
				default-active="2"
				class="tu-menu-vertical-demo"
				@open="handleOpen"
				@close="handleClose"
				background-color="#545c64"
				text-color="#fff"
				active-text-color="#ffd04b"
			>
				<tu-submenu index="1">
					<template slot="title">
						<i class="tu-icon-location-fill"></i>
						<span>导航一</span>
					</template>
					<tu-menu-item-group>
						<template slot="title">分组一</template>
						<tu-menu-item index="1-1">选项1</tu-menu-item>
						<tu-menu-item index="1-2">选项2</tu-menu-item>
					</tu-menu-item-group>
					<tu-menu-item-group title="分组2">
						<tu-menu-item index="1-3">选项3</tu-menu-item>
					</tu-menu-item-group>
					<tu-submenu index="1-4">
						<template slot="title">选项4</template>
						<tu-menu-item index="1-4-1">选项1</tu-menu-item>
					</tu-submenu>
				</tu-submenu>
				<tu-menu-item index="2">
					<i class="tu-icon-appstore-fill"></i>
					<span slot="title">导航二</span>
				</tu-menu-item>
				<tu-menu-item
					index="3"
					disabled
				>
					<i class="tu-icon-star-fill"></i>
					<span slot="title">导航三</span>
				</tu-menu-item>
				<tu-menu-item index="4">
					<i class="tu-icon-appstore-fill"></i>
					<span slot="title">导航四</span>
				</tu-menu-item>
			</tu-menu>
		</tu-col>
	</tu-row>
</template>

<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
		},
	};
</script>
```

:::
