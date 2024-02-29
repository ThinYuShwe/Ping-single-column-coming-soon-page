document.querySelector(".btn").addEventListener("click", function (event) {
  const errorMessage = document.querySelector(".invalid-feedback");
  const email = document.querySelector("input[type='email']");
  const emailBox = document.querySelector(".email");
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    event.preventDefault();
    errorMessage.style.display = "block";
    emailBox.classList.add("error-border");
  } else if (!email.value.match(pattern)) {
    event.preventDefault();
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
});
