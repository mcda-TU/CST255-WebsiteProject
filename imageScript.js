/*
    CST255 Internet and Website Development
    Website Project: Index
    Career Interests and Goals
    Author: Austin McDonough
    Date: 08/01/26

    filename: imageScript.js
*/


let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let imgRotation = 0;


function rotateImages() {
    if (imgRotation == 0) {
        img1.src = "PCT.jpg";
        img1.alt = "Pacific Crest Trail";
        img2.src = "BR100.jpg";
        img2.alt = "Burning River 100";
        imgRotation = 1;
    }
    else if (imgRotation == 1) {
        img1.src = "WSER.jpg";
        img1.alt = "Pacific Crest Trail";
        img2.src = "OC100.jpg";
        img2.alt = "Burning River 100";
        imgRotation = 2;
    }
    else {
        img1.src = "bta-map-overview.png";
        img1.alt = "Buckeye Trail Overview";
        img2.src = "AmericanDiscovery.jpg";
        img2.alt = "American Discovery Trail Overview";
        imgRotation = 0;
    }
    
}


setInterval(rotateImages, 5000);