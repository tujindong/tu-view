const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");

// 编译less
gulp.task("css", function () {
	gulp
		.src("../packages/style/index.scss")
		.pipe(sass())
		.pipe(
			autoprefixer({
				browsers: ["last 2 versions", "ie > 8"],
			})
		)
		.pipe(cleanCSS())
		.pipe(rename("iview.css"))
		.pipe(gulp.dest("../lib/styles"));
});

// 拷贝字体文件
// gulp.task("fonts", function () {
// 	gulp.src("../packages/style/fonts/*.*").pipe(gulp.dest("../lib/styles/fonts"));
// });

gulp.task("default", gulp.series("css"));
