var current_yr = 2025;
var birth_yr = 2011;
var age = current_yr - birth_yr;
if (age >= 18) {
    console.log("You are eligible to apply for a major PAN card");
}
else if (age >= 16) {
    console.log("You are eligible to apply for a minor PAN card");
}
else {
    console.log("You are not eligible to apply for a PAN card");
}