app.config(function ($stateProvider) {
    $stateProvider.state({
        name: 'result',
        url: '/groups/:id/result',
        controller: 'ResultCtrl',
        templateUrl: 'js/templates/result.html',
        // resolve: {
        //     results: function (Group, $stateParams) {
        //         return Group.search($stateParams.id);
        //     }
        // }
    })
})
