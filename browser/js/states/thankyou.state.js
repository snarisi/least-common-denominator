app.config(function ($stateProvider) {
    $stateProvider.state('thankYou', {
        url: '/group/:id/thankyou',
        templateUrl: 'js/templates/thankyou.html'
    });
});
