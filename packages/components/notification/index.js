import Notification from "./src/notification";
// import "./src/notification.scss";

Notification.install = function (Vue) {
	Vue.component(Notification.name, Notification);
};

export default Notification;
