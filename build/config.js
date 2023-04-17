const path = require("path");
const fs = require("fs");
const nodeExternals = require("webpack-node-externals");

const utilsList = fs.readdirSync(path.resolve(__dirname, "../packages/src/utils"));
const mixinsList = fs.readdirSync(path.resolve(__dirname, "../packages/src/mixins"));
const transitionList = fs.readdirSync(path.resolve(__dirname, "../packages/src/transitions"));
let externals = {};

externals["tu-view/packages/src/locale"] = "tu-view/lib/locale";

utilsList.forEach(function (file) {
	file = path.basename(file, ".js");
	externals[`tu-view/packages/src/utils/${file}`] = `tu-view/lib/utils/${file}`;
});
mixinsList.forEach(function (file) {
	file = path.basename(file, ".js");
	externals[`tu-view/packages/src/mixins/${file}`] = `tu-view/lib/mixins/${file}`;
});
transitionList.forEach(function (file) {
	file = path.basename(file, ".js");
	externals[`tu-view/packages/src/transitions/${file}`] = `tu-view/lib/transitions/${file}`;
});

externals = [
	Object.assign(
		{
			vue: "vue",
		},
		externals
	),
	nodeExternals(),
];

exports.externals = externals;
