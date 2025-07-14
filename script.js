// sticky navbar
function searchGame() {
    let input = document.getElementById('search-box').value.toLowerCase();
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        let gameName = cards[i].getElementsByTagName('h4')[0].innerText.toLowerCase();

        if (gameName.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.getElementById("Games").scrollIntoView({ behavior: 'smooth' });
    }
});
//    hide register button

window.onload = function () {
    // Check if the user is already registered
    if (localStorage.getItem('isRegistered') === 'true') {
        // Hide the Register button
        document.getElementById('registerButton').style.display = 'none';
    }
};

// Register User Function
function registerUser() {
    // Set a flag in localStorage to indicate the user is registered
    localStorage.setItem('isRegistered', 'true');

    // Hide the Register button
    document.getElementById('registerButton').style.display = 'none';
}

// Mode Dark And Light


const modeBtn = document.querySelector("#mode");
const body = document.body;

// Initial mode
let currMode = "light";
body.classList.add("light-mode", "transition");

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    body.classList.replace("light-mode", "dark-mode");
    currMode = "dark";
  } else {
    body.classList.replace("dark-mode", "light-mode");
    currMode = "light";
  }
});
