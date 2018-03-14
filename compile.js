var sass = require('node-sass');
var fs = require('fs');
const cssFolder = "css";
const sassFolder = "sass";

var fsTimeout = false;

function compile(file) {
    console.log("Compiling " + file);
    sass.render({
        file: sassFolder + "/" + file + ".scss",
        outFile: cssFolder + "/" + file + ".css"
    }, function (err, result) {
        if (err) {
            console.log("error");
            console.log(err);
            return;
        }
        fs.writeFile(cssFolder + "/" + file + ".css", result.css, function (err) {
            if (!err) {
                console.log("No errors");
            } else {
                console.log(err);
            }
        });
    });
}

//TODO: Make the watcher that checks for new files and file changes better

function fileChanged(eventType, fileName) {
    if (!fsTimeout) {
        if (eventType == "change") {
            if (fileName.substr(fileName.length - 5) == ".scss") {
                if (fileName.substring(0, 1) == "_") {
                    //This is a library file, so we need to compile all files
                    console.log("Library changed, compiling all files");
                    //Iterate through each file, and compile them
                    fs.readdir(sassFolder + "/", function (err, items) {

                        for (var i = 0; i < items.length; i++) {
                            let item = items[i].toString();
                            if (item.substr(item.length - 5) == ".scss") {
                                //Check to make sure that it's not a library file
                                if (item.substring(0, 1) != "_") {
                                    console.log("Compiling " + item);
                                    compile(item.substring(0, item.length - 5));
                                }
                            }
                        }
                    });
                } else {
                    compile(fileName.substring(0, fileName.length - 5));
                }
            }
        }
        fsTimeout = true;
        setTimeout(function () {
            fsTimeout = false;
        }, 1000);
    }
}


//Compile all files in the directory upon startup
console.log("Compiling all files")
//Iterate through each file, and compile them
fs.readdir(sassFolder + "/", function (err, items) {

    for (var i = 0; i < items.length; i++) {
        let item = items[i].toString();
        if (item.substr(item.length - 5) == ".scss") {
            //Check to make sure that it's not a library file
            if (item.substring(0, 1) != "_") {
                console.log("Compiling " + item);
                compile(item.substring(0, item.length - 5));
            }
        }
    }
});


//Watch the directory
fs.watch(sassFolder + "/", {
    recursive: true,
    encoding: "utf8"
}, fileChanged);

//Tell the user that it has started watching
console.log("Watching all files in " + sassFolder);