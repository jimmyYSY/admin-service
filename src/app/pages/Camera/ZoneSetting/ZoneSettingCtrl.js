(function() {
    angular.module('BlurAdmin.pages.Camera')
        .controller('ZoneSettingCtrl', ZoneSettingCtrl);

    function ZoneSettingCtrl($scope, $openModal, $ShareData, $mydialog) {
        $scope.openss = $openModal; //创建实例化对象
        function fn(val) { //关闭模态框方法
            $scope.myopenNE.opt_close = val;
        }
        $scope.myopenNE = function(page, size) { //打开模态框 不可关闭
            $scope.openss.newOpen(page, size, $scope, fn, 'static');
        }
        $scope.myopenNE2 = function(page, size) { //打开模态框 ,可关闭
            $scope.openss.newOpen(page, size, $scope, fn);
        };

        $scope.atr = function(id) { // 存入设备id
            $ShareData.setNewConsu(id);
        }

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
        };


        //删除执行函数
        $scope.que_dekete = function() {
            $mydialog.inquiry("确定要删除么？", function(val) {
                if (val) {
                    alert("已经删除了");
                } else {
                    alert("点错了，不删除");
                }
            })
        }

        // 模拟数据
        $scope.list_datas = [{
                num: 1,
                id_num: "S001",
                name: "摄像头1号",
                type: "温度传感器",
                index: "研究中心"
            },
            {
                num: 2,
                id_num: "R001",
                name: "摄像头2号",
                type: "RFID",
                index: "研究中心"
            },
            {
                num: 3,
                id_num: "W001",
                name: "摄像头3号",
                type: "湿度传感器",
                index: "粮仓"
            },
            {
                num: 4,
                id_num: "W009",
                name: "摄像头4号",
                type: "RFID",
                index: "研究中心"
            },
            {
                num: 5,
                id_num: "W001",
                name: "摄像头5号",
                type: "RFID",
                index: "粮仓"
            }
        ];

    }
})();