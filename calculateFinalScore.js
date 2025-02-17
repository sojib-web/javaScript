function calculateFinalScore(input) {
  let finalScore = input.testScore + input.schoolGrade;

  if (
    typeof input.name !== "string" ||
    typeof input.testScore !== "number" ||
    typeof input.schoolGrade !== "number" ||
    typeof input.isFFamily !== "boolean"
  ) {
    return "Invalid input";
  }

  console.log(finalScore);

  if (input.isFFamily === true) {
    finalScore += 20;
  }

  if (finalScore >= 80) {
    return true;
  } else {
    return false;
  }
}

// @ts-ignore
const result = calculateFinalScore({
  name: "John",
  testScore: 40,
  schoolGrade: 49,
  isFFamily: false,
});
console.log(result);
