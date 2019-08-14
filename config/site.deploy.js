const path = require('path');
const config = require('./site.config');
const FtpDeploy = require('ftp-deploy');

const ftpDeploy = new FtpDeploy();

ftpDeploy.deploy({
  // FTP username
  user: 'username',

  // FTP Password
  password: 'password',

  // FTP Host
  host: 'ftp.yourwebsite.com',

  // FTP Port
  port: 21,

  // Local folder to upload
  localRoot: path.join(config.root, config.paths.dist),

  // Remote FTP folder to upload to
  remoteRoot: '/public_html/',

  // Define what files to include in the upload (by default, upload everything in dist/ folder)
  include: ['**/*'],

  // Remove files in FTP folder before uploading
  deleteRemote: true,

  // FTP Mode
  forcePasv: true,
});
