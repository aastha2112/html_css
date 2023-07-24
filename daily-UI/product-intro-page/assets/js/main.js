// 1 - Get all the links
const links = document.querySelectorAll(".nav_link");

// 2 - Add onmouseover event to them
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.addEventListener("mouseover", function (event) {
    for (let j = 0; j < links.length; j++) {
      if (i !== j) {
        links[j].classList.remove("active");
      } else {
        event.target.classList.add("active");
      }
    }
  });
}

const buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
  const btn = buttons[i];

  btn.addEventListener("mouseover", function (event) {
    for (let j = 0; j < buttons.length; j++) {
      if (i === j) {
        event.target.classList.add("active_btn");
      } else {
        buttons[j].classList.remove("active_btn");
      }
    }
  });
}
