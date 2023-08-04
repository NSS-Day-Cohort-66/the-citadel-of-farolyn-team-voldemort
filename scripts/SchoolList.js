import { getArchetypes, getSchools } from "./database.js";

document.addEventListener("click", (clickEvent) => {
  const schoolClicked = clickEvent.target;
  const schoolId = schoolClicked.dataset.id;
  if (schoolClicked.dataset.type === "school") {
    let htmlString = ``;
    const archetype = getArchetypes();
    for (const archetypes of archetype) {
      if (parseInt(schoolId) === archetypes.schoolId) {
        htmlString += ` ${archetypes.name}, `;
      }

      const detailsHtml = `
      <div>
        <h4>Description:</h4>
        <h4>Disclaimer:</h4>
        <h4>Currently accepting the following Magician Types:${htmlString.slice(0,-2)}</h4>
      </div> `;
      const detailsContainer = document.querySelector("#details_container");
      detailsContainer.innerHTML = detailsHtml;
    }
  }
});

export const SchoolList = () => {
  let headerHtml = `<div id="schools_container" class="content_block"><h3>Magic Schools:</h3>`;
  const list = getSchools();
  for (const school of list) {
    headerHtml += `
  <ul>
  <li data-id="${school.id}" data-type="school">${school.name}</li>
  </ul>
  `;
  }
  headerHtml += `</div>`;
  return headerHtml;
};
