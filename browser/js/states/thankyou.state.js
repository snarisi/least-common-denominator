app.config(function ($stateProvider) {
    $stateProvider.state('thankYou', {
        url: '/group/:id/thankyou',
        templateUrl: 'js/templates/thankyou.html',
        controller: function ($scope, $stateParams) {
            $scope.resultUrl = 'http://' + window.location.host + '/#/group/' + $stateParams.id + '/result';
        }
    });
});
