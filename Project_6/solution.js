const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

let refSetInterval;

document.querySelector('#start').addEventListener('click', (e) => {
  if (refSetInterval == null) {
    refSetInterval = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
});

document.querySelector('#stop').addEventListener('click', (e) => {
  clearInterval(refSetInterval);
  refSetInterval = null;
});
