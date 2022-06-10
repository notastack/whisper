const fs = require('fs')

let pwd = {
    ex1: 'homework.html',
    ex2: 'lol.html',
    ex3: 'truck.pjg',

};

const data = JSON.stringify(pwd);

fs.writeFile('./dir.json', data, 'utf8', (err) => {

    if (err) {
        console.log(`Error writing file: ${err}`);
    } else {
        console.log(`File is written successfully!`);
    }

});