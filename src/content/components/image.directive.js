'use strict';

const customImage = () => {
  return {
    restrict: 'EA',
    template: '<img ng-src="{{source}}" alt="{{title}}" />',
    scope: {
      source: '=',
      title: '='
    },
    link: function ($scope, $el) {
      $el.children('img').load(function () {
        $el.parent().addClass('loaded');
        $el.addClass('loaded');
      });
    }
  };
};

export default [customImage];
