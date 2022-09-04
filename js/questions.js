// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "What does HTML stand for?",
  answer: "Hyper Text Markup Language",
  options: [
    "Hyper Text Preprocessor",
    "Hyper Text Markup Language",
    "Hyper Text Multiple Language",
    "Hyper Tool Multi Language"
  ]
},
  {
  numb: 2,
  question: "What does CSS stand for?",
  answer: "Cascading Style Sheet",
  options: [
    "Common Style Sheet",
    "Colorful Style Sheet",
    "Computer Style Sheet",
    "Cascading Style Sheet"
  ]
},
  {
  numb: 3,
  question: "What does PHP stand for?",
  answer: "Hypertext Preprocessor",
  options: [
    "Hypertext Preprocessor",
    "Hypertext Programming",
    "Hypertext Preprogramming",
    "Hometext Preprocessor"
  ]
},
  {
  numb: 4,
  question: "What does SQL stand for?",
  answer: "Structured Query Language",
  options: [
    "Stylish Question Language",
    "Stylesheet Query Language",
    "Statement Question Language",
    "Structured Query Language"
  ]
},
  {
  numb: 5,
  question: "What does XML stand for?",
  answer: "eXtensible Markup Language",
  options: [
    "eXtensible Markup Language",
    "eXecutable Multiple Language",
    "eXTra Multi-Program Language",
    "eXamine Multiple Language"
  ]
},
// you can uncomment the below codes and make duplicate as more as you want to add question
// but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  {
   numb: 6,
   question: "The correct sequence of HTML tags for starting a webpage is ",
   answer: "HTML, Head, Title, Body",
   options: [
     "Body, Title, HTML, Head",
     "Head, Title, HTML, body",
     "HTML, Body, Title, Head",
     "HTML, Head, Title, Body"
   ]
 },
 {
  numb: 7,
  question: "Which of the following tag is used to insert a line-break in HTML? ",
  answer: "br",
  options: [
    "br",
    "a",
    "pre",
    "b"
  ]
},
{
  numb: 8,
  question: "Which of the following is the container for tr, th, and td? ",
  answer: "table",
  options: [
    "data",
    "table",
    "group",
    "All of the above"
  ]
},
{
  numb: 9,
  question: "A program in HTML can be rendered and read by - ? ",
  answer: "Web browser",
  options: [
    "Web browser",
    "Server",
    "Interpreter",
    "None of the above"
  ]
},
{
  numb: 10,
  question: "Which one of the following is used for the calling a function or a method in the JavaScript:",
  answer: "Invocation expression",
  options: [
    "Property Access Expression",
    "Functional expression",
    "Invocation expression",
    "Primary expression"
  ]
},
{
  numb: 11,
  question: "Which of the following property is used as the shorthand property of margin properties?",
  answer: "margin",
  options: [
    "margin-left",
    "margin-right",
    "margin",
    "None of the above"
  ]
},
{
  numb: 12,
  question: "Which of the following syntax is correct in CSS to make each word of a sentence start with a capital letter?",
  answer: " text-transform : capitalize",
  options: [
    "text-style : capital;",
    "transform : capitalize;",
    "text-transform : capital;",
    "text-transform : capitalize;"
  ]
},
{
  numb: 13,
  question: "Which one of the following also known as Conditional Expression:",
  answer: "immediate if",
  options: [
    "Alternative to if-else",
    "Switch statement",
    "If-then-else statement",
    "immediate if"
  ]
},
{
  numb: 14,
  question: " The 'function' and  'var' are known as:",
  answer: "Declaration statements",
  options: [
    "Keywords",
    "Data types",
    "Declaration statements",
    "Prototypes"
  ]
},
{
  numb: 15,
  question: " Which one of the following is the correct way for calling the JavaScript code?",
  answer: "Function/Method",
  options: [
    "Preprocessor",
    "Triggering Event",
    "RMI",
    "Function/Method"
  ]
},  
];


// creating an array and passing the number, questions, options, and answers
let mathQuestions = [
{
numb: 1,
question: "What will be the probability of getting odd numbers if a dice is thrown?",
answer: "1/2",
options: [
  "1/2",
  "2",
  "4/2",
  "5/2"
]
},
{
numb: 2,
question: "An event in the probability that will never be happened is called as -",
answer: "Impossible event",
options: [
  "Unsure event",
  "Sure event",
  "Possible event",
  "Impossible event"
]
},
{
numb: 3,
question: " If a sin 450 = b cosec 300, what is the value of a4/b4?",
answer: "43",
options: [
  "63",
  "43",
  "23",
  "None of the above"
]
},
{
numb: 4,
question: "What is the value of sin θ/(1 + cos θ) + sin θ/(1 - cos θ), where (00 < θ < 900)?",
answer: " tan θ + cot θ + 1",
options: [
  "tan θ + cot θ + 1",
  "tan θ - cot θ - 1",
  "tan θ - cot θ + 1",
  "None of the above"
]
},
{
numb: 5,
question: "If x ∈ N and x is prime, then x is ________ set.",
answer: " Infinite set",
options: [
  "Infinite set",
  "Finite set",
  "Empty set",
  "Not a set"
]
},
{
numb: 6,
question: " Power set of empty or Null set has exactly _________ subset.",
answer: "One",
options: [
  "One",
  "Two",
  "Zero",
  "Three"
]
},
{
numb: 7,
question: "If n(A) = 20 and n(B) = 30 and n(A U B) = 40 then n(A ∩ B) is?",
answer: "10",
options: [
  "20",
  "30",
  "40",
  "10"
]
},
{
numb: 8,
question: "Which among the following can be taken as the discrete object?",
answer: "All of the mentioned",
options: [
  "People",
  "Rational numbers",
  "Integers",
  "All of the mentioned"
]
},
{
numb: 9,
question: "The cardinality of the Power set of the set {1, 5, 6} is______________.",
answer: "5",
options: [
  "5",
  "6",
  "8",
  "10"
]
},
{
numb: 10,
question: "Mathematics can be broadly categorized into how many types?",
answer: "2 types",
options: [
  "3 types",
  "5 types",
  "2 types",
  "4 types"
]
},

{
numb: 11,
question: "Mathematics can be broadly categorized into how many types?",
answer: "2 types",
options: [
"3 types",
"5 types",
"2 types",
"4 types"
]
},

{
numb: 12,
question: "Mathematics can be broadly categorized into how many types?",
answer: "2 types",
options: [
  "3 types",
  "5 types",
  "2 types",
  "4 types"
]
},

{
  numb: 13,
  question: "Mathematics can be broadly categorized into how many types?",
  answer: "2 types",
  options: [
    "3 types",
    "5 types",
    "2 types",
    "4 types"
  ]
  },

  {
    numb: 14,
    question: "Mathematics can be broadly categorized into how many types?",
    answer: "2 types",
    options: [
      "3 types",
      "5 types",
      "2 types",
      "4 types"
    ]
    },

{
numb: 15,
  question: "Mathematics can be broadly categorized into how many types?",
  answer: "2 types",
  options: [
    "3 types",
    "5 types",
    "2 types",
    "4 types"
  ]
  },

];


// creating an array and passing the number, questions, options, and answers
let scienceQuestions = [
{
numb: 1,
question: "What is the PH value of H2O?",
answer: "7",
options: [
  "6",
  "7",
  "8",
  "9"
]
},
{
numb: 2,
question: "Which of the following gas is reduced in the reduction process?",
answer: "Hydrogen",
options: [
  "Oxygen",
  "Helium",
  "Carbon",
  "Hydrogen"
]
},
{
numb: 4,
question: " Name the gland which is present above our kidneys?",
answer: " Adrenal",
options: [
  "Adrenal",
  "Pituitary",
  "Gonads",
  "Salivary"
]
},
{
numb: 5,
question: "What is the basic unit of our neural system?",
answer: "Neuron",
options: [
  "Neutron",
  "Neuron",
  "Nephron",
  "Nucleon"
]
},
{
numb: 6,
question: " According to newton's second law of motion, change in momentum per unit time is equal to ________.",
answer: "Force",
options: [
  "Force",
  "Energy",
  "Acceleration",
  "Work"
]
},
{
numb: 7,
question: "What is the color of SO2 gas?",
answer: "Colorless",
options: [
  "Blue",
  "Grey",
  "colorless",
  "Brown"
]
},
{
numb: 8,
question: " What is the S.I unit of electric charge?",
answer: "Coulomb",
options: [
  "Coulomb",
  "Ampere",
  "Faraday",
  "Ohm"
]
},
{
  numb: 9,
  question: " What is the S.I unit of electric charge?",
  answer: "Coulomb",
  options: [
    "Coulomb",
    "Ampere",
    "Faraday",
    "Ohm"
  ]
  },
  {
    numb: 10,
    question: " What is the S.I unit of electric charge?",
    answer: "Coulomb",
    options: [
      "Coulomb",
      "Ampere",
      "Faraday",
      "Ohm"
    ]
    },
{
  numb: 11,
  question: " What is the S.I unit of electric charge?",
  answer: "Coulomb",
  options: [
    "Coulomb",
    "Ampere",
    "Faraday",
    "Ohm"
]
},
{
  numb: 12,
  question: " What is the S.I unit of electric charge?",
  answer: "Coulomb",
  options: [
    "Coulomb",
    "Ampere",
    "Faraday",
    "Ohm"
  ]
  },
  {
numb: 13,
question: " What is the S.I unit of electric charge?",
answer: "Coulomb",
options: [
  "Coulomb",
  "Ampere",
  "Faraday",
  "Ohm"
]
},
{
  numb: 14,
  question: " What is the S.I unit of electric charge?",
  answer: "Coulomb",
  options: [
    "Coulomb",
    "Ampere",
    "Faraday",
    "Ohm"
  ]
  },
  {
    numb: 15,
    question: " What is the S.I unit of electric charge?",
    answer: "Coulomb",
    options: [
      "Coulomb",
      "Ampere",
      "Faraday",
      "Ohm"
    ]
    },

];