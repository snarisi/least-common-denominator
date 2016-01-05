app.controller('ResultCtrl', function ($scope, $stateParams, Group, currentGroup, Socket) {
    var initializeMap = function (center) {
        var latLng = {
            lat: center.latitude,
            lng: center.longitude
        };
        var mapDiv = document.getElementById('map-div');
        var map = new google.maps.Map(mapDiv, {
            center: latLng,
            scrollwheel: false,
            zoom: 16
        });
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
    };

    $scope.loaded = false;
    $scope.group = currentGroup;
    console.log($scope.group);
    Group.search($stateParams.id)
        .then(function (results) {
            $scope.results = results
            $scope.topResult = results[0];
            $scope.loaded = true;
            initializeMap($scope.topResult.location.coordinate);
        });

    Socket.on('connect', function () {
        console.log('I have connected to the socket');
    });
});
