var marks = 80;

if (marks >= 0 && marks <= 39) {
  console.log("You got F!");
} else if (marks >= 40 && marks < 60) {
  console.log("passed!");
} else if (marks >= 60 && marks < 80) {
  console.log("You got A, good job!!!");
} else if (marks >= 80 && marks <= 100) {
  console.log("You got A+. Great work!!!");
} else {
  console.log("invalid choice!!!");
}