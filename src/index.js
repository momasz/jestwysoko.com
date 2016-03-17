import 'angular-material/angular-material.scss'
import './styles/main.scss'

// Vendor
import angular from 'angular';
import ngRoute from 'angular-route';
import material from 'angular-material';

// Non-vendor
import main from './main';

import contentTemplateUrl from './content/view/content.html';

function appConfig($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: contentTemplateUrl,
      controller: 'ContentController',
      controllerAs: 'content'
    });

  $locationProvider.html5Mode(true);
}

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( () => {
    let appName = 'starter-app';
    let body = document.getElementsByTagName("body")[0];
    let app  = angular
      .module(appName, [
        material,
        ngRoute,
        main
      ])
      .config(['$routeProvider', '$locationProvider', appConfig]);

    angular.bootstrap(body, [app.name], { strictDi: false });
  });

