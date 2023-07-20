



function restvalue()
 {

       var saturate = document.getElementById("saturate");
       var contrast = document.getElementById("contrast");
       var brightness= document.getElementById("brightness")
       var sepia = document.getElementById("sepia");
       var grayscale = document.getElementById("grayscale");
       var blur = document.getElementById("blur");
       var img = document. getElementById("img");
       const canvas=document.getElementById("canvas")
       const ctx = canvas.getContext("2d")

       ctx.filter="none"
       img.style.filter="none"
       saturate.value='100'
       contrast.value='100'
       brightness.value='100'
       sepia.value='0'
       grayscale.value='0'
       blur.value='0'
     }

window.onload = function() {
 
   var upload = document . getElementById("upload")
   var download = document.getElementById("download")
   var reset=document.querySelector('span');
   var img= document.getElementById('img');
   download.style.display='none';
   reset.style.display="none";
   img.style.display="none";
   
 upload.onchange = function(){
     restvalue();
    download.style.display="block";
    reset.style.display="block";
    img.style.display="block";

    let file =new FileReader()
    file.readAsDataURL(upload.files[0]);
    file.onload =function(){
      img.src=file.result
      
      /*************** */
      img.onload=function(){
        const canvas=document.getElementById("canvas")
        const ctx = canvas.getContext("2d")
        canvas.width=img.width
        canvas.height=img.height
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        img.style.display='none'
      }
    }
  }
    let filters=document.querySelectorAll("ul li input");
    filters.forEach( filter => {
     filter.addEventListener('input',function(){
       var saturate = document.getElementById("saturate");
       var contrast = document.getElementById("contrast");
       var brightness= document.getElementById("brightness")
       var sepia = document.getElementById("sepia");
       var grayscale = document.getElementById("grayscale");
       var blur = document.getElementById("blur");
       var img = document. getElementById("img");
       
       const canvas=document.getElementById("canvas")
       const ctx = canvas.getContext("2d")
       ctx.filter=`
       saturate(${saturate.value}%)
       contrast(${contrast.value}%)
       sepia(${sepia.value}%)
       grayscale(${grayscale.value})
       blur(${blur.value}px)
       brightness(${brightness.value}%)
       
       `
       ctx.drawImage(img,0,0,canvas.width,canvas.height);

     }) 
    });
    download.onclick= function () {
      download.href=canvas.toDataURL()
     
    }
   }
  
  
       