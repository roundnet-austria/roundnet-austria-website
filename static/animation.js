// import { getFloatInRange, getIntInRange } from '@vuesion/utils/dist/randomGenerator';

console.log('Animation Loaded');
alert('TEST');

const cvs = document.querySelector('canvas');

let mouse = {
  x: undefined,
  y: undefined
};
window.addEventListener('mousemove', function (e) {
  mouse.x = event.x;
  mouse.y = event.y;
  console.log('Test');
  alert('TEST');
});


class Circle {
   opacity = 0.8; // random
   counter = 0;
   direction = 0;
   smaller = 10;

  constructor(
     context,
     radius,
     speed,
     width,
     xPos,
     yPos,
  ) {
    this.direction = 0.5;
  }

  update() {
    this.counter += this.direction * this.speed;

    const opacityDirection = 1; // random
    this.opacity += opacityDirection * 500 / 50000; // 500 random

    this.context.lineWidth = this.radius / 30;
    this.context.strokeStyle = 'rgba(255, 51, 51,' + this.opacity + ')';
    // this.context.strokeStyle = 'rgba(255, 51, 51,1)';

    this.context.beginPath();
    this.context.arc(
      this.xPos + Math.cos(this.counter / 100) * (this.radius + this.smaller),
      this.yPos + Math.sin(this.counter / 100) * (this.radius + this.smaller),
      this.width + this.smaller,
      0,
      Math.PI * 2,
      false,
    );
    this.context.closePath();

    this.context.stroke();
    this.context.beginPath();
    this.context.arc(
      this.xPos + Math.cos(this.counter / 100) * this.radius,
      this.yPos + Math.sin(this.counter / 100) * this.radius,
      this.width,
      0,
      Math.PI * 2,
      false,
    );
    this.context.closePath();

    this.context.stroke();

    if (this.opacity <= 0) {
      this.counter = 0;
      this.opacity = 0.5; //getFloatInRange(0.05, 0.9); //
      this.width = 5; // getIntInRange(2, 10);
      this.speed = 0.5; //getFloatInRange(0.1, 1);
    }
  }
}

const getCircles = (
  circleCount,
  canvas,
  context
) => {
  const localCircles = [];

  for (let i = 0; i < circleCount; i++) {
    localCircles.push(
      new Circle(
        context,
        200, // getIntInRange(100, 300), // radius 200
        0.5, // getFloatInRange(0.1, 1), // speed
        35,// getFloatInRange(5, 60), // width
        30,// getIntInRange(0, canvas.width), // x
        40// getIntInRange(0, canvas.height), // y
      ),
    );
  }

  return localCircles;
};

const draw = (canvas, context, circles) => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  circles.forEach((circle) => {
    circle.update();
  });

  /* istanbul ignore next */
  (window).requestAnimationFrame(() => {
    draw(canvas, context, circles);
  });
};

export const CircleAnimation = (canvas) => {
  const context = canvas.getContext('2d');
  const circleCount = 10;
  const circles = getCircles(circleCount, canvas, context);

  if (context) {
    draw(canvas, context, circles);
  }

  return {
    draw,
    circles,
  };
};
