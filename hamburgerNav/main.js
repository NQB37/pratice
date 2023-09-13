let icon = document.querySelector(".header__btn__icon"),
    menu = document.querySelector("#menu");

icon.addEventListener("click", () => {
    menu.classList.toggle("open");
    icon.classList.toggle("active");
});
