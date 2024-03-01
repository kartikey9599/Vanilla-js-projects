const quizData = [
  {
    question: "Capital of India? ",
    a: "Kolkata",
    b: "Delhi",
    c: "Dehradun",
    d: "Mumbai",
    correct: "b",
  },
  {
    question: "Which river is often referred to as the 'holy river' in India?",
    a: "Ganges",
    b: "Yamuna",
    c: "Brahmaputra",
    d: "Godavari",
    correct: "a",
  },
  {
    question: "What is the most used programming language in 2019?",
    a: "Javascript",
    b: "Python",
    c: "Java",
    d: "C++",
    correct: "c",
  },

  {
    question: "Who is the President of India?",
    a: "Rahul Gandhi",
    b: "Kartikey Gupta",
    c: "Narendra Modi",
    d: "Laalu yadav",
    correct: "c",
  },
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
];

const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuestion = 0;

loadQuiz();

function loadQuiz() {
  currentQuestion++;
}
