const fs = require('fs');
 

fs.readFile(process.argv[2], (err, data) => {
    try {
        if (!process.argv[2]) throw err;
        const str = data.toString();
        const tab = str.split('\n');
        console.log(tab.length -1);
    } catch (err)  {
        console.log(err);
    }
}
    );
 
    // const fs = require('fs')
   

    // fs.readFile(file, function (err, contents) {
    //   if (err) {
    //     return console.log(err)
    //   }
    //   // fs.readFile(file, 'utf8', callback) can also be used
    //   const lines = contents.toString().split('\n').length - 1
    //   console.log(lines)
    // })