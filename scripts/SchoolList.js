import { getSchools } from "./database.js"


document.addEventListener("click", (clickEvent) => {
  const schoolClicked = clickEvent.target;

  if (schoolClicked.dataset.type === "school") {
    const detailsHtml = `
      <div>
        <h4>Description:</h4>
        <h4>Disclaimer:</h4>
        <h4>Currently accepting the following Magician Types:</h4>
      </div>
    `;
  }
});
// added school id/name :D
export const SchoolList = () => {
  let headerHtml = `<div id="schools_container" class="content_block">`;
  const list = getSchools()
  for (const school of list) {
  headerHtml += `<h3>Magic Schools:</h3>
  <ul>
  <li data-id="${school.id}">${school.name}</li>
  </ul>
  `;

  headerHtml += `</div>`;
  return headerHtml;
  }
};
