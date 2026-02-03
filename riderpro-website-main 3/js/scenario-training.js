// RiderPro Mandatory Training - Scenario Questions
const quizQuestions = [
    {
        question: "Your order is about to be late, but the customer lives on the 5th floor with no elevator. What should you prioritize?",
        options: [
            "Call the customer immediately, explain the situation, and ask them to come down",
            "Ignore the timeout, insist on delivering upstairs to ensure service quality",
            "Leave it on the ground floor and let the customer pick it up",
            "Contact platform customer service to apply for extension, then deliver upstairs"
        ],
        correct: 3,
        explanation: "The correct answer is to contact the platform to apply for extension and deliver upstairs. This avoids timeout penalties while maintaining service quality and professionalism."
    },
    {
        question: "You encounter heavy traffic during delivery and expect to be 10 minutes late. What's the best approach?",
        options: [
            "Speed up and take risks weaving through traffic",
            "Call the customer in advance to explain the situation and apologize",
            "Say nothing and explain when you arrive late",
            "Cancel the order to avoid bad reviews"
        ],
        correct: 1,
        explanation: "Proactively contacting the customer to explain and apologize is the most professional approach. Communication helps gain customer understanding and avoid complaints. Safety is always the top priority."
    },
    {
        question: "Upon arriving at the delivery address, you find the customer's address is incomplete and you can't find the exact location. You should:",
        options: [
            "Leave it somewhere nearby and go",
            "Immediately call the customer to confirm the detailed location",
            "Mark as undeliverable and request order cancellation",
            "Wait for the customer to contact you"
        ],
        correct: 1,
        explanation: "Immediately contacting the customer to confirm the location is the most effective solution. Proactive communication quickly resolves the problem and ensures successful order completion."
    },
    {
        question: "The customer notices food spillage upon receipt, suspects it's your fault, and demands compensation. You should:",
        options: [
            "Immediately deny it, saying it's the merchant's packaging problem",
            "Apologize and take photos to document, contact merchant and platform to verify the situation",
            "Agree to compensation immediately to avoid trouble",
            "Ignore the customer's complaint"
        ],
        correct: 1,
        explanation: "The professional approach is to apologize first, then photograph the scene, and contact both merchant and platform to verify. This shows a responsible attitude while protecting your own rights."
    },
    {
        question: "On a rainy day delivery, you arrive and find the food packaging has gotten wet. You should:",
        options: [
            "Hand it directly to the customer without mentioning it",
            "Proactively apologize and explain the situation, ask if they need it remade",
            "Purchase a replacement order yourself",
            "Refuse delivery and have the customer cancel the order"
        ],
        correct: 1,
        explanation: "Proactively explaining the situation and offering solutions demonstrates professional competence. Honest communication earns customer trust, and the platform will handle based on actual circumstances."
    },
    {
        question: "You receive 3 orders simultaneously, one is a VIP customer but furthest away. How should you arrange delivery order?",
        options: [
            "Deliver to VIP customer first because they're more important",
            "Deliver in the order of acceptance",
            "Plan optimal route based on distance and timeout risk comprehensively",
            "Randomly choose delivery order"
        ],
        correct: 2,
        explanation: "Reasonably planning routes is the most professional approach. Comprehensively considering distance, time, timeout risk and other factors improves efficiency while ensuring service quality for all orders."
    },
    {
        question: "A customer asks you to help take trash downstairs, but you have other orders waiting for delivery. You should:",
        options: [
            "Directly refuse, saying this isn't a delivery person's job",
            "Politely explain you have other orders to deliver and cannot provide extra services",
            "Ignore subsequent orders and help the customer with trash first",
            "Agree but don't do it"
        ],
        correct: 1,
        explanation: "Politely declining with an explanation is the correct approach. This demonstrates professionalism while helping customers understand your work nature, without affecting ratings."
    },
    {
        question: "The merchant delays food preparation by 30 minutes, possibly causing order timeout. Best handling method is:",
        options: [
            "Cancel the order to avoid timeout penalty",
            "Contact customer to explain situation, simultaneously report merchant delay to platform",
            "Do nothing and wait for merchant to prepare food",
            "Pressure merchant and get into argument"
        ],
        correct: 1,
        explanation: "Timely communication with both customer and platform is professional. This gains customer understanding and informs the platform of the situation, avoiding unfair penalties."
    },
    {
        question: "During delivery, community security won't let you in, but customer requires door-to-door delivery. You should:",
        options: [
            "Force entry into the community",
            "Contact customer to explain situation and negotiate handoff at entrance",
            "Leave it at the entrance and go",
            "Directly cancel the order"
        ],
        correct: 1,
        explanation: "Proactively communicating to find a mutually acceptable solution is most appropriate. This respects community rules while making best effort to meet customer needs, demonstrating flexible problem-solving."
    },
    {
        question: "A customer gives a bad review, but you believe your service was excellent. How should you handle it?",
        options: [
            "Call the customer directly to question them",
            "Calmly analyze, appeal through platform with service evidence",
            "Argue with customer in the review comments",
            "Ignore the bad review and continue working"
        ],
        correct: 1,
        explanation: "Rational appeal with evidence is the correct approach. Resolving issues through proper channels protects your rights while maintaining professional image. Emotional responses only make things worse."
    }
];

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

// Required passing score (80%)
const REQUIRED_ACCURACY = 80;
const MIN_CORRECT_ANSWERS = 8;

// DOM Elements
const lockOverlay = document.getElementById('lockOverlay');
const quizContainer = document.getElementById('quizContainer');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackMessage = document.getElementById('feedbackMessage');
const nextBtn = document.getElementById('nextBtn');
const currentQuestionSpan = document.getElementById('currentQuestion');
const currentScoreSpan = document.getElementById('currentScore');
const progressBar = document.getElementById('progressBar');
const questionCard = document.getElementById('questionCard');
const resultContainer = document.getElementById('resultContainer');
const continueBtn = document.getElementById('continueBtn');
const retryBtn = document.getElementById('retryBtn');

// Start Training
function startTraining() {
    lockOverlay.style.display = 'none';
    quizContainer.classList.add('active');
    initQuiz();
}

// Initialize Quiz
function initQuiz() {
    loadQuestion();
}

// Load Question
function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showResults();
        return;
    }

    const question = quizQuestions[currentQuestionIndex];

    // Update question display
    questionNumber.textContent = `Scenario ${currentQuestionIndex + 1}`;
    questionText.textContent = question.question;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    // Update progress bar
    const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
    progressBar.style.width = progress + '%';

    // Clear previous options
    optionsContainer.innerHTML = '';
    feedbackMessage.classList.remove('show', 'correct', 'wrong');
    nextBtn.classList.remove('show');

    // Create option buttons
    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.innerHTML = `
            <span class="option-label">${index + 1}</span>
            <span>${option}</span>
        `;
        optionBtn.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionBtn);
    });
}

// Handle Answer Selection
function selectAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestionIndex];
    const correctIndex = question.correct;
    const allOptions = document.querySelectorAll('.option-btn');

    // Disable all options
    allOptions.forEach(btn => btn.disabled = true);

    answeredQuestions++;

    // Check if answer is correct
    if (selectedIndex === correctIndex) {
        // Correct answer
        allOptions[selectedIndex].classList.add('correct');
        feedbackMessage.className = 'feedback-message show correct';
        feedbackMessage.innerHTML = `
            <strong>✓ Correct!</strong><br>
            ${question.explanation}
        `;
        score += 10;
        correctAnswers++;
        currentScoreSpan.textContent = score;

        // Auto advance to next question after 2 seconds
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 2000);

    } else {
        // Wrong answer
        allOptions[selectedIndex].classList.add('wrong');
        allOptions[correctIndex].classList.add('correct');
        feedbackMessage.className = 'feedback-message show wrong';
        feedbackMessage.innerHTML = `
            <strong>✗ Incorrect</strong><br>
            The correct answer is: <strong>${question.options[correctIndex]}</strong><br>
            ${question.explanation}
        `;
        wrongAnswers++;

        // Show next button for wrong answers
        nextBtn.classList.add('show');
    }
}

// Next Button Handler
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

// Show Results
function showResults() {
    questionCard.style.display = 'none';
    resultContainer.classList.add('show');

    // Calculate results
    const accuracy = Math.round((correctAnswers / quizQuestions.length) * 100);

    // Update result display
    document.getElementById('finalScore').textContent = `${correctAnswers}/${quizQuestions.length}`;
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('wrongCount').textContent = wrongAnswers;
    document.getElementById('accuracy').textContent = accuracy + '%';

    // Check if passed (80% or higher = 8 or more correct)
    const passed = correctAnswers >= MIN_CORRECT_ANSWERS;

    // Result message based on performance
    let message = '';
    if (passed) {
        message = '🎉 Congratulations! You have passed the mandatory training. Your account has been unlocked and you can resume deliveries.';
        continueBtn.disabled = false;
        continueBtn.style.background = '#4CAF50';
        retryBtn.style.display = 'none';

        // Change score color to green
        document.getElementById('finalScore').style.color = '#4CAF50';
    } else {
        message = `❌ Training Failed. You need at least ${MIN_CORRECT_ANSWERS}/10 (${REQUIRED_ACCURACY}%) to pass. You scored ${correctAnswers}/10 (${accuracy}%). Please retry the training.`;
        continueBtn.disabled = true;
        continueBtn.style.background = '#cccccc';
        retryBtn.style.display = 'inline-block';

        // Change score color to red
        document.getElementById('finalScore').style.color = '#f44336';
    }

    document.getElementById('resultMessage').textContent = message;

    // Update progress bar to 100%
    progressBar.style.width = '100%';
}

// Continue Button Handler
continueBtn.addEventListener('click', () => {
    alert('✅ Account Unlocked! You can now return to work. Your rating will be monitored closely.');
    window.location.href = 'index.html';
});

// Retry Button Handler
retryBtn.addEventListener('click', () => {
    location.reload();
});

// Prevent leaving page during training
window.addEventListener('beforeunload', (e) => {
    if (currentQuestionIndex < quizQuestions.length && currentQuestionIndex > 0) {
        e.preventDefault();
        e.returnValue = 'Training is not complete. If you leave, you will need to start over.';
    }
});
