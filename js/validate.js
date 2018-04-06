var exists;

function validator() {
    clearOutPt();
    for(i = 0; i < document.forms[0].length - 1; i++) {
        var objName = document.forms[0][i].name;
        var obj = document.forms[0][i].value;
        if (obj == "") {
            outPt("Incorrect submition in the " + "'" + objName + "'" + " field.");
            return false;
        }
        if (!(checkEmail())) {
            outPt("Invalid Email");
            return false;
        }
    }
}

function checkEmail() {
    var email = document.getElementsByName("Email")[0].value;
    return /\S+@\S+\.\w+/.test(email);
}

function outPt(value) {
    document.getElementById("output").innerHTML = value;
}

function clearOutPt() {
    document.getElementById("output").innerHTML = "";
}
