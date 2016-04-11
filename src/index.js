import './styles/main.scss'

// Vendor
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import material from 'angular-material';
import ngSanitize from 'angular-sanitize';

// Non-vendor
import main from './main';
import videos from './content/view/videos.html';

// data
import videosData from './data/videos.json';

function appConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('filmy', {
      url: '/filmy/:movie',
      templateUrl: videos,
      controller: 'ContentController',
      resolve: {
        movie: function($stateParams) {
          return $stateParams.movie;
        }
      }
    });

  $urlRouterProvider
    .otherwise('filmy/');
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
        uiRouter,
        ngSanitize,
        main
      ])
      .config(['$stateProvider', '$urlRouterProvider', appConfig])
      .constant('VIDEOS', videosData);

    angular.bootstrap(body, [app.name], {strictDi: false});
  });

