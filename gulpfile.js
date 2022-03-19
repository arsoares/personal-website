var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

 // Simple Print
 // * Working well!
 gulp.task('hello', async function() {
   console.log('All set');
 });

 // Watch for Changes
 // * Working well!
 gulp.task('watch', function(){
   gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
     // Other watchers
 })

 // Compile SASS
 // * Working well!
 gulp.task('sass', function(){    
    return gulp.src('./src/scss/app.scss')       
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css/')); 
});

 // Live Browser Reload
// TODO: Add this in

 // Run everything at once
 // * Working well!
 gulp.task('default', gulp.parallel('watch', 'sass'));