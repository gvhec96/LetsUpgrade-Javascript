let n = prompt("Enter the no. of strings (elements) in your array (enter number only)");
let s = 0;
if (n.length == 0) {
    s = 1;
    alert("Empty input value. Refresh the page & try again ")
}
n = Number(n);
let l = 0;
let m = 0;
var output = "";
var narray = [];

if (Number.isNaN(n) == false && s == 0) {
    l = 1;

    for (i = 0; i < n; i++) {
        narray[i] = prompt("Enter the string " + (i + 1))
    }

    var q = prompt("Enter the string/element that you want to search for in the array");

    for (j = 0; j < n; j++) {
        if (narray[j] == q) {
            m = 1;
            output += "LOCATION " + (j + 1) + "\n'" + q + "' is found in the position no. " + (j + 1) + " of the array ''" + narray + "''\n\n";
        }
    }
    if (m == 1) {
        alert(output);
    } else if (m == 0) {
        alert("The string/element that you are looking for is not found in the array")
    }


} else if (l == 0 & s == 0) {
    alert("Pls enter a numeric value for no. of strings. Refresh the page & try again")
}