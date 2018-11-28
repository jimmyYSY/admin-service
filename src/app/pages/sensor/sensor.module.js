(function() {
    'use stritc'
    angular.module('BlurAdmin.pages.sensor', [])
        .config(routeCnig);
    /** @ngInject */
    function routeCnig($stateProvider) {
        $stateProvider
            .state('sensor', {
                url: '/sensor',
                title: '传感设备管理',
                controller: 'sensorCtrl',
                templateUrl: 'app/pages/sensor/sensor.html',
                sidebarMeta: {
                    icon: 'glyphicon glyphicon-cog',
                    order: 450,
                },
            });

        // .state('UserlistM.user', {
        //     url: '/UserlistUser', 
        //     controller: 'UserlistMCtrl',
        //     templateUrl: 'app/pages/UserlistM/user/user.html',
        //     title: '注册用户管理',
        //     sidebarMeta: {
        //         order: 0,
        //     },
        // }).state('UserlistM.system', {
        //     url: '/system',
        //     templateUrl: 'app/pages/UserlistM/system/system.html',
        //     title: '系统用户管理',
        //     controller: 'systemCtrl',
        //     sidebarMeta: {
        //         order: 1,
        //     },
        // })

    }
})();