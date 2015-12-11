var gulp = require('gulp-param')(require('gulp'), process.argv);//https://www.npmjs.com/package/gulp-param
var preprocess = require('gulp-preprocess');//https://www.npmjs.com/package/gulp-preprocess

//complete docs https://github.com/jsoverson/preprocess#directive-syntax

var configFileName = "appConfig.json";//default name


gulp.task('gen', function(config) {
  configFileName = config || configFileName;
  var config = require('./' + configFileName);
  gulp.src(['./src/**/*.*', '!./src/node_modules/**/*.*', '!./src/public/libs/**/*.*'], {dot: true})
    .pipe(preprocess({context: config})) //To set environment variables in-line 
    .pipe(gulp.dest('./' + config.dirName));
    
    console.log("Generated app in this dir: " + config.dirName);
});