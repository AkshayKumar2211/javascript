const sel=document.getElementById("subjects");
//created a small subject slecter which show slected subject using chanhe eventlistener.
sel.addEventListener("change",()=>
{
  let x=sel.value;
  document.getElementById("SelSubject").innerText=`Selected subject is ${x}`;
});