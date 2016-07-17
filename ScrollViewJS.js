

  function init()
  {
     for(var i=0;i<letters.length;i++)
     {
         addLetter(letters[i],i,letters.length)
     }
    loadedCounter=0;    

  }

  function addLetter(name,indx,length)
  {
       var img = new Image();

       img.onload = function() {
          document.getElementById("img_"+name).width = document.getElementById("img_"+name).width * 0.2;
          document.getElementById("img_"+name).setAttribute("height", "auto"); 
          loadedCounter++;
          if(loadedCounter == length)  {
            document.getElementById("hideAll").style.display = "none";
            console.log(window.fitstLetter);
            onLetterClick(window.fitstLetter);
          }
       }
       img.addEventListener("click", function(){
        onLetterClick(img);
       } )
      img.src = "images/"+name+".png";
      img.id="img_"+name
      img.setAttribute("style","display: block; margin:0 auto ; margin-bottom : 44px ")
      document.getElementById("scrollView").appendChild(img);
      
      if(indx==0){
        window.fitstLetter = img;
      }
  }

  function onLetterClick(img){
     document.getElementById("img").src = img.src;
     document.getElementById("img").width =  img.width*2;
     document.getElementById("img").setAttribute("height", "auto");
         
  }

