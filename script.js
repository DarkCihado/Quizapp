let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Wie gibt man einem Element eine Hintergrundfarbe",
    answer_1: "bg: yellow",
    answer_2: "background: yellow",
    answer_3: "bg-color: yellow",
    answer_4: "background-color: yellow",
    right_answer: 4,
  },
  {
    question: "Wie kommentiert man HTML Code",
    answer_1: "//",
    answer_2: "<!-- -->",
    answer_3: "/* */",
    answer_4: "[( )]",
    right_answer: 2,
  },
  {
    question: "Wie bindet man eine CSS Datei ein",
    answer_1: "<link script='style.css'>",
    answer_2: "<link: 'stylesheet'",
    answer_3: '<link rel="stylesheet" href="..."',
    answer_4: '<link rel="stylesheet" src="..."',
    right_answer: 3,
  },
  {
    question: "Wie ändert man den Kontent eines HTML Elementes mit Javascript",
    answer_1: ".innerHTML = ... ",
    answer_2: ".includes()",
    answer_3: ".classList.add('...')",
    answer_4: "Math.random()",
    right_answer: 1,
  },
  {
    question: "Was sollte ein Entwickler beim entwickeln immer geöffnet haben",
    answer_1: "Den Fernsehr",
    answer_2: "Den Energy Drink",
    answer_3: "Die Entwicklertools",
    answer_4: "Die Chipstüte",
    right_answer: 3,
  },
  {
    question: "Wie passt man seinen Code für jede Displaygröße an",
    answer_1: "Media Query",
    answer_2: "Key Frames",
    answer_3: "JSON Arrays",
    answer_4: "Flexbox",
    right_answer: 1,
  },
  {
    question: "Wie definiert man eine Funktion",
    answer_1: "function: myFunction",
    answer_2: "function myFunction()",
    answer_3: "function: myFunction()",
    answer_4: "function = myFunction",
    right_answer: 2,
  },
];

let currentQuestion = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
  let question = questions[currentQuestion];

  let selectedQuestionNumber = selection.slice(-1);

  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }

  document.getElementById("next-button").disabled = false;
}
