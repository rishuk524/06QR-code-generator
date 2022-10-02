const input = document.querySelector("#input");
const button = document.querySelector("#submit");
const img = document.querySelector("#img");

button.addEventListener("click", () => {
  const data = input.value;

  fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${data}`).then(
    (response) => {
      img.setAttribute("src", response.url);
      img.style.display = "block";
    }
  );
});