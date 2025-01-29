const btnSignup = document.getElementById("btn-signup");
const btnDismiss = document.getElementById("btn-dismiss");
const card = document.getElementById("card");
const successMessage = document.getElementById("success-message");
const email = document.querySelector(".signup-input")
const main = document.querySelector("main");
successMessage.remove();

btnSignup.onclick = () => {
	if (email.value === ""){
		email.focus()
		email.placeholder = "Please enter your email"
	} else{
		card.remove();
		/*
			I put it after child node 5 to make it appear
			after the right comment in the DOM
			(the <!-- Success message --> comment in the index.html)
		*/
		main.childNodes[5].after(successMessage);
	}
};

btnDismiss.onclick = () => {
	successMessage.remove();
	main.childNodes[1].after(card);
};
