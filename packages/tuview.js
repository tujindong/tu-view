import Button from "./components/button";
import ButtonGroup from "./components/button-group";
import Icon from "./components/icon";
import Radio from "./components/radio";
import RadioGroup from "./components/radio-group";
import Checkbox from "./components/checkbox";
import CheckboxGroup from "./components/checkbox-group";
import Input from "./components/input";
import Textarea from "./components/textarea";
import Switch from "./components/switch";
import InputNumber from "./components/input-number";
import Tabs from "./components/tabs";
import TabPane from "./components/tab-pane";
import Select from "./components/select";
import Option from "./components/option";
import OptionGroup from "./components/option-group";
import Card from "./components/card";
import Row from "./components/row";
import Col from "./components/col";
import Tag from "./components/tag";
import Table from "./components/table";
import TableColumn from "./components/table-column";
import Progress from "./components/progress";
import Pagination from "./components/pagination";
import Tooltip from "./components/tooltip";
import Scrollbar from "./components/scrollbar";
import Rate from "./components/rate";
import Slider from "./components/slider";
import Form from "./components/form";
import FormItem from "./components/form-item";
import DatePicker from "./components/date-picker";
import TimeSelect from "./components/time-select";
import TimePicker from "./components/time-picker";
import Dropdown from "./components/dropdown";
import DropdownItem from "./components/dropdown-item";
import DropdownMenu from "./components/dropdown-menu";
import Message from "./components/message";
import Cascader from "./components/cascader";
import CascaderPanel from "./components/cascader-panel";
import Transfer from "./components/transfer";
import ColorPicker from "./components/color-picker";
import Backtop from "./components/backtop";
import Upload from "./components/upload";
import Tree from "./components/tree";
import TreeSelect from "./components/tree-select";
import Badge from "./components/badge";
import Modal from "./components/modal";
import Popover from "./components/popover";
import Popconfirm from "./components/popconfirm";
import Carousel from "./components/carousel";
import Drawer from "./components/drawer";
import Image from "./components/image";
import Calendar from "./components/calendar";
import Timeline from "./components/timeline";
import TimelineItem from "./components/timeline-item";
import Divider from "./components/divider";
import Collapse from "./components/collapse";
import Step from "./components/step";
import Steps from "./components/steps";
import Breadcrumb from "./components/breadcrumb";
import MessageBox from "./components/message-box";
import Avatar from "./components/avatar";
import Notification from "./components/notification";
import Alert from "./components/alert";
import Loading from "./components/loading";
import Descriptions from "./components/descriptions";
import DescriptionsItem from "./components/descriptions-item";
import Skeleton from "./components/skeleton";
import SkeletonItem from "./components/skeleton-item";

const componentsList = [
	Button,
	ButtonGroup,
	Icon,
	Radio,
	RadioGroup,
	Checkbox,
	CheckboxGroup,
	Input,
	Textarea,
	Switch,
	InputNumber,
	Tabs,
	TabPane,
	Select,
	Option,
	OptionGroup,
	Card,
	Row,
	Col,
	Tag,
	Table,
	TableColumn,
	Progress,
	Pagination,
	Tooltip,
	Scrollbar,
	Rate,
	Slider,
	Form,
	FormItem,
	DatePicker,
	TimeSelect,
	TimePicker,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	Message,
	Cascader,
	CascaderPanel,
	Transfer,
	ColorPicker,
	Backtop,
	Upload,
	Tree,
	TreeSelect,
	Badge,
	Modal,
	Popover,
	Popconfirm,
	Carousel,
	Drawer,
	Image,
	Calendar,
	Timeline,
	TimelineItem,
	Divider,
	Collapse,
	Step,
	Steps,
	Breadcrumb,
	MessageBox,
	Avatar,
	Notification,
	Alert,
	Loading,
	Descriptions,
	DescriptionsItem,
	Skeleton,
	SkeletonItem,
];

const install = function (Vue, opts = {}) {
	if (install.installed) return;

	componentsList.map(component => {
		Vue.component(component.name, component);
	});

	Vue.prototype.$TUVIEW = {
		size: opts.size || "",
		zIndex: opts.zIndex || 2000,
	};

	Vue.prototype.$message = Message;

	// Vue.prototype.$loading = Loading.service;
	Vue.prototype.$msgbox = MessageBox;
	Vue.prototype.$alert = MessageBox.alert;
	Vue.prototype.$confirm = MessageBox.confirm;
	Vue.prototype.$prompt = MessageBox.prompt;
	Vue.prototype.$notify = Notification;
	Vue.prototype.$message = Message;
};

if (typeof window !== "undefined" && window.Vue) {
	install(window.Vue);
}

export default {
	install,
	...componentsList,
};
