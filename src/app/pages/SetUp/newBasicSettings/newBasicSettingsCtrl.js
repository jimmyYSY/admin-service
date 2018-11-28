(function () {
    // var url = 'http://192.168.99.106:3000';
    var url = 'http://localhost:3002';
    angular.module('BlurAdmin.pages.SetUp')
        .controller('newBasicSettingsCtrl', newBasicSettingsCtrl);

    function newBasicSettingsCtrl($scope,$http) {
        console.log(">>>><<<<<");
        $scope.indexs = ['研究中心', '粮仓'];
        $scope.index = "研究中心";

        $scope.types = ['温度传感器', '湿度传感器', 'RFID'];
        $scope.type = '温度传感器';
        $scope.IDs = ['0', '1', '2', '3', '4', '5'];
        $scope.ID = "0";
        $scope.img_src = "";

        $scope.vas = ['vas1', 'vas2'];

        $scope.upload = function (f) {
            var str = "";
            /**
             *FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，
             *使用 File 或 Blob 对象指定要读取的文件或数据。
             *onabort    当读取操作被中止时调用.
             *onerror    当读取操作发生错误时调用.
             *onload     当读取操作成功完成时调用.
             *onloadend  当读取操作完成时调用,不管是成功还是失败.该处理程序在onload或者onerror之后调用.
             *onloadstart当读取操作将要开始之前调用.
             *onprogress 在读取数据过程中周期性调用.
             */
            var reader = new FileReader(); //
            reader.readAsDataURL(f[0]);
            reader.onload = function (e) { // 当读取操作成功完成时调用.
                str = e.target.result;
                $scope.img_src = str;
                $scope.$apply(str);
            }
        };


        $scope.infor = [];
        $http({
            url:"http://127.0.0.1:3002/devices/all",
            method:"GET",
        }).success(function (data) {
            for(var record in data){
                $scope.infor.concat(data[record])
                console.log( $scope.infor,'777777')
            }



        });

        //动态添加设备
        $scope.maps = {};
        $scope.idlist = [];
        $scope.id = null;
        $scope.site = '';
        $scope.add = function (type, place, id) {
            if ($scope.idlist.indexOf(id) == -1) {
                $scope.idlist.push(id);
                if(place == '研究中心'){
                    $scope.site = "laboratory";
                }else {
                    $scope.site = "granary";
                }

                    if (type == '温度传感器') {
                        type = "temperature";
                        $scope.maps[id] = {id: id,type: type, x: 0, y: 0};
                        $scope.tem = $("<div id='" + id + "'><span style='height: 22px;background-repeat: no-repeat;display: block;width: 18px;position: absolute;left: 40%;top:26%'></span><p style='height:12px;line-height: 12px;width: 30px;position: absolute;left: 34%;bottom: 10%;font-size: 12px;color: #04f8ec'>温度</p></div>");
                        $scope.tem.css({
                            "height": "80px",
                            "border-radius": "50px",
                            "width": "80px",
                            "position": "absolute",
                            "top": 0,
                            "left": 0,
                            "background-image": "url('../../../../assets/img/app/add-device/blue.png')",
                            "background-repeat": "no-repeat",
                            "background-position": "50% 50%",
                            "background-size": "contain",
                            "cursor": "pointer"
                        });
                        $scope.tem.children('span').css("background-image", "url('../../../../assets/img/app/add-device/temperature.png')")
                        $('#Odiv').append($scope.tem);
                        doDrag(type, $scope.tem, $scope.maps, id)
                    } else if (type == '湿度传感器') {
                        type = "humidity";
                        $scope.maps[id] = {id: id, type: type, x: 0, y: 0};
                        $scope.hum = $("<div id='" + id + "' ><span style='height: 22px;background-repeat: no-repeat;display: block;width: 18px;position: absolute;left: 40%;top:26%'></span><p style='height:12px;line-height: 12px;width: 30px;position: absolute;left: 34%;bottom: 10%;font-size: 12px;color: #04f8ec'>湿度</p></div>");
                        $scope.hum.css({
                            "height": "80px",
                            "border-radius": "50px",
                            "width": "80px",
                            "position": "absolute",
                            "top": 0,
                            "left": 0,
                            "background-image": "url('../../../../assets/img/app/add-device/blue.png')",
                            "background-repeat": "no-repeat",
                            "background-position": "50% 50%",
                            "background-size": "contain",
                            "cursor": "pointer"
                        });
                        $scope.hum.children('span').css("background-image", "url('../../../../assets/img/app/add-device/humidity.png')");
                        $('#Odiv').append($scope.hum);
                        doDrag(type, $scope.hum, $scope.maps, id)
                    } else {
                        type = "location";
                        $scope.maps[id] = {id: id, type: type, x: 0, y: 0};
                        $scope.loc = $("<div id='" + id + "'><span style='height: 22px;background-repeat: no-repeat;display: block;width: 18px;position: absolute;left: 37%;top:26%'></span><p style='height:12px;line-height: 12px;width: 30px;position: absolute;left: 34%;bottom: 10%;font-size: 12px;color: #04f8ec'>定位</p></div>");
                        $scope.loc.css({
                            "height": "80px",
                            "border-radius": "50px",
                            "width": "80px",
                            "position": "absolute",
                            "top": 0,
                            "left": 0,
                            "background-image": "url('../../../../assets/img/app/add-device/blue.png')",
                            "background-repeat": "no-repeat",
                            "background-position": "50% 50%",
                            "background-size": "contain",
                            "cursor": "pointer"
                        });
                        $scope.loc.children('span').css("background-image", "url('../../../../assets/img/app/add-device/location.png')");
                        $('#Odiv').append($scope.loc);
                        doDrag(type, $scope.loc, $scope.maps, id)
                    }

            } else {
                alert('设备已添加')
            }
        };
        //拖动设备
        function doDrag( type, obj, arr, id) {
            var _move = false;
            var _x, _y;
            obj.mousedown(function (e) {
                $scope.id = id;
                _move = true;
                _x = e.pageX - parseInt($(obj).css("left"));
                _y = e.pageY - parseInt($(obj).css("top"));
            });
            $(document).mousemove(function (e) {
                if (_move) {
                    var x = e.pageX - _x,
                        y = e.pageY - _y,
                        minX = 0,
                        minY = 0,
                        maxX = parseInt($("#Odiv").css("width")) - parseInt(obj.css('width')),
                        maxY = parseInt($("#Odiv").css("height")) - parseInt(obj.css('height'));
                    x = x < minX ? minX : (x > maxX ? maxX : x);
                    y = y < minY ? minY : (y > maxY ? maxY : y);
                    $(obj).css({top: y, left: x});
                    arr[id].type = type;
                    arr[id].x = x;
                    arr[id].y = y;
                    arr[id].id = id;
                }
            }).mouseup(function () {
                _move = false;
            });
            return false;
        }
        //保存设备（传递位置信息）
        $scope.saveMap = function () {
            $scope.myopen.opt_close();
            var myForm = new FormData();
            var file = $(".add_imgs")[0].files[0];
            myForm.append("name", $scope.site);
            myForm.append("position",JSON.stringify($scope.maps));
            myForm.append("emap", file);
            var oReq = new XMLHttpRequest();
            oReq.open("POST", url +"/settings/eMap");
            oReq.send(myForm);
            oReq.onload = function(oEvent) {
                var res = JSON.parse(oReq.responseText);
                if (res.success == true) {
                    console.log('success');
                } else {
                    alert('图片上传失败！');
                }
            }
        };
        //删除设备
        $scope.delete = function () {
            $("#" + $scope.id + "").remove();
            var idl = $scope.idlist.indexOf($scope.id);
            $scope.idlist.splice(idl, 1);
            for(var key in $scope.maps){
                console.log(key,"key")
                if(key == $scope.id){
                    delete $scope.maps[key]
                }
            }
        };
    }
})();