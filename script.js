function searchGame() {
    let input = document.getElementById("search-box").value
        .toLowerCase()
        .trim();

    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName("h4")[0];
        if (!title) continue;

        let gameName = title.innerText.toLowerCase();

        if (gameName.startsWith(input) || gameName.includes(input)) {
            cards[i].hidden = false;   
        } else {
            cards[i].hidden = true;  
        }
    }
}


// =============================
// SCROLL ON ENTER
// =============================
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let games = document.getElementById("Games");
        if (games) {
            games.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// =============================
// HIDE REGISTER BUTTON
// =============================
window.onload = function () {
    if (localStorage.getItem('isRegistered') === 'true') {
        let btn = document.getElementById('registerButton');
        if (btn) btn.style.display = 'none';
    }
};

function registerUser() {
    localStorage.setItem('isRegistered', 'true');
    let btn = document.getElementById('registerButton');
    if (btn) btn.style.display = 'none';
}

// =============================
// DARK / LIGHT MODE (ERROR SAFE)
// =============================
const modeBtn = document.querySelector("#mode");
const body = document.body;

let currMode = "light";
body.classList.add("light-mode", "transition");

if (modeBtn) {   // ✅ NULL SAFETY
    modeBtn.addEventListener("click", () => {
        if (currMode === "light") {
            body.classList.replace("light-mode", "dark-mode");
            currMode = "dark";
        } else {
            body.classList.replace("dark-mode", "light-mode");
            currMode = "light";
        }
    });
}
