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
				@click="onSubmit"
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
			onSubmit() {
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
				@click="submitForm"
				>立即创建</tu-button
			>
			<tu-button
				@click="resetForm"
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
			submitForm() {
				this.$refs.form.validate(valid => {
					if (valid) {
						console.log("submit", this.form);
					} else {
						console.log("error submit!!");
						return false;
					}
				});
			},
			resetForm() {
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
		ref="ruleForm"
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
				@click="submitForm"
				>提交</tu-button
			>
			<tu-button
				@click="resetForm"
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
			submitForm() {
				this.$refs.ruleForm.validate(valid => {
					if (valid) {
						alert("submit!");
					} else {
						console.log("error submit!!");
						return false;
					}
				});
			},
			resetForm() {
				this.$refs.ruleForm.resetFields();
			},
		},
	};
</script>
```

:::
