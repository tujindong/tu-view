module.exports = {
	title: "Tu-view",
	description: "一款有触觉的UI组件库",
	base: "/tu-view/", //打包时候打开
	themeConfig: {
		search: true,
		nav: [
			{ text: "指南", link: "/guide/zh-CN/" },
			{ text: "主题", link: "/components/theme/", target: "_blank" },
			{
				text: "了解更多",
				items: [
					{
						text: "github",
						link: "https://github.com/tujindong/tu-view",
						target: "_blank",
					},
				],
			},
		],
		sidebar: {
			"/guide/zh-CN/": [
				["", "快速开始"],
				["../zh-CN/locale.md", "国际化"],
				["../zh-CN/theme.md", "自定义主题"],
				{
					title: "基础组件",
					collapsable: false,
					children: [
						["../zh-CN/layout.md", "Layout 布局"],
						["../zh-CN/button.md", "Button 按钮"],
						["../zh-CN/icon.md", "Icon 图标"],
					],
				},
				{
					title: "表单组件",
					collapsable: false,
					children: [
						["../zh-CN/radio.md", "Radio 单选框"],
						["../zh-CN/checkbox.md", "Checkbox 多选框"],
						["../zh-CN/input.md", "Input 输入框"],
						["../zh-CN/textarea.md", "Textarea 多行输入框"],
						["../zh-CN/input-number.md", "InputNumber 计数器"],
						["../zh-CN/select.md", "Select 选择器"],
						["../zh-CN/cascader.md", "Cascader 级联选择器"],
						["../zh-CN/tree-select.md", "TreeSelect 树形选择器"],
						["../zh-CN/switch.md", "Switch 开关"],
						["../zh-CN/slider.md", "Slider 滑块"],
						["../zh-CN/time-picker.md", "TimePicker 时间选择器"],
						["../zh-CN/date-picker.md", "DataPicker 日期选择器"],
						["../zh-CN/datetime-picker.md", "DataTimePicker 日期时间选择器"],
						["../zh-CN/rate.md", "Rate 评分"],
						["../zh-CN/color-picker.md", "ColorPicker 颜色选择器"],
						["../zh-CN/transfer.md", "Transfer 穿梭框"],
						["../zh-CN/upload.md", "Upload 上传"],
						["../zh-CN/form.md", "Form 表单"],
					],
				},
				{
					title: "数据组件",
					collapsable: false,
					children: [
						["../zh-CN/table.md", "Table 表格"],
						["../zh-CN/tag.md", "Tag 标签"],
						["../zh-CN/progress.md", "Progress 进度条"],
						["../zh-CN/tree.md", "Tree 树形控件"],
						["../zh-CN/pagination.md", "Pagination 分页"],
						["../zh-CN/badge.md", "Badge 标记"],
						["../zh-CN/avatar.md", "Avatar 头像"],
						["../zh-CN/skeleton.md", "Skeleton 骨架屏"],
						["../zh-CN/empty.md", "Empty 空状态"],
						["../zh-CN/descriptions.md", "Descriptions 描述列表"],
						["../zh-CN/result.md", "Result 结果"],
						["../zh-CN/statistic.md", "Statistic 统计数值"],
					],
				},
				{
					title: "导航组件",
					collapsable: false,
					children: [
						["../zh-CN/menu.md", "Menu 导航菜单"],
						["../zh-CN/tabs.md", "Tabs 标签页"],
						["../zh-CN/breadcrumb.md", "Breadcrumb 面包屑"],
						["../zh-CN/dropdown.md", "Dropdown 下拉菜单"],
						["../zh-CN/steps.md", "Steps 步骤条"],
					],
				},
				{
					title: "通知组件",
					collapsable: false,
					children: [
						["../zh-CN/alert.md", "Alert 警告"],
						["../zh-CN/loading.md", "Loading 加载"],
						["../zh-CN/message.md", "Message 消息通知"],
						["../zh-CN/message-box.md", "MessageBox 弹框"],
						["../zh-CN/notification.md", "Notification 通知"],
					],
				},
				{
					title: "其他组件",
					collapsable: false,
					children: [
						["../zh-CN/tooltip.md", "Tooltip 文字提示"],
						["../zh-CN/popover.md", "Popover 弹出框"],
						["../zh-CN/popconfirm.md", "Popconfirm 弹出确认框"],
						["../zh-CN/modal.md", "Modal 模态框"],
						["../zh-CN/drawer.md", "Drawer 抽屉"],
						["../zh-CN/card.md", "Card 卡片"],
						["../zh-CN/carousel.md", "Carousel 走马灯"],
						["../zh-CN/collapse.md", "Collapse 折叠面板"],
						["../zh-CN/timeline.md", "Timeline 时间线"],
						["../zh-CN/divider.md", "Divider 分割线"],
						["../zh-CN/calendar.md", "Calendar 日历"],
						["../zh-CN/image.md", "Image 图片"],
						["../zh-CN/scrollbar.md", "Scrollbar 区域滚动"],
						["../zh-CN/backtop.md", "Backtop 回到顶部"],
						["../zh-CN/infinite-scroll.md", "InfiniteScroll 无限滚动"],
					],
				},
			],
		},
		sidebarDepth: 0,
	},
	// locales: {
	// 	"/": {
	// 		lang: "zh-CN",
	// 		title: "TuView",
	// 	},
	// },
	plugins: [
		[
			"demo-container",
			{
				locales: [
					{
						lang: "zh-CN",
						"demo-block": {
							"hide-text": "隐藏代码",
							"show-text": "显示代码",
							"copy-text": "复制代码",
							"copy-success": "复制成功",
						},
					},
					{
						lang: "en-US",
						"demo-block": {
							"hide-text": "Hide",
							"show-text": "Expand",
							"copy-text": "Copy",
							"copy-success": "Successful",
						},
					},
				],
			},
		],
		[
			"vuepress-plugin-anchor-toc",
			{
				ignore: ["/", "/api/"],
			},
		],
	],
};
