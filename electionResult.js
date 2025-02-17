let electionArray = ["mango", "banana", "Na-Vote", "mango"];

function electionResult(votes) {
  let mangoCount = 0;
  let bananaCount = 0;

  if (!Array.isArray(votes)) {
    return "Invalid";
  }
  for (let vote of votes) {
    if (vote === "mango") {
      mangoCount++;
      //   console.log(mangoCount);
    } else if (vote === "banana") {
      bananaCount++;
      //   console.log(bananaCount);
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

const result = electionResult(electionArray);
console.log(result);
