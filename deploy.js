var ghpages = require('gh-pages')
ghpages.publish('dist/Angular-day5', {
  branch: 'master',
  repo: 'https://github.com/at-lieuphan/ng-buid-pro-cinderella.git'
}, function (e) {
  console.log('Deployed');
  console.log(e);
});
