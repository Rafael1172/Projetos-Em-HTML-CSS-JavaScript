// window.addEventListener("scroll", function(){
//     let header = document.querySelector('#header')
//     header.classList.toggle('rolagem', window.scrollY > 400)
// })

let lastScroll = 0;
const menu = document.getElementById("menu");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        menu.classList.add("hidden");
    } else {
        menu.classList.remove("hidden");
    }

    lastScroll = currentScroll;
});