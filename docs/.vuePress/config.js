module.exports = {
	title: "Tu-view",
	description: "一款有触觉的UI组件库",
	base: "/tu-view/", //打包时候打开
	themeConfig: {
		search: true,
		nav: [
			{ text: "指南", link: "/guide/" },
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
			"/guide/": [
				["", "快速开始"],
				{
					title: "基础组件",
					collapsable: false,
					children: [
						["../guide/layout.md", "Layout 布局"],
						["../guide/button.md", "Button 按钮"],
						["../guide/icon.md", "Icon 图标"],
					],
				},
				{
					title: "表单组件",
					collapsable: false,
					children: [
						["../guide/radio.md", "Radio 单选框"],
						["../guide/checkbox.md", "Checkbox 多选框"],
						["../guide/input.md", "Input 输入框"],
						["../guide/textarea.md", "Textarea 多行输入框"],
						["../guide/input-number.md", "InputNumber 计数器"],
						["../guide/select.md", "Select 选择器"],
						["../guide/cascader.md", "Cascader 级联选择器"],
						["../guide/switch.md", "Switch 开关"],
						["../guide/slider.md", "Slider 滑块"],
						["../guide/time-picker.md", "TimePicker 时间选择器"],
						["../guide/date-picker.md", "DataPicker 日期选择器"],
						["../guide/datetime-picker.md", "DataTimePicker 日期时间选择器"],
						["../guide/rate.md", "Rate 评分"],
						["../guide/color-picker.md", "ColorPicker 颜色选择器"],
						["../guide/transfer.md", "Transfer 穿梭框"],
						["../guide/form.md", "Form 表单"],
					],
				},
				{
					title: "数据组件",
					collapsable: false,
					children: [
						["../guide/tag.md", "Tag 标签"],
						["../guide/pagination.md", "Pagination 分页"],
					],
				},
				{
					title: "导航组件",
					collapsable: false,
					children: [
						["../guide/tabs.md", "Tabs 标签页"],
						["../guide/dropdown.md", "Dropdown 下拉菜单"],
					],
				},
				{
					title: "通知组件",
					collapsable: false,
					children: [["../guide/message.md", "Message 消息通知"]],
				},
				{
					title: "其他组件",
					collapsable: false,
					children: [
						["../guide/tooltip.md", "Tooltip 文字提示"],
						["../guide/card.md", "Card 卡片"],
						["../guide/scrollbar.md", "Scrollbar 区域滚动"],
					],
				},
			],
		},
		sidebarDepth: 0,
	},
	plugins: {
		"demo-container": {
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
	},
};
