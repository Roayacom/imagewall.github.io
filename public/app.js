let uploadButton=document.getElementById('uploadImage');
uploadButton.addEventListener("click",function(){
    let imageTitle=document.getElementById('imageTitle').value;
    let imageUrl=document.getElementById('imageUrl').value;
    if(imageTitle && imageUrl){

console.log(imageTitle);
console.log(imageUrl);


let imageArticle=document.createElement('article');
imageArticle.classList="overflow-hidden rounded-lg shadow-lg";

let imageImg=document.createElement('img');
imageImg.classList="w-full h-56 object-cover";
imageImg.src=imageUrl;

let imageHeader=document.createElement('header');
imageHeader.classList="flex items-center justify-between leading-tight p-2 md:p-4";

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