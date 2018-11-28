(function() {
    'use stritc'
    angular.module('BlurAdmin.pages.rules', [])
        .config(routeCnig);
    /** @ngInject */
    function routeCnig($stateProvider) {
        $stateProvider
            .state('rules', {
                url: '/rules',
                title: '设备规则管理',
                controller: 'rulesCtrl',
                templateUrl: 'app/pages/rules/rules.html',
                sidebarMeta: {
                    icon: 'glyphicon glyphicon-th-list',
                    order: 100,
                },
            });



    }
})();