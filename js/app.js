(function() {
  angular.module("testApp",[])
  .controller("TestCtrl", function() {
    this.tests = test_object;
  })
  .controller("TabCtrl", function() {
    this.tab = 1;

    this.setTab = function(newValue) {
      this.tab = newValue;
    };

    this.isSet = function(tab) {
      return this.tab===tab;
    };
  });

  var test_object = [{
    name: "test_1",
    visible: true,
    price: 33.009,
    images: [
      "img/photo_large.jpg",
      "img/photo_thumb.jpg"
    ]
  }, {
    name: "test_2",
    visible: true,
    price: 2.00
  }, {
    name: "test_3",
    visible: true,
    price: 44.77
  }];
})();
