app.factory('Group', function (Categories, $http) {

    var remainingCategories = Categories.splice();

    module.exports = {

        getAllCategories: function () {
            return Categories;
        },

        excludeCategory: function (catToExclude) {
            for (var i = 0; i < remainingCategories.length; i++) {
                if (catToExclude.name === category[i].name) {
                    return remainingCategories.splice(i, 1);
                }
            }
        },

        search: function () {
            $http({
                url: '/api/groups/search',
                method: 'GET',
                params: {
                    categories: remainingCategories.map(function (cat) {
                        return cat.name;
                    })
                }
            })
            .then(function (res) {
                console.log(res.data)
            })
            .then(null, function (err) {
                console.error(err);
            });

        }

    };

});
