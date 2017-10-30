(function() {
  angular.module("testApp",[])
  .controller("testCtrl", function() {
    this.tests = test_object;
  });

  var test_object = [{
    name: "test_1",
    visible: false
  }, {
    name: "test_2",
    visible: true
  }, {
    name: "test_3",
    visible: true
  }];
})();
