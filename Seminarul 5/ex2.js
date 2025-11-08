/*scrieți o aplicație simplă care creează 
un director, un fișier în director și apoi 
șterge directorul (puteți utiliza rimraf, mai exact rimraf@3 ) */


const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const dirPath = path.join(__dirname, 'testDir');
const filePath = path.join(dirPath, 'testFile.txt');

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
  console.log('Director creat:', dirPath);
}

fs.writeFileSync(filePath, 'Acesta este un fisier de test.');
console.log('Fisier creat:', filePath);

setTimeout(() => {
  rimraf(dirPath, (err) => {
    if (err) {
      console.error('Eroare la stergere:', err);
    } else {
      console.log('Director sters cu succes.');
    }
  });
}, 2000);
