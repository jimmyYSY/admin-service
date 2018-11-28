(function() {
    angular.module('BlurAdmin.pages.sensor')
        .controller('CameraRecordCtrl', CameraRecordCtrl);

    function CameraRecordCtrl($scope, $ShareData) {
        $ShareData.getNewConsu(); //设备id 

        //点击分页事件
        $scope.list_data_opt = {
            limit: 1
        };
        $scope.page = 1;
        $scope.limit = 10; // 每页显示多少条
        $scope.bigTotalItems = 5000; //数据总数
        $scope.numPages = 5; //当前页数
        $scope.maxSize = 5; //最多现实几页

        $scope.pageChanged = function(val) {
            console.log(val);
            var Page_num = val; //选中的页面数
            // list_data();  //请求数据列表
        };

        $scope.list_datas = [{
                num: 1,
                id_num: "S001",
                name: "温度传感器1号",
                itme: "2017-1-23 15:30",
                type: "温度传感器",
                index: "研究中心",
                wang: "是",
                val: "30%hr"
            },
            {
                num: 2,
                id_num: "R001",
                name: "温度传感器9号",
                itme: "2017-1-23 15:30",
                type: "RFID",
                index: "研究中心",
                val: "30%hr"
            },
            {
                num: 3,
                id_num: "W001",
                name: "温度传感器1号",
                itme: "2017-1-23 15:30",
                type: "湿度传感器",
                index: "粮仓",
                val: "30%hr"
            },
            {
                num: 4,
                id_num: "W009",
                name: "温度传感器1号",
                itme: "2017-1-23 15:30",
                type: "RFID",
                index: "研究中心",
                val: "30%hr"
            },
            {
                num: 5,
                id_num: "W001",
                name: "RFID1号",
                itme: "2017-1-23 15:30",
                type: "RFID",
                index: "粮仓",
                val: "30%hr"
            }
        ];
        console.log(">>>>>>>>>")


    }


})()