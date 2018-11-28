(function() {

    angular.module('BlurAdmin.theme')
        .factory('$openModal', openModal);

    function openModal($uibModal) {

        function MyOpen() {};

        //前三个参数必传，page：打开的地址；size：打开弹窗大小（lg，md），可选参数fn：回调函数关闭弹窗方法，p_size：是否点击阴影关闭弹窗 默认为true，传入“static”将去掉阴影，并且只能用opt.close关闭
        MyOpen.prototype.newOpen = function(page, size, scope, fn, pup_size, fn2) {
            var p_size = true;
            if (pup_size) p_size = pup_size;
            var opt = $uibModal.open({
                animation: true,
                templateUrl: page,
                size: size,
                scope: scope,
                backdrop: p_size,
                resolve: {
                    items: function() {
                        return scope.items;
                    }
                }
            });
            // MyOpen.prototype.opt_close = opt.close;
            if (fn) {
                fn(opt.close);
            }
            if (fn2) {
                fn2(opt.dismiss);
            }

        }

        return new MyOpen();
    }

})();