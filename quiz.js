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

    // Create a feedback message based on the user's answer
    const feedbackMessage = userAnswer.value === correctAnswer 
        ? "Correct! Well done." 
        : "That's incorrect. Try again!";
    
    // Update the feedback element
    document.getElementById("feedback").textContent = feedbackMessage;
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);


