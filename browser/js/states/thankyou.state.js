app.config(function ($stateProvider) {
    $stateProvider.state('thankYou', {
        url: '/group/:id/thankyou',
        templateUrl: 'js/templates/thankyou.html',
        controller: function ($scope, $stateParams, $state, Socket) {
            $scope.resultUrl = 'http://' + window.location.host + '/#/group/' + $stateParams.id + '/result';
            Socket.on('decision', function (topResult) {
                $state.go('result', { id: $stateParams.id });
            })
        }
    });
});
