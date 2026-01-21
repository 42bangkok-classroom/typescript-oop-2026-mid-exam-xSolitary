export {};
const input = process.argv[2];
const score = Number(input);


if (
  input === undefined ||
  Number.isNaN(score) ||
  score < 0 ||
  score > 100
) {
  console.log("Invalid input");
  process.exit();
}
if (score >= 80) console.log("A");
else if (score >= 70) console.log("B");
else if (score >= 60) console.log("C");
else if (score >= 50) console.log("D");
else console.log("F");
