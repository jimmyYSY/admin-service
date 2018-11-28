(function() {
    'use stritc'
    angular.module('BlurAdmin.pages.SetUp', [])
        .config(SetUp);
    /** @ngInject */
    function SetUp($stateProvider) {
        $stateProvider
            .state('SetUp', {
                url: '/SetUp',
                title: '设置',
                // controller: 'SetUpCtrl',
                template: '<ui-view></ui-view>',
                // templateUrl: 'app/pages/SetUp/SetUp.html',
                sidebarMeta: {
                    icon: 'glyphicon glyphicon-th',
                    order: 150,
                },
            })
            .state('SetUp.BasicSettings', {
                url: '/BasicSettings',
                controller: 'BasicSettingsMCtrl',
                templateUrl: 'app/pages/SetUp/BasicSettings/BasicSettings.html',
                title: '基础设置',
                sidebarMeta: {
                    order: 0,
                },
            })
            .state('SetUp.BasicData', {
                url: '/BasicData',
                templateUrl: 'app/pages/SetUp/BasicData/BasicData.html',
                title: '基础数据',
                controller: 'BasicDataCtrl',
                sidebarMeta: {
                    order: 1,
                },
            })
            .state('SetUp.Video', {
                url: '/Video',
                templateUrl: 'app/pages/SetUp/Video/Video.html',
                title: '粮仓展示视频管理',
                controller: 'VideoCtrl',
                sidebarMeta: {
                    order: 2,
                },
            })

    }
})();