const buttons = document.querySelectorAll('.button')

buttons.forEach( (button)  => {
    // console.log(button);
    button.addEventListener('click', (e) => {
        // console.log(e);
        // console.log(e.target);
        /*
            e.target give the attribute of the target
            here button is the target, so it gives the id, class etc attributes of that particular button
        */
        document.body.style.backgroundColor = e.target.id
        
    })
})


