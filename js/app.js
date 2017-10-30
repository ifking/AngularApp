(function() {
  angular.module("testApp",[])
  .controller("testCtrl", function() {
    this.tests = test_object;
  });

  var test_object = [{
    name: "test_1"
  }, {
    name: "test_2"
  }, {
    name: "test_3"
  }];
})
