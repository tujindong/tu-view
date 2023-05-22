## Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据

### 典型表单

包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。

:::demo 在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker

```html
<template>
	<tu-form
		ref="form"
		:model="form"
		label-width="80px"
	>
		<tu-form-item label="活动名称">
			<tu-input
				placeholder="请输入活动名称"
				v-model="form.name"
			></tu-input>
		</tu-form-item>
		<tu-form-item label="活动区域">
			<tu-select
				v-model="form.region"
				placeholder="请选择活动区域"
				clearable
			>
				<tu-option
					label="区域一"
					value="shanghai"
				></tu-option>
				<tu-option
					label="区域二"
					value="beijing"
				></tu-option>
			</tu-select>
		</tu-form-item>
		<tu-form-item label="活动时间">
			<tu-row>
				<tu-col :span="11">
					<tu-date-picker
						type="date"
						placeholder="选择日期"
						v-model="form.date"
						style="width: 100%;"
					></tu-date-picker>
				</tu-col>
				<tu-col :span="2">&nbsp</tu-col>
				<tu-col :span="11">
					<tu-time-picker
						placeholder="选择时间"
						v-model="form.time"
						style="width: 100%;"
					></tu-time-picker>
				</tu-col>
			</tu-row>
		</tu-form-item>
		<tu-form-item label="即时配送">
			<tu-switch v-model="form.delivery"></tu-switch>
		</tu-form-item>
		<tu-form-item label="活动性质">
			<tu-checkbox-group v-model="form.type">
				<tu-checkbox
					label="美食/餐厅线上活动"
					name="type"
				></tu-checkbox>
				<tu-checkbox
					label="地推活动"
					name="type"
				></tu-checkbox>
				<tu-checkbox
					label="线下主题活动"
					name="type"
				></tu-checkbox>
				<tu-checkbox
					label="单纯品牌曝光"
					name="type"
				></tu-checkbox>
			</tu-checkbox-group>
		</tu-form-item>
		<tu-form-item label="特殊资源">
			<tu-radio-group v-model="form.resource">
				<tu-radio label="线上品牌商赞助"></tu-radio>
				<tu-radio label="线下场地免费"></tu-radio>
			</tu-radio-group>
		</tu-form-item>
		<tu-form-item label="活动形式">
			<tu-textarea
				placeholder="请输入活动形式"
				v-model="form.desc"
			></tu-textarea>
		</tu-form-item>
		<tu-form-item>
			<tu-button
				type="primary"
				@click="submit"
				>立即创建</tu-button
			>
			<tu-button style="margin-left: 8px">取消</tu-button>
		</tu-form-item>
	</tu-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: "",
					region: "",
					date: "",
					time: "",
					delivery: false,
					type: [],
					resource: "",
					desc: "",
				},
			};
		},
		methods: {
			submit() {
				console.log("submit!", this.form);
			},
		},
	};
</script>
```

:::

:::tip
W3C 标准中有如下[规定](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2)：

> <i>When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.</i>

即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 `<tu-form>` 标签上添加 `@submit.native.prevent`。
:::

### 行内表单

当垂直方向空间受限且表单较简单时，可以在一行内放置表单。

:::demo 设置 `inline` 属性可以让表单域变为行内的表单域

```html
<template>
	<tu-form
		:inline="true"
		:model="form"
		class="demo-form-inline"
	>
		<tu-form-item label="审批人">
			<tu-input
				v-model="form.user"
				placeholder="审批人"
			></tu-input>
		</tu-form-item>
		<tu-form-item label="活动区域">
			<tu-select
				v-model="form.region"
				placeholder="活动区域"
			>
				<tu-option
					label="区域一"
					value="shanghai"
				></tu-option>
				<tu-option
					label="区域二"
					value="beijing"
				></tu-option>
			</tu-select>
		</tu-form-item>
		<tu-form-item>
			<tu-button
				type="primary"
				@click="submit"
				>查询</tu-button
			>
		</tu-form-item>
	</tu-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					user: "",
					region: "",
				},
			};
		},
		methods: {
			submit() {
				console.log("submit!", this.form);
			},
		},
	};
</script>
```

:::

### 对齐方式

根据具体目标和制约因素，选择最佳的标签对齐方式。

:::demo 通过设置 `label-position` 属性可以改变表单域标签的位置，可选值为 `top`、`left`，当设为 `top` 时标签会置于表单域的顶部

```html
<template>
	<div>
		<tu-radio-group
			v-model="labelPosition"
			style="margin-bottom: 20px"
		>
			<tu-radio label="left">左对齐</tu-radio>
			<tu-radio label="right">右对齐</tu-radio>
			<tu-radio label="top">顶部对齐</tu-radio>
		</tu-radio-group>
		<tu-form
			:label-position="labelPosition"
			label-width="80px"
			:model="formLabelAlign"
		>
			<tu-form-item label="名称">
				<tu-input
					placeholder="请输入名称"
					v-model="formLabelAlign.name"
				></tu-input>
			</tu-form-item>
			<tu-form-item label="活动区域">
				<tu-input
					placeholder="请输入活动区域"
					v-model="formLabelAlign.region"
				></tu-input>
			</tu-form-item>
			<tu-form-item label="活动形式">
				<tu-input
					placeholder="请输入活动形式"
					v-model="formLabelAlign.type"
				></tu-input>
			</tu-form-item>
		</tu-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				labelPosition: "right",
				formLabelAlign: {
					name: "",
					region: "",
					type: "",
				},
			};
		},
	};
</script>
```

:::

### 表单验证

在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。

:::demo Form 组件提供了表单验证的功能，只需要通过 `rules` 属性传入约定的验证规则，并将 Form-Item 的 `prop` 属性设置为需校验的字段名即可。校验规则参见 [async-validator](https://github.com/yiminghe/async-validator)

```html
<template>
	<tu-form
		:model="form"
		:rules="rules"
		ref="form"
		label-width="100px"
	>
		<tu-form-item
			label="活动名称"
			prop="name"
		>
			<tu-input
				v-model="form.name"
				placeholder="请输入活动名称"
			></tu-input>
		</tu-form-item>
		<tu-form-item
			label="活动区域"
			prop="region"
		>
			<tu-select
				v-model="form.region"
				placeholder="请选择活动区域"
			>
				<tu-option
					label="区域一"
					value="shanghai"
				></tu-option>
				<tu-option
					label="区域二"
					value="beijing"
				></tu-option>
			</tu-select>
		</tu-form-item>
		<tu-form-item
			label="活动时间"
			required
		>
			<tu-row>
				<tu-col :span="11">
					<tu-form-item prop="date">
						<tu-date-picker
							type="date"
							placeholder="请选择日期"
							v-model="form.date"
						></tu-date-picker>
					</tu-form-item>
				</tu-col>
				<tu-col :span="2">&nbsp</tu-col>
				<tu-col :span="11">
					<tu-form-item prop="time">
						<tu-time-picker
							placeholder="请选择时间"
							v-model="form.time"
						></tu-time-picker>
					</tu-form-item>
				</tu-col>
			</tu-row>
		</tu-form-item>
		<tu-form-item
			label="即时配送"
			prop="delivery"
		>
			<tu-switch v-model="form.delivery"></tu-switch>
		</tu-form-item>
		<tu-form-item
			label="活动性质"
			prop="type"
		>
			<tu-checkbox-group v-model="form.type">
				<tu-checkbox
					label="美食/餐厅线上活动"
					name="type"
				></tu-checkbox>
				<tu-checkbox
					label="地推活动"
					name="type"
				></tu-checkbox>
				<tu-checkbox
					label="线下主题活动"
					name="type"
				></tu-checkbox>
				<tu-checkbox
					label="单纯品牌曝光"
					name="type"
				></tu-checkbox>
			</tu-checkbox-group>
		</tu-form-item>
		<tu-form-item
			label="特殊资源"
			prop="resource"
		>
			<tu-radio-group v-model="form.resource">
				<tu-radio label="线上品牌商赞助"></tu-radio>
				<tu-radio label="线下场地免费"></tu-radio>
			</tu-radio-group>
		</tu-form-item>
		<tu-form-item
			label="活动形式"
			prop="desc"
		>
			<tu-textarea
				v-model="form.desc"
				placeholder="请输入活动形式"
			></tu-textarea>
		</tu-form-item>
		<tu-form-item>
			<tu-button
				type="primary"
				@click="submit"
				>立即创建</tu-button
			>
			<tu-button
				@click="reset"
				style="margin-left: 8px"
				>重置</tu-button
			>
		</tu-form-item>
	</tu-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: "",
					region: "",
					date: "",
					time: "",
					delivery: false,
					type: [],
					resource: "",
					desc: "",
				},
				rules: {
					name: [
						{ required: true, message: "请输入活动名称", trigger: "change" },
						{ min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
					],
					region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
					date: [{ type: "date", required: true, message: "请选择日期", trigger: "change" }],
					time: [{ type: "date", required: true, message: "请选择时间", trigger: "change" }],
					type: [
						{ type: "array", required: true, message: "请至少选择一个活动性质", trigger: "change" },
					],
					resource: [{ required: true, message: "请选择活动资源", trigger: "change" }],
					desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
				},
			};
		},
		methods: {
			submit() {
				this.$refs.form.validate(valid => {
					if (valid) {
						console.log("submit", this.form);
					} else {
						console.log("error submit!!");
						return false;
					}
				});
			},
			reset() {
				this.$refs.form.resetFields();
			},
		},
	};
</script>
```

:::

### 自定义校验规则

这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。

:::demo 本例还使用`status-icon`属性为输入框添加了表示校验结果的反馈图标。

```html
<template>
	<tu-form
		:model="form"
		status-icon
		:rules="rules"
		ref="tuForm"
		label-width="100px"
		class="demo-form"
	>
		<tu-form-item
			label="密码"
			prop="pass"
		>
			<tu-input
				type="password"
				v-model="form.pass"
				autocomplete="off"
				placeholder="请输入密码"
			></tu-input>
		</tu-form-item>
		<tu-form-item
			label="确认密码"
			prop="checkPass"
		>
			<tu-input
				type="password"
				v-model="form.checkPass"
				autocomplete="off"
				placeholder="请确认密码"
			></tu-input>
		</tu-form-item>
		<tu-form-item
			label="年龄"
			prop="age"
		>
			<tu-input
				v-model.number="form.age"
				placeholder="请输入年龄"
			></tu-input>
		</tu-form-item>
		<tu-form-item>
			<tu-button
				type="primary"
				@click="submit"
				>提交</tu-button
			>
			<tu-button
				@click="reset"
				style="margin-left: 8px"
				>重置</tu-button
			>
		</tu-form-item>
	</tu-form>
</template>

<script>
	export default {
		data() {
			var checkAge = (rule, value, callback) => {
				if (!value) {
					return callback(new Error("年龄不能为空"));
				}
				setTimeout(() => {
					if (!Number.isInteger(value)) {
						callback(new Error("请输入数字值"));
					} else {
						if (value < 18) {
							callback(new Error("必须年满18岁"));
						} else {
							callback();
						}
					}
				}, 1000);
			};
			var validatePass = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请输入密码"));
				} else {
					if (this.form.checkPass !== "") {
						this.$refs.form.validateField("checkPass");
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请再次输入密码"));
				} else if (value !== this.form.pass) {
					callback(new Error("两次输入密码不一致!"));
				} else {
					callback();
				}
			};
			return {
				form: {
					pass: "",
					checkPass: "",
					age: "",
				},
				rules: {
					pass: [{ validator: validatePass, trigger: "blur" }],
					checkPass: [{ validator: validatePass2, trigger: "blur" }],
					age: [{ validator: checkAge, trigger: "blur" }],
				},
			};
		},
		methods: {
			submit() {
				this.$refs.tuForm.validate(valid => {
					if (valid) {
						alert("submit!");
					} else {
						console.log("error submit!!");
						return false;
					}
				});
			},
			reset() {
				this.$refs.tuForm.resetFields();
			},
		},
	};
</script>
```

:::

:::tip
自定义校验 callback 必须被调用。 更多高级用法可参考 [async-validator](https://github.com/yiminghe/async-validator)。
:::

### 动态增减表单项

:::demo 除了在 Form 组件上一次性传递所有的验证规则外还可以在单个的表单域上传递属性的验证规则

```html
<template>
	<tu-form
		:model="form"
		ref="tuForm"
		label-width="100px"
	>
		<tu-form-item
			prop="email"
			label="邮箱"
			:rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
		>
			<tu-input
				v-model="form.email"
				placeholder="请输入邮箱"
			></tu-input>
		</tu-form-item>
		<tu-form-item
			v-for="(domain, index) in form.domains"
			:label="'域名' + index"
			:key="domain.key"
			:prop="'domains.' + index + '.value'"
			:rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
		>
			<tu-input
				v-model="domain.value"
				placeholder="请输入域名"
				style="width: 85%"
			></tu-input
			><tu-button
				@click.prevent="removeDomain(domain)"
				style="float: right; margin-top: 5px"
				>删除</tu-button
			>
		</tu-form-item>
		<tu-form-item>
			<tu-button
				type="primary"
				@click="submit"
				>提交</tu-button
			>
			<tu-button
				@click="reset"
				style="margin-left: 8px"
				>重置</tu-button
			>
			<tu-button
				@click="addDomain"
				style="margin-left: 8px"
				>新增域名</tu-button
			>
		</tu-form-item>
	</tu-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					domains: [
						{
							value: "",
						},
					],
					email: "",
				},
			};
		},
		methods: {
			submit() {
				this.$refs.tuForm.validate(valid => {
					if (valid) {
						alert("submit!");
					} else {
						console.log("error submit!!");
						return false;
					}
				});
			},
			reset() {
				this.$refs.tuForm.resetFields();
			},
			removeDomain(item) {
				var index = this.form.domains.indexOf(item);
				if (index !== -1) {
					this.form.domains.splice(index, 1);
				}
			},
			addDomain() {
				this.form.domains.push({
					value: "",
					key: Date.now(),
				});
			},
		},
	};
</script>
```

:::

### 数字类型验证

:::demo 数字类型的验证需要在 `v-model` 处加上 `.number` 的修饰符，这是 `Vue` 自身提供的用于将绑定值转化为 `number` 类型的修饰符。

```html
<template>
	<tu-form
		:model="form"
		ref="tuForm"
		label-width="100px"
	>
		<tu-form-item
			label="年龄"
			prop="age"
			:rules="[
        { required: true, message: '年龄不能为空'},
        { type: 'number', message: '年龄必须为数字值'}
      ]"
		>
			<tu-input
				v-model.number="form.age"
				autocomplete="off"
				placeholder="请输入年龄"
			></tu-input>
		</tu-form-item>
		<tu-form-item>
			<tu-button
				type="primary"
				@click="submit"
				>提交</tu-button
			>
			<tu-button
				style="margin-left: 8px"
				@click="reset"
				>重置</tu-button
			>
		</tu-form-item>
	</tu-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					age: "",
				},
			};
		},
		methods: {
			submit() {
				this.$refs.tuForm.validate(valid => {
					if (valid) {
						alert("submit!");
					} else {
						console.log("error submit!!");
						return false;
					}
				});
			},
			reset() {
				this.$refs.tuForm.resetFields();
			},
		},
	};
</script>
```

:::

:::tip
嵌套在 `tu-form-item` 中的 `tu-form-item` 标签宽度默认为零，不会继承 `tu-form` 的 `label-width`。如果需要可以为其单独设置 `label-width` 属性。
:::

### 表单内组件尺寸控制

通过设置 Form 上的 `size` 属性可以使该表单内所有可调节大小的组件继承该尺寸。Form-Item 也具有该属性。

:::demo 如果希望某个表单项或某个表单组件的尺寸不同于 Form 上的`size`属性，直接为这个表单项或表单组件设置自己的`size`即可。

```html
<template>
	<div>
		<tu-radio-group
			v-model="size"
			style="margin-bottom: 20px"
		>
			<tu-radio label="small">较小</tu-radio>
			<tu-radio label="medium">中等</tu-radio>
			<tu-radio label="large">较大</tu-radio>
		</tu-radio-group>
		<tu-form
			ref="tuForm"
			:model="form"
			label-width="80px"
			:size="size"
		>
			<tu-form-item label="活动名称">
				<tu-input
					v-model="form.name"
					placeholder="请输入活动名称"
				></tu-input>
			</tu-form-item>
			<tu-form-item label="活动区域">
				<tu-select
					v-model="form.region"
					placeholder="请选择活动区域"
				>
					<tu-option
						label="区域一"
						value="shanghai"
					></tu-option>
					<tu-option
						label="区域二"
						value="beijing"
					></tu-option>
				</tu-select>
			</tu-form-item>
			<tu-form-item label="活动时间">
				<tu-col :span="11">
					<tu-date-picker
						type="date"
						placeholder="选择日期"
						v-model="form.date"
						style="width: 100%;"
					></tu-date-picker>
				</tu-col>
				<tu-col
					class="line"
					:span="2"
					>&nbsp</tu-col
				>
				<tu-col :span="11">
					<tu-time-picker
						placeholder="选择时间"
						v-model="form.time"
						style="width: 100%;"
					></tu-time-picker>
				</tu-col>
			</tu-form-item>
			<tu-form-item label="活动性质">
				<tu-checkbox-group
					v-model="form.type"
					border
				>
					<tu-checkbox
						label="美食/餐厅线上活动"
						name="type"
					></tu-checkbox>
					<tu-checkbox
						label="地推活动"
						name="type"
					></tu-checkbox>
					<tu-checkbox
						label="线下主题活动"
						name="type"
					></tu-checkbox>
				</tu-checkbox-group>
			</tu-form-item>
			<tu-form-item label="特殊资源">
				<tu-radio-group
					v-model="form.resource"
					border
				>
					<tu-radio label="线上品牌商赞助"></tu-radio>
					<tu-radio label="线下场地免费"></tu-radio>
				</tu-radio-group>
			</tu-form-item>
			<tu-form-item>
				<tu-button
					type="primary"
					@click="submit"
					>立即创建</tu-button
				>
				<tu-button style="margin-left: 8px">取消</tu-button>
			</tu-form-item>
		</tu-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				size: "medium",
				form: {
					name: "",
					region: "",
					date: "",
					time: "",
					delivery: false,
					type: [],
					resource: "",
					desc: "",
				},
			};
		},
		methods: {
			submit() {
				console.log("submit!");
			},
		},
	};
</script>
```

:::

### Form Attributes

| 参数                    | 说明                                                                                      | 类型    | 可选值                | 默认值 |
| ----------------------- | ----------------------------------------------------------------------------------------- | ------- | --------------------- | ------ |
| model                   | 表单数据对象                                                                              | object  | —                     | —      |
| rules                   | 表单验证规则                                                                              | object  | —                     | —      |
| inline                  | 行内表单模式                                                                              | boolean | —                     | false  |
| label-position          | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width`                   | string  | right/left/top        | right  |
| label-width             | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 `auto`。 | string  | —                     | —      |
| label-suffix            | 表单域标签的后缀                                                                          | string  | —                     | —      |
| hide-required-asterisk  | 是否隐藏必填字段的标签旁边的红色星号                                                      | boolean | —                     | false  |
| show-message            | 是否显示校验错误信息                                                                      | boolean | —                     | true   |
| inline-message          | 是否以行内形式展示校验信息                                                                | boolean | —                     | false  |
| status-icon             | 是否在输入框中显示校验结果反馈图标                                                        | boolean | —                     | false  |
| validate-on-rule-change | 是否在 `rules` 属性改变后立即触发一次验证                                                 | boolean | —                     | true   |
| size                    | 用于控制该表单内组件的尺寸                                                                | string  | medium / small / mini | —      |
| disabled                | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效         | boolean | —                     | false  |

### Form Methods

| 方法名        | 说明                                                                                                                                                                 | 参数                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| validate      | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object))                              |
| validateField | 对部分表单字段进行校验的方法                                                                                                                                         | Function(props: array \| string, callback: Function(errorMessage: string)) |
| resetFields   | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                                                                                                           | —                                                                          |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果                                                             | Function(props: array \| string)                                           |

### Form Events

| 事件名称 | 说明                   | 回调参数                                                   |
| -------- | ---------------------- | ---------------------------------------------------------- |
| validate | 任一表单项被校验后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |

### Form-Item Attributes

| 参数           | 说明                                                                         | 类型    | 可选值                            | 默认值 |
| -------------- | ---------------------------------------------------------------------------- | ------- | --------------------------------- | ------ |
| prop           | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string  | 传入 Form 组件的 `model` 中的字段 | —      |
| label          | 标签文本                                                                     | string  | —                                 | —      |
| label-width    | 表单域标签的的宽度，例如 '50px'。支持 `auto`。                               | string  | —                                 | —      |
| required       | 是否必填，如不设置，则会根据校验规则自动生成                                 | boolean | —                                 | false  |
| rules          | 表单验证规则                                                                 | object  | —                                 | —      |
| error          | 表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息    | string  | —                                 | —      |
| show-message   | 是否显示校验错误信息                                                         | boolean | —                                 | true   |
| inline-message | 以行内形式展示校验信息                                                       | boolean | —                                 | false  |
| size           | 用于控制该表单域下组件的尺寸                                                 | string  | medium / small / mini             | -      |

### Form-Item Slot

| name  | 说明             |
| ----- | ---------------- |
| —     | Form Item 的内容 |
| label | 标签文本的内容   |

### Form-Item Scoped Slot

| name  | 说明                                           |
| ----- | ---------------------------------------------- |
| error | 自定义表单校验信息的显示方式，参数为 { error } |

### Form-Item Methods

| 方法名        | 说明                                                 | 参数 |
| ------------- | ---------------------------------------------------- | ---- |
| resetField    | 对该表单项进行重置，将其值重置为初始值并移除校验结果 | -    |
| clearValidate | 移除该表单项的校验结果                               | -    |
