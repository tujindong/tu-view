<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
/* 重置样式 */
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td,
iframe {
	margin: 0;
	padding: 0;
}
body {
	font-family: "Helvetica Neue", "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased; /*去除锯齿*/
	-moz-osx-font-smoothing: grayscale;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0); /*移动端手指触摸是反馈的背景颜色，此处设置无*/
	font-size: 16px;
}
img {
	border: 0;
}
ul {
	list-style-type: none;
}
a {
	text-decoration: none;
	color: inherit;
	&:hover {
		text-decoration: none;
	}
}
input {
	border: 0;
	outline: 0;
	-webkit-appearance: none;
}
address,
caption,
cite,
dfn,
em,
th,
var,
i,
em {
	font-style: normal;
	font-weight: normal;
}
.clear-float::after {
	display: block;
	content: "";
	clear: both;
}
.left-float {
	float: left;
}
.right-float {
	float: right;
}
.clear-flow::before {
	display: table;
	content: "";
}
</style>
