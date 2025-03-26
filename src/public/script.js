// import {servicesCard} from '../card';

console.log(servicesCard);

let servicesCardHtml ='';

servicesCard.forEach((card) => {
console.log(card.img);

    let html = `
<div class="swiper-slide">  
    <div class="card">
        <div class="card-img">
            <img src=${card.img} alt="">
        </div>
        <div class="card-text">
            <div class="card-header">
                <h2 class="color">${card.headText}</h2>
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
document.querySelector('.services-cont .display ').innerHTML=servicesCardHtml