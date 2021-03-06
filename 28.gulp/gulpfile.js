var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('imagemin',function(){
    return gulp.src('app/imgs/**/*.{jpg,png}')//指定要压缩的图片
        .pipe(imagemin()) //进行图片压缩
        .pipe(gulp.dest('dist'));//输出目的地
});

gulp.task('default',['imagemin']);