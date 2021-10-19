addEventListener('DOMContentLoaded', () => {
const btnMenu = document.querySelector('.btn-menu');
if(btnMenu){
    btnMenu.addEventListener('click', () => {
        const menuItems = document.querySelector('.menu-items');
        menuItems.classList.toggle('show');
    })
}
});

