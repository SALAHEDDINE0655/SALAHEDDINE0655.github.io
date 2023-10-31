document.getElementById("quizForm").addEventListener("submit", function (event) {
            event.preventDefault();
            showResult();
        });

        function showResult() {
            var resultDiv = document.getElementById("result");
            var correctAnswersDiv = document.getElementById("correctAnswers");
            var score = 0;

            // Check answers for Question 1
            var q1Answers = document.querySelectorAll('input[name="q1"]:checked');
            var correctAnswersQ1 = ["1"];

            if (q1Answers.length === correctAnswersQ1.length) {
                var isQ1Correct = true;

                for (var i = 0; i < q1Answers.length; i++) {
                    if (!correctAnswersQ1.includes(q1Answers[i].value)) {
                        isQ1Correct = false;
                        break;
                    }
                }

                if (isQ1Correct) {
                    score++;
                }
            }

            // Check answers for Question 2
            var q2Answers = document.querySelectorAll('input[name="q2"]:checked');
            var correctAnswersQ2 = ["0", "2", "3"];

            if (q2Answers.length === correctAnswersQ2.length) {
                var isQ2Correct = true;

                for (var i = 0; i < q2Answers.length; i++) {
                    if (!correctAnswersQ2.includes(q2Answers[i].value)) {
                        isQ2Correct = false;
                        break;
                    }
                }

                if (isQ2Correct) {
                    score++;
                }
            }

            // Check answers for Question 3
            var q3Answers = document.querySelectorAll('input[name="q3"]:checked');
            var correctAnswersQ3 = ["0", "1", "2"];

            if (q3Answers.length === correctAnswersQ3.length) {
                var isQ3Correct = true;

                for (var i = 0; i < q3Answers.length; i++) {
                    if (!correctAnswersQ3.includes(q3Answers[i].value)) {
                        isQ3Correct = false;
                        break;
                    }
                }

                if (isQ3Correct) {
                    score++;
                }
            }

            // Display the score
            resultDiv.textContent = "Score: " + score + " out of 3";

            // Display the correct answers only if the button is clicked
            if (correctAnswersDiv.style.display !== "block") {
                correctAnswersDiv.style.display = "none";
            }
        }

        function toggleCorrectAnswers() {
            var correctAnswersDiv = document.getElementById("correctAnswers");
            if (correctAnswersDiv.style.display === "none") {
                correctAnswersDiv.style.display = "block";
            } else {
                correctAnswersDiv.style.display = "none";
            }
        }
