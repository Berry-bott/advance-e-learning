import servicesCard from "./servicesCardData.js";
// ======Output for all sevices card=====

document.addEventListener("DOMContentLoaded", () => {
   
let onlineCourses = document.querySelector('.online_courses_container');
let academySupport = document.querySelector('.acedemy_courses_container');
let adaptiveLearning = document.querySelector('.adaptive_learning_container');
let communitiesContainer = document.querySelector('.communities_container');
let microLearning = document.querySelector('.micro_learning_container');
let analyticContainer = document.querySelector('.analytics_container');
let certificationContainer = document.querySelector('.certification_container');

    function renderCardContent(targetElement, cardData) {
        if (!targetElement) {
            return;
        }

        let html = `
            <div class="card_text">
                <h1>${cardData.headText}</h1>
                <div class="card_paragraph">
                    <p class="body_text">${cardData.bodyText}</p>
                    <p class="read_more">${cardData.readMore}</p>
                </div>
            </div> `;
        targetElement.innerHTML = html;
    }

    renderCardContent(onlineCourses, servicesCard[0]);
    renderCardContent(academySupport, servicesCard[1]);
    renderCardContent(adaptiveLearning, servicesCard[2]);
    renderCardContent(microLearning, servicesCard[3]);
    renderCardContent(communitiesContainer, servicesCard[4]);
    renderCardContent(analyticContainer, servicesCard[5]);
    renderCardContent(certificationContainer, servicesCard[6]);
});


// ==== CARD THREE =======
// ==== CARD FOUR =======
// ==== CARD FIVE =======
// ==== CARD SIX =======
// ==== CARD SEVEN =======