import Form from "./src/form";
// import './src/form.scss';

Form.install = function (Vue) {
	Vue.component(Form.name, Form);
};

export default Form;
