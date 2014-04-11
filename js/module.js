var module = angular.module("miao", []);

module.directive("ratting", function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            if (attrs.ratting) {
                var rattings = scope.$eval(attrs.ratting);
                for (var i = 0; i < 5; i++) {
                    if (i <= rattings) {
                        element.append("<span class='glyphicon glyphicon-star'>");
                    } else {
                        element.append("<span class='glyphicon glyphicon-star-empty'>");
                    }
                }
            }
        }
    };
});

module.controller("MainCtrl", ["$scope",
    function($scope) {
        $scope.user = {
            name: '史塔克工业',
            tel: '电话：010-66886868',
            address: '北京市三元桥京信大厦1236',
            photo: '/holder.js/100x100',
            products: [{
                image: '/holder.js/60x60',
                price: '$ 3.00'
            }, {
                image: '/holder.js/60x60',
                price: '$ 3.00'
            }, {
                image: '/holder.js/60x60',
                price: '$ 3.00'
            }, {
                image: '/holder.js/60x60',
                price: '$ 3.00'
            }, {
                image: '/holder.js/60x60',
                price: '$ 3.00'
            }, {
                image: '/holder.js/60x60',
                price: '$ 3.00'
            }, {
                image: '/holder.js/60x60',
                price: '$ 3.00'
            }, {
                image: '/holder.js/60x60',
                price: '$ 3.00'
            }, {
                image: '/holder.js/60x60',
                price: '$ 3.00'
            }]
        };

        $scope.comments = [{
                photo: "holder.js/70x70",
                comment: '不错，就是人比较多，要等',
                star: 4
            }, {
                photo: "holder.js/70x70",
                comment: '位置很好找，店内环境也不错',
                star: 5
            }, {
                photo: "holder.js/70x70",
                comment: '一般吧 灯管比较暗',
                star: 3
            }

        ];
        $scope.introduces = [];

        function splitPages() {
            var products = $scope.user.products;
            var pageIndex = 0;
            var pageSize = 4;
            var total = products.length;

            while (pageIndex != -1) {
                if ((pageIndex + 1) * pageSize <= total) {
                    var page = products.slice(pageIndex, pageSize);
                    $scope.introduces.push(page);
                    pageIndex++;
                } else {
                    pageIndex = -1;
                    break;
                }
            }
        }

        splitPages();
    }
]);