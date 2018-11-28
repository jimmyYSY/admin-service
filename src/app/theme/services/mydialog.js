(function() {
    angular.module('BlurAdmin.theme').factory('$mydialog', function($interval, $state, $uibModal) {
        var $ctrl = this;

        function MyDialog() {};
        MyDialog.prototype.success = function(val, ts) {
            var t = ts ? ts : 2000;
            $ctrl.animationsEnabled = true;
            if (open) { open.close(); }
            var open = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                template: '<div class="alert "><div class="modal-header"><h3 style="padding-right: 50px;" class="modal-title"> {{val}}</h3><i class="ion-checkmark" style="color: #49ff00; transform: translate(-50%,-50%); position: absolute;top: 50%;right: 5%;font-size: 30px;"></i></div></div>',
                controllerAs: '$ctrl',
                // backdrop: false,
                controller: function($scope) {
                    $scope.val = val;
                }
            });
            setTimeout(function() {
                open.close();
            }, t);
        };

        MyDialog.prototype.fail = function(val, ts) {
            var t = ts ? ts : 2000;
            $ctrl.animationsEnabled = true;
            var open = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                template: '<div class="alert "><div class="modal-header"><h3 style="padding-right: 50px;" class="modal-title"> {{val}}</h3><i class="ion-close-round" style="color: red; transform: translate(-50%,-50%); position: absolute;top: 50%;right: 5%;font-size: 30px;"></i></div></div>',
                controllerAs: '$ctrl',
                controller: function($scope) {
                    $scope.val = val;
                }

            });
            setTimeout(function() {
                open.close();
            }, t);
        };

        MyDialog.prototype.warning = function(val, ts) {
            var t = ts ? ts : 2000;

            $ctrl.animationsEnabled = true;
            var open = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                template: '<div class="alert "><div class="modal-header"><h3 style="padding-right: 50px;" class="modal-title"> {{val}}</h3><i class="ion-alert" style="color: #d4730b; transform: translate(-50%,-50%); position: absolute;top: 50%;right: 5%;font-size: 30px;"></i></div></div>',
                controllerAs: '$ctrl',
                controller: function($scope) {
                    $scope.val = val;
                }

            });
            setTimeout(function() {
                open.close();
            }, t);
        };


        MyDialog.prototype.inquiry = function(val, fn) {
            $ctrl.animationsEnabled = true;
            var open = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                backdrop: 'static',
                size: 'sm',
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                template: '<div class="alert"><div class="modal-header"><h3 class="modal-title text-center">{{val}}</h3></div><div class="row">&nbsp;</div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="_inquiry_fn(false)">取消</button><button type="button" class="btn btn-primary" ng-click="_inquiry_fn(true)">确定</button ></div></div>',
                controllerAs: '$ctrl',
                controller: function($scope) {
                    $scope.val = val;
                    $scope.is_inquiry = null;
                    $scope._inquiry_fn = function(type) {
                        $scope.is_inquiry = type;
                        open.close();
                        fn($scope.is_inquiry);
                    }
                }

            });

        }



        return new MyDialog();
    });

})();