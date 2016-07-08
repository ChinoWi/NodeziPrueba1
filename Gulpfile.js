var gulp =  require('gulp');
var stylus = require('gulp-stylus');
var connect = require('gulp-connect');
var historyApiFallback = require('connect-history-api-fallback');




gulp.task('css', function(){
gulp.src('src/ComponentsCss/styles.styl')
 .pipe(stylus({compress:true}))
 .pipe(gulp.dest('asset/css'))
 .pipe(connect.reload());
});

gulp.task('watch',function(){
	gulp.watch('src/ComponentsCss/**/*.styl',['css']);
	// gulp.watch('src/images/*.*',['images'])
});


gulp.task('default',['watch']);



