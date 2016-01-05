app.config(function ($stateProvider) {
    $stateProvider.state({
        name: 'result',
        url: '/group/:id/result',
        controller: 'ResultCtrl',
        templateUrl: 'js/templates/result.html',
        resolve: {
            currentGroup: function (Group, $stateParams) {
                return Group.getGroup($stateParams.id);
            }
        }
    })
})
