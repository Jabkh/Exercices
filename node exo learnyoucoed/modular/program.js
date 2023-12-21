const listFilesByExtension = require("./modular");

const directoryPath = process.argv[2];

const extensionFile = process.argv[3];

listFilesByExtension(directoryPath, extensionFile, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  } else {
    files.forEach((file) => console.log(file));
  }
});
