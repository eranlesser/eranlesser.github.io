

  function init()
  {
    document.getElementById('container').setAttribute('visibility','hidden');
     for(var i=0;i<letters.length;i++)
     {
         addLetter(letters[i],i)
     }
  }

  function addLetter(name,indx)
  {
       var img = new Image();
       img.onload = function() {
          document.getElementById("img_"+name).width = document.getElementById("img_"+name).width * 0.2;
          document.getElementById("img_"+name).setAttribute("height", "auto");   
       }
       img.addEventListener("click", function(){
        onLetterClick(img);
       } )
      img.src = "images/"+name+".png";
      img.id="img_"+name
      img.setAttribute("style","display: block; margin:0 auto ; margin-top : 22px ")
      document.getElementById("scrollView").appendChild(img);
      console.log(indx)
      if(indx==0){
        
        setTimeout(function(){ 
document.getElementById('container').setAttribute('visibility','show');
          //onLetterClick(img) 
        },500);
        console.log(">>");
      }
  }

  function onLetterClick(img){
     document.getElementById("img").src = img.src;
     document.getElementById("img").width =  img.width*2;
     document.getElementById("img").setAttribute("height", "auto");
         
  }

