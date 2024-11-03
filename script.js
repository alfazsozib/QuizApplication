document.addEventListener("DOMContentLoaded",()=>{


    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById('score');
    
    const questions = [
        {
            question: "What is the capital of France?",
            choices: ['Paris','London',"Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars","Venus","Jupiter","Saturn"],
            answer: "Mars"
        },
        {
            question: "Who wrote Hamlet?",
            choices: ['Charles Dickens','Jane Asuten','William Shakespeare',"Mark Twain"],
            answer: "William Shakespeare"
        },
    ]


    let currentQuestionIndex = 0;
    let score = 0;
    let ans = []

    startBtn.addEventListener('click',startQuiz);
    nextBtn.addEventListener('click',()=>{
        currentQuestionIndex++;
        if(ans.length>0){
            ans = []
        }
        if(currentQuestionIndex<questions.length){
            showQuestion();
           
        }
        else{
            showResult();
        }
        
    })

    restartBtn.addEventListener('click',()=>{
        currentQuestionIndex = 0
        score = 0
        nextBtn.classList.add('hidden')
        resultContainer.classList.add('hidden');
        startQuiz()
    })

    function startQuiz() {
        console.log("dsfdsf")
        startBtn.classList.add('hidden'); 
        resultContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        showQuestion() 
    }


    function showQuestion() {
       questionText.textContent = questions[currentQuestionIndex].question; 
       choicesList.innerHTML = "" // clear previous choices
       questions[currentQuestionIndex].choices.forEach(choice=>{
            let li = document.createElement('li')
            li.textContent = choice
            
            li.addEventListener('click',()=> selectAnswer(choice,li))
            choicesList.appendChild(li) 
       })
    }

    function selectAnswer(choice,li) {
        
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (ans.length==0){
            li.classList.add('selected')
        }else{
            alert("You cant select multiple answers!")
        }

        if(choice === correctAnswer){
            score++
        } 
        ans.push(choice)
        nextBtn.classList.remove('hidden')
        
    }

    function showResult() {
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent = `${score} out of ${questions.length}`
    }
})