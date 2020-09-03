let b = prompt("Enter the string");
let f = 0;
let l = 0;
var output = "";

if (b.length != 0) {
    let c = prompt("Enter the character to search for");
    if (c.length != 0) {
        alert("The entered string is '" + b + "' & the character to search for is '" + c + "'");
        for (var i = 0; i < b.length; i++) {
            if (b[i] == c) {
                f = 1;
                output += "LOCATION " + (i + 1) + "\n'" + c + "' is found in the position no. " + (i + 1) + " of the string '" + b + "'\n\n";
            }
        }
        if (f == 1) {
            alert(output);
        }

    } else {
        l = 1;
        alert("Empty character entered. Pls refresh the page & try again");
    }


} else {
    l = 1;
    alert("Empty string entered. Pls refresh the page & try again");
}
if (f == 0 && l == 0) {
    alert("Character not found in given string\n");
} else if (l == 0) {
    alert("THANK YOU! ಧನ್ಯವಾದಗಳು!!")
}