function inchTofeet(inch) {
  const feet = inch / 12;
  // @ts-ignore
  const feetnumber = parseInt(feet);
  const inchRemaing = inch % 12;
  const result = feetnumber + " ft " + inchRemaing + " inch.";
  return result;
}

const sojibHeight = inchTofeet(75);
console.log(sojibHeight);
