var gulp = require("gulp");
var coffee = require("gulp-coffee");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("coffee", function() {
  gulp.src("./src/*.coffee")
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist"));
});

gulp.task("default", ["coffee"]);
