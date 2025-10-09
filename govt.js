var current_yr = 2025;
var birth_yr = 2018;
var age = current_yr - birth_yr;
if (age == 10) {
    console.log("You are eligible for the govt. scheme scholarship of rs.1000");
}
else if (age == 11) {
    console.log("You are eligible for the govt. scheme scholarship of rs.1200");
}
else if (age == 12) {
    console.log("You are eligible for the govt. scheme scholarship of rs.1400");
}
else if (age == 14) {
    console.log("You are eligible for the govt. scheme scholarship of rs.1600");
}
else if (age == 15) {
    console.log("You are eligible for the govt. scheme scholarship of rs.2000");
}
else if (age >= 20) {
    console.log("You are not eligible for the govt. scheme scholarship of rs.5000");
}
else {
    console.log("You are not eligible for the govt. scheme scholarship");
}