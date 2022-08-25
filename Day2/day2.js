/** @format */
// str = "user_name";
// let substrings = str.split("_");
// let str1 =
//   substrings[0].charAt(0).toUpperCase() +
//   substrings[0].slice(1) +
//   substrings[1].charAt(0).toUpperCase() +
//   substrings[1].slice(1);
// console.log(str1);

// function uppercaseText(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
// // console.log(uppercaseText("dotuyet"));
// function reverse(str = "") {
//   const splitStr = str.split("_");
//   let newStr = "";
//   for (let i = 0; i <= splitStr - 1; i++) {
//     newStr += str.uppercaseText(splitStr[i]);
//   }
//   console.log(newStr);
// }
// reverse("000_uuuuu_llll_pppp");

let BMI = function (m, h) {
  m / h ** 2;
};

function BMI(m, h) {
  return m / h ** 2;
}

let heigherBMI = function (n1, m1, h1, n2, m2, h2) {
  BMI(m1, h1) > BMI(m2, h2)
    ? console.log(`${n1} BMI is higher than ${n2}`)
    : console.log(`${n2} BMI is higher than ${n1}`);
};

heigherBMI("Mark", 78, 169, "John", 92, 195);
