<div ng-controller="ModuleCtrl as module_ctrl">
  <h1>Modules</h1>
  <div class="flex_container">
    <div class="item" ng-repeat="module in module_ctrl.modules">
      <h2>{{module.name}}</h2>
      <p>{{module.description}}</p>
    </div>
  </div>
</div>
