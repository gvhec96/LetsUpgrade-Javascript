let n = prompt("Enter the no. of strings (elements) in your array (enter number only)");
let s = 0;
if (n.length == 0) {
    s = 1;
    alert("Empty input value. Refresh the page & try again ")
}
n = Number(n);
let l = 0;
let m = 0;
var temp;
var output = "";
var narray = [];

if (Number.isNaN(n) == false && s == 0) {
    l = 1;

    for (i = 0; i < n; i++) {
        narray[i] = prompt("Enter the string " + (i + 1))
    }

    var marray = narray.slice(); // Storing the contents of the given array in another array for future reference

    // Reversing the string elements of the given array

    if (n % 2 == 0) { // Checking if length of array 'n' is an even number
        for (j = 0; j < n / 2; j++) {

            temp = narray[j];
            narray[j] = narray[n - j - 1];
            narray[n - j - 1] = temp;

        }
    } else { // For condition when length of array 'n' is an odd number
        for (k = 0; k < (n - 1) / 2; k++) {

            temp = narray[k];
            narray[k] = narray[n - k - 1];
            narray[n - k - 1] = temp;

        }
    }

    alert("The given array is: \n'' " + marray + " ''\n" + "\nThe reversed array is: \n'' " + narray + " ''"); // prints the given and reversed arrays

} else if (l == 0 & s == 0) {
    alert("Pls enter a numeric value for no. of strings. Refresh the page & try again")
}