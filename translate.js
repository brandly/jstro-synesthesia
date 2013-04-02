var fs = require('fs');

var colors = {};

var inputFile = 'colors.txt';

var addColor = function (letter, color) {
    colors[letter] = color;
};

var kickOut = function () {
    console.log(JSON.stringify(colors));
};

fs.readFile(inputFile, 'utf8', function (err, data) {
    var lines = data.split('\n');
    var lastIndex = lines.length - 1;
    lines.forEach(function (line, index) {
        var arr = line.split('=');
        addColor(arr[0], arr[1]);
        if (index === lastIndex) {
            kickOut();
        }
    });
});
