var x;
var y;

function setup() {
  var height = window.innerHeight;
  var width = window.innerWidth;
  
  createCanvas(window.innerWidth, height);
  x = window.innerWidth / 2;
  y = window.innerHeight / 2;


  background(0);
}

function draw() {
  stroke(Math.floor(random(150,255)));
  strokeWeight(5);
  point(x, y);

  let r = Math.floor(random(0, 4));

  switch (r) {
    case 0:
        x = x + 1
      break;

    case 1:
        x = x - 1 
      break;

    case 2:
        y = y + 1
      break;

    case 3:
        y = y - 1
      break;


    default:
      break;
  }
}

//   to get random number in p5 is througn random(min,max)

// what if i want to move from top
