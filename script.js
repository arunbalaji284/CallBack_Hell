setTimeout(()=>{

   
    var h1 = document.getElementById("count");
        h1.innerHTML ="5";
         
        setTimeout(()=>
            {
            var h1 = document.getElementById("count");
            h1.innerHTML ="4";
            setTimeout(()=>
                {
                var h1 = document.getElementById("count");
                h1.innerHTML ="3";
                setTimeout(()=>
                    {
                    var h1 = document.getElementById("count");
                    h1.innerHTML ="2"; 
                    setTimeout(()=>
                        {
                        var h1 = document.getElementById("count");
                        h1.innerHTML ="1";
                        setTimeout(()=>
                            {
                            var h1 = document.getElementById("count");
                            h1.innerHTML ="Happy Diwali";  
                            var image=document.createElement("img");
                            image.setAttribute("src","https://images.indianexpress.com/2020/11/diwali-feature-1.jpg")
                            var display=document.getElementById("image")
                            display.appendChild(image)                                                             
                        
                        },1000);   
                    },1000);                                           
                
                },1000);   
            
            },1000);   
        
        },1000);  
    
},1000);

