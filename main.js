//ui declarations
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button0 = document.getElementById("button0");

const buttonAdd = document.getElementById("buttonAdd");
const buttonSub = document.getElementById("buttonSub");
const buttonMult = document.getElementById("buttonMult");
const buttonDiv = document.getElementById("buttonDiv");
const enter = document.getElementById("buttonEnter");
const clear = document.getElementById("clear");

const input = document.getElementById("input");

input.defaultValue = 0;

//input handling
button1.addEventListener("click", () => {
  if (input.value == 0) {
    input.value = "";
  }
  input.value = input.value + 1;
});

button2.addEventListener("click", () => {
  if (input.value == 0) {
    input.value = "";
  }
  input.value = input.value + 2;
});

button3.addEventListener("click", () => {
  if (input.value == 0) {
    input.value = "";
  }
  input.value = input.value + 3;
});

button4.addEventListener("click", () => {
  if (input.value == 0) {
    input.value = "";
  }
  input.value = input.value + 4;
});

button5.addEventListener("click", () => {
  if (input.value == 0) {
    input.value = "";
  }
  input.value = input.value + 5;
});

button6.addEventListener("click", () => {
  if (input.value == 0) {
    input.value = "";
  }
  input.value = input.value + 6;
});

button7.addEventListener("click", () => {
  if (input.value == 0) {
    input.value = "";
  }
  input.value = input.value + 7;
});

button8.addEventListener("click", () => {
  if (input.value == 0) {
    input.value = "";
  }
  input.value = input.value + 8;
});

button9.addEventListener("click", () => {
  if (input.value == 0) {
    input.value = "";
  }
  input.value = input.value + 9;
});

button0.addEventListener("click", () => {
  if (input.value == 0) {
    input.value = "";
  }
  input.value = input.value + 0;
});

//operation buttons
clear.addEventListener("click", () => {
  input.value = 0;
});

buttonAdd.addEventListener("click", () => {
  input.value = input.value + " + ";
});

buttonSub.addEventListener("click", () => {
  input.value = input.value + " - ";
});

buttonMult.addEventListener("click", () => {
  input.value = input.value + " * ";
});

buttonDiv.addEventListener("click", () => {
  input.value = input.value + " / ";
});

enter.addEventListener("click", () => {
  let query = input.value;
  if (query === "0 / 0") {
    return (input.value = "I don't think so...");
  }
  operator(input.value);
});

//calculator mechanism
function operator(expression) {
  const oper = expression.match(/([0-9]+|\+|\-|\*|\/)/g);

  //storing numbers
  let queue = [];
  //storing operations
  let operque = [];

  //iterate through to seperate numbers and
  //operators
  for (let step of oper) {
    if (!isNaN(step)) {
      queue.push(parseFloat(step));
    } else {
      operque.push(step);
    }
  }

  //push operators in back of queue to handle multiple
  //operators
  while (operque.length > 0) {
    queue.push(operque.pop());
  }

  const pushQueue = [];
  for (let step of queue) {
    if (typeof step === "number") {
      pushQueue.push(step);
    } else {
      //takes last two in queue and preps for operation
      let step1 = pushQueue.pop();
      let step2 = pushQueue.pop();
      switch (step) {
        case "+":
          pushQueue.push(step2 + step1);
          break;
        case "-":
          pushQueue.push(step2 - step1);
          break;
        case "*":
          pushQueue.push(step2 * step1);
          break;
        case "/":
          pushQueue.push(step2 / step1);
          break;
      }
      break;
    }
  }
  //error if multiple operations in one input
  if (pushQueue.length > 1) {
    return (input.value = "Error!");
  }
  let answ = pushQueue.toString();
  input.value = answ;
}
