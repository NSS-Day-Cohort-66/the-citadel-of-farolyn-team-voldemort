import { getSchools } from "./database.js";

document.addEventListener("click", (clickEvent) => {
  const schoolClicked = clickEvent.target;

  if (schoolClicked.dataset.type === "school") {
    const detailsHtml = `
      <div>
        <h4>Description: ${schoolClicked.dataset.description}</h4>
        <h4>Disclaimer: ${schoolClicked.dataset.disclaimer}</h4>
        <h4>Currently accepting the following Magician Types:</h4>
      </div>
    `;
    const detailsContainer = document.querySelector("#details_container");
    detailsContainer.innerHTML = detailsHtml;
  }
});

export const SchoolList = () => {
  let headerHtml = `<div id="schools_container" class="content_block"><h3>Magic Schools:</h3><ul>`;
  const list = getSchools();
  for (const school of list) {
    headerHtml += `<li data-id="${school.id}" 
                       data-type="school"
                       data-description="${school.description}"
                       data-disclaimer="${school.disclaimer}">
                       ${school.name}
                       </li>
  `;
  }
  headerHtml += `</ul></div>`;
  return headerHtml;
};
