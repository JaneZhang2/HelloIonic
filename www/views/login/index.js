angular.module('starter')
  .controller('LoginController', function ($scope, $state, $http, memo) {
    $scope.form = {
      username: '',
      rolecode: 'ADMIN',
      password: '',
      orgcode: 'HN',
      clientid: '0000000001'
    };

    $scope.login = function () {
      $state.go('tab.dash');

      $http.post(
        'http://ikea.app.boyol.cn:48010/myscm/login',
        $scope.form
      )
        .success(function (result) {
          switch (result.retcode) {
            case '0':
              alert(result.msg);
              break;
            case '1':
              memo.sessionid = result.sessionid;
              $state.go('tab.dash');
              break;
            default:
          }
        })
        .error(function () {
          alert('登录失败');
        })
    };
  });
