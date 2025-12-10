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

// Question1

/*
questionsData = [
 {
    id: 1,
    question: "What is the capital of Ghana?",
    options: [
      { text: "Accra", opt: "A:", correct: true },
      { text: "Kumasi", opt: "B:", correct: false },
      { text: "Tamale", opt: "C:", correct: false },
      { text: "Takoradi", opt: "D:", correct: false },
    ],
    correct: "Accra",
  },
    {
    id: 3,
    question: "Which of these is a primary colour?",
    options: [
      { text: "Yellow", opt: "A:", correct: true },
      { text: "Green", opt: "B:", correct: false },
      { text: "Purple", opt: "C:", correct: false },
      { text: "Pink", opt: "D:", correct: false },
    ],
    correct: "Yellow",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: [
      { text: "Mars", opt: "A:", correct: true },
      { text: "Jupiter", opt: "B:", correct: false },
      { text: "Venus", opt: "C:", correct: false },
      { text: "Mercury", opt: "D:", correct: false },
    ],
    correct: "Mars",
  },
{
    id: 4,
    question: "What color do you get when you mix blue and yellow?",
    options: [
      { text: "Green", opt: "A:", correct: true },
      { text: "Purple", opt: "B:", correct: false },
      { text: "Orange", opt: "C:", correct: false },
      { text: "Brown", opt: "D:", correct: false },
    ],
    correct: "Green",
  },

  // DIFFICULTY INCREASES FROM HERE (5–15)

  {
    id: 5,
    question: "In HTML, what does the <a> tag represent?",
    options: [
      { text: "Anchor", opt: "A:", correct: true },
      { text: "Article", opt: "B:", correct: false },
      { text: "Aside", opt: "C:", correct: false },
      { text: "Area", opt: "D:", correct: false },
    ],
    correct: "Anchor",
  },
  {
    id: 6,
    question: "Which Nigerian author wrote 'Things Fall Apart'?",
    options: [
      { text: "Chinua Achebe", opt: "A:", correct: true },
      { text: "Wole Soyinka", opt: "B:", correct: false },
      { text: "Chimamanda Adichie", opt: "C:", correct: false },
      { text: "Cyprian Ekwensi", opt: "D:", correct: false },
    ],
    correct: "Chinua Achebe",
  },
  {
    id: 7,
    question: "Which of these countries is landlocked?",
    options: [
      { text: "Niger", opt: "A:", correct: true },
      { text: "Kenya", opt: "B:", correct: false },
      { text: "South Africa", opt: "C:", correct: false },
      { text: "Ghana", opt: "D:", correct: false },
    ],
    correct: "Niger",
  },
  {
    id: 8,
    question: "Which programming language is known for its use in Machine Learning?",
    options: [
      { text: "Python", opt: "A:", correct: true },
      { text: "CSS", opt: "B:", correct: false },
      { text: "SQL", opt: "C:", correct: false },
      { text: "HTML", opt: "D:", correct: false },
    ],
    correct: "Python",
  },
  {
    id: 9,
    question: "What year did Nigeria gain independence?",
    options: [
      { text: "1960", opt: "A:", correct: true },
      { text: "1957", opt: "B:", correct: false },
      { text: "1963", opt: "C:", correct: false },
      { text: "1970", opt: "D:", correct: false },
    ],
    correct: "1960",
  },
  {
    id: 10,
    question: "What is the largest organ in the human body?",
    options: [
      { text: "Skin", opt: "A:", correct: true },
      { text: "Liver", opt: "B:", correct: false },
      { text: "Lungs", opt: "C:", correct: false },
      { text: "Heart", opt: "D:", correct: false },
    ],
    correct: "Skin",
  },
  {
    id: 11,
    question: "Which of these is NOT a JavaScript data type?",
    options: [
      { text: "Float", opt: "A:", correct: true },
      { text: "Boolean", opt: "B:", correct: false },
      { text: "String", opt: "C:", correct: false },
      { text: "Object", opt: "D:", correct: false },
    ],
    correct: "Float",
  },
  {
    id: 12,
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: [
      { text: "Nitrogen", opt: "A:", correct: true },
      { text: "Oxygen", opt: "B:", correct: false },
      { text: "Carbon Dioxide", opt: "C:", correct: false },
      { text: "Argon", opt: "D:", correct: false },
    ],
    correct: "Nitrogen",
  },
  {
    id: 13,
    question: "Which mathematician is known as the father of modern computer science?",
    options: [
      { text: "Alan Turing", opt: "A:", correct: true },
      { text: "Isaac Newton", opt: "B:", correct: false },
      { text: "Charles Babbage", opt: "C:", correct: false },
      { text: "John von Neumann", opt: "D:", correct: false },
    ],
    correct: "Alan Turing",
  },
  {
    id: 14,
    question: "Which of these is the hardest natural substance on Earth?",
    options: [
      { text: "Diamond", opt: "A:", correct: true },
      { text: "Quartz", opt: "B:", correct: false },
      { text: "Topaz", opt: "C:", correct: false },
      { text: "Ruby", opt: "D:", correct: false },
    ],
    correct: "Diamond",
  },
  {
    id: 15,
    question: "What is the speed of light in vacuum (approx.)?",
    options: [
      { text: "300,000 km/s", opt: "A:", correct: true },
      { text: "150,000 km/s", opt: "B:", correct: false },
      { text: "500,000 km/s", opt: "C:", correct: false },
      { text: "100,000 km/s", opt: "D:", correct: false },
    ],
    correct: "300,000 km/s",
  }
];
*/


// Question2
questionsData = [
  {
    id: 1,
    question: "Which Nigerian author wrote 'Things Fall Apart'?",
    options: [
      { text: "Chinua Achebe", opt: "A:", correct: true },
      { text: "Wole Soyinka", opt: "B:", correct: false },
      { text: "Chimamanda Adichie", opt: "C:", correct: false },
      { text: "Cyprian Ekwensi", opt: "D:", correct: false },
    ],
    correct: "Chinua Achebe",
  },
  {
    id: 2,
    question: "What is the currency used in the United Kingdom?",
    options: [
      { text: "Pound Sterling", opt: "A:", correct: true },
      { text: "Euro", opt: "B:", correct: false },
      { text: "Dollar", opt: "C:", correct: false },
      { text: "Franc", opt: "D:", correct: false },
    ],
    correct: "Pound Sterling",
  },
  {
    id: 3,
    question: "Which animal is known as the 'King of the Jungle'?",
    options: [
      { text: "Lion", opt: "A:", correct: true },
      { text: "Tiger", opt: "B:", correct: false },
      { text: "Leopard", opt: "C:", correct: false },
      { text: "Cheetah", opt: "D:", correct: false },
    ],
    correct: "Lion",
  },
  {
    id: 4,
    question: "Which continent is the largest in the world?",
    options: [
      { text: "Asia", opt: "A:", correct: true },
      { text: "Africa", opt: "B:", correct: false },
      { text: "Europe", opt: "C:", correct: false },
      { text: "South America", opt: "D:", correct: false },
    ],
    correct: "Asia",
  },

  // DIFFICULTY INCREASES

  {
    id: 5,
    question: "Which programming language is primarily used for styling web pages?",
    options: [
      { text: "CSS", opt: "A:", correct: true },
      { text: "HTML", opt: "B:", correct: false },
      { text: "Python", opt: "C:", correct: false },
      { text: "Java", opt: "D:", correct: false },
    ],
    correct: "CSS",
  },
  {
    id: 6,
    question: "Which ocean is the deepest in the world?",
    options: [
      { text: "Pacific Ocean", opt: "A:", correct: true },
      { text: "Atlantic Ocean", opt: "B:", correct: false },
      { text: "Indian Ocean", opt: "C:", correct: false },
      { text: "Arctic Ocean", opt: "D:", correct: false },
    ],
    correct: "Pacific Ocean",
  },
  {
    id: 7,
    question: "Who is the current UN Secretary-General (as of 2024)?",
    options: [
      { text: "António Guterres", opt: "A:", correct: true },
      { text: "Ban Ki-moon", opt: "B:", correct: false },
      { text: "Kofi Annan", opt: "C:", correct: false },
      { text: "Tedros Ghebreyesus", opt: "D:", correct: false },
    ],
    correct: "António Guterres",
  },
  {
    id: 8,
    question: "Which of these is a front-end JavaScript framework?",
    options: [
      { text: "React", opt: "A:", correct: true },
      { text: "Laravel", opt: "B:", correct: false },
      { text: "Django", opt: "C:", correct: false },
      { text: "Flask", opt: "D:", correct: false },
    ],
    correct: "React",
  },
  {
    id: 9,
    question: "Which of these Nigerian states shares a border with Benin Republic?",
    options: [
      { text: "Ogun State", opt: "A:", correct: true },
      { text: "Lagos State", opt: "B:", correct: false },
      { text: "Oyo State", opt: "C:", correct: false },
      { text: "Osun State", opt: "D:", correct: false },
    ],
    correct: "Ogun State",
  },
  {
    id: 10,
    question: "What is the chemical symbol for Gold?",
    options: [
      { text: "Au", opt: "A:", correct: true },
      { text: "Ag", opt: "B:", correct: false },
      { text: "Go", opt: "C:", correct: false },
      { text: "Gd", opt: "D:", correct: false },
    ],
    correct: "Au",
  },
  {
    id: 11,
    question: "Which data structure uses a FIFO (First-In First-Out) principle?",
    options: [
      { text: "Queue", opt: "A:", correct: true },
      { text: "Stack", opt: "B:", correct: false },
      { text: "Tree", opt: "C:", correct: false },
      { text: "Linked List", opt: "D:", correct: false },
    ],
    correct: "Queue",
  },
  {
    id: 12,
    question: "What is the smallest prime number?",
    options: [
      { text: "2", opt: "A:", correct: true },
      { text: "1", opt: "B:", correct: false },
      { text: "3", opt: "C:", correct: false },
      { text: "5", opt: "D:", correct: false },
    ],
    correct: "2",
  },
  {
    id: 13,
    question: "Which historical empire built the Machu Picchu?",
    options: [
      { text: "Inca Empire", opt: "A:", correct: true },
      { text: "Mayan Empire", opt: "B:", correct: false },
      { text: "Aztec Empire", opt: "C:", correct: false },
      { text: "Roman Empire", opt: "D:", correct: false },
    ],
    correct: "Inca Empire",
  },
  {
    id: 14,
    question: "Who developed the theory of General Relativity?",
    options: [
      { text: "Albert Einstein", opt: "A:", correct: true },
      { text: "Niels Bohr", opt: "B:", correct: false },
      { text: "Max Planck", opt: "C:", correct: false },
      { text: "Galileo Galilei", opt: "D:", correct: false },
    ],
    correct: "Albert Einstein",
  },
  {
    id: 15,
    question: "Which country has the highest number of natural lakes in the world?",
    options: [
      { text: "Canada", opt: "A:", correct: true },
      { text: "Russia", opt: "B:", correct: false },
      { text: "USA", opt: "C:", correct: false },
      { text: "Finland", opt: "D:", correct: false },
    ],
    correct: "Canada",
  }
];

/*
// Question3
questionsData = [
  {
    id: 1,
    question: "Which planet is known as the Red Planet?",
    options: [
      { text: "Mars", opt: "A:", correct: true },
      { text: "Venus", opt: "B:", correct: false },
      { text: "Jupiter", opt: "C:", correct: false },
      { text: "Mercury", opt: "D:", correct: false }
    ],
    correct: "Mars"
  },
  {
    id: 2,
    question: "What is the capital city of Kenya?",
    options: [
      { text: "Nairobi", opt: "A:", correct: true },
      { text: "Mombasa", opt: "B:", correct: false },
      { text: "Kisumu", opt: "C:", correct: false },
      { text: "Eldoret", opt: "D:", correct: false }
    ],
    correct: "Nairobi"
  },
  {
    id: 3,
    question: "What is H₂O commonly known as?",
    options: [
      { text: "Water", opt: "A:", correct: true },
      { text: "Hydrogen Peroxide", opt: "B:", correct: false },
      { text: "Salt", opt: "C:", correct: false },
      { text: "Acid", opt: "D:", correct: false }
    ],
    correct: "Water"
  },
  {
    id: 4,
    question: "How many continents are there in the world?",
    options: [
      { text: "7", opt: "A:", correct: true },
      { text: "5", opt: "B:", correct: false },
      { text: "6", opt: "C:", correct: false },
      { text: "8", opt: "D:", correct: false }
    ],
    correct: "7"
  },
  {
    id: 5,
    question: "Which Nigerian author wrote 'Things Fall Apart'?",
    options: [
      { text: "Chinua Achebe", opt: "A:", correct: true },
      { text: "Wole Soyinka", opt: "B:", correct: false },
      { text: "Ben Okri", opt: "C:", correct: false },
      { text: "Chimamanda Adichie", opt: "D:", correct: false }
    ],
    correct: "Chinua Achebe"
  },
  {
    id: 6,
    question: "Which gas do plants absorb during photosynthesis?",
    options: [
      { text: "Carbon Dioxide", opt: "A:", correct: true },
      { text: "Nitrogen", opt: "B:", correct: false },
      { text: "Hydrogen", opt: "C:", correct: false },
      { text: "Oxygen", opt: "D:", correct: false }
    ],
    correct: "Carbon Dioxide"
  },
  {
    id: 7,
    question: "In computing, what does 'CPU' stand for?",
    options: [
      { text: "Central Processing Unit", opt: "A:", correct: true },
      { text: "Control Processing Utility", opt: "B:", correct: false },
      { text: "Central Power Unit", opt: "C:", correct: false },
      { text: "Central Program Unit", opt: "D:", correct: false }
    ],
    correct: "Central Processing Unit"
  },
  {
    id: 8,
    question: "Which country is the largest producer of cocoa in the world?",
    options: [
      { text: "Côte d'Ivoire", opt: "A:", correct: true },
      { text: "Ghana", opt: "B:", correct: false },
      { text: "Nigeria", opt: "C:", correct: false },
      { text: "Brazil", opt: "D:", correct: false }
    ],
    correct: "Côte d'Ivoire"
  },
  {
    id: 9,
    question: "Which element has the chemical symbol 'Fe'?",
    options: [
      { text: "Iron", opt: "A:", correct: true },
      { text: "Fluorine", opt: "B:", correct: false },
      { text: "Ferium", opt: "C:", correct: false },
      { text: "Francium", opt: "D:", correct: false }
    ],
    correct: "Iron"
  },
  {
    id: 10,
    question: "Who painted the famous artwork 'The Last Supper'?",
    options: [
      { text: "Leonardo da Vinci", opt: "A:", correct: true },
      { text: "Michelangelo", opt: "B:", correct: false },
      { text: "Raphael", opt: "C:", correct: false },
      { text: "Donatello", opt: "D:", correct: false }
    ],
    correct: "Leonardo da Vinci"
  },
  {
    id: 11,
    question: "In economics, what is the term for a general increase in prices over time?",
    options: [
      { text: "Inflation", opt: "A:", correct: true },
      { text: "Deflation", opt: "B:", correct: false },
      { text: "Stagnation", opt: "C:", correct: false },
      { text: "Recession", opt: "D:", correct: false }
    ],
    correct: "Inflation"
  },
  {
    id: 12,
    question: "Which African country was formerly known as Abyssinia?",
    options: [
      { text: "Ethiopia", opt: "A:", correct: true },
      { text: "Sudan", opt: "B:", correct: false },
      { text: "Eritrea", opt: "C:", correct: false },
      { text: "Somalia", opt: "D:", correct: false }
    ],
    correct: "Ethiopia"
  },
  {
    id: 13,
    question: "What is the hardest natural substance on Earth?",
    options: [
      { text: "Diamond", opt: "A:", correct: true },
      { text: "Quartz", opt: "B:", correct: false },
      { text: "Topaz", opt: "C:", correct: false },
      { text: "Sapphire", opt: "D:", correct: false }
    ],
    correct: "Diamond"
  },
  {
    id: 14,
    question: "Which scientist proposed the three laws of motion?",
    options: [
      { text: "Isaac Newton", opt: "A:", correct: true },
      { text: "Albert Einstein", opt: "B:", correct: false },
      { text: "Galileo Galilei", opt: "C:", correct: false },
      { text: "Nikola Tesla", opt: "D:", correct: false }
    ],
    correct: "Isaac Newton"
  },
  {
    id: 15,
    question: "What is the longest river in the world?",
    options: [
      { text: "The Nile River", opt: "A:", correct: true },
      { text: "Amazon River", opt: "B:", correct: false },
      { text: "Yangtze River", opt: "C:", correct: false },
      { text: "Mississippi River", opt: "D:", correct: false }
    ],
    correct: "The Nile River"
  }
];

// Question4
questionsData = [
  {
    id: 1,
    question: "Which month has the fewest days?",
    options: [
      { text: "February", opt: "A:", correct: true },
      { text: "April", opt: "B:", correct: false },
      { text: "June", opt: "C:", correct: false },
      { text: "November", opt: "D:", correct: false }
    ],
    correct: "February"
  },

  {
    id: 2,
    question: "Which of these numbers is an even number?",
    options: [
      { text: "15", opt: "A:", correct: false },
      { text: "27", opt: "B:", correct: false },
      { text: "40", opt: "C:", correct: true },
      { text: "99", opt: "D:", correct: false }
    ],
    correct: "40"
  },

  {
    id: 3,
    question: "Which continent is Nigeria located in?",
    options: [
      { text: "Asia", opt: "A:", correct: false },
      { text: "Africa", opt: "B:", correct: true },
      { text: "Europe", opt: "C:", correct: false },
      { text: "South America", opt: "D:", correct: false }
    ],
    correct: "Africa"
  },

  {
    id: 4,
    question: "What is H2O commonly known as?",
    options: [
      { text: "Hydrogen gas", opt: "A:", correct: false },
      { text: "Salt", opt: "B:", correct: false },
      { text: "Water", opt: "C:", correct: true },
      { text: "Helium", opt: "D:", correct: false }
    ],
    correct: "Water"
  },

  {
    id: 5,
    question: "Which planet is known as the Red Planet?",
    options: [
      { text: "Venus", opt: "A:", correct: false },
      { text: "Mars", opt: "B:", correct: true },
      { text: "Jupiter", opt: "C:", correct: false },
      { text: "Mercury", opt: "D:", correct: false }
    ],
    correct: "Mars"
  },

  {
    id: 6,
    question: "In computing, what does RAM stand for?",
    options: [
      { text: "Random Access Memory", opt: "A:", correct: true },
      { text: "Rapid Action Module", opt: "B:", correct: false },
      { text: "Read Access Mode", opt: "C:", correct: false },
      { text: "Remote Allocation Machine", opt: "D:", correct: false }
    ],
    correct: "Random Access Memory"
  },

  {
    id: 7,
    question: "Which of the following countries is landlocked?",
    options: [
      { text: "Kenya", opt: "A:", correct: false },
      { text: "Nepal", opt: "B:", correct: true },
      { text: "Spain", opt: "C:", correct: false },
      { text: "Australia", opt: "D:", correct: false }
    ],
    correct: "Nepal"
  },

  {
    id: 8,
    question: "Which is the largest organ in the human body?",
    options: [
      { text: "Heart", opt: "A:", correct: false },
      { text: "Liver", opt: "B:", correct: false },
      { text: "Skin", opt: "C:", correct: true },
      { text: "Lungs", opt: "D:", correct: false }
    ],
    correct: "Skin"
  },

  {
    id: 9,
    question: "Which year did Nigeria gain independence?",
    options: [
      { text: "1956", opt: "A:", correct: false },
      { text: "1960", opt: "B:", correct: true },
      { text: "1963", opt: "C:", correct: false },
      { text: "1970", opt: "D:", correct: false }
    ],
    correct: "1960"
  },

  {
    id: 10,
    question: "Which programming language is known for the slogan 'write once, run anywhere'?",
    options: [
      { text: "C++", opt: "A:", correct: false },
      { text: "Java", opt: "B:", correct: true },
      { text: "Python", opt: "C:", correct: false },
      { text: "Ruby", opt: "D:", correct: false }
    ],
    correct: "Java"
  },

  {
    id: 11,
    question: "Which of the following appears in every dictionary?",
    options: [
      { text: "The longest word", opt: "A:", correct: false },
      { text: "The shortest word", opt: "B:", correct: false },
      { text: "The alphabet letter 'E'", opt: "C:", correct: false },
      { text: "The word 'Dictionary'", opt: "D:", correct: true }
    ],
    correct: "The word 'Dictionary'"
  },

  {
    id: 12,
    question: "Which of these animals cannot jump?",
    options: [
      { text: "Dog", opt: "A:", correct: false },
      { text: "Elephant", opt: "B:", correct: true },
      { text: "Goat", opt: "C:", correct: false },
      { text: "Cat", opt: "D:", correct: false }
    ],
    correct: "Elephant"
  },

  {
    id: 13,
    question: "Which of these files is NOT an image format?",
    options: [
      { text: "PNG", opt: "A:", correct: false },
      { text: "SVG", opt: "B:", correct: false },
      { text: "MP4", opt: "C:", correct: true },
      { text: "JPEG", opt: "D:", correct: false }
    ],
    correct: "MP4"
  },

  {
    id: 14,
    question: "Which of these statements is true about the speed of light?",
    options: [
      { text: "It changes depending on the color", opt: "A:", correct: false },
      { text: "Nothing can travel faster than it", opt: "B:", correct: true },
      { text: "It slows down in a vacuum", opt: "C:", correct: false },
      { text: "It is slower than sound", opt: "D:", correct: false }
    ],
    correct: "Nothing can travel faster than it"
  },

  {
    id: 15,
    question: "If you rearrange the letters of the word 'LISTEN', you get another valid word. What is it?",
    options: [
      { text: "Enlist", opt: "A:", correct: true },
      { text: "Silent", opt: "B:", correct: false },
      { text: "Tinsel", opt: "C:", correct: false },
      { text: "Lintse", opt: "D:", correct: false }
    ],
    correct: "Enlist"
  }
];
*/

// Question5
/*
questionsData = {
    id: 1,
    question: "Which planet is known as the Red Planet?",
    options: [
      { text: "Mars", opt: "A:", correct: false },
      { text: "Jupiter", opt: "B:", correct: false },
      { text: "Mars ", opt: "C:", correct: true }, 
      { text: "Venus", opt: "D:", correct: false },
    ],
    correct: "Mars ",
},

{
    id: 2,
    question: "How many continents are on Earth?",
    options: [
      { text: "5", opt: "A:", correct: false },
      { text: "6", opt: "B:", correct: false },
      { text: "7", opt: "C:", correct: true },
      { text: "8", opt: "D:", correct: false },
    ],
    correct: "7",
},

{
    id: 3,
    question: "Which of these is the fastest land animal?",
    options: [
      { text: "Leopard", opt: "A:", correct: false },
      { text: "Cheetah", opt: "B:", correct: true },
      { text: "Antelope", opt: "C:", correct: false },
      { text: "Jaguar", opt: "D:", correct: false },
    ],
    correct: "Cheetah",
},

{
    id: 4,
    question: "Which country invented paper?",
    options: [
      { text: "Egypt", opt: "A:", correct: false },
      { text: "China", opt: "B:", correct: true },
      { text: "Greece", opt: "C:", correct: false },
      { text: "India", opt: "D:", correct: false },
    ],
    correct: "China",
},

{
    id: 5,
    question: "Which gas do plants absorb from the atmosphere?",
    options: [
      { text: "Oxygen", opt: "A:", correct: false },
      { text: "Carbon Dioxide", opt: "B:", correct: true },
      { text: "Carbon Monoxide", opt: "C:", correct: false },
      { text: "Nitrogen", opt: "D:", correct: false },
    ],
    correct: "Carbon Dioxide",
},

// DIFFICULTY INCREASES HERE

{
    id: 6,
    question: "Which continent has the highest number of countries?",
    options: [
      { text: "Asia", opt: "A:", correct: false },
      { text: "Europe", opt: "B:", correct: false },
      { text: "Africa", opt: "C:", correct: true },
      { text: "South America", opt: "D:", correct: false },
    ],
    correct: "Africa",
},

{
    id: 7,
    question: "What is the hardest natural substance on Earth?",
    options: [
      { text: "Gold", opt: "A:", correct: false },
      { text: "Diamond", opt: "B:", correct: true },
      { text: "Titanium", opt: "C:", correct: false },
      { text: "Obsidian", opt: "D:", correct: false },
    ],
    correct: "Diamond",
},

{
    id: 8,
    question: "Which organ is primarily responsible for detoxifying chemicals in the human body?",
    options: [
      { text: "Kidneys", opt: "A:", correct: false },
      { text: "Liver", opt: "B:", correct: true },
      { text: "Lungs", opt: "C:", correct: false },
      { text: "Pancreas", opt: "D:", correct: false },
    ],
    correct: "Liver",
},

{
    id: 9,
    question: "Which African city is also a country?",
    options: [
      { text: "Gaborone", opt: "A:", correct: false },
      { text: "Lagos", opt: "B:", correct: false },
      { text: "Djibouti", opt: "C:", correct: true },
      { text: "Durban", opt: "D:", correct: false },
    ],
    correct: "Djibouti",
},

{
    id: 10,
    question: "In web development, what does the acronym 'API' stand for?",
    options: [
      { text: "Applied Program Interface", opt: "A:", correct: false },
      { text: "Application Programming Interface", opt: "B:", correct: true },
      { text: "Advanced Programming Integration", opt: "C:", correct: false },
      { text: "Automated Program Interaction", opt: "D:", correct: false },
    ],
    correct: "Application Programming Interface",
},

// TRICKIER

{
    id: 11,
    question: "Which year had 29 days in February?",
    options: [
      { text: "2021", opt: "A:", correct: false },
      { text: "2019", opt: "B:", correct: false },
      { text: "2020", opt: "C:", correct: true },
      { text: "2023", opt: "D:", correct: false },
    ],
    correct: "2020",
},

{
    id: 12,
    question: "Which of these countries has no land border?",
    options: [
      { text: "Australia", opt: "A:", correct: true },
      { text: "India", opt: "B:", correct: false },
      { text: "South Africa", opt: "C:", correct: false },
      { text: "Egypt", opt: "D:", correct: false },
    ],
    correct: "Australia",
},

{
    id: 13,
    question: "Which number is both a prime number and also an odd number?",
    options: [
      { text: "15", opt: "A:", correct: false },
      { text: "21", opt: "B:", correct: false },
      { text: "17", opt: "C:", correct: true },
      { text: "51", opt: "D:", correct: false },
    ],
    correct: "17",
},

{
    id: 14,
    question: "Which of these programming languages is primarily used for statistical computing?",
    options: [
      { text: "Python", opt: "A:", correct: false },
      { text: "Java", opt: "B:", correct: false },
      { text: "R", opt: "C:", correct: true },
      { text: "C++", opt: "D:", correct: false },
    ],
    correct: "R",
},

{
    id: 15,
    question: "Which of these is the smallest unit of digital information?",
    options: [
      { text: "Byte", opt: "A:", correct: false },
      { text: "Bit", opt: "B:", correct: true },
      { text: "Kilobyte", opt: "C:", correct: false },
      { text: "Megabyte", opt: "D:", correct: false },
    ],
    correct: "Bit",
};

questionsData = [];

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
  {
    id: 5,
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
*/
