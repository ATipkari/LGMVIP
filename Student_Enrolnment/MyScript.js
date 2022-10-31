function myFunction() {
  
    var Name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var Gender=document.getElementById("gender").value;
    
    var Img=document.getElementById("image").value;
    var filename = Img.replace(/^.*[\\\/]/, '');
    
    
    var Skills1=document.getElementById("skill1");
    var Skills2=document.getElementById("skill2");
    var Skills3=document.getElementById("skill3");
   var s="You are selected";
   if(Skills1.checked== true){
       var Sk1=document.getElementById("skill1").value;
       var s=s+" "+Sk1+",";
       
   }
   if(Skills2.checked==true){
       var Sk2=document.getElementById("skill2").value;
       var s=s+" "+Sk2+",";
   }
   if(Skills3.checked==true){
       var Sk3=document.getElementById("skill3").value;
       var s=s+Sk3+".";
   }
   
  alert("Sussesfully Submited");
    document.getElementById("demo").innerHTML += "<div > <table class='table' border='3px'> <tr> <td><b>Name:</b>  "+Name+"<br><b>email:</b>  "+email+"<br><b>Gender:</b>  "+Gender+"<br><b>Skills: </b> "+s+"</td><td><br><img src='"+filename+"' class='Img'></td></tr></table></div>";
    
   
  }
  
  