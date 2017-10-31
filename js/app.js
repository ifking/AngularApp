(function() {
  angular.module("testApp",['tabModule'])
  .controller("TestCtrl", function() {
    this.tests = test_object;
  });

  var test_object = [{
    name: "test_1",
    visible: true,
    price: 33.009,
    images: [
      "img/photo_large.jpg",
      "img/photo_thumb.jpg"
    ],
    description: "The best thing ever!",
    specs: "44 X 55, 72\" height"
  }, {
    name: "test_2",
    visible: true,
    price: 2.00,
    description: "Sort of not the best!",
    specs: "1' X 1', 100\" height"
  }, {
    name: "test_3",
    visible: true,
    price: 44.77,
    description: "Third to best thing!",
    specs: "2 X 4, 30\" height"
  }];
})();
