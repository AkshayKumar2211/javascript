let min=document.querySelector("#min");
let max=document.querySelector("#max");

let slideMax=document.querySelector("#slideMax");

let slidermin=document.querySelector("#slideMin");



slidermin.addEventListener("input" , (e)=>{
    min.value=e.target.value;
})

sliderMax=document.addEventListener("input" , (e)=>{
    max.value=e.target.value;
})



