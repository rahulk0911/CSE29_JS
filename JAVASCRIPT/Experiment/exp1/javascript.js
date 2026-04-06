CalculateResult = () => {
    let n = document.getElementById("subjects").value;
    let i;
    let totalMarks = 0;
    for (i = 0; i < n; i++) {
        let x =parseFloat(prompt("Enter marks of subject " + (i + 1)));
        totalMarks += x;
    }

    let averageMarks = totalMarks / n;
    let grade;
    if (averageMarks >= 90) {
        grade = "A+";
    } else if (averageMarks >= 80) {
        grade = "B";
    } else if (averageMarks >= 60) {
        grade = "C";
    }
    else if (averageMarks >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }
    
    let reult = document.getElementById("result").innerHTML = "Total Marks: " + totalMarks + "<br>" +
        "Average Marks: " + averageMarks + "<br>" +
        "Grade: " + grade;
}