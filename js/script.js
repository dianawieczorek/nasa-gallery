function changeBackground(imageURL) {
    document.body.style.backgroundImage = "url('" + imageURL + "')";
}

let dataUrl = 'https://api.nasa.gov/planetary/apod?api_key=t7f3nSnL9hHWVoZDLdRiw03zIHICaq4CtcrGygAX';
let urlMars = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=t7f3nSnL9hHWVoZDLdRiw03zIHICaq4CtcrGygAX';

function getPicture() {
    fetch(dataUrl)
        .then((respo) => {
            return respo.json();
        })
        .then((data) => {
            changeBackground(data.hdurl);
        });
}

getPicture();

function getMarsPicture() {
    fetch(urlMars)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            let pictureList = data.photos;
            createGallery(pictureList);
        });
}

getMarsPicture();

let gallery = document.getElementById('content');
function createGallery(dataList) {
    if (dataList !== undefined) {
        for (let i = 0; i < 9; i++) {
            let img = document.createElement('img');
            let imgPath = (dataList[i].img_src);
            img.src = imgPath;
            gallery.appendChild(img);
        }
    }
}

createGallery();