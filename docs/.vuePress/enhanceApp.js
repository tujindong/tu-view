/************************* 部署用start ***********************/
//线上部署打开以下内容
// import "tu-view/lib/tuview.css";
//开发环境使用
import "../../lib/tuview.css"
import TuView from "../../lib/tuview.js"
/************************* 部署用end ***********************/
import '../guide-style/index.scss';
import icon from "./icon.json"

export default ({
    Vue,
    options,
    router,
    siteData,
    isServer
}) => {
    /************************* 部署用start ***********************/
    //线上部署时打开
    // Vue.mixin({
    //     mounted() {
    //         import('tu-view').then(function (m) {
    //             Vue.use(m.default)
    //         })
    //     },
    // })
    //开发环境使用
    Vue.use(TuView)
    /************************* 部署用end ***********************/
    Vue.prototype.$icon = icon; // Icon 列表页用
}