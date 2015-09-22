(function(){

    'use strict';

    angular
        .module('formlyApp')
        .factory('determine', determinex);
        
        function determinex() {
            function getdetermine() {
                return [
                    {
                        "name": "Male",
                        "value":"Male"
                    },
                    {
                        "name":"Female",
                        "value":"Female"

                    },
                    
                ];
            }

            return {
                getdetermine: getdetermine
            }
        }
        
})();