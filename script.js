document.addEventListener("DOMContentLoaded",()=>{

  // Select all images inside the gallery
  const galleryImages = document.querySelectorAll(".gallery img");

  // Select the lightbox and its inner elements
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");
  const nextBtn= document.getElementById("nextbutton");
  const previousBtn= document.getElementById("previousbutton");

  let currentIndex=0;

  galleryImages.forEach((img, index)=>{
    img.addEventListener('click',()=>{
      currentIndex = index;
      lightboxImg.src = img.src;
      lightbox.style.display="flex";
    });
  });

  // Close lightbox
  document.getElementById('closeBtn').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
  });

  // Next Image
    nextBtn.addEventListener("click",()=>{
      currentIndex=(currentIndex + 1) % galleryImages.length;
      lightboxImg.src= galleryImages[currentIndex].src;
    });

  //Previous Image
    previousBtn.addEventListener("click",()=>{
      currentIndex=(currentIndex-1 + galleryImages.length) % galleryImages.length;
      lightboxImg.src= galleryImages[currentIndex].src;
    });
});