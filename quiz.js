const questJson = [
  {
    correctAnswer: 'Three',
    options: ['Two', 'Three', 'Four', 'Five'],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },

  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins', 
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon'
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },

  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact', 
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },

  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: "A female goat is known as what?",
  },

  {
    correctAnswer:'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];

let score = 0;
let currentQuestion = 0;
const totalScore = questJson.length;


//accesing element
const questionEL = document.getElementById('question');
const optionEL = document.getElementById('options');
const scoreEL = document.getElementById('score');
const nextEL = document.getElementById('next');

//adding event to next button
nextEL.addEventListener("click", () => {
  scoreEL.textContent = `Score: ${score} / ${totalScore}`;
  nextQuestion();
});

//Question Function
function showQuestions() {
  optionEL.innerHTML = "";

  //object destructure
  const {
    correctAnswer,
    options,
    question,
  } = questJson[currentQuestion];

//Manipulating the dom
//setting question text content
  questionEL.innerHTML = question;

  const shuffledOption = shuffleOption([...options]);

//populating the option div with buttons
  shuffledOption.forEach( (opt) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    optionEL.appendChild(btn);

//Event handling on button
    btn.addEventListener("click", () => {
      if(opt === correctAnswer){
        score++;
      }else {
        score = score - 0.25;
      }
      scoreEL.textContent = `Score: ${score} / ${totalScore}`;
      nextQuestion();
    });
  });
}

// function to go on next question without choosing any answer.
function nextQuestion(){
  currentQuestion++;
  optionEL.innerHTML = "";
  if(currentQuestion >= questJson.length){
    questionEL.textContent = 'Quiz Completed!!';
    nextEL.remove();
  }else {
    //currentQuestion++;
    showQuestions();
  }
}

//Shuffling options
function shuffleOption(options) {
  for(let i = options.length-1; i >= 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}


//Call function to load first question
showQuestions();