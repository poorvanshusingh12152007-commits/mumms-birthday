const audio = document.getElementById('hbdMusic');
const bgStuff = document.getElementById('bgStuff');
const items = ['🎂', '🕯️', '🌸', '🧁', '✨', '🎈'];

// Populate the background with random items
for (let i = 0; i < 30; i++) {
    let item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = items[Math.floor(Math.random() * items.length)];
    item.style.left = Math.random() * 95 + 'vw';
    item.style.animationDuration = (Math.random() * 5 + 7) + 's';
    item.style.animationDelay = (Math.random() * 10) + 's';
    bgStuff.appendChild(item);
}

function showPage(id) {
    // Play the Happy Birthday track
    audio.play().catch(() => console.log("Awaiting user interaction for audio"));

    // Show the hidden message box
    document.querySelectorAll('.content-box').forEach(el => {
        el.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');

    // Fire Confetti!
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#ff8fa3', '#ffd700', '#ffffff']
    });
}