let barsIcon = document.querySelector(".bars") 
let barsBlock = document.querySelector(".barsBlock") 


barsIcon.addEventListener("click", () =>{
    barsBlock.classList.toggle("active")
})