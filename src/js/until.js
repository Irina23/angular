var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
    $scope.phones = [
        {'name': 'Nexus S',
            'snippet': 'Loren Ipsum',
            'modal': '5555'
        },
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.',
            'modal': '111'
        },
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.',
            'modal': '333'
        },
        {'name': 'Nexus S',
            'snippet': 'Loren Ipsum',
            'modal': '5555'
        },
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.',
            'modal': '111'
        },
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.',
            'modal': '333'
        },
        {'name': 'Nexus S',
            'snippet': 'Loren Ipsum',
            'modal': '5555'
        },
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.',
            'modal': '111'
        },
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.',
            'modal': '333'
        }
    ];

    $scope.filters = [];

    in_array = function (element, array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == element) {
                return false;
            }
        }

        return true;
    }

    for (var key in $scope.phones) {
        console.log(!($scope.filters.indexOf($scope.phones[key].modal)));
        if (in_array($scope.phones[key].modal, $scope.filters)) {
            console.log($scope.filters);
            $scope.filters.push($scope.phones[key].modal);
        }
    }

    $scope.orderProp = 'modal';

});