// Function to check the answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer is selected
    if (!userAnswer) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }

    // Compare the user's answer with the correct answer
    if (userAnswer.value === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

