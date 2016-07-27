var gulp =  require('gulp');
var stylus = require('gulp-stylus');
var postcss=require('gulp-postcss')
var autoprefixer=require('autoprefixer')
var browserSync=require('browser-sync').create()
var connect = require('gulp-connect');
var historyApiFallback=require('connect-history-api-fallback')

var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');

//Servidor de Desarrollo
gulp.task('serve',function () {
	browserSync.init({
		server:{
			baseDir:'./dist'
		}
	})
});

//Tarea para Procesar el Css
gulp.task('css', function(){
	var processors=[
		autoprefixer({browser:['>5%','ie 8']})
	]

	return gulp.src('./src/ComponentsCss/styles.styl')
	    .pipe(stylus({compress:true}))
	    .pipe(postcss(processors))
	    .pipe(gulp.dest('./dist/asset/css/app'))
        .pipe(browserSync.stream())
});

gulp.task('js',function () {
    return gulp.src('./src/Reactjs/**/*.js')
        .pipe(gulpWebpack({
            entry:['./src/Reactjs/App.js'],
            output:{
                path: __dirname,
                filename:'./dist/asset/js/app/app.js'
            },
            resolver:{
                extensions:['','.js','.jsx','.json','es6'],
                modulesDirectories:['node_modules']
            },
            module:{
                loaders:[{
                    test:/\.jsx$|\.es6$|\.js$/,
                    exclude:/node_modules/,
                    loader:'babel',
                    query:{
                        presets:['es2015','react']
                    }
                }]
            }
        }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream())
})

//Tarea para vigilar los cambios
gulp.task('watch',function(){
	gulp.watch('./src/ComponentsCss/**/*.styl',['css']);
    gulp.watch('./src/Reactjs/**/*.js',['js']);
	gulp.watch('./dist/*.html').on('change',browserSync.reload)
	// gulp.watch('src/images/*.*',['images'])

});


gulp.task('default',['watch','serve']);



