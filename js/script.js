const dict = {
  Метан: "ch4",
  Этан: "c2h6",
  Пропан: "c3h8",
  Бутан: "c4h10",
  Пентан: "c5h12",
  Гексан: "c6h14",
  Гептан: "c7h16",
  Октан: "c8h18",
  Нонан: "c9h20",
  Декан: "c10h22",
};
a = [
  "Метан",
  "Этан",
  "Пропан",
  "Бутан",
  "Пентан",
  "Гексан",
  "Гептан",
  "Октан",
  "Нонан",
  "Декан",
];

document
  .querySelector(".test__button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    randomName = getRandomArrayElement(a);
    document.querySelector(".form__name").innerHTML = randomName;
    document.querySelector(".test__answer").innerHTML = "...";
  });

document
  .querySelector(".form__button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    TrueOrFalse(dict);
    document.querySelector(".form__input").value = "";
  });

function getRandomArrayElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function TrueOrFalse(dict) {
  value = document.querySelector(".form__input").value;
  if (value.toLowerCase() != dict[randomName]) {
    document.querySelector(".test__answer").innerHTML =
      "Правильный ответ: " + dict[randomName];
    document.querySelector(".test__answer").classList.remove("color-green");
    document.querySelector(".test__answer").classList.add("color-red");
  }
  if (value.toLowerCase() == dict[randomName]) {
    document.querySelector(".test__answer").innerHTML =
      "Правильный ответ: " + dict[randomName];
    document.querySelector(".test__answer").classList.remove("color-red");
    document.querySelector(".test__answer").classList.add("color-green");
  }
}
