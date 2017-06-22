﻿(function () {
    app.controller('SearchController', ['$state', '$stateParams', 'searchData', function ($state, $stateParams, searchData) {

        var vm = this;
        vm.searchData = searchData;

        vm.switchPage = function () {

            var params = {
                query: $stateParams.query,
                page: vm.searchData.page,
                pageSize: $stateParams.pageSize
            };

            $state.go('recipes.search', params);
        };
    }])
})();