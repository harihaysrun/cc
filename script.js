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

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
    console.log("mobile")
    container.style.overflowY = "hidden"
    container.style.overflowX = "auto"
    // fgContainer.style.overflow = "auto"
    // fgContainer.style.display = "block"
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
        // event.preventDefault()
        // event.stopImmediatePropagation()
        if(event.deltaY < 0){
            character.classList.add('character-backwards');
            balloonText.classList.add('balloon-text-backwards');
            // balloonText.style.transform = "rotateY(180deg)"
            // balloonText[0].style.backgroundColor = "pink"
        } else{
            character.classList.remove('character-backwards');
            balloonText.classList.remove('balloon-text-backwards');
            // character.style.transform = "rotateY(0deg)"
            // balloonText.style.transform = "rotateY(0deg)"
        }
        container.scrollLeft += event.deltaY
        // fgContainer.scrollLeft += event.deltaY
        // console.log(container.scrollLeft)
        if(container.scrollLeft > (bg[0].getBoundingClientRect().width / 5)){
            console.log("balloon apear!")
            balloon.style.display = "flex"
        } else {
            balloon.style.display = "none"
        }
    })
        
}

// fgContainer.addEventListener("wheel", function(event){
//     event.preventDefault()
//     fgContainer.scrollLeft += event.deltaY
// })

// window.addEventListener("scroll", function(event){
//         event.preventDefault()
//         window.scrollY = window.scrollX
//     console.log(window.scrollY)
//     container.scrollLeft = window.scrollX
// })

// window.addEventListener("load", getBgWidth);
// window.addEventListener("resize", getBgWidth);
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
    // bgOneWidth = bg[0].getBoundingClientRect().width;
    // bgTwoWidth = bg[1].getBoundingClientRect().width;
    // changePosition()

    // if(window.innerWidth > (bgOneWidth * 1.75) ){
    //     // workMenu.style.display = "block"
    //     workMenu.classList.add("work-menu-appear")
    // } else {

    //     scrollPosition()
    // }

    // setTimeout(function(){
        let boxes = document.getElementsByClassName("box");
        for(let i=0; i<(boxes.length / 2);i++){
            fullWidth += boxes[i].getBoundingClientRect().width;
            // console.log(boxes[i].getBoundingClientRect().width)
        }
        // console.log(container.getBoundingClientRect().width)
        console.log(fullWidth)
        container.style.height = `${fullWidth}px`;
        // container.style.height = `${fullWidth}px`;

    // },2000)
    window.addEventListener("scroll", function(event){
        event.preventDefault()
        console.log(window.scrollY)
        // window.scrollTo(0,window.scrollY)
        // window.scrollTop(0)
        // container.scrollLeft = `${window.scrollY}px`
        if(window.scrollY <= fullWidth){
            // container
// fgContainer
            container.style.transform = `translateX(-${window.scrollY}px)`;
            // fgContainer.style.transform = `translateX(-${window.scrollY}px)`;
        }
    })

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

let slideNo = 1;

nextBtn.addEventListener("click", function(){
    slideNo++;
    console.log(clientLogosContainer.getBoundingClientRect().width)
    clientLogosContainer.scrollLeft = clientLogosContainer.getBoundingClientRect().width;
})

prevBtn.addEventListener("click", function(){
    if(slideNo > 1){   
        slideNo--;
        console.log(clientLogosContainer.getBoundingClientRect().width)
        clientLogosContainer.scrollLeft = -clientLogosContainer.getBoundingClientRect().width;
    }
   })

// window.addEventListener("touchstart", touchStart, false);
// window.addEventListener("touchmove", touchMove, false);

// var start = {x:0, y:0};

// function touchStart(event) {
//   start.x = event.touches[0].pageX;
//   start.y = event.touches[0].pageY;
// }

// function touchMove(event) {
//   offset = {};

//   offset.x = start.x - event.touches[0].pageX;
//   offset.y = start.y - event.touches[0].pageY;

//   return offset;  
// }

