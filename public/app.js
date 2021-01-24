var imgTitles = [];
var imgTitlesIndex = 0;

class img {
    constructor(imgID, imgTitle, imgUrl, imgCreationTime, imgCat = []) {
        this.imgID = imgID;
        this.imgTitle = imgTitle;
        this.imgUrl = imgUrl;
        this.imgID = imgID;
        this.imgCreationTime = imgCreationTime;
        this.imgCat = imgCat;

    }

}

class imagesCollection {
    images = [];


    addImages(images) {
        this.images.push(images);
    }

    searchImages(searchText) {
    

        console.log(searchText);


        if (searchText) {
            console.log(imageCollection);
            document.getElementById('searchResult').classList.remove('hidden');

            let image = this.images.find(imageCollection => imageCollection.imgTitle == searchText);

            if (image) {
                console.log("correct");
                const newResult = new resultBox(image.imgTitle, image.imgUrl,"found");
              
            }
            else {
                console.log("incorrect");
                document.getElementById('searchResult').classList.remove('hidden');
                const newResult = new resultBox("", "","not found");
                
            }



        } else {
            alert('Please enter an image title to search for');
        }
        console.log('you clicked on search');
    }
    deleteImages() {

    }


}

let imageCollection = new imagesCollection;
class resultBox {
    constructor(imgTitle, imgImage, result) {
        this.imgTitle = imgTitle;
        this.imgImage = imgImage;
        this.result=result;
        let searchReultDiv = document.getElementById('searchResult');
        searchReultDiv.classList.remove('hidden');
        let SearchStatusP = document.getElementById('searchStatus');
        let searchImage = document.getElementById('searchImage')
        let enteredText=document.getElementById('searchText').value;
       if (result=="found"){
        SearchStatusP.innerHTML ="The picture '"+ enteredText+"' is found, see its preview below:";
        searchImage.src = imgImage;
        searchImage.classList.remove('hidden');

}else{ SearchStatusP.innerHTML ="The picture '"+ enteredText+"' not found";
searchImage.classList.add('hidden');
}


    }
}
class album {
    constructor(imgTitle, imgImage) {
        this.imgTitle = imgTitle;
        this.imgImage = imgImage;
        let imageArticle = document.createElement('article');
        imageArticle.classList = "overflow-hidden rounded-lg shadow-lg";

        let imageHref = document.createElement('a');

        let imageImg = document.createElement('img');
        imageImg.classList = "w-full h-56 object-cover";
        imageImg.src = imgImage;


        let imageHeader = document.createElement('header');
        imageHeader.classList = "flex bg-yellow-50 items-center justify-between leading-tight p-2 md:p-4";

        let imageH1Title = document.createElement('h1');
        imageH1Title.classList = "text-lg";
        imageH1Title.textContent = imgTitle;
        imageH1Title.setAttribute=("id","imageTitle");

        let modalButton = document.createElement('button');
        modalButton.classList = "modal-open bg-black text-white ";
        modalButton.setAttribute=("onclick","functionModal();");
        modalButton.textContent="View Photo";
       // modalButton.setAttribute("id", "modal-open");

        imageHeader.appendChild(imageH1Title);
        imageHeader.appendChild(modalButton);
        imageHref.appendChild(imageImg);
        imageArticle.appendChild(imageHref);
        imageArticle.appendChild(imageHeader);
        document.getElementById('photos').appendChild(imageArticle);

        function functionModal(){
            console.log("you clicked");
        }
        

    }
    


}


class validator {
    static REQUIRED = 'REQUIRED';
    // static MIN_LENGTH='MIN_LENGTH';

    static validate(value, flag, validatorValue) {
        if (flag === this.REQUIRED) {
            return value.trim().length > 0;
        }
        // if (flag==this.MIN_LENGTH){
        //     return value.trim().length >validatorValue;
        // }
    }
}
document.getElementById('searchButton').addEventListener("click", function () {
    imageCollection.searchImages(document.getElementById('searchText').value)
});
class imgUploadForm {
    constructor() {
        this.form = document.getElementById('formImgUpload');
        this.imgTitle = document.getElementById('inputImgTitle');
        this.imgUrl = document.getElementById('inputImgUrl');

        this.form.addEventListener('submit', this.uploadImgHandler.bind(this));
    }
    uploadImgHandler(event) {
        event.preventDefault();


        const enterImgTitle = this.imgTitle.value;
        const enterImgUrl = this.imgUrl.value;


        if (
            !validator.validate(enterImgTitle, validator.REQUIRED) ||

            !validator.validate(enterImgUrl, validator.REQUIRED)
        ) {
            alert("Please make sure you that you have entered the image title and URL ");
            return;
        }

        let imgCat = ['flower', 'plants'];
        const newImage = new img(Math.random().toString(36).slice(2), enterImgTitle, enterImgUrl, new Date());
        imageCollection.addImages(newImage);
        const newAlbum = new album(enterImgTitle, enterImgUrl);
        console.log(imageCollection);

        ///modal///

       
       

        // var openmodal = document.querySelectorAll('.modal-open');
        // for (var i = 0; i < openmodal.length; i++) {
        //     openmodal[i].addEventListener('click', function (event) {
        //         event.preventDefault();
        //         toggleModal();
        //     })
        // }

        // const overlay = document.querySelector('.modal-overlay');
        // overlay.addEventListener('click', toggleModal);
        // var closemodal = document.querySelectorAll('.modal-close')
        // for (var i = 0; i < closemodal.length; i++) {
        //     closemodal[i].addEventListener('click', toggleModal)
        //     let selectedImageTitle=document.getElementById('selectedImageTitle');
        
        //     selectedImageTitle.innerHTML=TitleofImage;

        // }
        

        // function toggleModal() {
        //     const body = document.querySelector('body');
        //     const modal = document.querySelector('.modal');
        //     modal.classList.toggle('opacity-0');
        //     modal.classList.toggle('pointer-event-none');
        //     body.classList.toggle('modal-active')
        // }

        // ///end modal///
        console.log(newImage);

        imgTitles.push(enterImgTitle);
        console.log(imgTitlesIndex + "=" + imgTitles[imgTitlesIndex]);
        imgTitlesIndex++;


    }
}

new imgUploadForm();


   
var modal = document.getElementById('.modal-open');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function functionModal(){
    console.log("you clicked");
}








// /*Global Variables*/
// let i=0;

// var imagetitles=[];
// let uploadButton=document.getElementById('uploadImage');
// let searchButton1=document.getElementById('searchButton');

// //clicking search button
// searchButton1.addEventListener("click",function(){
// let searchText=document.getElementById('searchText').value;
// var j=0;
// while (j<=imagetitles.length) {

//  if (searchText==imagetitles[j]){
//     alert("The image '"+imagetitles[j]+"' already exists");




// }

// //else{alert("sorry the image '" +imagetitles[j]+  "' not found");}
// j++;

// }

// })

// //clicking upload Button
// uploadButton.addEventListener("click",function(){
//     let imageTitle=document.getElementById('imageTitle').value;
//     let imageUrl=document.getElementById('imageUrl').value;

//     if(imageTitle && imageUrl)

//     {



//    imagetitles.push(imageTitle);
//   console.log(imagetitles[i]+ " " + i.toString());
//    i++;






// let imageArticle=document.createElement('article');
// imageArticle.classList="overflow-hidden rounded-lg shadow-lg";

// let imageImg=document.createElement('img');
// imageImg.classList="w-full h-56 object-cover";
// imageImg.src=imageUrl;

// let imageHeader=document.createElement('header');
// imageHeader.classList="flex bg-yellow-50 items-center justify-between leading-tight p-2 md:p-4";

// let imageH1Title=document.createElement('h1');
// imageH1Title.classList="text-lg";
// imageH1Title.textContent=imageTitle;

// imageHeader.appendChild(imageH1Title);
// imageArticle.appendChild(imageImg);
// imageArticle.appendChild(imageHeader);
// document.getElementById('photos').appendChild(imageArticle);
// document.getElementById('imageTitle').value='';
// document.getElementById('imageUrl').value='';





//     }

//     else{
// console.log("no");
// alert('Please make sure you have entered both image title and image URL');
//     }
// })
// */