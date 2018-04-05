function validator() {
    for(i = 0; i < document.forms[0].length - 1; i++) {
        var objName = document.forms[0][i].name;
        var obj = document.forms[0][i].value;
        if (obj == "") {
            outPt("Incorrect submition in the " + "'" + objName + "'" + " field.");
            return false;
        }

        if (objName == "Email") {
            for (j = 0; j < obj.length - 1; i++) {
                if(obj.charAt(j) == "@") {
                    return checkEmail();
                }
                if (exists == true) {
                    obj.focus();
                    return true;
                } else {
                    outPt("Invalid Email");
                    return false;
                }
            }
        } else {
            clearOutPt();
        }
    }
}

function checkEmail() {
    for (x = 0; x < obj.length - 1; i++);
        if (obj.charAt(x) == ".") {
            var exists = 1;
            return true;
        } else {
            return false;
        }
}

function outPt(value) {
    document.getElementById("output").innerHTML = value;
}

function clearOutPt() {
    document.getElementById("output").innerHTML = "";
}
