function electionResult(votes) {
  let mangoCount = 0;
  let bananaCount = 0;

  if (!Array.isArray(votes)) {
    return "Invalid";
  }
  for (let vote of votes) {
    if (vote === "mango") {
      mangoCount++;
    } else if (vote === "banana") {
      bananaCount++;
    }
  }

  if (mangoCount > bananaCount) {
    return "Mango";
  } else if (bananaCount > mangoCount) {
    return "Banana";
  } else {
    return "Draw";
  }
}

const result = electionResult(["mango", "banana", "Na-Vote", "mango"]);
console.log(result);
