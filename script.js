

const openBtn = document.getElementById("hamburguer");
const closeBtn = document.getElementById("closeMenu");
const menu = document.getElementById("menuMobile");
const menuBox = document.querySelector(".menu-container");

openBtn.addEventListener("click", () => {
    menu.classList.add("active");
    document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
    document.body.style.overflow = "";
});

menu.addEventListener("click", (e) => {
    if (!menuBox.contains(e.target)) {
        menu.classList.remove("active");
        document.body.style.overflow = "";
    }
});

document.querySelectorAll("#menuMobile a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        document.body.style.overflow = "";
    });
});
