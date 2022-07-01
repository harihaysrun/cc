const container = document.getElementById("container")
const bg = document.getElementsByClassName("bg")
const workMenu = document.getElementById("work-menu")
const popupContainer = document.getElementById("popup-container")
const closeBtn = document.getElementById("close-popup")

// container.addEventListener("wheel", function(event){
//     event.preventDefault()
//     container.scrollLeft += event.deltaY
// })


// window.addEventListener("scroll", function(event){
//         event.preventDefault()
//         window.scrollY = window.scrollX
//     console.log(window.scrollY)
//     container.scrollLeft = window.scrollX
// })

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

    // setTimeout(function(){
        let fullWidth = 0;
        let boxes = document.getElementsByClassName("box");
        for(let i=0; i<boxes.length;i++){
            fullWidth += boxes[i].getBoundingClientRect().width;
            // console.log(boxes[i].getBoundingClientRect().width)
        }
        // console.log(container.getBoundingClientRect().width)
        console.log(fullWidth)
        container.style.height = `${fullWidth}px`;
        container.style.width = `${fullWidth}px`;
    // },2000)
    window.addEventListener("scroll", function(event){
        event.preventDefault()
        console.log(window.scrollY)
        // window.scrollTo(0,window.scrollY)
        // window.scrollTop(0)
        // container.scrollLeft = `${window.scrollY}px`
        if(window.scrollY <= fullWidth){
            container.style.transform = `translateX(-${window.scrollY}px)`;
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