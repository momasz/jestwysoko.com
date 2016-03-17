import content from './content/Content';

console.log( "Configuring 'main' module" );

export default angular.module('main', [
  content
]).name;
