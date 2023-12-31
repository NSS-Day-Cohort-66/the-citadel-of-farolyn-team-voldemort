import { getArchetypes, getSchools, getBooks } from "./database.js";

const schools = getSchools();
const books = getBooks();

document.addEventListener("click", (clickEvent) => {
  const typeClicked = clickEvent.target;

  if (typeClicked.dataset.type === "archetype") {
    let archetypesSchool = "";
    let archetypeBook = "";
    for (const school of schools) {
      if (parseInt(typeClicked.dataset.schoolid) === school.id) {
        archetypesSchool = school.name;
      }
    }
    for (const book of books) {
      if (parseInt(typeClicked.dataset.bookid) === book.id) {
        archetypeBook = book.name;
      }
    }
    const detailsHtml = `
    <div>
    <h4>Greeting: ${typeClicked.dataset.greeting}</h4>
    <h4>School: ${archetypesSchool}</h4>
    <h4>Study Book: ${archetypeBook}</h4>
    </div>`;
    const detailsContainer = document.querySelector("#details_container");
    detailsContainer.innerHTML = detailsHtml;
  }
});

export const TypeList = () => {
  const archetypes = getArchetypes();

  let headerHtml = `<div id="archetypes_container" class="content_block">`;
  headerHtml += `<h3>Magician Types:</h3><ul>`;
  for (const archetype of archetypes) {
    headerHtml += `<li data-bookid="${archetype.bookId}
                       data-id="${archetype.id}"
                       data-description="${archetype.description}"
                       data-greeting="${archetype.greeting}"
                       data-name="${archetype.name}"
                       data-schoolid="${archetype.schoolId}"
                       data-type="archetype">
                       ${archetype.name}
                   </li>
    `;
  }
  headerHtml += `</ul></div>`;
  return headerHtml;
};
