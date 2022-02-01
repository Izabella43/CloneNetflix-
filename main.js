function menuToggle() {
    let menuPrincipal = document.getElementById("menu-principal");
    if (menuPrincipal.classList.contains('menu-opened') == true) {
        menuPrincipal.classList.remove('menu-opened');
    } else {
        menuPrincipal.classList.add('menu-opened');
    }
}