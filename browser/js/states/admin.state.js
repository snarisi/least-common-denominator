app.config(function ($stateProvider) {

    $stateProvider.state({
        name: 'admin',
        url: '/groups/:id/admin',
        templateUrl: 'js/templates/admin.html',
        controller: 'AdminCtrl',
        resolve: {
            currentGroup: function ($stateParams, Group) {
                return Group.getGroup($stateParams.id);
            }
        }
    });
});
