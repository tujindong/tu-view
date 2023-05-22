import Upload from "./src";
// import "./src/upload.scss";

Upload.install = function (Vue) {
	Vue.component(Upload.name, Upload);
};

export default Upload;
