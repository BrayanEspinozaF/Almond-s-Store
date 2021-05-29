let show_menu = document.getElementById('show-menu')
let nav_bar = document.getElementById('nav-bar')

show_menu.onclick = showMenu;

function showMenu(){
    nav_bar.classList.toggle('show-menu')
}