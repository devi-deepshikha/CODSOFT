const header = document.querySelector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky",window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navitems = document.querySelector('.navitems');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navitems.classList.toggle('active')
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navitems.classList.remove('active')
};

const sr = ScrollReveal({
    distance:'45px',
    duration:2700,
    reset:true
})

sr.reveal('.home-text',{delay:300,origin:'left'})
sr.reveal('.about,.projects,.skills,.contact',{delay:200,origin:'bottom'})

