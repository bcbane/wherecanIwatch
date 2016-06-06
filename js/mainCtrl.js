angular.module('app').controller("mainCtrl", function($scope, modalSer) {

  // $scope.openModal = function(modalName, height, width) {
  //   modalSer.openModal(modalName, height, width);
  // };
  //
  $scope.closeModal = function() {
      modalSer.closeModal();
  };



})
