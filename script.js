 const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

toggle.addEventListener('click', function() {
    menu.classList.toggle("aktif");
});

const allCards = document.querySelectorAll(".card");

allCards.forEach(function(card) {
    const btn = card.querySelector(".btn");
    
    btn.addEventListener('click', function() {
        card.classList.toggle("aktif");
        
        if (card.classList.contains("aktif")) {
            btn.innerHTML = "&#10005;";
        } else {
            btn.innerHTML = "&#9776;";
        }
    });
});