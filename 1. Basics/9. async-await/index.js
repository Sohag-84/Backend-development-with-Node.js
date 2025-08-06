function delayFun(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayedGreet(name) {
  await delayFun(2000);
  console.log(name);
}

delayedGreet("Raiyan");

async function division(num1, num2) {
  try {
    if (num2 == 0) throw Error("Can't divide by zero");
    return num1 / num2;
  } catch (error) {
    console.log(error, "error");
    return null;
  }
}

async function mainFun() {
  console.log(await division(28, 4));
  console.log(await division(28, 0));
}
mainFun();