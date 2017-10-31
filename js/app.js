(function() {
  angular.module("testApp",[])
  .controller("testCtrl", function() {
    this.tests = test_object;
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
