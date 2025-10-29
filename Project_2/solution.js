const button = document.querySelector('#calc')

button.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Taking height and weight input from user
    const height = Number(document.querySelector('#height').value)
    const weight = Number(document.querySelector('#weight').value)

    // Accessing the result element to display result
    const results =  document.querySelector('#results')

    // Checking if the height and weight input is correct or not
    if (height <= 0 || isNaN(height)) {
        results.innerHTML = "Please enter correct height"
    } else if (weight <= 0 || isNaN(weight)) {
        results.innerHTML = "Please enter correct weight"
    } else {

        // calculating BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // Showing result as per the BMI
        if (bmi < 18.6) {
            results.innerHTML = `${bmi} | You are under weight`
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `${bmi} | You are perfect`
        } else {
            results.innerHTML = `${bmi} | You are over weight`
        }
    }
})

