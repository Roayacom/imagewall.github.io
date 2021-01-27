
/** Class for images attributes */
class img {
    constructor(imgID, imgTitle, imgUrl, imgDesc, imgCreationTime) {
        this.imgID = imgID;
        this.imgTitle = imgTitle;
        this.imgUrl = imgUrl;
        this.imgID = imgID;
        this.imgDesc = imgDesc;
        this.imgCreationTime = imgCreationTime;
    }
}//class ends here 

/** Class to validate inputs are not empty */
class validator { //class starts here
    static REQUIRED = 'REQUIRED';
    static validate(value, flag, validatorValue) {
        if (flag === this.REQUIRED) {
            return value.trim().length > 0;
        }
    }
}//class ends here

//function to reset all textboxes
function cleaner() {
    document.getElementById('searchText').value = "";
    document.getElementById('inputImgTitle').value = "";
    document.getElementById('inputImgUrl').value = "";
    document.getElementById('inputImgDesc').value = "";

}


/**calsse to save all images entered as array and do other functions */
class imagesCollection {  //** class starts here */
    images = [];
    addImages(images) {
        this.images.push(images);
    }

    searchID(clickedButtonID) {

        let image = this.images.find(imageCollection => imageCollection.imgID == clickedButtonID);
        document.querySelector(".viewImageTitle").innerHTML = image.imgTitle;
        document.querySelector(".viewImage").src = image.imgUrl;
        document.querySelector(".viewImageDate").innerHTML = "Created at " + image.imgCreationTime;
        document.querySelector(".deleteImage").id = image.imgID;
        document.querySelector(".viewImageDescription").innerHTML = "Description: " + image.imgDesc;
    }

    searchImages(searchText) {

        if (!validator.validate(searchText, validator.REQUIRED)) {
            alert("Please enter an image title to search for");
            cleaner();
            return;
        }

        document.getElementById('searchResult').classList.remove('hidden');

        let image = this.images.find(imageCollection => imageCollection.imgTitle == searchText);

        if (!image) {


            console.log("incorrect");
            document.getElementById('searchResult').classList.remove('hidden');
            const newResult = new resultBox("", "", "not found");
            cleaner();
            return;
        }

        console.log("correct");

        const newResult = new resultBox(image.imgTitle, image.imgUrl, "found");
        cleaner();

    }
    deleteID(clickedID) {

        var confirmResult = confirm("Are you sure you want to delete the image?");
        if (confirmResult) {
            let imageIndex = this.images.findIndex(imageCollection => imageCollection.imgID == clickedID);
            document.querySelector('.modal').classList.add("hidden");
            this.images.splice(imageIndex, 1);

            if (this.images.length >= 0) {
                new album();

            }
        }
    }
}//class ends here

let imageCollection = new imagesCollection;
class resultBox {
    constructor(imgTitle, imgImage, result) {
        this.imgTitle = imgTitle;
        this.imgImage = imgImage;
        this.result = result;
        document.getElementById('searchResult').classList.remove('hidden');
        let SearchStatusP = document.getElementById('searchStatus');
        let searchImage = document.getElementById('searchImage')
        let enteredText = document.getElementById('searchText').value;
        if (result != "found") {

            SearchStatusP.innerHTML = "The picture '" + enteredText + "' not found";
            searchImage.classList.add('hidden');
            return;
        }
        //else// 
        SearchStatusP.innerHTML = "The picture '" + enteredText + "' is found, see its preview below:";
        searchImage.src = imgImage;
        searchImage.classList.remove('hidden');
    }
}

function deleteClick(clickedID) {
    imageCollection.deleteID(clickedID);
}

function viewClick(clickedID) {
    document.getElementById('searchResult').classList.add('hidden');
    var modal = document.querySelector('.modal');
    imageCollection.searchID(clickedID);
    modal.classList.remove("hidden");
    console.log(clickedID);
    console.log(imageCollection.images.length);
}


class album {
    constructor() {

        var photoSection = document.getElementById('photos');
        photoSection.innerHTML = '';

        for (var i = 0; i < imageCollection.images.length; i++) {

            let imageArticle = document.createElement('article');
            imageArticle.classList = "overflow-hidden rounded-lg shadow-lg";
            let imageImg = document.createElement('img');
            imageImg.classList = "w-full h-56 object-cover";
            imageImg.src = imageCollection.images[i].imgUrl;

            let imageHeader = document.createElement('header');
            imageHeader.classList = "flex bg-yellow-50 items-center justify-between leading-tight p-2 md:p-4";

            let imageH1Title = document.createElement('h1');
            imageH1Title.classList = "text-lg";
            imageH1Title.textContent = imageCollection.images[i].imgTitle;

            const modalButton = document.createElement('button');
            modalButton.classList = "modal-open bg-purple-800 hover:bg-purple-900 p-2 border shadow text-white ";
            modalButton.id = imageCollection.images[i].imgID;
            modalButton.setAttribute("onClick", "viewClick(this.id)")
            modalButton.textContent = "View";

            imageHeader.appendChild(imageH1Title);
            imageHeader.appendChild(modalButton);
            imageArticle.appendChild(imageImg);
            imageArticle.appendChild(imageHeader);
            photoSection.appendChild(imageArticle);
        }
        if (imageCollection.images.length > 0) {

            document.querySelector('.closeModal').addEventListener('click', function () {

                document.querySelector('.modal').classList.add("hidden");
            });
        }
    }
}

class imgUploadForm {
    constructor() {
        this.form = document.getElementById('formImgUpload');
        this.imgTitle = document.getElementById('inputImgTitle');
        this.imgUrl = document.getElementById('inputImgUrl');
        this.imgDesc = document.getElementById('inputImgDesc')
        this.form.addEventListener('submit', this.uploadImgHandler.bind(this));
    }
    uploadImgHandler(event) {
        event.preventDefault();
       document.getElementById('searchResult').classList.add('hidden');
        const enterImgTitle = this.imgTitle.value;
        const enterImgUrl = this.imgUrl.value;
        const enterImgDesc = this.imgDesc.value;
        const imgID = Math.random().toString(36).slice(2);


        if (
            !validator.validate(enterImgTitle, validator.REQUIRED) ||

            !validator.validate(enterImgUrl, validator.REQUIRED)
        ) {
            alert("Please make sure you that you have entered the image title and URL ");
            return;
        }
        let d = new Date();
        const enterImgDate = d.getDate() + "/" + d.getMonth() + 1 + "/" + d.getFullYear();

        const newImage = new img(imgID, enterImgTitle, enterImgUrl, enterImgDesc, enterImgDate);
        imageCollection.addImages(newImage);
        new album();
        cleaner();

    }
}

new imgUploadForm();
document.getElementById('searchButton').addEventListener("click", function () {
    imageCollection.searchImages(document.getElementById('searchText').value)
});










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