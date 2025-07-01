let aPoint = {
    x1: -5,
    y1: 4
  };
  
  let bPoint = {
    x2: -3,
    y2: 6
  };
  
  let distance = (aPoint, bPoint) =>
    Math.sqrt(Math.pow(bPoint.x2 - aPoint.x1, 2) + Math.pow(bPoint.y2 - aPoint.y1, 2));
  
  console.log(distance(aPoint, bPoint));