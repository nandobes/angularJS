/**
 * @param {type} angular
 * @returns {angular.module}
 * @author 
 * @since 1/18/2018
 */

(function () {
    'use strict';

    angular
        .module('app.AppModule', [])
        .config(config)
        .run(runBlock);

    /* @ngInject */
    function config() {
            // Your code here
        }

        /* @ngInject */
        function runBlock() {
            // Your code here
        }
})();
