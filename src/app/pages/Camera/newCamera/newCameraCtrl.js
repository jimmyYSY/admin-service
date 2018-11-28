(function() {
    angular.module('BlurAdmin.pages.sensor')
        .controller('newCameraCtrl', newCameraCtrl);

    function newCameraCtrl($scope) {


        $scope.type = "温度传感器";
        $scope.types = ["温度传感器", "湿度传感器", "RFID"];
        $scope.indexs = ["研究中心", "粮仓"];
        $scope.index = "粮仓";

        console.log(">>>>>>>>>>>>>");

    }
})();