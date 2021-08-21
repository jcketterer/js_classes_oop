//make sure with plain old js object syntax the dot syntax will give the key that value
//whereas the brackets will give the value of that varible 

// const color = 'teal'

// const obj = {};

// obj.color = '#3723ff'; // this is set to {color: hex}
// obj[color] = '#3723ff';// this is set to {teal: hex}

// obj[1 + 4 - 2 * 8] = '#3723ff';// this is set to {-11:hex}

// for (let [k, v] of Object.entries(obj)) {
//   console.log(k, v);
// }

//Working with object and different ways to group them
//******************************************

// const add = (x, y) => x + y;
// const mult = (x, y) => x * y;
// const square = (x) => x * x;
// const power = (x, y) => x ** y;


//Call with dot syntax for each variable
//**************************************

// const myMath = {};
// myMath.add = add;
// myMath.mult = mult;
// myMath.square = square;
// myMath.power = power;

//Group each varibale in an object then set to a variable 
//******************************************************

// const myMath = { add, mult, square, power };

//Creat a variable and set it to an object with just using the formula followed : then creating a function for each. 
//********************************************************

// const myMath = {
//   add: function (x, y) {
//     return x + y;
//   },
//   mult: function (x, y) {
//     return x * y;
//   },
//   square: function (x, y) {
//     return x ** y;
//   },
//   power: function (x) {
//     return x * x;
//   }
// }

//Short hand for the above example, no need for the work function. 
//***********************************************************

// const myMath = {
//   add(x, y) {
//     return x + y;
//   },
//   square(x) {
//     return x * x;
//   }
// }

//Overview of the keyword "THIS"
//****************************************************************

function getHypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}
function getArea(a, b) {
  return a * b / 2;
}

//The old way of doing it

// let side1 = 4;
// let side2 = 5;
// const side3 = getHypotenuse(side1, side2);
// const area = getArea(side1, side2);

// side1 = 9;
// side2 = 12;
// getHypotenuse(9, 12);

//Calling a variable and storing methods within an object

// const rightTriangle = {
//   a: 9,
//   b: 12,
//   printThis: function () {
//   },
//   getArea: function () {
//     return this.a * this.b / 2;
//   },
//   getHypotenuse: function () {
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
//   }
// };

//what classes do behind the scenes...

// function Triangle(a, b) {
//   this.a = a;
//   this.b = b;
// }

// Triangle.prototype.getArea = function () {
//   return this.a * this.b / 2
// };
// Triangle.prototype.getHypotenuse = function () {
//   return Math.sqrt(this.a ** 2 + this.b ** 2);
// };

// Triangle(5, 7); //RETURNS UNDEFINED!
// //USING THE NEW OPERATOR:
// const tri1 = new Triangle(3, 4);
// tri1.getHypotenuse();//5
// const tri2 = new Triangle(9, 12);
// tri2.getHypotenuse();//15

// Array.prototype.push = function (val) {
//   console.log(`SO YOU WANT TO ADD ${ val }??`);
//   console.log('SORRY DONT FEEL LIKE IT');
// };

//*******************************************
//CLASSES!!!!!!!!
//******************************************* 

//vvvv WITH OUT USING A CONSTRUCTOR vvvvv
// const firstTri = new Triangle();
// firstTri.a = 3;
// firstTri.b = 4;
// const secondTri = new Triangle();
// secondTri.a = 9;
// secondTri.b = 12;

class Triangle {
  constructor(a, b, c,) {
    console.log('Inside Triangle Constructor');
    for (let side of [a, b, c]) {
      if (!Number.isFinite(side) || side <= 0) { ///DO NOT USE RETURN IN A CONSTRUCTOR
        throw new Error('SIDES MUST BE POSITIVE NUMBERS!!')
      }
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  greet() {
    console.log('HELLO FROM TRIANGLE!!!');
  }
  display() {
    return `Triangle with the sides of ${ this.a }, ${ this.b }, and ${ this.c }`;
  }
  getArea() {
    const { a, b, c } = this; //DECONSTRUCTING this
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
  isBig() {
    return this.getArea() > 50;
  }
}

// const t1 = new Triangle(3, 4, 5);
// const t2 = new Triangle(5, 9, 10);
// const t3 = new Triangle(30, 40, 50);
// t1.display();

class RightTriangle extends Triangle {
  constructor(a, b, c,) {
    if (a * a + b * b !== c * c) {
      throw new Error('Invalid C side for right triangle');
    }
    console.log('Inside Right Triangle Constructor');
    super(a, b, c);
    this.hypot = c;
  }
  isRightTriangle() {
    return true;
  }
  display() {
    return 'Right ' + super.display();
  }
};
