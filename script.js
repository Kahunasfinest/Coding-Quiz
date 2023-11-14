console.log("JS file linked successfully!");
const startQuiz = document.getElementById('Start-btn');
const quizContainer = document.getElementById('quiz-screen-1');
const timerDisplay = document.getElementById('timer');
let timerValue = 60;
let score = 0;
let current = 1;

startQuiz.addEventListener('click', function (e) {
    quizContainer.classList.remove('hidden');
    const answers = document.getElementsByClassName('answer-choice');
    const timerInterval = setInterval(function () {
        timerValue--;
        timerDisplay.textContent = `Time: ${timerValue}`;
        if (timerValue <= 0 || current === 6) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);

    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener('click', function (e) {
            if (e.target.id === 'correct') {
                score += 1;
                document.getElementById('correct').classList.remove('hidden');
                document.getElementById('wrong').classList.add('hidden');
            } else {
                document.getElementById('correct').classList.add('hidden');
                document.getElementById('wrong').classList.remove('hidden');
                timerValue -= 10;
            }
            let last = document.getElementById('quiz-screen-' + current);
            last.classList.add('hidden');
            current += 1;
            console.log(current);
            if (current < 6) {
                let next = document.getElementById('quiz-screen-' + current);
                next.classList.remove('hidden');
            } else {
                endQuiz();
            }
        });
    }
});

function endQuiz() {
    const highscoresScreen = document.getElementById('highscores-screen');
    highscoresScreen.classList.remove('hidden');
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    highscoresScreen.appendChild(submitButton);

    submitButton.addEventListener('click', function () {
        const initialsInput = document.createElement('input');
        initialsInput.setAttribute('type', 'text');
        initialsInput.setAttribute('placeholder', 'Enter your initials');
        highscoresScreen.appendChild(initialsInput);

        submitButton.addEventListener('click', function () {
            const initials = initialsInput.value;
            
        });
    });
}
