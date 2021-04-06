const PI = Math.PI;
const E = Math.E;
const SQRT2 = Math.SQRT2;

const circle = {
  label : 'circlex',
  radius : 2,
};

const circleArea = ({radius}) => 
(PI*radius*radius).toFixed(2);

console.log(circleArea(circle));
