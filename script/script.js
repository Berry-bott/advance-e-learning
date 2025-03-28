import servicesCard from './card.js';

console.log(servicesCard);

let servicesCardHtml ='';

servicesCard.forEach((card) => {
console.log(card.img);

    let html = `
<div class="swiper-slide">  
    <div class="card">
        <div class="card-img">
            <img src=${card.img} alt="" >
        </div>
        <div class="card-text">
            <div class="card-header">
                <h2 class="head-text color ">${card.headText}</h2>
                <div class="card-body ">
                <p>  ${card.bodyText}</p>
                </div>
            </div>
            <button class="btn"> ${card.button}</button>
        </div>
    </div>
</div>
    
    `
    servicesCardHtml+=html;
    console.log(servicesCardHtml);
    
});
document.querySelector('.services-cont .display ').innerHTML=servicesCardHtml;


// ====== IMAGE ROLLER ====== //
// let img = document.getElementById("skew");
document.querySelectorAll("#skew").forEach(img => {
let targetX = 0, targetY = 0;
let skewX = 0, skewY = 0;
let currentX = 0, currentY = 0, currentSkewX = 0, currentSkewY = 0;
const smoothness = 0.15;
let isMouseOver = false;

img.addEventListener("mousemove", (event) => {
    isMouseOver = true;
    let rect = img.getBoundingClientRect();
    let x = (event.clientX - rect.left) / rect.width - 0.5; // Normalize [-0.5, 0.5]
    let y = (event.clientY - rect.top) / rect.height - 0.5;
    
    targetX = x * 20; // Rotation effect
    targetY = -y * 20; // Rotation effect

    skewX = x * 25; // Skew left/right
    skewY = y * 25; // Skew up/down
});

img.addEventListener("mouseleave", () => {
    isMouseOver = false;
});

function animate() {
    if (!isMouseOver) {
        targetX = 0;
        targetY = 0;
        skewX = 0;
        skewY = 0;
    }

    // Smooth movement
    currentX += (targetX - currentX) * smoothness;
    currentY += (targetY - currentY) * smoothness;
    currentSkewX += (skewX - currentSkewX) * smoothness;
    currentSkewY += (skewY - currentSkewY) * smoothness;

    img.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg) skew(${currentSkewX}deg, ${currentSkewY}deg)`;

    requestAnimationFrame(animate);
}

animate();
});
// document.addEventListener("mouseover", (event) => {
//     gsap.to(img, {
//         x: event.clientX,
//         y: event.clientY,
//         duration: 0.3, // Adjust speed
//         ease: "power2.out"
//     });
// });

// let img = document.querySelectorAll("img");
// img.forEach((img)=>{
//     img.addEventListener("mousemove", function(event) {
//         gsap.to(img, {
//             x: event.clientX,
//             y: event.clientY,
//             duration: 0.3, // Adjust speed
//             ease: "power2.out"
//         });
//     });
// })