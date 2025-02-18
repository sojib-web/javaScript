// function validEmail(email) {
//   // const emailRegex = /^[\.-_+@]/;

//   if (typeof email !== "string") {
//     return "Invalid";
//   }
//   if (/^[\.-_+@]/.test(email)) {
//     return false;
//   } else if (!email.includes("@")) {
//     return false;
//   } else if (!email.endsWith(".com")) {
//     return false;
//   }
//   return true;
// }

// const email = validEmail(".zihad@gmail.com");
// console.log(email);

function validEmail(email) {
  if (typeof email !== "string") {
    return "Invalid";
  }

  if (
    email.indexOf("@") === -1 ||
    email.slice(-4) !== ".com" ||
    email.indexOf(" ") !== -1
  ) {
    return false;
  } else if (
    email[0] === "." ||
    email[0] === "-" ||
    email[0] === "_" ||
    email[0] === "+"
  ) {
    return false;
  } else {
    return true;
  }
}

const email = validEmail("he ro@alom.com");
console.log(email);
