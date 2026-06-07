let min=document.querySelector("#min");

let slidermin=document.querySelector("#slideMin")

min.addEventListener("input" ,(e)=>{
    e.value=slidermin.value;
    console.log(slidermin.value);
})