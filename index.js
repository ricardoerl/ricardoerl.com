var uncss = require('uncss');
var glob = require('glob');
var fs = require('fs');

var stylesheetLocation = '_site/assets/css/';
var stylesheetSourceLocation = '_includes/';
var stylesheetName = 'style.css';

var jekyllUncss = function() {
  var css = fs.readFileSync(stylesheetLocation + stylesheetName, 'utf8');

  glob('_site/**/*.html', function(err, files) {
    if (err) {
      console.log(err);
    }

    uncss(files, {
      raw: css,
      ignoreSheets:[/\/css\//]
    }, function(err, output) {
      if (err) {
        console.log(err);
      }

      fs.writeFileSync(stylesheetSourceLocation + 'un.' + stylesheetName, output);
    })
  });
}

jekyllUncss();