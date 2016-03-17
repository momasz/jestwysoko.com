import ContentController from './ContentController';
import ContentService from './ContentService';

let moduleName = angular
  .module("content", [])
  .service("ContentService", ContentService)
  .controller("ContentController", ContentController)
  .name;

export default moduleName;



