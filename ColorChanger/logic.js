const spanbutton=document.querySelectorAll("#col");
let color=["white","black","blue","red"];

let i=0;
spanbutton.forEach(button=>{
   button.addEventListener("click",()=>{
       document.body.style.backgroundColor=button.textContent;
       button.style.backgroundColor=button.textContent;
    });
});