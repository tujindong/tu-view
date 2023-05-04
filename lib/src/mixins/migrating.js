import { kebabCase } from "../utils/util";
/**
 * Show migrating guide in browser console.
 */
export default {
	mounted() {
		if (process.env.NODE_ENV === "production") return;
		if (!this.$vnode) return;
		const { props = {}, events = {} } = this.getMigratingConfig();
		const { data, componentOptions } = this.$vnode;
		const definedProps = data.attrs || {};
		const definedEvents = componentOptions.listeners || {};

		for (let propName in definedProps) {
			propName = kebabCase(propName); // compatible with camel case
			if (props[propName]) {
				console.warn(`[TuView Migrating][${this.$options.name}][Attribute]: ${props[propName]}`);
			}
		}

		for (let eventName in definedEvents) {
			eventName = kebabCase(eventName); // compatible with camel case
			if (events[eventName]) {
				console.warn(`[TuView Migrating][${this.$options.name}][Event]: ${events[eventName]}`);
			}
		}
	},
	methods: {
		getMigratingConfig() {
			return {
				props: {},
				events: {}
			};
		}
	}
};