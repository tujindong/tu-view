// import TuView from "tu-view";
import "tu-view/lib/tuview.css";
import '../guide-style/index.scss';

export default ({
    Vue,
    options,
    router,
    siteData,
    isServer
}) => {
    // Vue.use(TuView);
    Vue.mixin({
        mounted() {
            import('tu-view').then(function (m) {
                Vue.use(m.default)
            })
        },
    })
}