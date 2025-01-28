const btnSignup = document.getElementById("btn-signup");
const btnDismiss = document.getElementById("btn-dismiss");
const card = document.getElementById("card");
const successMessage = document.getElementById("success-message");

btnSignup.onclick = () => {
	card.style.display = "none";
	successMessage.style.display = "flex";
};

btnDismiss.onclick = () => {
	card.style.display = "flex";
	successMessage.style.display = "none";
};
