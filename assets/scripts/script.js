const submitButton = document.querySelector(".arrow");
const emailInput = document.querySelector("input");
const alertEmail = document.querySelector(".alert");

const validateEmail = () => {
	const emailValue = emailInput.value;
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const isValid = emailPattern.test(emailValue);

	if (!isValid) {
		alertEmail.style.visibility = "visible";
	} else {
		alertEmail.textContent =
			"You have successfully subscribed to our newsletter.";
		alertEmail.style.visibility = "visible";
		emailInput.value = "";
	}
};

submitButton.addEventListener("click", validateEmail);
