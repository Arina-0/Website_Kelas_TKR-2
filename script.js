const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');

});

    function toggleCards(cardType) {
        const cardContainers = ['siswaCards', 'guruCards', 'piketCards', 'strukturCards', 'jadwalPelajaran', 'kegiatanKelas', 'gallery'];

        // Sembunyikan semua kartu
        cardContainers.forEach(id => {
            const container = document.getElementById(id);
            if (container) {
                container.style.display = id === cardType ? "flex" : "none";
            }
        });
    
}    

const navItems = document.querySelectorAll('.nav-list a');

function getRandomColor() {
    const colors =[ 'white', 'black', 'gray'];
    return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(() => {
    navItems.forEach(item => {
        item.style.color = getRandomColor();
    });
}, 1000);


document.getElementById('gallery-button').addEventListener('click', () => {
    toggleCards('gallery');
});
document.getElementById('gallery').style.display = 'flex';
