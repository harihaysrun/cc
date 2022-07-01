// const container = document.getElementById("container")
const outerContainer = document.getElementById("outer-container")
const container = document.getElementsByClassName("container")
const bg = document.getElementsByClassName("bg")
const workMenu = document.getElementById("work-menu")
const popupContainer = document.getElementById("popup-container")
const closeBtn = document.getElementById("close-popup")

const bgContainer = document.getElementById("background-container")
const fgContainer = document.getElementById("foreground-container")

let bgOneWidth;
let bgTwoWidth;
let fullWidth = 0;


// container[0].addEventListener("wheel", function(event){
//     event.preventDefault()
//     container[0].scrollLeft += event.deltaY
// })

// // console.log(container.length)
// for(i=0;i<container.length;i++){
//     console.log(container[i])
//     container[i].addEventListener("wheel", function(event){
//         event.preventDefault()
//         container[i].scrollLeft += event.deltaY
//     })
// }

console.log(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
    console.log("mobile")
    container[0].style.overflow = "auto"

   } else{
    console.log("not mobile")
    window.addEventListener("wheel", function(event){
        // event.preventDefault()
        // event.stopImmediatePropagation()
        bgContainer.scrollLeft += event.deltaY
        // fgContainer.scrollLeft += event.deltaY
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

window.addEventListener("load", getBgWidth);
// window.addEventListener("resize", getBgWidth);
function scrollPosition(){
    container[0].addEventListener("scroll", function(){
        // else {
            if (container[0].scrollLeft > (bgOneWidth - (window.innerWidth / 2))){
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

    // setTimeout(function(){
        let boxes = document.getElementsByClassName("box");
        for(let i=0; i<(boxes.length / 2);i++){
            fullWidth += boxes[i].getBoundingClientRect().width;
            // console.log(boxes[i].getBoundingClientRect().width)
        }
        // console.log(container.getBoundingClientRect().width)
        console.log(fullWidth)
        container[0].style.height = `${fullWidth}px`;
        // container[0].style.height = `${fullWidth}px`;

    // },2000)
    window.addEventListener("scroll", function(event){
        event.preventDefault()
        console.log(window.scrollY)
        // window.scrollTo(0,window.scrollY)
        // window.scrollTop(0)
        // container.scrollLeft = `${window.scrollY}px`
        if(window.scrollY <= fullWidth){
            // bgContainer
// fgContainer
            container[0].style.transform = `translateX(-${window.scrollY}px)`;
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
    popupContainer.style.display = "flex";

})

closeBtn.addEventListener("click", function(){
    popupContainer.style.display = "none";

})


const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const clientLogosContainer = document.getElementById("client-logos");

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

