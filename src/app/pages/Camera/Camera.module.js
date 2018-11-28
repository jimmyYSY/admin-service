(function() {
    'use stritc'
    angular.module('BlurAdmin.pages.Camera', [])
        .config(routeCnig);
    /** @ngInject */
    function routeCnig($stateProvider) {
        $stateProvider
            .state('Camera', {
                url: '/Camera',
                title: '摄像头管理',
                // templateUrl: 'app/pages/Camera/Camera.html',
                templateUrl: 'app/pages/Camera/Camera.html',
                controller: 'CameraCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                sidebarMeta: {
                    icon: 'glyphicon glyphicon-camera',
                    order: 150,
                },
            })
            // .state('Camera.list', {
            //     url: '/Cameralist',
            //     controller: 'CameraCtrl',
            //     templateUrl: 'app/pages/Camera/Camera.html',
            //     title: '摄像头列表',
            //     sidebarMeta: {
            //         order: 0,
            //     },
            // })
            // .state('Camera.system', {
            //     url: '/CameraSystem',
            //     templateUrl: 'app/pages/Camera/ZoneSetting/ZoneSetting.html',
            //     title: '设置摄像头区域',
            //     controller: 'CameraCtrl',
            //     sidebarMeta: {
            //         order: 1,
            //     },
            // })

    }
})();