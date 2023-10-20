// Add event listener to examScore input field
document.getElementById("examScore").addEventListener("input", function() {
    var examScore = parseInt(document.getElementById("examScore").value);
    
    // Validate exam score
    if (examScore > 100 || examScore < 0) {
        alert("Invalid score entered. Score must be between 0 and 100.");
        document.getElementById("examScore").value = ""; // Clear the input field
    }
});

// Add event listener to midsemScore input field
document.getElementById("midsemScore").addEventListener("input", function() {
    var midsemScore = parseInt(document.getElementById("midsemScore").value);
    
    // Validate midsem score
    if (midsemScore > 100 || midsemScore < 0) {
        alert("Invalid score entered. Score must be between 0 and 100.");
        document.getElementById("midsemScore").value = ""; // Clear the input field
    }
});

// Add event listener to form submission
document.getElementById("gradeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var name = document.getElementById("name").value;
    var course = document.getElementById("course").value;
    var examScore = parseInt(document.getElementById("examScore").value);
    var midsemScore = parseInt(document.getElementById("midsemScore").value);

    // Calculate total marks
    var totalMarks = (examScore * 0.6) + (midsemScore * 0.4);

    // Display result
    document.getElementById("totalMarks").textContent = "Total Marks: " + totalMarks.toFixed(2);

  //statement 
    document.getElementById("statement").textContent ="Statement: "+ name + " got " + totalMarks.toFixed(2) + " in " + course;

    // Determine grade
    var grade;
    if (totalMarks >= 80 && totalMarks <= 100) {
        grade = "A";
    } else if (totalMarks >= 70 && totalMarks < 80) {
        grade = "B+";
    } else if (totalMarks >= 65 && totalMarks < 70) {
        grade = "B";
    } else if (totalMarks >= 60 && totalMarks < 65) {
        grade = "C+";
    } else if (totalMarks >= 55 && totalMarks < 60) {
        grade = "D+";
    } else if (totalMarks >= 50 && totalMarks < 55) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Display remarks and grade description
    document.getElementById("remarks").textContent = "Remarks: " + name + ", your grade is " + grade;
    document.getElementById("gradeDescription").textContent = "Grade Description: " + getGradeDescription(grade);

    // Show result
    document.getElementById("result").classList.remove("hidden");
});

// Function to get grade description
function getGradeDescription(grade) {
    switch (grade) {
        case "A":
            return "Excellent";
        case "B+":
            return "Very Good";
        case "B":
            return "Good";
        case "C+":
            return "Fair";
        case "D+":
            return "Average";
        case "D":
            return "Below Average";
        case "F":
            return "Fail";
        default:
            return "";
    }
}