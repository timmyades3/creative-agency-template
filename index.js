// Select the element to be closed
const elementToBeClosed = document.querySelector('.sidebar');

// Select the element that triggers the closing action
const closeButton = document.querySelector('li');

// Add an event listener to the closeButton element
closeButton.addEventListener('click', () => {
  // Hide the elementToBeClosed element
  elementToBeClosed.style.display = 'none';
});