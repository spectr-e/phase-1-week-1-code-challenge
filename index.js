//Challenge (1) One - Student Grade Generator
// A > 79,
// B - 60 to 79,
// C -  49 to 59,
// D - 40 to 49,
// E - less 40.
let marks = window.prompt('Enter marks!')
function studentGrader(marks) {
  let grade;
  if (marks != null) {
    if (marks > 100) {
      return (grade = "Out of Range");
    } else if (marks > 79) {
      return (grade = "A");
    } else if (marks > 59) {
      return (grade = "B");
    } else if (marks > 48) {
      return (grade = "C");
    } else if (marks > 39) {
      return (grade = "D");
    } else {
      return (grade = "E");
    }
  } else {
    console.log("No marks entered!");
  }
};

studentGrader(marks)

//Challenge (2) Two - Speed Detector
const detectSpeed = (speed) => {
  if (speed < 70) {
    console.log("OK");
  } else {
    let surpass = Math.floor((speed - 70) / 5);
    if (surpass > 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${surpass}`);
    }
  }
};
// console.log(detectSpeed(100));

//Challenge (3) Three - Net Salary Calculator
const netSalary = (basic, benefits) => {
  let taxablePay = basic - benefits;
  let nssf = 200;
  let nhif;
  let paye;
  let totalDeductions;

  if (taxablePay < 24001) {
    return taxablePay;
  } else {
    if (taxablePay > 99999) {
      nhif = 1700;
    } else if (taxablePay > 89999) {
      nhif = 1600;
    } else if (taxablePay > 79999) {
      nhif = 1500;
    } else if (taxablePay > 69999) {
      nhif = 1400;
    } else if (taxablePay > 59999) {
      nhif = 1300;
    } else if (taxablePay > 49999) {
      nhif = 1200;
    } else if (taxablePay > 44999) {
      nhif = 1100;
    } else if (taxablePay > 39999) {
      nhif = 1000;
    } else if (taxablePay > 34999) {
      nhif = 950;
    } else if (taxablePay > 29999) {
      nhif = 900;
    } else if (taxablePay > 24999) {
      nhif = 850;
    } else if (taxablePay > 19999) {
      nhif = 750;
    } else if (taxablePay > 14999) {
      nhif = 600;
    } else if (taxablePay > 11999) {
      nhif = 500;
    } else if (taxablePay > 7999) {
      nhif = 400;
    } else if (taxablePay > 5999) {
      nhif = 300;
    } else {
      nhif = 150;
    }

    if (taxablePay > 32333) {
      paye = 24000 * 0.1 + 8333 * 0.25 + (taxablePay - 32333) * 0.3;
    } else if (taxablePay > 24000) {
      paye = 24000 * 0.1 + (taxablePay - 24000) * 0.25;
    } else if (taxablePay > 23999) {
      paye = 24000 * 0.1;
    }
    totalDeductions = paye - (nhif + nssf);
    return taxablePay - totalDeductions;
  }
};

//Challenge (4) Four  - Extra Practice Questions
// (4) A  - Bubble Sort
const reverseArray = (arr) => {
  let reverseArr = [];
  for (i = arr.length; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  return reverseArr;
};

// (4)  B - Loops
const stairs = (int) => {
  for (i = 1; i <= int; i++) {
    let str = "#";
    console.log(str.repeat(i));
  }
};

// (4)  C - Objects
const cylinder = class {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  //Getter
  get vol() {
    return this.calcVol();
  }
  //Method
  calcVol() {
    return (Math.PI * this.height * this.radius ** 2).toFixed(4);
  }
};
