/*Global Variables*/
let i=0;

var imagetitles=[];
let uploadButton=document.getElementById('uploadImage');
let searchButton1=document.getElementById('searchButton');

//clicking search button
searchButton1.addEventListener("click",function(){
let searchText=document.getElementById('searchText').value;
var j=0;
while (j<=imagetitles.length) {
   
 if (searchText==imagetitles[j]){
    alert("The image '"+imagetitles[j]+"' already exists");
   
      
  
    
}
 
//else{alert("sorry the image '" +imagetitles[j]+  "' not found");}
j++;

}

})

//clicking upload Button
uploadButton.addEventListener("click",function(){
    let imageTitle=document.getElementById('imageTitle').value;
    let imageUrl=document.getElementById('imageUrl').value;
  
    if(imageTitle && imageUrl)
    
    {

    
   
   imagetitles.push(imageTitle);
  console.log(imagetitles[i]);
  console.log(i.toString());
   i++;

            
       
console.log(imageTitle);
console.log(imageUrl);


let imageArticle=document.createElement('article');
imageArticle.classList="overflow-hidden rounded-lg shadow-lg";

let imageImg=document.createElement('img');
imageImg.classList="w-full h-56 object-cover";
imageImg.src=imageUrl;

let imageHeader=document.createElement('header');
imageHeader.classList="flex bg-yellow-50 items-center justify-between leading-tight p-2 md:p-4";

let imageH1Title=document.createElement('h1');
imageH1Title.classList="text-lg";
imageH1Title.textContent=imageTitle;

imageHeader.appendChild(imageH1Title);
imageArticle.appendChild(imageImg);
imageArticle.appendChild(imageHeader);
document.getElementById('photos').appendChild(imageArticle);
document.getElementById('imageTitle').value='';
document.getElementById('imageUrl').value='';




        
    }

    else{
console.log("no");
alert('Please make sure you have entered both image title and image URL');
    }
})