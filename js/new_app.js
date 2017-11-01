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
    description: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
  }, {
    name: "MVC",
    description: "The Model-View-Controller (MVC) architectural pattern separates an application into three main groups of components: Models, Views, and Controllers. This pattern helps to achieve separation of concerns. Using this pattern, user requests are routed to a Controller which is responsible for working with the Model to perform user actions and/or retrieve results of queries. The Controller chooses the View to display to the user, and provides it with any Model data it requires."
  }, {
    name: "Angular",
    description: "AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries. Every feature can be modified or replaced to suit your unique development workflow and feature needs."
  }, {
    name: "OOP",
    description: "Object-oriented programming (OOP) is a programming paradigm based on the concept of \"objects\", which may contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods. A feature of objects is that an object's procedures can access and often modify the data fields of the object with which they are associated (objects have a notion of \"this\" or \"self\")."
  }];
})();
