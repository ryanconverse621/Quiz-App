const _question = document.getElementById('question');
const _options = document.querySelector('.quiz-options');
const _correctScore = document.getElementById('correct-score');
const _totalQuestion = document.getElementById('total-question');
const _result = document.getElementById('result');
const _checkBtn = document.getElementById('check-answer');
const _playAgainBtn = document.getElementById('play-again');

let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;

function eventListeners() {
    _checkBtn.addEventListener('click', checkAnswer);
    _playAgainBtn.addEventListener('click', restartQuiz);
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    eventListeners();
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
});

async function loadQuestion() {
    const APIUrl = "https://opentdb.com/api.php?amount=10&category=21&type=multiple";
    const result = await fetch(`${APIUrl}`);
    const data = await result.json();
    // console.log(data.results[0]);
    _result.innerHTML = "";
    showQuestion(data.results[0]);
}

function showQuestion(data) {
    _checkBtn.disabled = false;
    correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = incorrectAnswer;
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);

    _question.innerHTML = `${data.question}`;
    _options.innerHTML = `
        ${optionsList.map((option, index) => `
            <li class="border-solid border-red-500 border-2 mb-2 rounded-lg p-2 hover:bg-red-100 hover:text-gray-900"> ${index + 1}. <span> ${option} </span> </li>
        `).join('')}
    `;

    selectOption();
}

function selectOption() {
    _options.querySelectorAll('li').forEach((option) => {
        option.addEventListener('click', () => {
            if(_options.querySelector('.selected')){
                const activeOption = _options.querySelector('.selected');
                activeOption.classList.remove('selected');
            }
            option.classList.add('selected');
        });
    });
}

function checkAnswer() {
    _checkBtn.disabled = true;
    if(_options.querySelector('.selected')){
        let selectedAnswer = _options.querySelector('.selected span').textContent;
        if(selectedAnswer.trim() == HTMLDecode(correctAnswer)) {
            correctScore++;
            _result.innerHTML = `<p class="mb-2 text-green-500">Correct Answer!</p>`;
        } else {
            _result.innerHTML = `<div class="flex flex-col justify-center items-center mb-2"><p class="text-red-500">Incorrect Answer! </p> <p> <small><b>Correct Answer: </b> ${correctAnswer}</small></p></div>`;
        }
        checkCount();
    } else {
        _result.innerHTML = `<p class="font-bold"></i>Please select an option!</p>`;
        _checkBtn.disabled = false;
    }
}

function HTMLDecode(textString) {
    let doc = new DOMParser().parseFromString(textString, "text/html");
    return doc.documentElement.textContent;
}

function checkCount(){
    askedCount++;
    setCount();
    if(askedCount == totalQuestion){
        setTimeout(function(){
            console.log("");
        }, 5000);


        _result.innerHTML += `<p>Your score is ${correctScore}.</p>`;
        _playAgainBtn.style.display = "block";
        _checkBtn.style.display = "none";
    } else {
        setTimeout(function(){
            loadQuestion();
        }, 4000);
    }
}

function setCount() {
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
}

function restartQuiz() {
    correctScore = askedCount = 0;
    _playAgainBtn.style.display = "none";
    _checkBtn.style.display = "block",
    setCount();
    loadQuestion();
}