// This is a function from where we get a value from input field
function getInputValue(inputId){
    const inputB = document.getElementById(inputId);
    const inputBValueString = inputB.value;
    const inputBValue = parseFloat(inputBValueString);
    return inputBValue;
}

// This is a function from where we get a value from HTML Element
function getElementValue(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

// This is a function where we set a value on HTML Element
function setOnElement(inputId, inputValue){
    const inputElement = document.getElementById(inputId);
    const valueTowFixString = inputValue.toFixed(2);
    const valueTowFix = parseFloat(valueTowFixString);
    inputElement.innerText = valueTowFix;
}


// Triangle button event listener
document.getElementById('triangle-btn').addEventListener('click', function(){
    const triangleInputBValue = getInputValue('triangle-input-b');
    const triangleInputHValue = getInputValue('triangle-input-h');

    // Validation
    if(triangleInputBValue < 0 || triangleInputHValue < 0){
        alert("Please input a valid number");
        return;
    }
    else if(isNaN(triangleInputBValue) || isNaN(triangleInputHValue)){
        alert("no bro! Input your number");
        return;
    }

    setOnElement('triangle-b', triangleInputBValue);
    setOnElement('triangle-h', triangleInputHValue);

    const triangleArea = 0.5 * triangleInputBValue * triangleInputHValue;

    document.getElementById('triangle').style.display = 'block';
    document.getElementById('triangle').style.display = 'flex';

    setOnElement('triangle-area', triangleArea);
})


// Rectangle button event listener
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleInputWValue = getInputValue('rectangle-input-w');
    const rectangleInputLValue = getInputValue('rectangle-input-l');

    // Validation
    if(rectangleInputWValue < 0 || rectangleInputLValue < 0){
        alert("Please input a valid number");
        return;
    }
    else if(isNaN(rectangleInputWValue) || isNaN(rectangleInputLValue)){
        alert("no bro! Input your number");
        return;
    }

    setOnElement('rectangle-w', rectangleInputWValue);
    setOnElement('rectangle-l', rectangleInputLValue);

    const rectangleArea = rectangleInputWValue * rectangleInputLValue;

    document.getElementById('rectangle').style.display = 'block';
    document.getElementById('rectangle').style.display = 'flex';

    setOnElement('rectangle-area', rectangleArea);
})

// Parallelogram button event listener
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramInputBValue = getInputValue('parallelogram-input-b');
    setOnElement('parallelogram-b', parallelogramInputBValue);

    const parallelogramInputHValue = getInputValue('parallelogram-input-h');
    setOnElement('parallelogram-h', parallelogramInputHValue);

    const parallelogramArea = parallelogramInputBValue * parallelogramInputHValue;

    document.getElementById('parallelogram').style.display = 'block';
    document.getElementById('parallelogram').style.display = 'flex';

    setOnElement('parallelogram-area', parallelogramArea);
})


// Rhombus button event listener
document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombusInputD1Value = getInputValue('rhombus-input-d1');
    setOnElement('rhombus-d1', rhombusInputD1Value);

    const rhombusInputD2Value = getInputValue('rhombus-input-d2');
    setOnElement('rhombus-d2', rhombusInputD2Value);

    const rhombusArea = 0.5 * rhombusInputD1Value * rhombusInputD2Value;

    document.getElementById('rhombus').style.display = 'block';
    document.getElementById('rhombus').style.display = 'flex';

    setOnElement('rhombus-area', rhombusArea);
})

// Pentagon button event listener
document.getElementById('pentagon-btn').addEventListener('click', function(){
    const pentagonInputPValue = getInputValue('pentagon-input-p');
    setOnElement('pentagon-p', pentagonInputPValue);

    const pentagonInputBValue = getInputValue('pentagon-input-b');
    setOnElement('pentagon-b', pentagonInputBValue);

    const pentagonArea = 0.5 * pentagonInputPValue * pentagonInputBValue;

    document.getElementById('pentagon').style.display = 'block';
    document.getElementById('pentagon').style.display = 'flex';

    setOnElement('pentagon-area', pentagonArea);
})


// Ellipse button event listener
document.getElementById('ellipse-btn').addEventListener('click', function(){
    const ellipseInputAValue = getInputValue('ellipse-input-a');
    setOnElement('ellipse-a', ellipseInputAValue);

    const ellipseInputBValue = getInputValue('ellipse-input-b');
    setOnElement('ellipse-b', ellipseInputBValue);

    const pi = 3.14;
    const ellipseArea = pi * ellipseInputAValue * ellipseInputBValue;

    document.getElementById('ellipse').style.display = 'block';
    document.getElementById('ellipse').style.display = 'flex';

    setOnElement('ellipse-area', ellipseArea);
})

// Work on Blog button for moving blog.html by using function
document.getElementById('head-btn').addEventListener('click', function(){
    location.href = "blog.html";
})


