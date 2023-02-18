function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 

  
  
document.getElementById('triangle-shape').addEventListener('mouseover', function(){
    document.getElementById('triangle-shape').style.backgroundColor = randomColor();
})

document.getElementById('rectangle-shape').addEventListener('mouseover', function(){
    document.getElementById('rectangle-shape').style.backgroundColor = randomColor();
})

document.getElementById('parallelogram-shape').addEventListener('mouseover', function(){
    document.getElementById('parallelogram-shape').style.backgroundColor = randomColor();
})

document.getElementById('rhombus-shape').addEventListener('mouseover', function(){
    document.getElementById('rhombus-shape').style.backgroundColor = randomColor();
})

document.getElementById('pentagon-shape').addEventListener('mouseover', function(){
    document.getElementById('pentagon-shape').style.backgroundColor = randomColor();
})

document.getElementById('ellipse-shape').addEventListener('mouseover', function(){
    document.getElementById('ellipse-shape').style.backgroundColor = randomColor();
})