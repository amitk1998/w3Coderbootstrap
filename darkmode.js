




const btn = document.getElementById('dark');

btn.addEventListener('click', function onClick(event) {

    function darkmodeFun() 

{
   
var element = document.body;
   
element.classList.toggle("dark-mode");

}  

  const backgroundColor = btn.style.backgroundColor;

  if (backgroundColor === 'white') {
    btn.style.backgroundColor = 'black';

  
  } else {
    btn.style.backgroundColor = 'white';


  }
});

