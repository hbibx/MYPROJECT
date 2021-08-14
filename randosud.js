const bouton1=document.getElementById('btn1');

const div=document.getElementById("ha");




bouton1.addEventListener('click',onClick1);


function onClick1()
{
    let text=document.getElementById('txt1').value;
    let val=parseInt(text);
    console.log(val*50);
    let res1=document.createElement('p');
      res1.textContent=val*50;
      div.appendChild(res1);
    
   
}
