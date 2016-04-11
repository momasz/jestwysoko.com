function ContentController($log, $rootScope, $scope, $location, movie, $sce, $filter, VIDEOS) {
  const body = $('body');
  const playerUrl = 'https://player.vimeo.com/video/';

  $scope.menuOpened = false;

  $scope.movies = VIDEOS;

  body.addClass('video-view');

  $scope.idMaker = (value) => {
    return $filter('idMaker')(value);
  };

  $scope.toTop = () => {
    body.animate({ scrollTop: 0 }, 'slow');
  };

  const checkId = () => {
    for (let i = 0, len = $scope.movies.length; i < len; i++) {
      if (parseInt(movie) === $filter('idMaker')($scope.movies[i].uri)) {
        return $scope.movies[i];
      }
    }
    return false;
  };

  const selected = checkId();

  if (movie && selected) {
    const videoUrl = playerUrl + movie + '?color=fb101e&title=0&byline=0&portrait=0';

    body.removeClass('video-view');
    body.addClass('video-detail-view');

    $scope.movie = {
      src: $sce.trustAsResourceUrl(videoUrl),
      title: selected.name,
      description: selected.description
    };
  }
}

export default [
  '$log',
  '$rootScope',
  '$scope',
  '$location',
  'movie',
  '$sce',
  '$filter',
  'VIDEOS',
  ContentController
];