const nameInput = document.getElementById("name"); 
const numberInput = document.getElementById("telephone");
const formElement = document.getElementById("form-input");
const msgElement = document.getElementById("message"); // getting the required elements from the document.
const confirmationColor = "#00C896"
const errorColor = "#E87B77"; // defining the color of error messages
const alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" "); // generating the list of English letters
const digits = "1 2 3 4 5 6 7 8 9 0".split(" "); // generating the list of digits

function displayMessage(msg, color) {
    // this function is responsible for setting the msgElement's text to the messages as well as corresponding background colors
    msgElement.innerHTML = msg;
    msgElement.style.background = color;
    msgElement.style.padding = "1rem";
}

formElement.addEventListener("submit", (event) => {
    event.preventDefault(); // preventing the default submit behaviour. this way, the page won't reload on submission of the data by the user.
    const name = nameInput.value.trim(); 
    const phoneNumber = numberInput.value.trim(); // getting rid of whitespace in the beginning and in the end of the strings
    let nameError = false;
    let numberError = false; // declaring boolean variables to detect errors
    let errorMsg = "Something went wrong. Please, check the input fields again. Don't use any symbols except '+' to begin the phone number.";
    
    if (name == '' ||  phoneNumber == '' || name.length < 2 || name.length > 50){
        nameError = true;
        numberError = true;
        displayMessage(errorMsg, errorColor);
    }
    else {
        for (let char of name){
            if (!alphabet.includes(char.toLowerCase())){
                if (char == " "){
                    continue; // allowing whitespace inside of a name. this way, such names as "van Gogh" are valid
                }
                nameError = true;
            }
        }
        if (phoneNumber[0] == "+" && phoneNumber.length > 5){
            for (let i = 1; i<phoneNumber.length; i++){
                if (!digits.includes(phoneNumber[i])){
                    // checking if the number begins with a plus sign and is longer than 4 digits. After that, checking each symbol agaisnt the valid digits. If the digit isn't valid, setting the boolean variable to true.
                    numberError = true;
                }
        }}
        else {
            numberError = true;
        }
        if (!nameError && !numberError){
            let finalMessage = `Dear ${name}, our specialists will contact you as soon as possible. Please, wait!`;
            displayMessage(finalMessage, confirmationColor); // displaying the user-friendly confirmation message
        }
        else {
            displayMessage(errorMsg, errorColor);
        }
    }
})