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
        error: function(data){
            alert('Sorry, something went wrong!');
        },
    });
});

//Resets form after submission
const contactForm = document.getElementById('contactform');

contactForm.addEventListener('submit', function () {
	$("#submit-contact").html("Thank You!");
	contactForm.reset();
});