<!DOCTYPE html>
<html lang="en" ng-app="NoteManager">

  <head>
    <meta charset="utf-8">
    <title>Note Wrangler</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <title>Jason's Notes</title>
  </head>

  <body>
    <div class="nav-wrapper has-dropdown">
      <div class="nav-content">
        <div class="wrapper">
          <div class="nav-content-layout">
            <div class="nav-list">

              <a href="#/"
              class="list-item"
              ng-click="selected = 'notes'"
              ng-class="{'active': selected == 'notes'}"> Notes </a>

              <a href="#/users"
              class="list-item"
              ng-click="selected = 'users'"
              ng-class="{'active': selected == 'users'}"> Users </a>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-wrapper">
      <div class="hero-content">
        <div class="hero"></div>
      </div>
    </div>

    <div class="main-wrapper">

    </div>

    <!-- Load Js libs -->
    <script type="text/javascript" src="./node_modules/angular/angular.min.js?v=<?=filemtime('node_modules/angular/angular.min.js')?>"></script>
    <script src="./js/new_app.js"></script>


  </body>
</html>
