const fs = require('mz/fs');
const co = require('co');

/* CSV is BULLSHIT
*    Write a function that takes a directory and 'fixes' csv files by switching them to .txt
*    Extra bonus if it recurses into the subdirectory
 */



const hateMyBoss = function ( path ) {

    fs.readdir( path, function ( err, items ) {
        items.forEach( function(item) {
            let handle = path + '/' + item;
            if (fs.statSync(handle).isDirectory()) {
                hateMyBoss( handle );
            } else {
                if (/\.csv$/.test(handle)) {
                    console.log(handle);
                    console.log(handle.substr(0, handle.lastIndexOf(".")) + ".txt");
                    fs.rename(handle, handle.substr(0, handle.lastIndexOf(".")) + ".txt");

                }
            }
        });
    });

    return;
}



if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}

let path = process.argv[2];

hateMyBoss(path);