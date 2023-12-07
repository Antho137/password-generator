const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordLength = 15;

const generateBtn = document.getElementById('generate-btn');
const resetBtn = document.getElementById('reset-btn');
const firstPassword = document.getElementById('first-pass');
const secondPassword = document.getElementById('second-pass');


generateBtn.addEventListener("click", function () {
    for (let i = 0; i < passwordLength; i++) {
        let randomPassword1 = Math.floor(Math.random() * characters.length);
        let randomPassword2 = Math.floor(Math.random() * characters.length);
        firstPassword.innerHTML += characters[randomPassword1];
        secondPassword.innerHTML += characters[randomPassword2];
    }
    generateBtn.disabled = true;
});

resetBtn.addEventListener("click", function () {
    firstPassword.innerHTML = "";
    secondPassword.innerHTML = "";
    location.reload();
});
