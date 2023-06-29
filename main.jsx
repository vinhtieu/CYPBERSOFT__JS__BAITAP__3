// *BOX 1

var realNumInput = document.getElementById("realNum");
var realNumOutput = document.getElementById("sortedNum");

realNumInput.addEventListener("input", function (e) {
  var input = e.target.value;

  if (isNum(input)) {
    var numericStr = "";
    numericStr += formatStr(input);
    var array = toArr(numericStr);
    var numericArr = toNumber(array);
    realNumOutput.value = sortAZ(numericArr).join(", ");
    realNumOutput.style.color = "black";
  } else {
    realNumOutput.value = "ERROR";
    realNumOutput.style.outline = "red";
    realNumOutput.style.color = "red";
  }
});

function formatStr(inputString) {
  var str = "";
  var length = 0;
  var formatStr = "";
  var arr = [];

  var formatInput = inputString.trim().replace(/[^0-9,.]/g, "");
  arr.push(formatInput);
  str += arr[arr.length - 1];
  var length = str.length;

  for (var i = 0; i < length; i++) {
    if (str[i] === " ") {
      if (str[i + 1] !== " ") {
        formatStr += ", ";
      }
    } else {
      formatStr += str[i];
    }
  }
  return formatStr;
}

function isNum(input) {
  //   var str = input.replace(/[a-z]/gi, "");
  var length = input.length;
  for (var i = 0; i < length; i++) {
    if (input[i].match(/[^0-9,.]/)) {
      return false;
    }
  }
  return true;
}

function toArr(string) {
  var arr = [];
  var arrIndex = 0;
  var strLength = string.length;
  for (var i = 0; i < strLength; i++) {
    if (string[i] === ",") {
      arrIndex++;
    } else {
      if (arr[arrIndex] === undefined) {
        arr[arrIndex] = string[i];
      } else {
        arr[arrIndex] += string[i];
      }
    }
  }

  return arr;
}

function toNumber(array) {
  var length = array.length;
  for (var i = 0; i < length; i++) {
    var num = array[i] * 1;
    array[i] = num;
  }

  return array;
}

function sortAZ(input) {
  var length = input.length;
  //   var sortedArr = [];
  var index = 0;
  var temp = 0;
  for (var i = 0; i < length; i++) {
    for (var j = i + 1; j < length; j++) {
      if (input[i] * 1 > input[j] * 1) {
        var temp = input[i];
        input[i] = input[j];
        input[j] = temp;
      }
    }
  }

  return input;
}

//*BOX 2

var message = document.getElementById("hello");
var checkbox1 = document.getElementById("inlineRadio1");
var checkbox2 = document.getElementById("inlineRadio2");
var checkbox3 = document.getElementById("inlineRadio3");
var checkbox4 = document.getElementById("inlineRadio4");

document.addEventListener("DOMContentLoaded", function () {
  message.innerHTML = `<p>Ai Đang Sử Dụng Máy ?</p>`;
});

checkbox1.addEventListener("change", handleCheckBoxEvent);
checkbox2.addEventListener("change", handleCheckBoxEvent);
checkbox3.addEventListener("change", handleCheckBoxEvent);
checkbox4.addEventListener("change", handleCheckBoxEvent);

function handleCheckBoxEvent(e) {
  var input = e.target.value * 1;

  switch (input) {
    case 1:
      message.innerHTML = `<p>Xin Chào Ba</p>`;
      break;
    case 2:
      message.innerHTML = `<p>Xin Chào Mẹ</p>`;
      break;
    case 3:
      message.innerHTML = `<p>Xin Chào Anh Trai</p>`;
      break;
    case 4:
      message.innerHTML = `<p>Xin Chào Em Gái</p>`;
      break;
  }
}
// *BOX 3

var realNumBox3Input = document.getElementById("realNumBox3");
var realNumBox3Output = document.getElementById("sortedNumBox3");

realNumBox3Input.addEventListener("input", function (e) {
  var input = e.target.value;

  if (isNum(input)) {
    var numericStr = "";
    numericStr += formatStr(input);

    var array = toArr(numericStr);

    var numericArr = toNumber(array);
    //   var sortedArr = sortAZ(numericArr);
    //   console.log("🚀 ~ file: main.jsx:17 ~ sortedArr:", sortedArr);

    var evenNum = isEven(numericArr);

    var oddNum = isOdd(numericArr);

    realNumBox3Output.value = `Even: ${sortAZ(evenNum).join(
      ", "
    )}\nOdd: ${sortAZ(oddNum).join(", ")}`;
    realNumBox3Output.style.color = "black";
  } else {
    realNumBox3Output.value = "ERROR";
    realNumBox3Output.style.outline = "red";
    realNumBox3Output.style.color = "red";
  }
});

function isEven(num) {
  var length = num.length;
  var arr = [];
  var index = 0;
  for (var i = 0; i < length; i++) {
    if (num[i] % 2 === 0) {
      arr[index++] = num[i];
    }
  }

  return arr;
}

function isOdd(num) {
  var length = num.length;
  var arr = [];
  var index = 0;
  for (var i = 0; i < length; i++) {
    if (num[i] % 2 !== 0) {
      arr[index++] = num[i];
    }
  }

  return arr;
}

// *BOX 4

var input1 = document.getElementById("side1");
var input2 = document.getElementById("side2");
var input3 = document.getElementById("side3");
var button = document.querySelector(".box-4 .btn");
var img = document.querySelector("#triangleImg");
var modal4 = document.querySelector("#modalBox4");
var backBtn4 = document.querySelector("#backBox4");
var result4 = document.getElementById("box4Result");

button.addEventListener("click", function () {
  var sideA = input1.value * 1;
  var sideB = input2.value * 1;
  var sideC = input3.value * 1;
  modal4.style.visibility = "visible";

  if (sideA === sideB && sideA === sideC) {
    img.style.background = `url(./Equilateral-triangle.svg.png) no-repeat center/contain`;
    box4Result.innerHTML = `<p>Type: Equilateral</p>`;
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    console.log("Situation 2");
    result4.innerHTML = `<p>Type: Isosceles</p>`;
    img.style.background = `url(./1200px-Triangle.Isosceles.svg.png) no-repeat center/contain`;
    if (checkPythagorean(sideA, sideB, sideC)) {
      img.style.background = `url(./right-isosceles-triangle.jpg) no-repeat center/contain`;
      result4.innerHTML = `<p>Type: Right Isosceles</p>`;
    }
  } else {
    console.log(checkPythagorean(sideA, sideB, sideC));
    if (checkPythagorean(sideA, sideB, sideC) === true) {
      result4.innerHTML = `<p>Type: Right</p>`;
      img.style.background = `url(./right-triangle-with-square.png) no-repeat center/contain`;
    } else {
      result4.innerHTML = `<p>Type: Scalene</p>`;
      img.style.background =
        "url(./Triangle-scalene.svg.png) no-repeat center/contain";
    }
  }
});

backBtn4.addEventListener("click", function () {
  modal4.style.visibility = "hidden";
});

function checkPythagorean(a, b, c) {
  var left = c * c;
  var right = b * b + a * a;
  console.log(left);
  console.log(right);
  if (left === right) {
    return true;
  } else {
    return false;
  }
}
