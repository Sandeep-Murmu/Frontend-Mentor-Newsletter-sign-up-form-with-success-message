const card = document.querySelector(".card");
const inputBox = document.getElementById("mail");
const btnSubmit = document.querySelector(".btn-submit");
const err = document.querySelector(".err-msg");
const sucessBox = document.querySelector(".success-message-box");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  // check if input email is valid
  let re =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputBox.value.match(re)) {
    err.classList.remove("visible");
    inputBox.classList.remove("error");
    card.classList.add("success");
    sucessBox.classList.add("success");
  } else {
    err.classList.add("visible");
    inputBox.classList.add("error");
    card.classList.remove("success");
    sucessBox.classList.remove("success");
  }
});

console.log(inputBox);
