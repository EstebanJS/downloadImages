const https = require('https');
const fs = require('fs');
const download = (url, dest) =>{
  const file = fs.createWriteStream(`imagenes/${dest}`);
  const request = https.get(url, function (response) {
    response.pipe(file);
  });
}
exports.download = download