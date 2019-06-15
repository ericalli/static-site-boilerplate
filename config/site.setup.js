/* eslint-disable */
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const { prompt } = require('enquirer');

const skip_setup = process.env.SKIP_SETUP || false;

let ROOT = process.env.PWD;

if (!ROOT) {
  ROOT = process.cwd();
}

async function runSetup() {
  clear();
  console.log(
    chalk.red(
      figlet.textSync('Static Site Boilerplate', { horizontalLayout: 'fitted' })
    )
  );

  const questions = await prompt([
    {
      type: 'input',
      name: 'site_name',
      message: 'What is the name of your website?',
      initial: 'Static Site Boilerplate'
    },
    {
      type: 'input',
      name: 'site_description',
      message: 'What is a description of your website?',
      initial: 'A modern boilerplate for static website development'
    },
    {
      type: 'input',
      name: 'site_url',
      message: 'What is the live URL for your website?',
      hint: 'http://yourwebsite.com'
    },
    {
      type: 'input',
      name: 'google_analytics',
      message: 'What is your Google Analytics Tracking ID?',
      hint: 'UA-XXXXX-Y'
    },
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

  // Update site configuration
  fs.readFile('./config/site.config.js', 'utf8', (err, data) => {
    if (typeof questions.site_name !== 'undefined') {
      data = data.replace(/site_name: '.*?'/g, `site_name: '${questions.site_name}'`);
    }
    if (typeof questions.site_description !== 'undefined') {
      data = data.replace(/site_description: '.*?'/g, `site_description: '${questions.site_description}'`);
    }
    if (typeof questions.site_url !== 'undefined') {
      data = data.replace(/site_url: '.*?'/g, `site_url: '${questions.site_url}'`);
    }
    if (typeof questions.google_analytics !== 'undefined') {
      data = data.replace(/googleAnalyticsUA: '.*?'/g, `googleAnalyticsUA: '${questions.google_analytics}'`);
    }

    fs.writeFile(path.join(ROOT, '/config/site.config.js'), data, 'utf8', (err) => { });
  });

  // Add CSS reset to stylesheet
  if (questions.cssreset !== 'None') {
    const cssContent =
      '// Load CSS Reset from NPM\n'
      + '@import "~' + questions.cssreset + '"\n';

    fs.writeFile(path.join(ROOT, '/src/stylesheets/styles.scss'), cssContent, (err) => {});
  }

  // Add jQuery to scripts
  if (questions.jquery == 'Yes') {
    const jsContent =
      '// Load jQuery from NPM\n'
      + 'import $ from \'jquery\';\n\n'
      + 'window.jQuery = $;\n'
      + 'window.$ = $;\n';

    fs.writeFile(path.join(ROOT, '/src/javascripts/scripts.js'), jsContent, (err) => {});
  }
};

if (!skip_setup) {
  runSetup();
}
