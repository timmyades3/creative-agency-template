
const elementToBeClosed = document.getElementsByClassName("sidebar");


const closeButton = document.getElementsByTagName("li");


closeButton.addEventListener('click', () => {
 
  elementToBeClosed.style.display = 'none';
});