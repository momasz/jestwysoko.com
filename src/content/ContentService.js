function ContentService($log) {
  $log.debug('Content Controller loaded');
  return {
    getData: () => {
      return new Promise(resolve => resolve('Some test data'))
    }
  }
}

export default ['$log', ContentService];

