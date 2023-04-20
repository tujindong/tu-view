import Notification from "./src/notification";

Notification.install = function (Vue) {
	Vue.component(Notification.name, Notification);
};

export default Notification;
