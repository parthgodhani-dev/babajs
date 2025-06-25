"use strict";

// Ask: "Enter your exam marks (0–100):"
// Show grades:
// 90–100 → Grade: A+
// 75–89 → Grade: A
// 60–74 → Grade: B
// 40–59 → Grade: C
// Below 40 → Grade: Fail
// Anything else → Invalid marks


let studentMarks = prompt("Enter your exam marks :");
studentMarks = Number.studentMarks();
console.log(typeof studentMarks);


switch (true) {
    case (studentMarks >= 90 && studentMarks <= 100):
        console.log("🎉 Congratulations! You get Grade: A+");
        break;
    case (studentMarks >= 75 && studentMarks < 90):
        console.log("🎉 You get Grade: A");
        break;
    case (studentMarks >= 60 && studentMarks < 75):
        console.log("👍 You get Grade: B");
        break;
    case (studentMarks >= 40 && studentMarks < 60):
        console.log("📘 You get Grade: C (need more improvement)");
        break;
    case (studentMarks >= 0 && studentMarks < 40):
        console.log("❌ Fail");
        break;
    default:
        console.log("⚠️ Invalid marks");
        break;
}





