// Get all the list items in the sidebar
const sidebarItems = document.querySelectorAll('.sidebar li');
const bars = document.querySelector('#bars');
const remove = document.querySelector('#remove');
// Add a click event listener to each list item
sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    // Find the sidebar element
    const sidebar = document.querySelector('.sidebar');
    

    // Hide the sidebar
    sidebar.style.right = '-1000px';
    remove.style.display = 'none';
    bars.style.display = 'block'
   
  });
});

bars.addEventListener('click', () => {
  const sidebar = document.querySelector('.sidebar');

  sidebar.style.right = '0px';
  remove.style.display = 'block';
});

remove.addEventListener('click', () => {
  const sidebar = document.querySelector('.sidebar');

  sidebar.style.right = '-1000px';
  remove.style.display = 'none';
});




 
