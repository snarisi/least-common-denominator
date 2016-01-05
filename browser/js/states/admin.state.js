app.config(function ($stateProvider) {

    $stateProvider.state('admin', {
        url: '/group/:id/admin',
        templateUrl: 'js/templates/admin.html',
        controller: 'AdminCtrl'//,
        // resolve: {
        //     currentGroup: function ($stateParams, Group) {
        //         console.log($stateParams);
        //         console.log(Group);
        //         return Group.getGroup($stateParams.id);
        //     }
        // }
    });
});
