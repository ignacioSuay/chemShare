angular.module('chemshareApp')
.directive('csEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.csEnter);
                });

                event.preventDefault();
            }
        });
    };
});
