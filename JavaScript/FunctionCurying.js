let multiply = function (a, b) {
  console.log(a * b);
};

let proto = multiply.bind(this, 5);

proto(10);

function closer(b) {
  return (a) => {
    console.log(a * b);
  };
}

let close = closer(4);

close(3);
