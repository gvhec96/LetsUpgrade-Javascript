let b = prompt("Enter the time elapsed in minutes (number only)");
let l = 0;
let m = 0;
if (b.length != 0) {
    l = 1;
    b = Number(b);
    if (Number.isNaN(b) == false) { // Checking for  if 'b' is not alphanumeric-special characters (NaN - Not a Number) 
        m = 1;
        a = b * 60;
        alert(b + " minutes is equal to " + a + " seconds "); // This will be executed only if 'b' is a number


    } else if (m == 0 && l == 1) {
        alert("Pls enter a numeric value for minutes. Refresh the page & try again")
    }

} else if (l == 0 && m == 0) {
    alert("Empty input value. Refresh the page & try again")
}