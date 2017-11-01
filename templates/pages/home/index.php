<div ng-controller="ModuleCtrl as module_ctrl">
  <h1>Modules</h1>
  <div class="flex_container" ng-repeat="module in module_ctrl.modules">
    <div class="item">
      {{module.name}}
    </div>
  </div>
</div>
