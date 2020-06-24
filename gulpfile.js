const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

const sass = require('gulp-sass');

const uglify = require('gulp-uglify');
const rollup = require('gulp-better-rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const cleanCSS = require('gulp-clean-css');

const browserSync = require('browser-sync').create();
require('dotenv').config()

const THEME_FOLDER = '.';

const BROWSERSYNC_URL = process.env.BROWSERSYNC_URL;

const CONFIG = {
  SRC: {
    JS: [
      `${THEME_FOLDER}/src/js/app.js`
    ],
    SCSS: [
      `${THEME_FOLDER}/src/scss/main.scss`
      ],
    CSS: [
      // './src/css/**/*.css'
    ],
    THEME: `${THEME_FOLDER}/**/*`
  },
  DIST: {
    FILENAME_STYLES: `styles.min.css`,
    FILENAME_SCRIPTS: `scripts.min.js`,
    FOLDER_STYLES: `${THEME_FOLDER}/assets/css`,
    FOLDER_SCRIPTS: `${THEME_FOLDER}/assets/js`,
  },
  WATCHERS: {
    SCSS: [
      `${THEME_FOLDER}/src/scss/**/*.scss`
    ],
    JS: [
      `${THEME_FOLDER}/src/js/**/*.js`
    ]
  }
};

const StylesTaskDev = done => {
  gulp.src([...CONFIG.SRC.CSS, ...CONFIG.SRC.SCSS])
  .pipe(sourcemaps.init())
  .pipe(sass({
    includePaths: ['node_modules'] // include directly in .scss
  }))
  .on('error', swallowError)
  .pipe(concat(CONFIG.DIST.FILENAME_STYLES))
  .pipe(cleanCSS())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(CONFIG.DIST.FOLDER_STYLES));
  done();
}

const JsTask = done => {
  gulp.src([...CONFIG.SRC.JS])
  .pipe(sourcemaps.init())
  .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
  .pipe(rename(CONFIG.DIST.FILENAME_SCRIPTS))
  .on('error', swallowError)
  .pipe(gulp.dest(CONFIG.DIST.FOLDER_SCRIPTS));
  done();
}

const watchers = () => {
  gulp.watch(CONFIG.WATCHERS.SCSS, StylesTaskDev);
  gulp.watch(CONFIG.WATCHERS.JS, JsTask);
}

const liveReload = done => {
  browserSync.init({
    proxy: BROWSERSYNC_URL
  });
  done();
}

function swallowError (error) {
  // If you want details of the error in the console
  console.log(error.toString());
  this.emit('end')
}

exports.default = gulp.parallel(
  StylesTaskDev,
  JsTask,
  watchers,
  liveReload
);
