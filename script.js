const squares = document.querySelectorAll('.square');


function setSquareColors(hoveredIndex) {
  squares.forEach((square, index) => {
    if (index === hoveredIndex) {
      square.style.backgroundColor = '#E6E6FA'; 
    } else {
      square.style.backgroundColor = '#6F4E37';
    }
  });
}

squares.forEach((square, index) => {
  square.addEventListener('mouseenter', () => {
    setSquareColors(index);
  });

  square.addEventListener('mouseleave', () => {
    squares.forEach(sq => sq.style.backgroundColor = '#E6E6FA');
  });
});
