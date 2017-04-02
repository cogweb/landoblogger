/*!
 * gulpjs file
 *
 * // First make sure you have gulp installed globally on your machine
 * $ npm install gulp -g
 *
 * // The to use gulp on this project, run the following command (without the $)
 * $ npm install gulp gulp-ruby-sass gulp-autoprefixer gulp-notify gulp-livereload --save-dev
 *
 * // You can then run the the following two commands to either compile or watch for changes
 * $ gulp
 * $ gulp watch
 *
 * Feel free to add whatever gulp plugins you want
 * Gulp watch with Livereload is really something!
 */

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload');


// Styles
gulp.task('styles', function() {
    return sass('_assets/styles/style.scss', { style: 'compressed' })
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(''))
        .pipe(notify({ message: 'Styles task complete' }));
});


// Default Task
gulp.task('default', function() {
    gulp.start('styles');
});


// Watch
gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('_assets/styles/*.scss', ['styles']);

    // Create LiveReload server
    livereload.listen(35733);

    // Watch any files in _assets/ folder, reload on change
    gulp.watch(['_assets/**']).on('change', livereload.changed);
});
