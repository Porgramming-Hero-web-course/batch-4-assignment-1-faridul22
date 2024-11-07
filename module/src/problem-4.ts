

type Circle = {
    shape: "circle";
    radius: number;
}

type Rectangle = {
    shape: "rectangle";
    height: number;
    width: number;
}

type Shape = Circle | Rectangle;

const calculateShapeArea = (shapeType: Shape) => {

    if (shapeType.shape === 'circle') {
        const areaString: string = (Math.PI * shapeType.radius * shapeType.radius).toFixed(2);
        const areaNumber: number = parseFloat(areaString)
        return areaNumber
    }
    else if (shapeType.shape === 'rectangle') {
        const areaString: string = (shapeType.height * shapeType.width).toFixed(2);
        const areaNumber: number = parseFloat(areaString)
        return areaNumber
    }

}
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});

console.log(circleArea)
console.log(rectangleArea)