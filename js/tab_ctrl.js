(function() {
  angular.module("tabModule",[])
  .controller("TabCtrl", function() {
    this.tab = 1;

    this.setTab = function(newValue) {
      this.tab = newValue;
    };

    this.isSet = function(tab) {
      return this.tab===tab;
    };
  });
})();
