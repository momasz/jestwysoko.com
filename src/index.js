import './styles/main.scss'

// Vendor
import angular from 'angular';
import ngRoute from 'angular-route';
import uiRouter from 'angular-ui-router';
import material from 'angular-material';
import googleMap from 'ngmap';
import timer from 'angular-timer';

// Non-vendor
import main from './main';
import content from './content/view/content.html';
import info from './content/view/info.html';
import my from './content/view/my.html';
import mapa from './content/view/mapa.html';
import kontakt from './content/view/kontakt.html';

function appConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: content
    })
    .state('info', {
      url: '/info',
      templateUrl: info
    })
    .state('my', {
      url: '/my',
      templateUrl: my
    })
    .state('mapa', {
      url: '/mapa',
      templateUrl: mapa
    })
    .state('kontakt', {
      url: '/kontakt',
      templateUrl: kontakt
    });

  $urlRouterProvider
    .otherwise('/');
}

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element(document)
  .ready(() => {
    let appName = 'starter-app';
    let body = document.getElementsByTagName("body")[0];
    let app = angular
      .module(appName, [
        material,
        ngRoute,
        uiRouter,
        main,
        'ngMap',
        'timer'
      ])
      .config(['$stateProvider', '$urlRouterProvider', appConfig]);

    angular.bootstrap(body, [app.name], {strictDi: false});
  });

