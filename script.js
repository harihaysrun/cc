const container = document.getElementById("container")
const outerContainer = document.getElementById("outer-container")
const boxes = document.getElementsByClassName("box")
const bg = document.getElementsByClassName("bg")
const character = document.querySelector(".character")
const balloon = document.querySelector(".balloon")
const balloonText = document.getElementById("balloon-text")
const workMenu = document.getElementById("work-menu")
const popupContainer = document.getElementsByClassName("popup-container")
const closeBtn = document.getElementsByClassName("close-popup")
const reelBtn = document.getElementById("play-reel")
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const clientLogosContainer = document.getElementById("client-logos");

let bgOneWidth;
let bgTwoWidth;
let fullWidth = 0;

window.addEventListener("load", getBgHeight);
window.addEventListener("resize", getBgHeight);

function getBgHeight(){
    for (box of boxes){
        box.style.height = `${window.innerHeight}px`;
    }
}

console.log(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
console.log(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i.test(navigator.userAgent))

// detect if device is mobile = swipe left & right. if not mobile, use scroll
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
    console.log("mobile")
    container.style.overflowY = "hidden";
    container.style.overflowX = "auto";

    let prevPos = 0;
    container.addEventListener("scroll", function(){
        let currentPos = container.scrollLeft;
        if(currentPos > prevPos){
            if(currentPos > (bg[0].getBoundingClientRect().width / 5) ){
                balloon.style.display = "flex"
            }
            character.classList.remove('character-backwards');
            balloonText.classList.remove('balloon-text-backwards');
        } else{
            if(currentPos < (bg[0].getBoundingClientRect().width / 5) ){
                balloon.style.display = "none"
            }
            character.classList.add('character-backwards');
            balloonText.classList.add('balloon-text-backwards');
        }
        prevPos = currentPos;
    })

} else{
    console.log("not mobile")
    container.addEventListener("wheel", function(event){
        if(event.deltaY > 0){
            if(container.scrollLeft > (bg[0].getBoundingClientRect().width / 5)){
                balloon.style.display = "flex";
            }
            character.classList.remove('character-backwards');
            balloonText.classList.remove('balloon-text-backwards');
        } else{
            if(container.scrollLeft < (bg[0].getBoundingClientRect().width / 5)){
                balloon.style.display = "none";
            }
            character.classList.add('character-backwards');
            balloonText.classList.add('balloon-text-backwards');
        }
        container.scrollLeft += event.deltaY;
        
    })
        
}

workMenu.addEventListener("click", function(){
    popupContainer[0].style.display = "flex";

})

reelBtn.addEventListener("click", function(){
    popupContainer[1].style.display = "flex";
})

for(let i=0;i<closeBtn.length;i++){
    closeBtn[i].addEventListener("click", function(){
        popupContainer[i].style.display = "none";
    })
}

// dummy carousel
let slideNo = 1;

nextBtn.addEventListener("click", function(){
    slideNo++;
    prevBtn.classList.add('prev-active');
    nextBtn.classList.add('next-inactive');
    clientLogosContainer.scrollLeft = clientLogosContainer.getBoundingClientRect().width;
})

prevBtn.addEventListener("click", function(){
    if(slideNo > 1){   
        slideNo--;
        prevBtn.classList.remove('prev-active');
        nextBtn.classList.remove('next-inactive');
        clientLogosContainer.scrollLeft = -clientLogosContainer.getBoundingClientRect().width;
    } 
})