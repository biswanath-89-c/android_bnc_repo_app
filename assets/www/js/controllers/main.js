'use strict';

/**
 * @ngdoc function
 * @name assetsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assetsApp
 */
angular.module('assetsApp')
  .controller('MainCtrl', function ($scope) {
    accelerometer.getCurrentAcceleration(function (acc) {
      alert('OK-Accl');
    });
  });
