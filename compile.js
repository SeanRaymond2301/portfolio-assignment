var sass = require('node-sass');

var fs = require('fs');

const cssFolder = "css";

const sassFolder = "sass";



console.log(new Date());



function compile(file) {

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



//Iterate through all the sass files in the

fs.readdir("sass/", function (err, items) {



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
