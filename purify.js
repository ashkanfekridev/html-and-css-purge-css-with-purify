const purify = require("purify-css")

const htmlFiles = ['*.html'];

const cssFiles = ['css/*.css'];

const opts = {

    output: 'dist/purified.css'

};

purify(htmlFiles, cssFiles, opts, function (res) {

    log(res);

});