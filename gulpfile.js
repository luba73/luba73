const { src, dest, series, watch } = require('gulp')
const concat = require('gulp-concat')
const htmlMinify = require('gulp-htmlmin')
const browserSync = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const imageMin = require('gulp-imagemin')
const svgSprite = require('gulp-svg-sprite')
const uglify = require('gulp-uglify-es').default
const babel = require('gulp-babel')
const notify = require('gulp-notify')
const sourcemap = require('gulp-sourcemaps')
const del = require('del')


const Clean = () => {
    return del('dist')
}

const styles = () => {
    return src('src/style/style.css')
    .pipe(sourcemap.init())
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(sourcemap.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const htmlMin = () => {
    return src('src/*.html')
    .pipe(htmlMinify({
       collapseWhitespace: true
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const images = () => {
    return src([
        './src/images/**/*.jpg',
        './src/images/**/*.jpeg',
        './src/images/**/*.png',
        './src/images/*.svg',
    ])
    .pipe(imageMin())
    .pipe(dest('dist/images'))
}

const svgSprites = () => {
    return src('src/images/svg/**/*.svg')
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: '../sprite.svg'
            }
        }
    }))
    .pipe(dest('dist/images'))
}


const script = () => {
    return src([
        'src/js/component/**/*.js',
        'src/js/*.js'
    ])
    .pipe(sourcemap.init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify({
        toplevel: true
    }).on('error', notify.onError))
    .pipe(sourcemap.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const resource = () => {
    return src('src/resources/**')
    .pipe(dest('dist/resources'))
}


const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

watch('src/*.html', htmlMin)
watch('src/style/**/*.css', styles)
watch('src/images/svg/**/*.svg', svgSprites)
watch([
    './src/images/**/*.jpg',
    './src/images/**/*.jpeg',
    './src/images/**/*.png',
    './src/images/*.svg',
], images)
watch('src/js/**/*.js', script)
watch('src/resources/**', resource) 

exports.Clean = Clean
exports.styles = styles
exports.htmlMin = htmlMin
exports.default = series(
    Clean,
    resource,
    htmlMin,
    styles,
    script,
    images,
    watchFiles)