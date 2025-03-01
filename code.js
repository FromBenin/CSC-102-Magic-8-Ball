/* The function below is the shakeBall() function which shakes the magic 8 ball and generates an answer based on the number the ball displays */
function shakeBall() {
    // The variable ball generates a random number between 1 and 6 for the first ball
    var ball = Math.ceil(Math.random() * 10);
    // Initialize the answer variable
    var answer = "";

    // The next lines is are conditionals that determine the answer based on the number given by the ball
    if (ball <= 4) {
        // If the number is 4 or less, the answer is positive
        answer = "Yes, definitely!";
    } else if (ball <= 8) {
        // If the number is between 5 and 8, the answer is vague or uncertain
        answer = "Ask again later.";
    } else {
        // If the number is greater than 8, the answer is negative
        answer = "No, not at all.";
    }

    // The last line the answer in the HTML element with the id "answer"
    document.getElementById("answer").innerHTML = answer;
}
