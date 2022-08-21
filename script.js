const navbarEl =document.querySelector(".navbar");
const buttoncontainerEl = document.querySelector(".button-container");

console.log(navbarEl.offsetTop);
console.log(buttoncontainerEl.offsetHeight);

window.addEventListener("scroll", ()=>{
    if(window.scrollY > buttoncontainerEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active");
    } else{
        navbarEl.classList.remove("active")
    }
})
    
