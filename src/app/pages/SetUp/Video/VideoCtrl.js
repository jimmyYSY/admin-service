(function() {
    angular.module('BlurAdmin.pages.SetUp')
        .controller('VideoCtrl', VideoCtrl)

    function VideoCtrl($scope, $openModal, $ShareData) {
        console.log("123123");
        $scope.open = $openModal; //创建实例化对象
        function fn(val) { //关闭模态框方法
            $scope.myopen.opt_close = val;
        }
        $scope.myopen = function(page, size) { //打开模态框 不可关闭
            $scope.open.newOpen(page, size, $scope, fn, 'static');
        }
        $scope.myopen2 = function(page, size) { //打开模态框 ,可关闭
            $scope.open.newOpen(page, size, $scope, fn);
        };

        $scope.atr = function(id) { // 存入设备id
            $ShareData.setNewConsu(id);
        }

    }
})();