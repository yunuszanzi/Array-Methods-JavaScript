// console.log("Hello")
// alert('Hello')
// document.write('<h1>Hello<h1/>')

// let a = prompt("Enter Number a: ");
// let b = prompt("Enter Number b: ");
// let c = parseInt(a) + parseInt(b)

// document.write("the sum of two number is: ", c)

//Square Root

// let num = prompt("Enter Sq Number: ");
// let sqrtNum = Math.sqrt(num);
// document.write("The sqareroot of ", num," is ",sqrtNum)

// FInd area of triangle

// let base = prompt("Enter base of traingle: ");
// let height = prompt("Enter base of traingle: ");

// document.write("The area of the triangle is: ", (1/2)*base*height);

//swap two num without using third variable

// let a = 5;
// let b = 2;

// document.write("swapping variable a: " , a , " with b: ", b);
// a = b + a;
// b = a - b;
// a = a - b

// document.write("after Swapping a: " , a , " with b: ", b);

// a = "4",
// b = 4,
// console.log(a == b)

let convertKmsToMies = () => {
  let miles = parseInt(document.getElementById("kms").value * 0.621371);
  // alert (miles);
  document.getElementById("miles").innerText = `${miles} Miles`;
};

let convertCelsToFer = () => {
  let celcius = document.getElementById("celcius").value;
  document.getElementById("ferenhite").innerHTML = `${
    celcius * 1.8 + 32
  } Ferenhite`;
};

const identify = () => {
  let idenNum = document.getElementById("num").value;
  alert(idenNum);
  let newNum = Math.sign(idenNum);
  if (newNum > 0) {
    document.getElementById(
      "identity"
    ).innerHTML = `${idenNum} is a Positive number`;
    document.getElementById("number").innerHTML = "";
  } else if (newNum < 0) {
    document.getElementById(
      "identity"
    ).innerHTML = `${idenNum} is a Negative number`;
  } else {
    document.getElementById("identity").innerHTML = `${idenNum} is a 0`;
  }
};

const oddEven = () => {
  let num = document.getElementById("number").value;
  let res = num % 2 === 0 ? "even" : "odd";
  document.getElementById("identity").innerHTML = `${num} is an ${res} number`;
};

const checkPrime = () => {
  let num = document.getElementById("num").value;
  if (num < 1) {
    document.getElementById("res").innerHTML = `${num} is not a Prime Number`;
  } else if (num == 1) {
    document.getElementById(
      "res"
    ).innerHTML = `${num} is neigther Prime nor Composite Number`;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        document.getElementById(
          "res"
        ).innerHTML = `${num} is a Composite Number`;
        break;
      } else {
        document.getElementById("res").innerHTML = `${num} is a Prime Number`;
      }
    }
  }
};

// const checkMax = () => {
//     var a = prompt("enter 1st number");
//     var b = prompt("enter 2nd number");
//     var c = prompt("enter 3rd number");

//     var d = [parseInt(a), parseInt(b), parseInt(c)];
//     var max = -Infinity;
//     d.forEach((value)=>{
//         if(value > max){
//             max = value;
//         }
//     })
//     console.log("the Maximun number is: ", max)
//     doc
// };

const factorial = () => {
  var factorial = 1;
  let number = document.getElementById("num").value;
  if (number < 1) {
    document.getElementById(
      "fact"
    ).innerHTML = `The number should be greater than 0`;
  } else {
    for (let i = 1; i <= number; i++) {
      factorial = factorial * i;
    }
  }
  document.getElementById(
    "fact"
  ).innerHTML = `The factorial of ${number} is: ${factorial}`;
};

const lastDig = () => {
  number1 = document.getElementById("number1").value.toString();
  number2 = document.getElementById("number2").value.toString();
  number3 = document.getElementById("number3").value.toString();

  console.log(
    "last digits",
    number1[number1.length - 1],
    " ",
    number2[number2.length - 1],
    " ",
    number3[number3.length - 1]
  );
  if (
    number1[number1.length - 1] === number2[number2.length - 1] &&
    number2[number2.length - 1] === number3[number3.length - 1]
  ) {
    document.getElementById(
      "res"
    ).innerHTML = `The last digits of all numbers are same`;
  } else {
    document.getElementById(
      "res"
    ).innerHTML = `The last digits of all numbers are not  same`;
  }
};

const checkPalindrome = () => {
  let initWord = document.getElementById("word").value;
  let splitWord = initWord.split("");
  let revStr = splitWord.reverse();
  let joinStr = revStr.join("");

  // console.log("joinStr", joinStr);
  // console.log("initWord", initWord);

  if (initWord === joinStr) {
    document.getElementById(
      "res"
    ).innerHTML = `${initWord} is a palindrome word`;
  } else {
    document.getElementById(
      "res"
    ).innerHTML = `${initWord} is not a palindrome word`;
  }
};

const checkPalindrome1 = () => {
  let initWord = document.getElementById("word").value;
  let word = initWord.split("");
  arr1 = [];
  for (let a = word.length - 1; a >= 0; a--) {
    arr1.push(word[a]);
  }

  console.log("word", word);
  console.log("arr1", arr1);
  if (word == arr1) {
    document.getElementById(
      "res"
    ).innerHTML = `the word ${initWord} is a palindrome`;
  } else {
    document.getElementById(
      "res"
    ).innerHTML = `the word ${initWord} is not a palindrome`;
  }
};

const countLetter = () => {
  let word = document.getElementById("word").value;
  let letter = document.getElementById("letter").value;
  console.log("word", word);
  console.log("letter", letter);

  let count = 0;
  let arrWord = word.split("");
  arrWord.forEach((i) => {
    if (i === letter) {
      count = count + 1;
    }
  });
  document.getElementById(
    "res"
  ).innerHTML = `The word \"${word}\" has ${count} \"${letter}\" in it`;
};

const checkStartAndEnd1 = () => {
  let word = document.getElementById("word").value;
  let startLetter = document.getElementById("startLetter").value;
  let endLetter = document.getElementById("endLetter").value;

  let splitWord = word.split("");
  console.log("splitWord", splitWord);
  console.log("splitWord[0]", splitWord[0]);
  console.log("splitWord[last]", splitWord[splitWord.length - 1]);

  if (
    splitWord[0] === startLetter &&
    splitWord[splitWord.length - 1] === endLetter
  ) {
    document.getElementById(
      "res"
    ).innerHTML = `The word \"${word}\" starts with ${startLetter} and ends with ${endLetter}`;
  } else {
    document.getElementById(
      "res"
    ).innerHTML = `The word \"${word}\" does not start or end with provided letters`;
  }
};

const checkStartAndEnd = () => {
  let word = document.getElementById("word").value;
  let startLetter = document.getElementById("startLetter").value;
  let endLetter = document.getElementById("endLetter").value;

  if (word.startsWith(startLetter) && word.endsWith(endLetter)) {
    document.getElementById(
      "res"
    ).innerHTML = `The word \"${word}\" starts with ${startLetter} and ends with ${endLetter}`;
  } else {
    document.getElementById(
      "res"
    ).innerHTML = `The word \"${word}\" does not start or end with provided letters`;
  }
};

const checkStr = () => {
  let sentence = document.getElementById("sentence").value;
  let str = document.getElementById("str").value;

  if (sentence.includes(str)) {
    document.getElementById(
      "res"
    ).innerHTML = `The sentence \"${sentence}\" includes ${str}`;
  } else {
    document.getElementById(
      "res"
    ).innerHTML = `The sentence \"${sentence}\" does not include \"${str}\"`;
  }
};

const convertToUpr = () => {
  let word = document.getElementById("word").value;
  let uppercaseWord = word.charAt(0).toUpperCase();
  let rem = word.slice(1);
  caps = uppercaseWord + rem;
  document.getElementById("res").innerHTML = `${caps}`;
};

const countVovels = () => {
  let sentence = document.getElementById("sentence").value;
  reg = /[aeiou]/gi;
  count = sentence.match(reg);
  console.log("count", count);
  document.getElementById(
    "res"
  ).innerHTML = `There are ${count.length} vovels in the sentence`;
};

const fibonacci = () => {
  let num = parseInt(document.getElementById("num").value);
  let series = [0, 1];
  // let sum = 0;
  if (num === 0) {
    series = [0];
  } else if (num === 1) {
    series = [0, 1];
  } else {
    for (let i = 2; i <= num; i++) {
      let sum = series[series.length - 2] + series[series.length - 1];
      series.push(sum);
    }
  }
  console.log(series, "series");
};

const sortWord = () => {
  sentence = document.getElementById("sentence").value;
  splitSent = sentence.split(" ");
  console.log("splitSent", splitSent);
  sortList = splitSent.sort();
  document.getElementById("res").innerHTML = `${sortList}`;
};

const sortWord2 = () => {
//   let data = [4, 6, 3, 7];
//   let id = [];
//   console.log("first");
//   let newData1 = data.map((num) => id.push(num));
//   console.log("first");
//   console.log("newData1", newData1);
// };

// const sortWord2 = () => {
  let data = [4, 6, 3, 7];
  let newData1 = data.map((num) => num); // map() will create a new array with same values
  console.log("first");
  console.log("newData1:", newData1);
};