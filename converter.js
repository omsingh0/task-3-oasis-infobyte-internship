function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitInput = document.getElementById('unitInput').value;
    const resultElement = document.getElementById('result');

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput === '') {
        resultElement.textContent = 'Please enter a valid number for temperature.';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let convertedUnit;

    switch (unitInput) {
        case 'Celsius':
            convertedTemperature = (temperature * 9/5) + 32;
            convertedUnit = 'Fahrenheit';
            resultElement.textContent = `${temperature}°C is ${convertedTemperature.toFixed(2)}°F`;
            convertedTemperature = temperature + 273.15;
            convertedUnit = 'Kelvin';
            resultElement.textContent += ` or ${convertedTemperature.toFixed(2)} K`;
            break;
        case 'Fahrenheit':
            convertedTemperature = (temperature - 32) * 5/9;
            convertedUnit = 'Celsius';
            resultElement.textContent = `${temperature}°F is ${convertedTemperature.toFixed(2)}°C`;
            convertedTemperature = ((temperature - 32) * 5/9) + 273.15;
            convertedUnit = 'Kelvin';
            resultElement.textContent += ` or ${convertedTemperature.toFixed(2)} K`;
            break;
        case 'Kelvin':
            convertedTemperature = temperature - 273.15;
            convertedUnit = 'Celsius';
            resultElement.textContent = `${temperature} K is ${convertedTemperature.toFixed(2)}°C`;
            convertedTemperature = (temperature - 273.15) * 9/5 + 32;
            convertedUnit = 'Fahrenheit';
            resultElement.textContent += ` or ${convertedTemperature.toFixed(2)}°F`;
            break;
        default:
            resultElement.textContent = 'Please select a valid unit.';
    }
}
