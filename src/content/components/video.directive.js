'use strict';

function customVideo () {
  return {
    restrict: 'EA',
    template: '<iframe ng-src="{{source}}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    scope: {
      source: '='
    },
    link: ($scope, $el) => {
      var body = $('body').removeClass('loaded');
      $el.children('iframe').load(function () {
        body.addClass('loaded');
      });
    }
  };
}

export default [customVideo];
