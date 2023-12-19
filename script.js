$(document).ready(function() {
  let scale = 1; 
  const $zoomableImage = $('#zoomable-image');
  $('#zoom-in').on('click', function() {
    scale += 0.5;
    $zoomableImage.css('transform', `scale(${scale})`);
  });
  $('#zoom-out').on('click', function() {
    scale -= 0.5;
    $zoomableImage.css('transform', `scale(${scale})`);
  });
  $zoomableImage.draggable();
});
// Get the modal element
let modal = document.getElementById('myModal');

// Get the image and insert it into the modal
let img = document.querySelector('.modal-image');
img.ondblclick = function() {
  modal.style.display = 'block';
}

// Close the modal when the close button (×) is clicked
let span = document.querySelector('.close');
span.onclick = function() {
  modal.style.display = 'none';
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

function aboutus() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          }
        });
      });
}
aboutus()