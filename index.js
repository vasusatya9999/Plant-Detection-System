//toggle icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');

}



//scroll sections active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a ');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');


    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  // sticky navbar

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  //remove toggle icon and navbar when click on navbar link scroll
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};





//Scroll reveal
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200

});
ScrollReveal().reveal('.home-content ', { origin: 'top' });
ScrollReveal().reveal('.home-image , .portfolio-box  ', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });

//types jas
const typed = new Typed('.multi-text', {
  strings: ['Aniruddha Acharya', 'Vikas Bhat', 'Rahul Prabhu', 'Sushmitha M'],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true
});

const dragArea = document.querySelector('.drag-area');
const dragtext = document.querySelector('.upload-header');
let file;
let uploadButton = document.querySelector('.button');
let input = document.querySelector('input');
uploadButton.onclick = () => {
  input.click();
}
input.addEventListener('change', function () {
  file = this.files[0];
  dragArea.classList.add('active');
  displayFile();
})

dragArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dragtext.textContent = "Release to upload";
  dragArea.classList.add('active');

})

dragArea.addEventListener('dragleave', (event) => {
  event.preventDefault();
  dragtext.textContent = "Drag & Drop";
  dragArea.classList.remove('active');

})

dragArea.addEventListener('drop', (event) => {
  event.preventDefault();
  file = event.dataTransfer.files[0];
  displayFile();



})
async function displayFile() {
  let fileType = file.type;
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json"
  model = await tmImage.load(modelURL, metadataURL);
  let validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
  if (validExtensions.includes(fileType)) {
    let fileReader = new FileReader();

    fileReader.onload = () => {
      let fileUrl = fileReader.result;
      // console.log(fileUrl);
      let imagTag = `<img src="${fileUrl}" alt="">`;
      dragArea.innerHTML = imagTag;
      // Replace with your model loading function
      const image = document.querySelector('img');
      // const prediction = model.predict(image);
      // displayPrediction(prediction);
    };
    fileReader.readAsDataURL(file);
  }
  else {
    alert("This is not an Image");
    dragArea.classList.remove('active');
  }
}
// function displayPrediction(prediction) {
//   // Clear label container before displaying new prediction
//   const labelContainer = document.getElementById("label-container1");
//   labelContainer.innerHTML = "";

//   for (let i = 0; i < maxPredictions; i++) {
//     const classPrediction = prediction[i].className + ": " + prediction[i].probability.toFixed(2);
//     const labelDiv = document.createElement("div");
//     labelDiv.innerHTML = classPrediction;
//     labelContainer.appendChild(labelDiv);
//     console.log(classPrediction);
//   }
  
// }

//Camera
const webCamElement = document.getElementById("webCam");
const canvasElement = document.getElementById("canvas");
const webCam = new Webcam(webCamElement, "user", canvasElement);
var snap = document.getElementById("snap");
const drag = document.getElementById("drag-area");
function takePicture() {
  let picture = webCam.snap();
  // webCam.stop();
  document.querySelector("a").href = picture;
  webCamElement.style.display = "none";
}

function myFunction() {
  var x = document.getElementById("cameraContainer");
  if (x.style.display === "none") {
    x.style.display = "block";
    webCam.start();

    // snap.style.display='inline-block';

  } else {
    x.style.display = "none";
    // drag.style.display='inline-block';
    // snap.style.display='none;'
    webCamElement.style.display = "inline-block";
    // location.reload();
    webCam.stop();
  }
}

