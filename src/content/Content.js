import ContentController from './ContentController';
import CustomImage from './components/image.directive';
import CustomVideo from './components/video.directive';

let moduleName = angular
  .module("content", [])
  .directive("customImage", CustomImage)
  .directive("customVideo", CustomVideo)
  .controller("ContentController", ContentController)
  .filter("idMaker", () => (value) => parseInt(value.replace('/videos/', '')))
  .name;

export default moduleName;



