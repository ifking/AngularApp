<!DOCTYPE html>
<html lang='en' ng-app="testApp">
  <head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <title>Jason Mackey</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <script type="text/javascript" src="node_modules/angular/angular.min.js?v=<?=filemtime('node_modules/angular/angular.min.js')?>"></script>
    <script type="text/javascript" src="js/app.js?v=<?=filemtime('js/app.js')?>"></script>
  </head>
  <body ng-controller="testCtrl as test">
    <h1>{{"Testing "+"This"}}</h1>
    <ul ng-repeat="object in test.tests">
      <li ng-show="object.visible">{{object.name}}</li>
    </ul>
  </body>
</html>
