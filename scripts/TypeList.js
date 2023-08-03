import { getArchetypes } from "./database.js";

document.addEventListener("click", (clickEvent) => {
  const typeClicked = clickEvent.target;

  if (typeClicked.dataset.type === "type") {
    const detailsHtml = `
    <div>
    <h4>Greeting:</h4>
    <h4>School:</h4>
    <h4>Study Book:</h4>
    </div>`;
  }
});

export const TypeList = () => {
  const archetypes = getArchetypes();

  let headerHtml = `<div id="archetypes_container" class="content_block">`;

  headerHtml += `<h3>Magician Types:</h3>
                  <ol>`;

  for (const archetype of archetypes) {
    headerHtml += `<li data-type="archetype"
                       data-id="${archetype.id}"
                      >${archetype.name}</li>`;
  }

  headerHtml += `</ol></div>`;
  return headerHtml;
};
