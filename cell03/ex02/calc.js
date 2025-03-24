Last login: Mon Mar 24 22:28:55 on ttys000
tonnam@Pakornkiat ~ % >....                                                     
  if (num1 < 0 || num2 < 0) {
    console.log("Error :(");
    alert("Error :(");
    return;
  } else if (operator == "+") {
    ans = num1 + num2;
  } else if (operator == "-") {
    ans = num1 - num2;
  } else if (operator == "*") {
    ans = num1 * num2;
  } else if (operator == "/") {
    ans = num1 / num2;
  } else if (operator == "%") {
    ans = num1 % num2;
  }
  if (isNaN(ans)) {
    console.log("It’s over 9000!");
    alert("It’s over 9000!");
  } else {
    console.log(ans);
    alert(ans);
  }
};
