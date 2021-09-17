const path = require('path');
const ghpages = require('gh-pages');

const options = {
  branch: 'gh-pages',
  repo: 'https://github.com/WilliamTsou818/simple-twitter-frontend.git' // project github repo
};

const callback = err => {

  if (err) console.error(err);
  else console.log('publish success');
};

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
ghpages.publish(path.resolve(__dirname, '../dist'), options, callback);