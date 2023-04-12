function calculateBmi(){
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = (weight / ((height/100)*(height/100)))
    console.log(bmi)
    document.getElementById('bmi_result').innerHTML =`Your BMI is: ${bmi.toFixed(1)}`
    
    if (bmi < 18.5){
        document.getElementById('message').innerHTML = `You are underweight`
    }else if (bmi>= 18.5 && bmi <=24.9) {
        document.getElementById('message').innerHTML = `You are healthy `
    }else {
        document.getElementById('message').innerHTML = `YOU ar overweight`
    }
    
}