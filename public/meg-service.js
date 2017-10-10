angular.module('newModule')
  .service('megPromise', function ($q) {

    this.get = function (name) {
      // here it will go all operations 
      var deferred = $q.defer();
      // Reject 3 out of 10 times to simulate 
      // some business logic.
      if (Math.random() > 0.5) deferred.reject("No  for you from " + name);
      else deferred.resolve("hi for you from " + name);
      return deferred.promise;
    };
  });

