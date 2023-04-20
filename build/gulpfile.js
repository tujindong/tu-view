const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");

function compile() {
	return gulp
		.src("../packages/style/index.scss")
		.pipe(sass())
		.pipe(
			autoprefixer({
				browsers: ["last 2 versions", "ie > 8"],
			})
		)
		.pipe(cleanCSS())
		.pipe(rename("tuview.css"))
		.pipe(gulp.dest("../lib/styles"));
}

// 拷贝字体文件
function copyfont() {
	return gulp.src("../packages/style/fonts/**").pipe(gulp.dest("../lib/styles/fonts"));
}

gulp.task("default", gulp.series(compile, copyfont));
