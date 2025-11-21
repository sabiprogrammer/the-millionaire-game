const moneyPyramid = [
  { id: 1, amount: "₦10,000" },
  { id: 2, amount: "₦15,000" },
  { id: 3, amount: "₦20,000" },
  { id: 4, amount: "₦30,000" },
  { id: 5, amount: "₦50,000" },
  { id: 6, amount: "₦60,000" },
  { id: 7, amount: "₦100,000" },
  { id: 8, amount: "₦200,000" },
  { id: 9, amount: "₦300,000" },
  { id: 10, amount: "₦500,000" },
  { id: 11, amount: "₦600,000" },
  { id: 12, amount: "₦700,000" },
  { id: 13, amount: "₦800,000" },
  { id: 14, amount: "₦900,000" },
  { id: 15, amount: "₦1,000,000" },
].reverse();

let questionsData = [];

// CSS QUESTIONS
questionsData = [
  {
    id: 1,
    question: "Which of these is NOT a valid CSS Selector?",
    options: [
      { text: "Type Selector", opt: "A:", correct: false },
      { text: "Adjacent Sibling Selector", opt: "B:", correct: false },
      { text: "Opposite Sibling Selector", opt: "C:", correct: true },
      { text: "General Sibling Selector", opt: "D:", correct: false },
    ],
    correct: "Opposite Sibling Selector",
  },
  {
    id: 2,
    question: "Embedded CSS is also the same thing as what?",
    options: [
      { text: "Inline CSS", opt: "A:", correct: false },
      { text: "Internal CSS", opt: "B:", correct: true },
      { text: "External CSS", opt: "C:", correct: false },
      { text: "None of the above", opt: "D:", correct: false },
    ],
    correct: "Internal CSS",
  },
  {
    id: 3,
    question:
      " .content p{ color:blue; text-transform:uppercase;} p{ color: red }... What will be the color of the p tag?",
    options: [
      { text: "blue", opt: "A:", correct: true },
      { text: "red", opt: "B:", correct: false },
      { text: "a touch of blue and red", opt: "C:", correct: false },
      { text: "none of the above", opt: "D:", correct: false },
    ],
    correct: "blue",
  },
  {
    id: 4,
    question: "The tilde symbol matches which CSS Selector?",
    options: [
      { text: "Adjacent Sibling Selector", opt: "A:", correct: false },
      { text: "General Sibling Selector", opt: "B:", correct: true },
      { text: "Universal Selector", opt: "C:", correct: false },
      { text: "Descendant Selector", opt: "D:", correct: false },
    ],
    correct: "General Sibling Selector",
  },
  // {
  //   id:5,
  //   question:"Which of these is a proper way to write comment in CSS?",
  //
  // },
  {
    id: 6,
    question:
      "Which of these Pseudo Classes is used to style links that have NOT been visited on a website?",
    options: [
      { text: "link", opt: "A:", correct: true },
      { text: "visited", opt: "B:", correct: false },
      { text: "hover", opt: "C:", correct: false },
      { text: "active", opt: "D:", correct: false },
    ],
    correct: "link",
  },
  {
    id: 7,
    question: "One of the following is NOT a valid CSS pseudo element...",
    options: [
      { text: "first-letter", opt: "A:", correct: false },
      { text: "first-line", opt: "B:", correct: false },
      { text: "after", opt: "C:", correct: false },
      { text: "first-element", opt: "D:", correct: true },
    ],
    correct: "first-element",
  },
  {
    id: 8,
    question: "The text-transform css property is used for what",
    options: [
      { text: "Changing the font of a text", opt: "A:", correct: false },
      { text: "Changing the casing of a text", opt: "B:", correct: true },
      { text: "Changing the color of a text", opt: "C:", correct: false },
      { text: "All of the above", opt: "D:", correct: false },
    ],
    correct: "Changing the casing of a text",
  },
  {
    id: 9,
    question: "Which of the following is NOT a valid CSS property?",
    options: [
      { text: "line-width", opt: "A:", correct: true },
      { text: "line-height", opt: "B:", correct: false },
      { text: "text-decoration", opt: "C:", correct: false },
      { text: "text-indent", opt: "D:", correct: false },
    ],
    correct: "line-width",
  },
  {
    id: 10,
    question:
      "The list-style-type css property can be used to change the default list format of both ordered and unordered list...",
    options: [
      { text: "True", opt: "A:", correct: true },
      { text: "False", opt: "B:", correct: false },
      { text: "Only works on ordered", opt: "C:", correct: false },
      { text: "Only works on unordered", opt: "D:", correct: false },
    ],
    correct: "True",
  },
  {
    id: 11,
    question: "One of the following css units is not a relative unit",
    options: [
      { text: "rem", opt: "A:", correct: false },
      { text: "em", opt: "B:", correct: false },
      { text: "px", opt: "C:", correct: true },
      { text: "%", opt: "D:", correct: false },
    ],
    correct: "px",
  },
  {
    id: 12,
    question:
      "To add spacing within the inner environment of an element, I am most likely to use which propery?",
    options: [
      { text: "margin", opt: "A:", correct: false },
      { text: "padding", opt: "B:", correct: true },
      { text: "border", opt: "C:", correct: false },
      { text: "All of the above", opt: "D:", correct: false },
    ],
    correct: "padding",
  },
  {
    id: 13,
    question:
      "Which of these can be used to change the stacking order of an element on the webpage?",
    options: [
      { text: "stacking-order", opt: "A:", correct: false },
      { text: "positioning", opt: "B:", correct: false },
      { text: "z-index", opt: "C:", correct: true },
      { text: "display", opt: "D:", correct: false },
    ],
    correct: "z-index",
  },
  {
    id: 14,
    question:
      "Which of the following properties is a valid flex-container property in CSS",
    options: [
      { text: "flex-wrap", opt: "A:", correct: false },
      { text: "justify-content", opt: "B:", correct: false },
      { text: "None of the above", opt: "C:", correct: false },
      { text: "All of the above", opt: "D:", correct: true },
    ],
    correct: "All of the above",
  },
  {
    id: 15,
    question: "Which of the following is NOT an HTML5 tag?",
    options: [
      { text: "field", opt: "A:", correct: true },
      { text: "header", opt: "B:", correct: false },
      { text: "footer", opt: "C:", correct: false },
      { text: "hgroup", opt: "D:", correct: false },
    ],
    correct: "field",
  },
];
