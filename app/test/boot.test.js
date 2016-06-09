require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/css/bootstrap-theme.css');
require('jquery/dist/jquery.js');
require('bootstrap/dist/js/bootstrap.js');
require('angular');
require('angular-mocks');
require('angular-ui-bootstrap');
require('angular-ui-router');
require('./routerHelperProvider.test');
require('../home/home.router');
require('../home/home.ctrl');
require('../home/home.test');
require('./config.srv');
require('../common/errorManger.srv');
require('../common/errorManager.test');
require('../login/login.router');
require('../login/login.ctrl');
require('../login/login.fltr');
require('../login/pass.fltr');
require('../login/login.srv');
require('../login/login.test');
require('../login/password.fltr');
require('../alta/login.router');
require('../alta/login.ctrl');
require('../alta/login.fltr');
require('../alta/pass.fltr');
require('../alta/login.srv');
require('../alta/login.test');
require('../alta/password.fltr');

var app = require('../app');

angular.element(document).ready(function () {
    angular.bootstrap(document,[app.name])
});