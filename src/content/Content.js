import ContentController from './ContentController';
import ContentService from './ContentService';

let moduleName = angular
  .module("content", [])
  .service("ContentService", ContentService)
  .controller("ContentController", ContentController)
  .directive("owlCarousel", function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        $(element).owlCarousel({
          items: 1,
          loop: true,
          nav: false,
          dots: false
        });
      }
    };
  })
  .name;

export default moduleName;



