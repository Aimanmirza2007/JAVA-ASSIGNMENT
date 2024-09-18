// // Question no 1
alert("My name is Aiman")

// //Question no 2
  var meassage = "Thanks for the Visited";
 var username = "Aiman Mirza";
 console.log(username)
 alert( meassage  +" "+ username);
  console.log(` ${meassage}  ${username}`)



// // Question no 3
var a = 4; 
var b = 2;

console.log(a++ + --b - --a + b++ + a + b);

//Question no 4
var college = prompt("In which college you want to take addmission")
var option = prompt("Which field you like to choose")
var percentage = prompt("What was your percentage in previous year?")
if (
    college === "PCHS" &&
    option === "Computer science", "Bio", "Pre enginerring" &&
    percentage >= 70
) {
    alert("your addmission wil be done in this college")
}
else if (
    percentage < 70
) {
    alert("your addmission wil be  not done in this college")
}
else (
    alert("your not Qualified")
)










