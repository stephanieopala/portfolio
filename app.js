const toggleBtn = document.querySelector(".nav__togglebtn");
const list = document.querySelector(".nav__list");

toggleBtn.addEventListener("click", () =>{
    list.classList.toggle ("active");
})