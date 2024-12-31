const modeBtn = document.getElementById('toggleMode');
const body = document.body;

modeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    body.classList.contains('dark-mode') ? modeBtn.textContent = 'light' : modeBtn.textContent = 'Dark'
});


const backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function() {
    if ( document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
    // window.scrollTo({top : 0 , behavior : 'smooth'})
});