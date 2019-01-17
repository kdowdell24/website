//Prevents page redirection after clicking Submit button
$('#contactform').on('submit', function(e) {

    e.preventDefault();

    let formData = new FormData(this);

    $.ajax({
        method:'POST',
        url: "php/send_email_form.php",
        data:formData,
        cache:false,
        contentType: false,
        processData: false,
        success: thankYouSubmit,
        error: function(data){
            alert('Sorry, something went wrong!');
        },
    });
});

//Resets form after submission
const contactForm = document.getElementById('contactform');

contactForm.addEventListener('submit', function () {
	contactForm.reset();
});


//Thank You message after clicking Submit

//Targets div containing Submit button
const thankYouSection = document.getElementById('thank-you-submit');

//Targest contact's First Name in form
const contactFirstName = document.getElementById('first-name').value;

function thankYouSubmit() {
	//Creates div element with .form-group and .col-md-9 classes
	let createDiv = document.createElement('div');
	createDiv.classList.add('form-group');
	createDiv.classList.add('col-md-9');
	
	//Creates p tag with Thank You message
	let createParTag = document.createElement('p');
	createParTag.innerHTML = 'Thank you ' + contactFirstName + ' for getting in touch!';
	
	//Adds new div and p tags to document
	thankYouSection.appendChild(createDiv);
	createDiv.appendChild(createParTag);
};