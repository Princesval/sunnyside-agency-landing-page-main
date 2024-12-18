const mobileMenu = document.getElementById("menu-button");
const menuContainer = document.getElementById("floating-menu-container");
const arrow = document.getElementById("arrow-img-h1");
const title = document.getElementById("title");

mobileMenu.addEventListener('click', () => {
    if (menuContainer.style.display !== 'block') {
        menuContainer.style.display = 'block';
        arrow.style.display = 'none';
        title.style.display = 'none';
    } else {
        menuContainer.style.display = 'none';
        arrow.style.display = 'block';
        title.style.display = 'block';
    }
});
