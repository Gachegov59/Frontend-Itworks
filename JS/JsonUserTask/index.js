const inputEl = document.querySelector(".input");
const btnEl = document.querySelector(".btn-search");
const userListEl = document.querySelector(".users-list");
const urlBase = "https://randomuser.me/api/";
const urlPagination = "page=3&results=10&seed=abc";
const spinnerLoaderEl = document.querySelector(".spinner-loader");
let isLoader = true;
let paginationCurrentPage = 1;
let paginationAmount = 5;

const paginationStepPage = 0;
const paginationNestStepEL = document.querySelector(".pagination-next");
const paginationPrevStepEL = document.querySelector(".pagination-prev");

paginationNestStepEL.addEventListener("click", (e) =>
  paginationStep(++paginationCurrentPage)
);
paginationPrevStepEL.addEventListener("click", (e) =>
  paginationStep(--paginationCurrentPage)
);

/**
 * @param {string}step
 */
function paginationStep(step) {
  userListEl.innerHTML = "";
  app();
}

const getContacts = async (page) => {
  try {
    spinnerLoaderEl.style.display = "block";
    const response = await fetch(
      `${urlBase}?page=${paginationCurrentPage}&results=${paginationAmount}&seed=abc`
    );
    const userData = await response.json();
    spinnerLoaderEl.style.display = "none";
    return userData.results;
  } catch (error) {}
};

async function app() {
  const userContacts = await getContacts();
  displayContactsList(userContacts);
}

app();

function displayContactsList(users) {
  if (!users) return;

  users.forEach((user) => {
    const contanctWrapEl = createElemet({
      tag: "li",
      className: "user",
    });

    const contanctNameEl = createElemet({
      tag: "span",
      className: "user-text",
      innerHTML: `${user.name.first} ${user.name.last}`,
    });

    const contactELimg = createElemet({
      tag: "img",
      className: "user-avatar",
      attr: {
        attrName: "src",
        attrContent: user.picture.thumbnail,
      },
    });
    contanctWrapEl.appendChild(contactELimg);
    contanctWrapEl.appendChild(contanctNameEl);
    userListEl.appendChild(contanctWrapEl);
  });
}
/**
 * @param {{tag: string, className: string, innerHTML: string, attr?: {attrName: string, attrContent: string}}} options
 * @returns
 */
function createElemet(options) {
  // console.log("🚀 ~ createElemet ~ options:", options);
  const { tag, className, innerHTML, attr: attr } = options;
  const userEl = document.createElement(tag);
  userEl.classList.add(className);
  userEl.textContent = innerHTML;
  if (attr) userEl.setAttribute(attr.attrName, attr.attrContent);
  return userEl;
}
