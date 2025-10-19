const changeColorbtn = document.getElementById("changeColorBtn"); //select by id
const body = document.body //selecting the entire body


function changeColor () {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'); //generating color code
    body.style.backgroundColor = randomColor;
    //.toString(16) means take first 16 digit convert it to - hexadecimal string
    //padstart(6, '0') - Ensures the hex string is always 6 
    //characters long by padding with leading zeros if needed (e.g., "3f" → "00003f").
}
changeColorbtn.addEventListener('click', changeColor);

//for automatic change
setInterval(changeColor, 3 * 1000);
