app.factory('Group', function (Categories, $http) {

    var remainingCategories = Categories.slice();
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

        search: function () {
            return $http({
                url: '/api/groups/search',
                method: 'GET',
                params: {
                    categories: remainingCategories.map(function (cat) {return cat.name;}).join(','),
                    exclude: exclude,
                }
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
