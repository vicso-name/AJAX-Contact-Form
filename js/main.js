$("form.contact-form").submit(function(event) {
	event.preventDefault(); // Prevent form submission until validation

	const userName = document.querySelector('#UName').value.trim();
	const userPhone = document.querySelector('#UPhone').value.trim();
	const radioBtnChecked = document.querySelector('#radioBtn').checked;

	const nameError = document.querySelector('#NameBlank');
	const phoneError = document.querySelector('#PhoneBlank');
	const acceptionValidation = document.querySelector('#acceptionLine');

	// Function to handle error display
	const showError = (element, message) => {
		element.innerHTML = message;
	};

	const clearError = (element) => {
		element.innerHTML = '';
	};

	// Validate user name
	if (!userName) {
		showError(nameError, "Please Enter Your Name");
		return;
	} else {
		clearError(nameError);
	}

	// Validate user phone
	if (!userPhone) {
		showError(phoneError, "Please Enter Your Phone");
		return;
	} else {
		clearError(phoneError);
	}

	// Validate radio button
	if (!radioBtnChecked) {
		acceptionValidation.classList.add("unvalidradio");
		return;
	} else {
		acceptionValidation.classList.remove("unvalidradio");
	}

	// If validation passes, proceed with AJAX request
	const form = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", // Adjust to the correct endpoint
		data: form.serialize(),
	}).done(() => {
		form.find('.bg-success').fadeIn();
		setTimeout(() => {
			form.find('.bg-success').fadeOut();
			form.trigger("reset");
		}, 3000);
	}).fail((xhr, status, error) => {
		console.error("Form submission failed: ", status, error);
	});

	return false; // Ensure form is not submitted through the default action
});
