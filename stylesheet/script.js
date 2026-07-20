// dropdown
const dropdownButtons = document.querySelectorAll('.dropdown-btn, .location-dropdown-btn');

dropdownButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const content = this.nextElementSibling;
        if (!content) return;
        this.classList.toggle('active');
        content.classList.toggle('active');
    });
});

// book-recommendation
const displayDiv = document.getElementById("book-recommendation");
const generateBtn = document.getElementById("generate-btn");

const recommendations = [
    "👑 'The Serpent and the Wings of Night' by Carissa Broadbent (Crowns of Nyaxia Series) - Vampires, a deadly trial, and forced proximity.",
    "⚔️ 'From Blood and Ash' by Jennifer L. Armentrout - A hidden maiden, a deadly protector, and massive kingdom secrets.",
    "🩸 'Throne of Glass' by Sarah J. Maas - An elite assassin serving a tyrant king in a world where magic is banned.",
    "🌙 'When the Moon Hatched' by Sarah A. Parker (Moonfall Series) - Deep world-building, ancient dragons, and a fierce, grieving protagonist.",
    "🦅 'Quicksilver' by Callie Hart - A desert wasteland, a dangerous Fae commander, and an accidental bond.",
    "⚓ 'The Bridge Kingdom' by Danielle L. Jensen - A warrior princess sent as a spy to marry and assassinate a rival king.",
    "🛡️ 'A Fate Inked in Blood' by Danielle L. Jensen (Saga of the Unfated) - Norse-inspired mythology, shield maidens, and magic bound by blood.",
    "✨ 'House of Earth and Blood' by Sarah J. Maas (Crescent City Series) - Urban fantasy, high stakes, an intricate murder mystery, and angels."
];

function getRandomRecommendation() {
    displayDiv.classList.add("fade-out");

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * recommendations.length);
        displayDiv.textContent = recommendations[randomIndex];
        displayDiv.classList.remove("fade-out");
    }, 200); 
}

generateBtn.addEventListener("click", getRandomRecommendation);


