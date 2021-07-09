const toggleBtn = document.querySelector(".nav__togglebtn");
const list = document.querySelector(".nav__list");
const navItem = document.querySelectorAll(".nav__item");

toggleBtn.addEventListener("click", () =>{
    list.classList.toggle ("active");
});

navItem.forEach(navMenu => {
    navMenu.addEventListener("click", () => list.classList.toggle("active"))
})