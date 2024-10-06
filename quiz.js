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

    // Use an array to handle feedback messages based on a boolean condition
    const feedbackMessages = [
        "That's incorrect. Try again!",
        "Correct! Well done."
    ];

    // Compare userAnswer.value with correctAnswer using a logical expression
    const isAnswerCorrect = userAnswer.value === correctAnswer; // this line uses comparison without an if statement

    // Update the feedback element based on the comparison
    document.getElementById("feedback").textContent = feedbackMessages[+isAnswerCorrect];
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);




