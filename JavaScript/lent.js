let str = "Ram is a shyam";
let count = 0;
let max = 0;
for (let i = 0; i < str.length; i++) {
  count++;
  if (str[i] === " ") count = 0;
  max = Math.max(max, count);
}
// console.log(max);


let ob = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91 - 999999999,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
  },
};

let finalObj = {};

const deep = (obj, user) => {
  for (key in obj) {
    if (typeof obj[key] === "object") deep(obj[key], key);
    else {
      if (finalObj[key] === undefined) finalObj[user + "-" + key] = obj[key];
    }
  }
};

deep(ob, "user");
console.log(finalObj);
