/************************* 部署用start ***********************/
//线上部署打开以下内容
// import "tu-view/lib/tuview.css";
// import TuView from "tu-view";
//开发环境使用
import TuView from "../../lib/tuview.js";
import "../../lib/styles/tuview.css";
/************************* 部署用end ***********************/
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
