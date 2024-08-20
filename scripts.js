document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100; 

    const bmi = (weight / (height * height)).toFixed(1); 
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    document.getElementById('result').textContent = `Your BMI is ${bmi}. You are in the ${category} category.`;
});
