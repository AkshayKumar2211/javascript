const form=document.querySelector('form')

form.addEventListener('submit',function(event)
{
    event.preventDefault();
    const height= parseInt(document.querySelector("#height").value);
    const weight= parseInt(document.querySelector("#weight").value);
    const result=document.querySelector("#result");
    if(height==="" || height<0 || isNaN(height))
    {
        result.innerHTML="Please Enter a valid heigth"
    }
    else if (weight==="" || weight<0 || isNaN(weight) )
    {
        result.innerHTML="Please Enter a valid weight"
    }
    else
    {
        result.innerHTML=(weight/((height*height)/10000)).toFixed(2);
    }



})