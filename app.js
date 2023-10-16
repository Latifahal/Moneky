const closedFace = document.querySelector(".closed")
const openFace = document.querySelector(".open")


// console.log(closedFace, openFace );





//  when i click on the closed face the closed face should be hidden and the open face should be displayed

closedFace.addEventListener("click", function(){
    console.log("YOu clicked the closed face");

    if(openFace.classList.contains("open")){
        openFace.classList.add("active");
        closedFace.classList.remove("active")
    }
} )




openFace.addEventListener("click", () => {
    console.log("YOu clicked the open face");

    if(openFace.classList.contains('open')){
        closedFace.classList.add('active');
        openFace.classList.remove('active')
    }
})