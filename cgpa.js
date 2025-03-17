document.addEventListener("DOMContentLoaded", function () {
    let inputs = document.querySelectorAll("input");

    function getGradePoints(marks) {
        if (marks >= 90) return 10;
        else if (marks >= 80) return 9;
        else if (marks >= 70) return 8;
        else if (marks >= 60) return 7;
        else if (marks >= 50) return 6;
        else if (marks >= 40) return 5;
        else return 0; // Fail
    }

    function getGradePointsFromLetter(grade) {
        let gradeMapping = { "O": 10, "A+": 9, "A": 8, "B+": 7, "B": 6, "C": 5, "F": 0 };
        return gradeMapping[grade.toUpperCase()] || 0;
    }

    function calculateCGPA() {
        let subjects = [
            { name: "Math", credit: 3 },
            { name: "Mechanics", credit: 3 },
            { name: "Chem", credit: 3 },
            { name: "UHV", credit: 2 },
            { name: "BE", credit: 2 },
            { name: "BCE", credit: 2 }
        ];

        let sessionalSubjects = [
            { name: "WDM", credit: 1.5 },
            { name: "BEL", credit: 1.5 },
            { name: "ChemL", credit: 1.5 },
            { name: "EGD", credit: 1.5 }
        ];

        let totalGradePoints = 0;
        let totalCredits = 0;

        let inputFields = document.querySelectorAll("input");

        let index = 0;
        subjects.forEach(subject => {
            let midMarks = parseFloat(inputFields[index++].value) || 0;
            let endMarks = parseFloat(inputFields[index++].value) || 0;
            let practicalMarks = parseFloat(inputFields[index++].value) || 0;

            let totalMarks = midMarks + endMarks + practicalMarks;
            let gradePoints = getGradePoints(totalMarks);

            totalGradePoints += gradePoints * subject.credit;
            totalCredits += subject.credit;
        });

        sessionalSubjects.forEach(subject => {
            let grade = inputFields[index++].value.toUpperCase();
            let gradePoints = getGradePointsFromLetter(grade);

            totalGradePoints += gradePoints * subject.credit;
            totalCredits += subject.credit;
        });

        let cgpa = totalGradePoints / totalCredits;
        document.getElementById("OVERALL CGPA").innerText = `Your CGPA: ${cgpa.toFixed(2)}`;
    }

    // Create a button to calculate CGPA
    let button = document.createElement("button");
    button.innerText = "Calculate CGPA";
    button.style.padding = "10px 20px";
    button.style.marginTop = "20px";
    button.onclick = calculateCGPA;
    document.body.appendChild(button);
});
