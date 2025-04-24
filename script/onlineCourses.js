import servicesCard from "./servicesCardData.js";

let onlineCourses = document.querySelector('.online_courses_container');

// Access the first object
let firstItem = servicesCard[0];

let html = `
    <div class="online_courses_text">
        <h1>${firstItem.headText}</h1>
        <div class="online_courses_paragraph">
            <p class="body_text">${firstItem.bodyText}</p>
            <p class="read_more">${firstItem.readMore}</p>
        </div>
    </div>
`;

onlineCourses.innerHTML = html;
