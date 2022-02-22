// // promises
// // what
// // why
// // how

// // 3 states
// // fulfilled, rejected, pending
// // sleep(2000)
// // .then(operation1)
// // .then(operation2)
// // .then(operation3)
// // .catch(operation3)
// // .finally(operation3)

function sleep(time) {
  return new Promise((res, rej) => {
    if (typeof time !== "number") {
      rej("argument to sleep function should be a number");
      return;
    }
    setTimeout(() => {
      res({ status: 200 });
    }, time);
  });
}

setTimeout(() => {
  console.log("first");
}, 0);

Promise.resolve().then((res) => console.log("promise"));

sleep(1000)
  .then((res) => console.log("printed after 2s"))
  .catch((err) => console.log(err));

async function test() {
  try {
    console.log("waiting for results");
    let res = await sleep(2000);

    console.log(res);
    if (res.status === 200) {
      return true;
    }
  } catch (err) {
    console.log(err);
  }
}

test().then((res) => {
  console.log(res);
});
