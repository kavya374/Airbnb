/**fetch('carousel.html')
.then(response => response.text())
.then(data => {
    document.getElementById('imgdiv').innerHTML = data;
})
.catch(error => console.error('Error fetching the HTML file:', error));**/

if (window.innerWidth > 768){
document.addEventListener('DOMContentLoaded', () => {
  const leftButton = document.querySelector('.icon4.left');
  const rightButton = document.querySelector('.icon4.right');
  const iconsContainer = document.querySelector('.Allicons');

  const scrollAmount = 200; // Adjust the scroll amount as needed

  leftButton.addEventListener('click', () => {
    iconsContainer.scrollLeft -= scrollAmount;
  });

  rightButton.addEventListener('click', () => {
    iconsContainer.scrollLeft += scrollAmount;
  });

  // Initially hide left button if at the start
  if (iconsContainer.scrollLeft === 0) {
    leftButton.style.display = 'none';
  }

  // Show/hide buttons based on scroll position
  iconsContainer.addEventListener('scroll', () => {
    leftButton.style.display = iconsContainer.scrollLeft === 0 ? 'none' : 'block';
    rightButton.style.display = iconsContainer.scrollWidth - iconsContainer.clientWidth === iconsContainer.scrollLeft ? 'none' : 'block';
  });
});
}