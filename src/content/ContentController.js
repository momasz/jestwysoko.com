function ContentController($log, ContentService) {
  $log.debug('Content Controller loaded');
  this.someData = "Before service return data";
  ContentService.getData()
    .then(data => this.someData = data);
}

export default [
  '$log',
  'ContentService',
  ContentController
];