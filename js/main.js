let imgCorrente = 0;
const images = document.querySelectorAll("img");
images[imgCorrente].classList.add("active");

document.getElementById("avanti").addEventListener("click", function () {
    
    images[imgCorrente].classList.remove("active");
    imgCorrente = (imgCorrente + 1) % images.length;
    images[imgCorrente].classList.add("active");
});

document.getElementById("indietro").addEventListener("click", function () {
    
    images[imgCorrente].classList.remove("active");
    imgCorrente = (imgCorrente - 1 + images.length) % images.length;
    images[imgCorrente].classList.add("active");
});



