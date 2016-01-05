app.factory('Group', function (Categories, $http, $state) {

    var exclude = {};

    return {

        getAllCategories: function () {
            return Categories;
        },

        excludeCategory: function (catToExclude) {
            exclude[catToExclude.name] = true;
            // for (var i = 0; i < remainingCategories.length; i++) {
            //     if (catToExclude.name === remainingCategories[i].name) {
            //         return remainingCategories.splice(i, 1);
            //     }
            // }
        },

        submitPreferences: function () {

        },

        closeVoting: function (id) {
            console.log('closing voting');
            $http.get('/api/groups/' + id + '/close')
                .then(function (res) {
                    $state.go('result', { id: id })
                })
                .then(null, function (err) {
                    console.error(err);
                })
        },

        getGroup: function (id) {
            return $http.get('/api/groups/' + id)
                .then(function (res) {
                    return res.data;
                })
                .then(null, function (err) {
                    console.error(err);
                });
        },

        search: function (id) {
            return $http({
                url: '/api/groups/' + id + '/search',
                method: 'GET'
            })
            .then(function (res) {
                console.log(res.data);
                return res.data;
            })
            .then(null, function (err) {
                console.error(err);
            });

        }

    };

});
