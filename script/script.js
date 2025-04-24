import servicesCard from './servicesCardData.js';
import versionCard from './versionCard.js';
import goalsCard from './goalsCard.js';


// ===========  THIS IS LOOPING THE VERSION CARD AND DISPLAYING ON THE PAGE. =========== //

let servicesCardHtml = '';

servicesCard.forEach((card) => {

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
                <p> ${card.bodyText}</p>
                </div>
            </div>
             <button class="btn js-btn" 
             data-link="${card.link}"> Learn More</button>
        </div>
    </div>
</div>
    
    `
    servicesCardHtml += html;

});
document.querySelector('.services-cont .display ').innerHTML = servicesCardHtml; // output for services card on the index page



function clickBtn() {

    document.querySelectorAll('.js-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.getAttribute('data-link')
            let data = btn.dataset.link;
            if (data) {
                window.location.href = data;
            }
        })  

    });
}
clickBtn()





// ======== THIS LOOP THROUGH THE VERSION CARD AND DISPLAYS ON THE PAGE =======//

let versionCardHtml = [];

versionCard.map((version) => {

    let html = `
    
     <article class="version-card">
                <div class="version-text">
                    <h2 class="color">${version.headText}</h2>
                    <span class="lining "></span>
            <p class="color">${version.bodyText}</p>
                </div>
                <div class="versions-img">
                    <img src=${version.img} alt="" id="skew">
                </div>
     </article>
    `
    versionCardHtml += html;

})
document.querySelector('.versions').innerHTML = versionCardHtml;   //this display items on page 


// =====GOALS CARDS==========

//Using this other array to loop the text in the services that display three cards
let goalsCardHtml = [];
goalsCard.map((goal) => {
    let html = `
    
<div class="version-text color">
        <h1>${goal.headTextRow}</h1>
        <p> ${goal.bodyTextRow}</p>
</div>
    `
    goalsCardHtml += html;
})
document.querySelector('.goals-container').innerHTML = goalsCardHtml;



// ====== IMAGE ROLLER ====== //
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


// WINDIOW SCROLL
window.addEventListener("scroll", function () {
    let navbar = document.querySelector("header");
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});