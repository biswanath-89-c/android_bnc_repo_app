'use strict';

/**
 * @ngdoc service
 * @name assetsApp.cordovaReady
 * @description
 * # cordovaReady
 * Service in the assetsApp.
 */
/*angular.module('assetsApp')
       .service('cordovaReady', function () {
         // AngularJS will instantiate a singleton by calling "new" on this function
       });*/
angular.module('assetsApp').factory('cordovaReady', function() {
  return function (fn) {

    var queue = [];

    var impl = function () {
      queue.push(Array.prototype.slice.call(arguments));
    };

    document.addEventListener('deviceready', function () {
      queue.forEach(function (args) {
        fn.apply(this, args);
      });
      impl = fn;
    }, false);

    return function () {
      return impl.apply(this, arguments);
    };
  };
});
