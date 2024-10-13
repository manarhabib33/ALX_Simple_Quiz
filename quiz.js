// Function to check the user's answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element to display results
    const feedback = document.getElementById('feedback');

    // Check if the user selected an answer
    if (userAnswer) {
        // Compare user's answer to the correct answer
        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green"; // Optional: add color to feedback
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red"; // Optional: add color to feedback
        }
    } else {
        feedback.textContent = "Please select an answer!";
        feedback.style.color = "orange"; // Optional: add color to feedback
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);




