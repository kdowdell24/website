$('#contactform').on('submit', function(e) {

    e.preventDefault();

    var formData = new FormData(this);

    $.ajax({
        method:'POST',
        url: "php/send_email_form.php",
        data:formData,
        cache:false,
        contentType: false,
        processData: false,
        success:function(data){
            alert(data);

        },
        error: function(data){
            alert('Sorry, something went wrong!');
        }
    });
});

const contactForm = document.getElementById('contactform');

contactForm.addEventListener('submit', function () {
	contactForm.reset();
});