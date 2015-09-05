Package.describe({
  name: 'halunka:useraccounts-ui',
  version: '0.0.1',
  summary: 'Lighweight, reactive, isomorphic, extendable useraccounts package for meteor using MongoDB'
  repository: 'https://github.com/halunka/meteor-useraccounts-ui',
  docs: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.1.0.3')
  api.use(['accounts-base', 'templating', 'accounts-password', 'underscore', 'reactive-var'])
  api.addFiles([
    'lib/utilities.js',
    'templates/useraccountsLogin.html',
    'templates/useraccountsLogout.html',
    'helpers/login.js',
    'helpers/logout.js',
    'helpers/global.js'
  ], 'client')
})

