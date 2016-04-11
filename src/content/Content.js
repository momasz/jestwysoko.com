import ContentController from './ContentController';
import idMaker from './filters/idMaker.filter'
import CustomImage from './components/image.directive';
import CustomVideo from './components/video.directive';

let moduleName = angular
  .module("content", [])
  .directive("customImage", CustomImage)
  .directive("customVideo", CustomVideo)
  .filter("idMaker", idMaker)
  .controller("ContentController", ContentController)
  .name;

export default moduleName;



