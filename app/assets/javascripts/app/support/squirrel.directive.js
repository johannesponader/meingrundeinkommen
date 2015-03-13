(function () {
    'use strict';

    angular
        .module('app.support')
        .directive('mgeSquirrel', [Directive]);


    function Directive() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'assets/support/_squirrel_directive.html',
            controllerAs: 'vm',
            controller: function () {

                var vm = this;
                vm.price = 33;
                vm.priceSociety = 33;
                vm.priceBge = 0;

                vm.user = {

                };

                vm.payment = {
                    accept: false
                };

                vm.priceChanged = priceChanged;
                vm.shareWithBge = sharePriceWithBge;
                vm.shareWithSociety = sharePriceWithSociety;
                vm.submit = submitForm;

                function submitForm (){
                    console.log('form submitted');

                };

                /**
                 * change the values
                 */
                function priceChanged() {
                    vm.optionsSociety.to = vm.price;
                    vm.optionsBge.to = vm.optionsSociety.to - 1;
                    sharePriceWithSociety();

                };

                /**
                 * @deprecated
                 * @param value
                 * @param part
                 * @returns {number}
                 */
                function getPercent(value, part) {
                    return ( part / value);
                }

                /**
                 * @deprecated
                 * @param value
                 * @param percent
                 * @returns {number}
                 */
                function getPart(value, percent){
                    return Math.round( value * percent );
                }

                /**
                 * The society shares with the bge
                 */
                function sharePriceWithBge() {
                    var societyPrice = vm.priceSociety;
                    var total = vm.price;
                    vm.priceBge = (total - societyPrice);
                };

                /**
                 * The bge shares with the society
                 */
                function sharePriceWithSociety() {
                    var bgePrice = vm.priceBge;
                    var total = vm.price;
                    vm.priceSociety = (total - bgePrice);
                };

                vm.optionsSociety = {
                    from: 1,
                    to: 33,
                    step: 1,
                    dimension: " €",
                    round: 0,
                    smooth: false,
                    vertical: false,
                    css: {
                        //background: {"background-color": "silver"},
                        //before: {"background-color": "purple"},
                        //default: {"background-color": "white"},
                        //after: {"background-color": "green"},
                        //pointer: {"background-color": "red"}
                    }

                    //threshold:
                }

                vm.optionsBge = {
                    from: 0,
                    to: (vm.price - 1),
                    step: 1,
                    dimension: " €",
                    round: 0,
                    smooth: false,
                    vertical: false,
                    css: {
                        //background: {"background-color": "silver"},
                        before: {"background-color": "purple"},
                        //default: {"background-color": "white"},
                        after: {"background-color": "green"},
                        pointer: {"background-color": "red"}
                    }

                    //threshold:
                }


            }
        }

    };

}());