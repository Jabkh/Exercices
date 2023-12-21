    // const fs = require('fs')
    // const file = process.argv[2]

    // fs.readFile(file, function (err, contents) {
    //   if (err) {
    //     return console.log(err)
    //   }
    //   // fs.readFile(file, 'utf8', callback) can also be used
    //   const lines = contents.toString().split('\n').length - 1
    //   console.log(lines)
    // })

//     const fs = require('fs');
// // let file = process.argv[2];
// let filter = process.argv[3];
// fs.readdir(filter, (err, list) => {
//         try {
//             if (filter) throw err;
//             const str = list.toString();
//             const tab = str.map();
//             console.log(tab);
//         } catch (err)  {
//             console.log(err);

//         }
//     }
// );

const fs = require('fs');

const path = require('path');

const directoryPath = process.argv[2];

fs.readdir(directoryPath, function(err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.forEach(function(file) {
    if (path.extname(file) === '.md') {
      console.log(file);
    }
  });
});

// const fs = require('fs');
// const ext = process.argv[3];
// let filter = process.argv[2];
// fs.readdir(filter, (err, list) => {
//         try {
//             if (!process.argv[2]) throw err;
           
//             const tab = list.filter(item => item.includes(ext));
//             console.log(tab);
 
//         } catch (err)  {
//             console.log(err);
//         }
//     }
// );