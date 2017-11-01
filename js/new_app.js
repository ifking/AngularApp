(function() {
  angular.module("NoteManager",['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.when('/notes', {
      templateUrl: '/templates/pages/notes/index.php'
    }).when('/', {
      templateUrl: '/templates/pages/home/index.php'
    }).otherwise({redirectTo: '/'});
  }).controller("ModuleCtrl", function() {
    this.modules = module_list;
  });

  var module_list = [{
    name: "GIT",
    description: "",
  }, {
    name: "MVC",
    description: ""
  }, {
    name: "Angular",
    description: ""
  }];
})();
