angular.module('skillsLab').controller("SolutionViewController", function($scope,$rootScope) {

  var soluCtrl = this;

soluCtrl.onChange = function (newValue, oldValue){
  if (newValue != oldValue){
  document.getElementById('day').click();
  }
};
});
