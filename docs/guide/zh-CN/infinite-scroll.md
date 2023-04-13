## InfiniteScroll 无限滚动

滚动至底部时，加载更多数据。

### 基础用法

在要实现滚动加载的列表上上添加`v-infinite-scroll`，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。
:::demo

```html
<template>
	<ul
		class="infinite-list"
		v-infinite-scroll="load"
		style="overflow:auto"
	>
		<li
			v-for="i in count"
			class="infinite-list-item"
		>
			{{ i }}
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				count: 0,
			};
		},
		methods: {
			load() {
				this.count += 4;
			},
		},
	};
</script>
<style>
	.infinite-list {
		height: 200px;
		padding: 0;
		margin: 0;
		list-style: none;
	}
	.infinite-list-item {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 30px;
		background: #bec8e4;
		margin: 10px;
		color: #9baacf;
		font-size: 14px;
	}
</style>
```

:::

### 禁用加载

:::demo

```html
<template>
	<div
		class="infinite-list-wrapper"
		style="overflow:auto"
	>
		<ul
			class="list"
			v-infinite-scroll="load"
			infinite-scroll-disabled="disabled"
		>
			<li
				v-for="i in count"
				class="list-item"
			>
				{{ i }}
			</li>
		</ul>
		<p v-if="loading">加载中...</p>
		<p v-if="noMore">没有更多了</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				count: 10,
				loading: false,
			};
		},
		computed: {
			noMore() {
				return this.count >= 16;
			},
			disabled() {
				return this.loading || this.noMore;
			},
		},
		methods: {
			load() {
				this.loading = true;
				setTimeout(() => {
					this.count += 4;
					this.loading = false;
				}, 2000);
			},
		},
	};
</script>
<style>
	.infinite-list-wrapper {
		height: 200px;
		text-align: center;
	}
	.infinite-list-wrapper .list {
		padding: 0;
		margin: 0;
		list-style: none;
	}
	.infinite-list-wrapper .list-item {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 30px;
		background: #bec8e4;
		margin: 10px;
		color: #9baacf;
		font-size: 14px;
	}
</style>
```

:::

### Attributes

| 参数                      | 说明                                                   | 类型    | 可选值 | 默认值 |
| ------------------------- | ------------------------------------------------------ | ------- | ------ | ------ |
| infinite-scroll-disabled  | 是否禁用                                               | boolean | -      | false  |
| infinite-scroll-delay     | 节流时延，单位为 ms                                    | number  | -      | 200    |
| infinite-scroll-distance  | 触发加载的距离阈值，单位为 px                          | number  | -      | 0      |
| infinite-scroll-immediate | 是否立即执行加载方法，以防初始状态下内容无法撑满容器。 | boolean | -      | true   |
