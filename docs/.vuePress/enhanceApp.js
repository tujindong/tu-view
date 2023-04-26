//prod
import TuView from "tu-view";
//dev
// import TuView from "../../lib/tuview.js";

// import "tu-view/lib/styles/tuview.css";
import "../components/theme/styles/index.scss";
import "../guide-style/index.scss";
import icon from "./icon.json";

export default ({ Vue, options, router, siteData, isServer }) => {
	Vue.use(TuView);
	Vue.mixin({
		mounted() {
			import("tu-view").then(function (m) {
				Vue.use(m.default);
			});
		},
	});
	Vue.prototype.$icon = icon;
};
