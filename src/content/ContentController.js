function ContentController($log, $scope, $location, ContentService) {
  $log.debug('Content Controller loaded');

  $scope.menuOpened = false;

  $scope.photos = [
    'https://lh3.googleusercontent.com/-Rvv4BLUsZaU/VhvUTPIHHXI/AAAAAAAAMfM/PaMaz7lt5h8tEkchujekmBPWkaeUtyT4gCCo/s1152-Ic42/Malta_20150904_0093.jpg',
    'https://lh3.googleusercontent.com/-dKppYEF6kto/VhvOIJw-jxI/AAAAAAAAMfM/d7lKncsFsmY3wosqkCCzb55_Ior4Lm8lQCCo/s1024-Ic42/Malta_20140731_0018.jpg',
    'https://lh3.googleusercontent.com/-i70MR9pbKDk/VhvOEzDQ6_I/AAAAAAAAMfM/4hcngoNK1zAZpGBrhdPnZu-SJBSti87cQCCo/s1024-Ic42/Malta_20140802_0022.jpg',
    'https://lh3.googleusercontent.com/-HGorhrrpev4/VhvOHFS7HmI/AAAAAAAAMfM/JPEraAXKxr8RRcsIW0g-cGro9YKhJMs1wCCo/s1024-Ic42/Malta_20140803_0024.jpg',
    'https://lh3.googleusercontent.com/-J3bQM15wgxY/VhvOLqoiyEI/AAAAAAAAMfM/OscR0Uizbzg5sW_jPxabKBSl4XYlC_nagCCo/s1024-Ic42/Malta_20140805_0027.jpg',
    'https://lh3.googleusercontent.com/--95OphkriL4/VhvRopHwUCI/AAAAAAAAMfM/Xp-ctooDdwoethF3fQptmEgrGB3C7gm2wCCo/s1152-Ic42/Malta_20150901_0023.jpg',
    'https://lh3.googleusercontent.com/-u91GhKfoAsI/Uf-AXEi6u3I/AAAAAAAAHW0/6_8GDkNqVwYhnKOL-U20dIx3WFyFzwY0gCCo/s1024-Ic42/GOPR7182.JPG',
    'https://lh3.googleusercontent.com/-wz855MK4dwg/Uf9_xJsNzBI/AAAAAAAAHWA/vyT2MOgLzCgJtRJdw3qL_gMBblvyHETvACCo/s1024-Ic42/GOPR7166.JPG',
    'https://lh3.googleusercontent.com/-_A9sDmMGPD0/Uf-BZ00Ti0I/AAAAAAAAHX4/pvAfM6hRSgIontaMGQdcMCKlZ2GLpiAoQCCo/s1024-Ic42/GOPR7196.JPG'
  ];
}

export default [
  '$log',
  '$scope',
  '$location',
  'ContentService',
  ContentController
];