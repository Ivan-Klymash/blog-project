
// приховуємо звичайне Menu на мобільному телефоні а виводимо гамбургер-меню
/* toggle mobile menu */

// знаходимо наші 2 меню:
let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

// перевіримо в консолі чи знайшлись ці елементи:
// console.log(mobileMenu)
// console.log(mainMenu)

// додаємо і забираємо клас
mobileMenu.addEventListener("click", function () {
    // додаємо при кліку клас .active-menu
    mobileMenu.classList.toggle("active-menu");
    // прописуємо якщо клас .active-menu є то головне меню додаємо, якщо його немає то клас .active-menu видаляємо
    if (mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu")
    }
});



// Модальне вікно
let modalWindow = document.querySelector(".modal-window");
let modalCloseBtn = document.querySelector(".modal-close-btn");

function openModal() {
    modalWindow.classList.add("show");
    modalWindow.classList.remove("hide")
}
function closeModal() {
    modalWindow.classList.remove("show");
    modalWindow.classList.add("hide")
}
modalCloseBtn.addEventListener("click", closeModal)


function showModalByScroll () {
    if(window.pageYOffset > document.documentElement.scrollHeight/2) {
        openModal()
        window.removeEventListener("scroll", showModalByScroll)
    }
}
window.addEventListener("scroll", showModalByScroll)

modalWindow.addEventListener("click", function(e) {
    if(e.target === modalWindow) {
        closeModal()
    }
})