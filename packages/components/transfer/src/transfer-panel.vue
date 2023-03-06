<template>
	<div class="tu-transfer-panel">
		<p class="tu-transfer-panel__header">
			<tu-checkbox
				v-model="allChecked"
				@change="handleAllCheckedChange"
				:indeterminate="isIndeterminate"
			>
				{{ title }}
				<span>{{ checkedSummary }}</span>
			</tu-checkbox>
		</p>

		<div :class="['tu-transfer-panel__body', hasFooter ? 'is-with-footer' : '']">
			<tu-input
				class="tu-transfer-panel__filter"
				v-model="query"
				size="small"
				clearable
				:placeholder="placeholder"
				@mouseenter.native="inputHover = true"
				@mouseleave.native="inputHover = false"
				v-if="filterable"
			>
				<i
					slot="prefix"
					:class="['tu-input__icon', 'tu-icon-search']"
				></i>
			</tu-input>
			<div class="tu-transfer-panel__wrapper">
				<tu-checkbox-group
					v-model="checked"
					v-show="!hasNoMatch && data.length > 0"
					:class="{ 'is-filterable': filterable }"
					class="tu-transfer-panel__list"
				>
					<tu-checkbox
						class="tu-transfer-panel__item"
						:label="item[keyProp]"
						:disabled="item[disabledProp]"
						:key="item[keyProp]"
						v-for="item in filteredData"
					>
						<option-content :option="item"></option-content>
					</tu-checkbox>
				</tu-checkbox-group>

				<p
					class="tu-transfer-panel__empty"
					v-show="hasNoMatch"
				>
					{{ t("tu.transfer.noMatch") }}
				</p>
				<p
					class="tu-transfer-panel__empty"
					v-show="data.length === 0 && !hasNoMatch"
				>
					{{ t("tu.transfer.noData") }}
				</p>
			</div>
		</div>

		<p
			class="tu-transfer-panel__footer"
			v-if="hasFooter"
		>
			<slot></slot>
		</p>
	</div>
</template>

<script>
	import Locale from "@packages/src/mixins/locale";

	export default {
		mixins: [Locale],

		name: "TuTransferPanel",

		componentName: "TuTransferPanel",

		components: {
			OptionContent: {
				props: {
					option: Object,
				},
				render(h) {
					const getParent = vm => {
						if (vm.$options.componentName === "TuTransferPanel") {
							return vm;
						} else if (vm.$parent) {
							return getParent(vm.$parent);
						} else {
							return vm;
						}
					};
					const panel = getParent(this);
					const transfer = panel.$parent || panel;
					return panel.renderContent ? (
						panel.renderContent(h, this.option)
					) : transfer.$scopedSlots.default ? (
						transfer.$scopedSlots.default({ option: this.option })
					) : (
						<span>{this.option[panel.labelProp] || this.option[panel.keyProp]}</span>
					);
				},
			},
		},

		props: {
			data: {
				type: Array,
				default() {
					return [];
				},
			},
			renderContent: Function,
			placeholder: String,
			title: String,
			filterable: Boolean,
			format: Object,
			filterMethod: Function,
			defaultChecked: Array,
			props: Object,
		},

		data() {
			return {
				checked: [],
				allChecked: false,
				query: "",
				inputHover: false,
				checkChangeByUser: true,
			};
		},

		computed: {
			filteredData() {
				return this.data.filter(item => {
					if (typeof this.filterMethod === "function") {
						return this.filterMethod(this.query, item);
					} else {
						const label = item[this.labelProp] || item[this.keyProp].toString();
						return label.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
					}
				});
			},

			checkableData() {
				return this.filteredData.filter(item => !item[this.disabledProp]);
			},

			checkedSummary() {
				const checkedLength = this.checked.length;
				const dataLength = this.data.length;
				const { noChecked, hasChecked } = this.format;
				if (noChecked && hasChecked) {
					return checkedLength > 0
						? hasChecked.replace(/\${checked}/g, checkedLength).replace(/\${total}/g, dataLength)
						: noChecked.replace(/\${total}/g, dataLength);
				} else {
					return `${checkedLength}/${dataLength}`;
				}
			},

			isIndeterminate() {
				const checkedLength = this.checked.length;
				return checkedLength > 0 && checkedLength < this.checkableData.length;
			},

			hasNoMatch() {
				return this.query.length > 0 && this.filteredData.length === 0;
			},

			labelProp() {
				return this.props.label || "label";
			},

			keyProp() {
				return this.props.key || "key";
			},

			disabledProp() {
				return this.props.disabled || "disabled";
			},

			hasFooter() {
				return !!this.$slots.default;
			},
		},

		watch: {
			checked(val, oldVal) {
				this.updateAllChecked();
				if (this.checkChangeByUser) {
					const movedKeys = val
						.concat(oldVal)
						.filter(v => val.indexOf(v) === -1 || oldVal.indexOf(v) === -1);
					this.$emit("checked-change", val, movedKeys);
				} else {
					this.$emit("checked-change", val);
					this.checkChangeByUser = true;
				}
			},

			data() {
				const checked = [];
				const filteredDataKeys = this.filteredData.map(item => item[this.keyProp]);
				this.checked.forEach(item => {
					if (filteredDataKeys.indexOf(item) > -1) {
						checked.push(item);
					}
				});
				this.checkChangeByUser = false;
				this.checked = checked;
			},

			checkableData() {
				this.updateAllChecked();
			},

			defaultChecked: {
				immediate: true,
				handler(val, oldVal) {
					if (
						oldVal &&
						val.length === oldVal.length &&
						val.every(item => oldVal.indexOf(item) > -1)
					)
						return;
					const checked = [];
					const checkableDataKeys = this.checkableData.map(item => item[this.keyProp]);
					val.forEach(item => {
						if (checkableDataKeys.indexOf(item) > -1) {
							checked.push(item);
						}
					});
					this.checkChangeByUser = false;
					this.checked = checked;
				},
			},
		},

		methods: {
			updateAllChecked() {
				const checkableDataKeys = this.checkableData.map(item => item[this.keyProp]);
				this.allChecked =
					checkableDataKeys.length > 0 &&
					checkableDataKeys.every(item => this.checked.indexOf(item) > -1);
			},

			handleAllCheckedChange(value) {
				this.checked = value ? this.checkableData.map(item => item[this.keyProp]) : [];
			},
		},
	};
</script>
