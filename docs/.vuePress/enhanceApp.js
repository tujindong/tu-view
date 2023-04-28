import "./styles/index.scss";
import "../guide/guide-style/index.scss";
import icon from "./icon.json";

import Tuview from "../../lib/tuview.js";

export default async ({ Vue, options, router, siteData, isServer }) => {
	// if (!isServer) {
	// 	await import("tu-view").then(function (m) {
	// 		Vue.use(m.default);
	// 	});
	// }

	Vue.use(Tuview);
	Vue.prototype.$icon = icon;
};
