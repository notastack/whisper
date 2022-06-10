//requiring path and fs modules
var path = require('path');
var fs = require('fs');
//joining path of directory 
var directoryPath = path.join(__dirname, 'Documents');
fs.writeFile('path/index.html', '')
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    fs = require('fs');
    //listing all files using forEach
    files.forEach(function (file) {
    fs.writeFile('path/index.html', file)
        console.log(file); 
    });
});