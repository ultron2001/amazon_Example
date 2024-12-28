async function fetchDescription() {
    try {
        const response = await fetch('/description');
        const data = await response.json();
        document.getElementById('Description_text_ID').textContent = data.description;
    } catch (error) {
        console.error('Error fetching description:', error);
    }
}

fetchDescription();


const updatedLink = localStorage.getItem('updatedLink');
const link = document.getElementById('myLink');

if (updatedLink) {
    link.href = updatedLink;

}

document.getElementById('showImageBtn').addEventListener('click', function () {
    const modal = document.getElementById('imageModal');
    modal.classList.add('show');
});


document.getElementById('imageModal').addEventListener('click', function (event) {
    if (event.target === this) {
        this.classList.remove('show');
    }
});

const albumImages = document.querySelectorAll('.album-image');
const enlargedModal = document.getElementById('enlargedImageModal');
const enlargedImage = document.getElementById('enlargedImage');

albumImages.forEach(image => {
    image.addEventListener('click', function () {
        enlargedImage.src = this.src;
        enlargedModal.classList.add('show');
    });
});

enlargedModal.addEventListener('click', function (event) {
    if (event.target === this) {
        this.classList.remove('show');
    }
});

document.getElementById('imageModal').addEventListener('click', function (event) {
    if (event.target === this) {
        this.classList.remove('show');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const savedColor = localStorage.getItem("bgColor");
    if (savedColor) {
        document.getElementById("change_color").style.backgroundColor = savedColor;
    }
});

window.addEventListener("storage", function (event) {
    if (event.key === "bgColor" && event.newValue) {
        document.getElementById("change_color").style.backgroundColor = event.newValue;
    }
});

Btn_R_ID = document.getElementById("Btn_R_ID");
Btn_M_ID = document.getElementById("Btn_M_ID");
Btn_L_ID = document.getElementById("Btn_L_ID");

Btn_R_ID.addEventListener("click", function () {
    Btn_M_ID.textContent = "Right";
});

Btn_M_ID.addEventListener("click", function () {
    Btn_M_ID.textContent = "center";
});

Btn_L_ID.addEventListener("click", function () {
    Btn_M_ID.textContent = "Left";
});

const Btn_image1 = document.getElementById("Btn_image1");
const Btn_image2 = document.getElementById("Btn_image2");
const Btn_image3 = document.getElementById("Btn_image3");
const Btn_image4 = document.getElementById("Btn_image4");
const Btn_image5 = document.getElementById("Btn_image5");
const Btn_image6 = document.getElementById("Btn_image6");

Btn_image1.addEventListener("click", function () {
    document.getElementById("image_display").src = "/image_upload/1.png";
});

Btn_image2.addEventListener("click", function () {
    document.getElementById("image_display").src = "/image_upload/2.png";
});

Btn_image3.addEventListener("click", function () {
    document.getElementById("image_display").src = "/image_upload/3.png";
});

Btn_image4.addEventListener("click", function () {
    document.getElementById("image_display").src = "/image_upload/4.png";
});

Btn_image5.addEventListener("click", function () {
    document.getElementById("image_display").src = "/image_upload/5.png";
});

Btn_image6.addEventListener("click", function () {
    document.getElementById("image_display").src = "/image_upload/6.png";
});

document.addEventListener("DOMContentLoaded", function () {
    const btnImage7 = document.getElementById("Btn_image7");

    btnImage7.addEventListener("click", function () {
        const imageDisplay = document.getElementById("image_display");
        imageDisplay.src = "/image_upload/7.mp4";
        const videoContainer = document.getElementById("video-container");
        videoContainer.style.display = "block";
    });
});


const container = document.querySelector('.image-container');
const image = container.querySelector('.zoom-image');
const lens = container.querySelector('.zoom-lens');

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const offsetX = Math.max(0, Math.min(x, container.offsetWidth));
    const offsetY = Math.max(0, Math.min(y, container.offsetHeight));

    image.style.transformOrigin = `${offsetX}px ${offsetY}px`;
    image.style.transform = 'scale(2)';
});

container.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
});


