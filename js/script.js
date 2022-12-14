// Input data
// Initializzation af var userName
const userName = prompt("Qual è il tuo nome?");
console.log(userName, typeof(userName));

// Initializzation af var userLastName
const userLastName = prompt("Qual è il tuo cognome?");
console.log(userLastName, typeof(userLastName));

// Initializzation af var userFavColor
const userFavColor = prompt("Qual'è il tuo colore preferito?")
console.log(userFavColor, typeof(userFavColor));

// Elaborations
// Concatenation of strings entered by the user 
const generatedPwd = userName + userLastName + userFavColor + "21"
console.log(generatedPwd, typeof(generatedPwd));

// Output
// Put userName in span#user-name
document.getElementById("user-name").innerHTML = userName;

// Put userLastName in span#user-lastname
document.getElementById("user-lastname").innerHTML = userLastName;

// Put userFavColor in span#user-fav-color
document.getElementById("user-fav-color").innerHTML = userFavColor;

// Showing generated password
document.getElementById("insecure-password").innerHTML = generatedPwd;