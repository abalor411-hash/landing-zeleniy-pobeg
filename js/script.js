const burger = document.querySelector(".burger");
const list = document.querySelector(".main-nav ul");

burger.addEventListener("click", () => {
  list.classList.toggle("active");
  burger.classList.toggle("open");
});

const form = document.querySelector(".search-form");
const error = document.querySelector(".search-form__error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let city = document.querySelector("#city");
  let dateIn = document.querySelector("#date-in");
  let dateOut = document.querySelector("#date-out");
  let guest = document.querySelector("#guest");

  const dateInValue = new Date(dateIn.value);
  const dateOutValue = new Date(dateOut.value);

  if (city.value === "" || dateInValue >= dateOutValue || guest.value <= 0) {
    error.textContent = "Ошибка ввода";
  } else {
    error.textContent = "";
  }
});
