const container = document.getElementById("container")
const bg = document.getElementsByClassName("bg")
const workMenu = document.getElementById("work-menu")
const popupContainer = document.getElementById("popup-container")
const closeBtn = document.getElementById("close-popup")

container.addEventListener("wheel", function(event){
    event.preventDefault()
    container.scrollLeft += event.deltaY
})

let bgOneWidth;
let bgTwoWidth;

window.addEventListener("load", getBgWidth);
window.addEventListener("resize", getBgWidth);
function scrollPosition(){
    container.addEventListener("scroll", function(){
        // else {
            if (container.scrollLeft > (bgOneWidth - (window.innerWidth / 2))){
                // workMenu.style.display = "block"
                workMenu.classList.add("work-menu-appear")
            }
        // }
    });
}

function getBgWidth(){
    bgOneWidth = bg[0].getBoundingClientRect().width;
    bgTwoWidth = bg[1].getBoundingClientRect().width;
    changePosition()

    if(window.innerWidth > (bgOneWidth * 1.75) ){
        // workMenu.style.display = "block"
        workMenu.classList.add("work-menu-appear")
    } else {

        scrollPosition()
    }

}

function changePosition(){
    workMenu.style.left = `${bgOneWidth}px`;
}

function workMenuPopup(){
    // console.log(container.scrollLeft)
    console.log(workMenu.getBoundingClientRect().left)
    // if (workMenu.getBoundingClientRect().left <= (window.innerWidth)){
    if (workMenu.getBoundingClientRect().left <= 500){
        // workMenu.style.display = "block"
        workMenu.classList.add("work-menu-appear")
    } 
    // else {
    //     workMenu.style.display = "none"
    // }
}


workMenu.addEventListener("click", function(){
    console.log("menu clicked!")
    // popupContainer.classList.add("overlay-appear")
    popupContainer.style.display = "flex";

})

closeBtn.addEventListener("click", function(){
    popupContainer.style.display = "none";

})
