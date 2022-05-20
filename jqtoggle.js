//The below function will make sure to ready the document for execution while loading the html pages and html pages 
// loaded then till that interval the below function will ready to rock   

$('document').ready(function()
{
//.....................Continue Reading 1 starts from here............................!

//This below fun hold the hide untill user clicks on "Continue Reading " Button
$("#showme1").hide();

//When user clicks on button of class '.shown1' then toggle method will switch show~hide and callback function
// "function()" will callback and execute the msg on console
//toggle() method will show and hide the holded contents by Id '#showme1' 

$('.shown1').on(

    {   
   
   click:function()
{
   $('#showme1').toggle(1500,function()
   {
       console.log("Text has been shown successfully",this);
   });
   
}


});


//.......................Continue Reading 1 ends here!.............................!


//.....................Continue Reading 2 starts from here.........................!

  //This below fun hold the hide untill user clicks on "Continue Reading " Button
  $("#showme2").hide();
    
    
//When user clicks on button of class '.shown2' then toggle method will switch show~hide and callback function
// "function()" will callback and execute the msg on console
//toggle() method will show and hide the holded contents by Id '#showme2' 

  $('.shown2').on(

   {   
  
  click:function()
{
  $('#showme2').toggle(1500,function()
  {
      console.log("Text has been shown successfully",this);
  });
  
}


});



//.......................Continue Reading 2 ends here!.............................!


//.....................Continue Reading 3 starts from here.........................!

  //This below fun hold the hide untill user clicks on "Continue Reading " Button
  $("#showme3").hide();
    
    
//When user clicks on button of class '.shown3' then toggle method will switch show~hide and callback function
// "function()" will callback and execute the msg on console
//toggle() method will show and hide the holded contents by Id '#showme3' 

  $('.shown3').on(

   {   
  
  click:function()
{
  $('#showme3').toggle(1500,function()
  {
      console.log("Text has been shown successfully",this);
  });
  
}


});


//.......................Continue Reading 3 ends here!.............................!







});