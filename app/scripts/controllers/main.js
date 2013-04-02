'use strict';

angular.module('jstroApp')
  .controller('MainCtrl', function ($scope) {
    $scope.editing = true;
    $scope.colors = {"0":"bfbfbf","1":"bfbfbf","2":"0000ff","3":"1a8000","4":"bfbfbf","5":"f99a00","6":"f82307","7":"fdff00","8":"0b37a9","9":"000000","A":"da105d","B":"51586f","C":"f5b500","D":"5e8500","E":"f83324","F":"cfe300","G":"fdf4eb","H":"cfe300","I":"edebdf","J":"ea2000","K":"c51b00","L":"dbb500","M":"9f0700","N":"011d63","O":"edebdf","P":"cbcc00","Q":"953268","R":"944800","S":"568ad9","T":"f7cf00","U":"c3bc90","V":"753c0f","W":"375d94","X":"7e7e7e","Y":"252525","Z":"000000"};

    $scope.toggleEditing = function () {
        $scope.editing = !$scope.editing;
        if (!$scope.editing) {
            $scope.renderColors();
        }
    };

    $scope.makeDiv = function (color) {
        return '<div class="letter" style="background-color:#' + color + '">&nbsp</div>';
    };

    $scope.renderColors = function () {
        if (!$scope.text) {
            $scope.rendered = 'You gotta type something!';
            return;
        }
        var text = $scope.text.toUpperCase();
        text = text.replace(/[^\w\d\ ]/g, '');
        text = text.replace(/\w|\d/g, function (letter) {
            return $scope.makeDiv($scope.colors[letter]);
        });
        text = text.replace(/(>)(\ )(<)/g, function (match, p1, p2, p3, offset, string) {
            return p1 + $scope.makeDiv('fff') + p3;
        });

        $scope.rendered = text;
    };
  });
