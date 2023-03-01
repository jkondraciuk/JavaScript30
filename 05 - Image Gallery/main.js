const panels = document.querySelectorAll(".panel");

const toggleOpen = (e) => {
  e.currentTarget.classList.toggle("open");
};

const toggleActive = (e) => {
  console.log(e);
  if (e.propertyName.includes("flex")) {
    e.currentTarget.classList.toggle("open-active");
  }
};

panels.forEach((panel) => {
  panel.addEventListener("click", toggleOpen);
  panel.addEventListener("transitionend", toggleActive);
});
