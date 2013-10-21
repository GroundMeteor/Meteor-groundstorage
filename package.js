Package.describe({
  summary: "Adds ground store for Meteor"
});

Package.on_use(function (api) {
  "use strict";
  api.export && api.export('GroundStore');
  api.export && api.export('_groundstore', ['client', 'server'], {testOnly: true});
  api.use(['meteor', 'underscore', 'random', 'minimongo', 'ejson', 'ejson-minimax'],
          ['client', 'server']);

  api.use('standard-app-packages', ['client', 'server']);

  api.use(['deps'], 'client');
  //api.use([], 'server');
  //api.use(['localstorage', 'ejson'], 'client');
  api.add_files('groundStorage.client.js', 'client');
  api.add_files('groundStorage.server.js', 'server');
});

Package.on_test(function (api) {
  api.use('groundmethods', ['client']);
  api.use('test-helpers', 'client');
  api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
           'random', 'deps']);

  api.add_files('groundStorage.client.tests.js', 'client');
  api.add_files('groundStorage.server.tests.js', 'server');
});
