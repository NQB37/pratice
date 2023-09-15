let icon = document.querySelector(".header__btn__icon"),
    menu = document.querySelector("#menu"),
    liEle = document.querySelectorAll("li a");

liEle.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector("li a.active").classList.remove("active");
        btn.classList.add("active");
    });
});

icon.addEventListener("click", () => {
    menu.classList.toggle("open");
    icon.classList.toggle("active");
});
