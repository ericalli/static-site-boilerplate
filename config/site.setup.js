/* eslint-disable */
const fs = require('fs');

const { prompt } = require('enquirer');

async function runSetup() {
  const questions = await prompt([
    {
      type: 'select',
      name: 'cssreset',
      message: 'Which CSS reset library would you like installed?',
      choices: ['normalize.css', 'reset.css', 'sanitize.css', 'None'],
    },
    {
      type: 'select',
      name: 'jquery',
      message: 'Would you like jQuery installed?',
      choices: ['Yes', 'No'],
    }
  ]);

  // Add CSS reset to stylesheet
  if (questions.cssreset !== 'None') {
    const cssContent =
      '// Load CSS Reset from NPM\n'
      + '@import "~' + questions.cssreset + '"\n';

    fs.writeFile('./../src/stylesheets/styles.scss', cssContent, (err) => {});
  }

  // Add jQuery to scripts
  if (questions.jquery == 'Yes') {
    const jsContent =
      '// Load jQuery from NPM\n'
      + 'import $ from \'jquery\';\n\n'
      + 'window.jQuery = $;\n'
      + 'window.$ = $;\n';

    fs.writeFile('./../src/javascripts/scripts.js', jsContent, (err) => {});
  }
};

runSetup();
