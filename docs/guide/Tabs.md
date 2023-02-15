## Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

### 基础用法

基础的、简洁的标签页。

:::demo Tabs 组件提供了选项卡功能，默认选中第一个标签页，也可以通过 `value` 属性来指定当前选中的标签页。

```html
<template>
	<tu-tabs
		v-model="activeName"
		@tab-click="handleClick"
	>
		<tu-tab-pane
			label="香蕉"
			name="banana"
			>香蕉</tu-tab-pane
		>
		<tu-tab-pane
			label="苹果"
			name="apple"
			>苹果</tu-tab-pane
		>
		<tu-tab-pane
			label="橙子"
			name="orange"
			>橙子</tu-tab-pane
		>
		<tu-tab-pane
			label="火龙果"
			name="pitaya"
			>火龙果</tu-tab-pane
		>
	</tu-tabs>
</template>
<script>
	export default {
		data() {
			return {
				activeName: "banana",
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
		},
	};
</script>
```

:::

### 选项卡样式

选项卡样式的标签页。

:::demo 只需要设置 `type` 属性为 `card` 就可以使选项卡改变为标签风格。

```html
<template>
	<tu-tabs
		v-model="activeName"
		type="card"
		@tab-click="handleClick"
	>
		<tu-tab-pane
			label="香蕉"
			name="banana"
			>香蕉</tu-tab-pane
		>
		<tu-tab-pane
			label="苹果"
			name="apple"
			>苹果</tu-tab-pane
		>
		<tu-tab-pane
			label="橙子"
			name="orange"
			>橙子</tu-tab-pane
		>
		<tu-tab-pane
			label="火龙果"
			name="pitaya"
			>火龙果</tu-tab-pane
		>
	</tu-tabs>
</template>
<script>
	export default {
		data() {
			return {
				activeName: "banana",
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
		},
	};
</script>
```

:::

### 卡片化

卡片化的标签页。

:::demo 将`type`设置为`border-card`。

```html
<tu-tabs type="border-card">
	<tu-tab-pane label="香蕉">香蕉</tu-tab-pane>
	<tu-tab-pane label="苹果">苹果</tu-tab-pane>
	<tu-tab-pane label="橙子">橙子</tu-tab-pane>
	<tu-tab-pane label="火龙果">火龙果</tu-tab-pane>
</tu-tabs>
```

:::

### 位置

可以通过 `tab-position` 设置标签的位置

:::demo 标签一共有四个方向的设置 `tabPosition="left|right|top|bottom"`

```html
<template>
	<tu-radio-group
		v-model="tabPosition"
		style="margin-bottom: 30px;"
	>
		<tu-radio label="top">上方</tu-radio>
		<tu-radio label="right">右方</tu-radio>
		<tu-radio label="bottom">下方</tu-radio>
		<tu-radio label="left">左方</tu-radio>
	</tu-radio-group>

	<tu-tabs
		:tab-position="tabPosition"
		style="height: 200px;"
	>
		<tu-tab-pane label="香蕉">香蕉</tu-tab-pane>
		<tu-tab-pane label="苹果">苹果</tu-tab-pane>
		<tu-tab-pane label="橙子">橙子</tu-tab-pane>
		<tu-tab-pane label="火龙果">火龙果</tu-tab-pane>
	</tu-tabs>
</template>
<script>
	export default {
		data() {
			return {
				tabPosition: "left",
			};
		},
	};
</script>
```

:::

### 自定义标签页

可以通过具名 `slot` 来实现自定义标签页的内容

:::demo

```html
<tu-tabs type="border-card">
	<tu-tab-pane label="香蕉">香蕉 </tu-tab-pane>
	<tu-tab-pane label="苹果">
		<span slot="label">
			<i class="tu-icon-apple"></i>
			苹果
		</span>
		苹果
	</tu-tab-pane>
	<tu-tab-pane label="橙子">橙子</tu-tab-pane>
	<tu-tab-pane label="火龙果">火龙果</tu-tab-pane>
</tu-tabs>
```

:::

### 动态增减标签页

增减标签页按钮只能在选项卡样式的标签页下使用

:::demo

```html
<tu-tabs
	v-model="editableTabsValue"
	type="card"
	editable
	@edit="handleTabsEdit"
>
	<tu-tab-pane
		:key="item.name"
		v-for="(item, index) in editableTabs"
		:label="item.title"
		:name="item.name"
	>
		{{item.content}}
	</tu-tab-pane>
</tu-tabs>
<script>
	export default {
		data() {
			return {
				editableTabsValue: "2",
				editableTabs: [
					{
						title: "标签1",
						name: "1",
						content: "标签1内容",
					},
					{
						title: "标签2",
						name: "2",
						content: "标签2内容",
					},
				],
				tabIndex: 2,
			};
		},
		methods: {
			handleTabsEdit(targetName, action) {
				if (action === "add") {
					let newTabName = ++this.tabIndex + "";
					this.editableTabs.push({
						title: "新标签",
						name: newTabName,
						content: "新标签内容",
					});
					this.editableTabsValue = newTabName;
				}
				if (action === "remove") {
					let tabs = this.editableTabs;
					let activeName = this.editableTabsValue;
					if (activeName === targetName) {
						tabs.forEach((tab, index) => {
							if (tab.name === targetName) {
								let nextTab = tabs[index + 1] || tabs[index - 1];
								if (nextTab) {
									activeName = nextTab.name;
								}
							}
						});
					}

					this.editableTabsValue = activeName;
					this.editableTabs = tabs.filter(tab => tab.name !== targetName);
				}
			},
		},
	};
</script>
```

:::

### 自定义增加标签页触发器

:::demo

```html
<div style="margin-bottom: 20px;">
	<tu-button
		size="small"
		@click="addTab(editableTabsValue)"
	>
		新增
	</tu-button>
</div>
<tu-tabs
	v-model="editableTabsValue"
	type="card"
	closable
	@tab-remove="removeTab"
>
	<tu-tab-pane
		v-for="(item, index) in editableTabs"
		:key="item.name"
		:label="item.title"
		:name="item.name"
	>
		{{item.content}}
	</tu-tab-pane>
</tu-tabs>
<script>
	export default {
		data() {
			return {
				editableTabsValue: "2",
				editableTabs: [
					{
						title: "标签1",
						name: "1",
						content: "标签1内容",
					},
					{
						title: "标签2",
						name: "2",
						content: "标签2内容",
					},
				],
				tabIndex: 2,
			};
		},
		methods: {
			addTab(targetName) {
				let newTabName = ++this.tabIndex + "";
				this.editableTabs.push({
					title: "新标签",
					name: newTabName,
					content: "新标签内容",
				});
				this.editableTabsValue = newTabName;
			},
			removeTab(targetName) {
				let tabs = this.editableTabs;
				let activeName = this.editableTabsValue;
				if (activeName === targetName) {
					tabs.forEach((tab, index) => {
						if (tab.name === targetName) {
							let nextTab = tabs[index + 1] || tabs[index - 1];
							if (nextTab) {
								activeName = nextTab.name;
							}
						}
					});
				}

				this.editableTabsValue = activeName;
				this.editableTabs = tabs.filter(tab => tab.name !== targetName);
			},
		},
	};
</script>
```

:::
