const pages = document.querySelector("#pages");
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");


function showPage() {
  const hash = window.location.hash;

  for (const child of pages.children) {
    child.style.display = "none";
  }

  if (hash === "#page1") {
    page1.style.display = "block";
  } else if (hash === "#page2") {
    page2.style.display = "block";
  } else if (hash === "#page3") {
    page3.style.display = "";
  }
}
window.addEventListener("hashchange", showPage);

showPage();
