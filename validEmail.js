function validEmail(email) {
  const emailRegex = /^[\.-_+@]/;

  if (typeof email !== "string") {
    return "Invalid";
  }
  if (emailRegex.test(email)) {
    return false;
  } else if (!email.includes("@")) {
    return false;
  } else if (!email.endsWith(".com")) {
    return false;
  }
  return true;
}

const email = validEmail("zihad@gmail.com");
console.log(email);
