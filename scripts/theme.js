// Selected button 
const theme_button = document.querySelector("#theme-toggle");

// Selected message of button to change 
const button_message = document.querySelector("#theme-message")

// Function that changes text of button
function changeTheme() {
  var element = document.body;
  element.classList.toggle("darkmode");
} 


// Event listener that uses function when button is clicked
theme_button.addEventListener("click", changeTheme)