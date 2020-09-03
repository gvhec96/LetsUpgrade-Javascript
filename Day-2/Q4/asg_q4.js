let n = prompt("Enter the no. of strings (elements) in your array (enter number only)");
let s = 0;
if (n.length == 0) {
    s = 1;
    alert("Empty input value. Refresh the page & try again ")
}
n = Number(n);
let l = 0;
let m = 0;
let o = 0;
var output = "";
var narray = [];

if (Number.isNaN(n) == false && s == 0) {
    l = 1;

    for (i = 0; i < n; i++) {
        narray[i] = prompt("Enter the string " + (i + 1))
    }

    alert("Displaying strings/elements only containing 'a' in them from array \n'' " + narray + " ''");

    for (j = 0; j < n; j++) {
        m = 1;
        var r = narray[j];
        for (k = 0; k < r.length; k++) {

            if (r[k] == 'a') { // Checking if the individual elements of the string is equal to 'a'
                o = 1;
                output += "'a' is found in the string/element '' " + r + " '' having position no. " + (j + 1) + " within the array ''" + narray + "''\n\n";
                break; // Coming out of for loop when we find the first 'a' alphabet in a string. After coming out of the loop, the loop index is increased & checks for 'a' in the next string
            }


        }

    }
    if (m == 1 && o == 1) {
        alert(output);
    } else if (m == 0) {
        alert("The string/element that you are looking for is not found in the array")
    } else if (m == 1 && o == 0) {
        alert("None of the strings/elements in the given array contain 'a'");
    }


} else if (l == 0 & s == 0) {
    alert("Pls enter a numeric value for no. of strings. Refresh the page & try again")
}