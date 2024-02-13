// function removeSpaces(str) {
//   let noSpaceStr = str.split(" ").join("");
//   return noSpaceStr;
// }

// function allUndercase(str) {
//   let lowercaseString = str.toLowercase();
//   return lowercaseString;
// }

// function removePunctuation(str) {
//   let noPunctuationStr = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
//   return noPunctuationStr;
// }

let exampleStr = "Man, I really love working at Revature";

function palindromeChecker(str) {
  let newStr = str
    .split(" ")
    .join("")
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
    .toLowerCase();
  let length = newStr.length;
  for (let i = 0; i < length / 2; i++) {
    if (newStr[i] !== newStr[length - 1 - i]) {
      return console.log("It is not a palindrome");
    }
    return console.log("It is a palindrome");
  }
}

palindromeChecker(exampleStr);
