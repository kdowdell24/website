//Get the modal
const modal = document.getElementById('gallery-modal');

//Get the gallery images and insert them inside the modal
const img = document.querySelectorAll('.gallery-img');
const modalImg = document.getElementById('modal-images');
const captionText = document.querySelectorAll('figcaption');

//Get modalCloseButton that closes the modal
const modalCloseButton = document.querySelector('.modal-close');

//When the user clicks on <span>(x), close the modal
modalCloseButton.addEventListener('click', function(){
	modal.style.display = 'none';
});

//When user clicks on gallery image modal opens
for(i = 0; i <= img.length; i++) {
	img[i].addEventListener('click', function(){
		modal.style.display = 'block';
		modalImg.src = this.src;
	});
};



