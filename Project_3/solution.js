const clock = document.querySelector('#clock')

setInterval( () => {
    clock.innerHTML = new Date().toLocaleTimeString()
}, 1000)