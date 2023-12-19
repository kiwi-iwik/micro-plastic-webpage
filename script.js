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

let modal = document.getElementById('myModal');


let img = document.querySelector('.modal-image');
img.ondblclick = function() {
  modal.style.display = 'block';
}


let span = document.querySelector('.close');
span.onclick = function() {
  modal.style.display = 'none';
}


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