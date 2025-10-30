function generateColor(){
  
  let hexValue = "0123456789ABCDEF"
  let color = "#";

  for (let i = 0; i < 6; i++){
    let randomNumber = Math.floor(Math.random() * 16)
    color += hexValue.charAt(randomNumber)
  }

  return color;
}

let refInterval = null;

document.querySelector('#start').addEventListener('click', (e) => {
  if (refInterval == null) {
    refInterval = setInterval( () => {
    document.body.style.backgroundColor = generateColor();
  }, 1000)
  }
}, false)

document.querySelector('#stop').addEventListener('click', (e) => {
  clearInterval(refInterval);
  refInterval = null;
}, false)