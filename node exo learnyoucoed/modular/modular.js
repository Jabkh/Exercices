const fs = require("fs");

const path = require("path");

function listFilesByExtension(directoryPath, extension, callback) {
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return callback(err);
    }
    const filtered = files.filter(
      (file) => path.extname(file) === `.${extension}`
    );
    callback(null, filtered);
  });
}

module.exports = listFilesByExtension;
