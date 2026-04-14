// Selected button 
const theme_button = document.querySelector("#theme-toggle");

// Selected message of button to change 
const button_message = document.querySelector("#theme-message")

// Function that changes theme and text of button
function changeTheme() {
  var element = document.body;
  element.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode"))
    button_message.textContent = "Change to Light Mode";
  else
    button_message.textContent = "Change to Dark Mode";
} 


// Event listener that uses function when button is clicked
theme_button.addEventListener("click", changeTheme)