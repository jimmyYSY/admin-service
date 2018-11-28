   (function() {
       angular.module('BlurAdmin.theme')
           .service('$ShareData', ShareData);

       function ShareData() {
           function ShareData() {};
           //咨询
           ShareData.prototype.setNewConsu = function(val) {
               this.NewConsu = val;
           }
           ShareData.prototype.getNewConsu = function() {
               return this.NewConsu;
           }

           //通知
           ShareData.prototype.setNewnoticeM = function(val) {
               this.NewnoticeM = val;
           }
           ShareData.prototype.getNewnoticeM = function() {
               return this.NewnoticeM;
           }

           //红包
           ShareData.prototype.setRed = function(val) {
               this.Red = val;
           }
           ShareData.prototype.getRed = function() {
               return this.Red;
           }


           return new ShareData();
       }
   })();