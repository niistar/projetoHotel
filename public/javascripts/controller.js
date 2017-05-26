angular.module('appzao', [])
  .controller('quartoController', ['$scope', '$http', function ($scope, $http) {
          $scope.adicionarQuarto = function () {
          // $.param função do jQuery para serializar em JSON
            $http.get('/users/aaa').then(function(response)
            {
              $scope.quartos = response.data;
            });
          }; 
  }])