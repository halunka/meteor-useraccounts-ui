Package.describe({
  name: 'halunka:useraccouts-ui',
  version: '0.0.0',
  repository: 'https://github.com/halunka/meteor-useraccounts-ui',
  docs: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.1.0.3')
  api.use(['accounts-base', 'templating', 'accounts-password', 'underscore', 'reactive-var'])
  api.addFiles([
    'lib/utilities.js',
    'templates/login.html',
    'helpers/login.js',
    'helpers/global.js'
  ], 'client')
})