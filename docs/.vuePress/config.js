module.exports = {
    title: 'Tu-view',
    description: '一款有触觉的UI组件库',
    base: '/tu-view/', //打包时候打开
    themeConfig: {
        search: true,
        nav: [
            { text: '指南', link: '/guide/' },
            {
                text: '了解更多',
                items: [
                    {
                        text: 'github',
                        link: 'https://github.com/tujindong/tu-view',
                        target: '_blank'
                    }
                ]
            }
        ],
        sidebar: {
            '/guide/': [
                ['', '快速开始'],
                {
                    title: '基础组件',
                    collapsable: false,
                    children: [
                        ['../guide/Layout.md', 'Layout 布局'],
                        ['../guide/Button.md', 'Button 按钮'],
                    ]
                },
                {
                    title: '表单组件',
                    collapsable: false,
                    children: [
                        ['../guide/Radio.md', 'Radio 单选框'],
                        ['../guide/Checkbox.md', 'Checkbox 多选框'],
                        ['../guide/Input.md', 'Input 输入框'],
                        ['../guide/Textarea.md', 'Textarea 多行输入框'],
                        ['../guide/Input-number.md', 'InputNumber 计数器'],
                        ['../guide/Select.md', 'Select 选择器'],
                        ['../guide/Switch.md', 'Switch 开关'],
                    ]
                },
                {
                    title: '数据组件',
                    collapsable: false,
                    children: [
                        ['../guide/Tag.md', 'Tag 标签'],
                    ]
                },
                {
                    title: '导航组件',
                    collapsable: false,
                    children: [
                        ['../guide/Tabs.md', 'Tabs 标签页'],
                    ]
                },
                {
                    title: '其他组件',
                    collapsable: false,
                    children: [
                        ['../guide/Tooltip.md', 'Tooltip 文字提示'],
                        ['../guide/Card.md', 'Card 卡片'],
                        ['../guide/Scrollbar.md', 'Scrollbar 区域滚动']
                    ]
                }
            ]
        },
        sidebarDepth: 0,
    },
    plugins: {
        'demo-container': {
            locales: [
                {
                    "lang": "zh-CN",
                    "demo-block": {
                        "hide-text": "隐藏代码",
                        "show-text": "显示代码",
                        "copy-text": "复制代码",
                        "copy-success": "复制成功"
                    }
                },
                {
                    "lang": "en-US",
                    "demo-block": {
                        "hide-text": "Hide",
                        "show-text": "Expand",
                        "copy-text": "Copy",
                        "copy-success": "Successful"
                    }
                }
            ]
        }
    }
}