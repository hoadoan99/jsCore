/** @format */

function uppercaseText(text) {
  return text.charAt(0).toUppercase() + text.slice(1);
}

function reverse(str = "") {
  const splitStr = str.split("_");
  let newStr = " ";
  for (let i = 0; i < splitStr.length; i++) {
    newStr += uppercaseText(splitStr[i]);
  }
  console.log(newStr);
}

reverse("u_000_hello_hahaha");
