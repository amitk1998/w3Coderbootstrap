


 


 

$('document').ready(function()
 { 
       
$('#more1').hide();

    
    $('.myBtn1').on(
        
        {   
            
            click:function()
            {
                $('#more1').slideToggle(1000,function()
                {
                    console.log("Text has been shown successfully",this);
                });
                
            }
            
            
        });


        $('#more2').hide();

    
        $('.myBtn2').on(
            
            {   
                
                click:function()
                {
                    $('#more2').slideToggle(1000,function()
                    {
                        console.log("Text has been shown successfully",this);
                    });
                    
                }
                
                
            });


            $('#more3').hide();

    
    $('.myBtn3').on(
        
        {   
            
            click:function()
            {
                $('#more3').slideToggle(1000,function()
                {
                    console.log("Text has been shown successfully",this);
                });
                
            }
            
            
        });


        $('#more4').hide();

    
    $('.myBtn4').on(
        
        {   
            
            click:function()
            {
                $('#more4').slideToggle(1000,function()
                {
                    console.log("Text has been shown successfully",this);
                });
                
            }
            
            
        });


       
            
  
        
    })
