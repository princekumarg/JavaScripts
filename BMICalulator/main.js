const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height === ' ' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please fill the ${height}`
    }
    else if (weight === ' ' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please fill the ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        if (bmi < 18.5) {
            result.innerHTML = `Under Weight=${bmi}`
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            result.innerHTML = `Normal Weight=${bmi}`
        }
        else {
            result.innerHTML = `Over Weight=${bmi}`
        }
    }


})