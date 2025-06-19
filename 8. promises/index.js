function delayFun(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
console.log("Promis lecture start");
delayFun(2000).then(() => console.log("After 2 seconds promise resolved"));

console.log("End");

function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 == 0) {
      reject("Can't perform division by 0");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFn(20, 0)
  .then((result) => console.log(result, "res"))
  .catch((err) => console.log(err, "error"));
