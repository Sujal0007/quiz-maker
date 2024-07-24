export function addDefaultQuizzes(){
  const defaultQuizzes = [
    {
      title: "HTML Quiz",
      questions: [
        {
          question: "What does HTML stand for?",
          options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyperlinking Text Mark Language",
          ],
          correctOption: "Hyper Text Markup Language",
        },
        {
          question: "Who is making the Web standards?",
          options: [
            "Mozilla",
            "Google",
            "Microsoft",
            "The World Wide Web Consortium",
          ],
          correctOption: "The World Wide Web Consortium",
        },
      ],
    },
    {
      title: "CSS Quiz",
      questions: [
        {
          question: "What does CSS stand for?",
          options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets",
          ],
          correctOption: "Cascading Style Sheets",
        },
        {
          question: "Which HTML attribute is used to define inline styles?",
          options: ["style", "styles", "class", "font"],
          correctOption: "style",
        },
        {
          question: "Which property is used to change the background color?",
          options: ["color", "bgcolor", "background-color", "bg-color"],
          correctOption: "background-color",
        },
        {
          question:
            "Which CSS property is used to change the text color of an element?",
          options: ["text-color", "fgcolor", "color", "font-color"],
          correctOption: "color",
        },
        {
          question: "Which CSS property controls the text size?",
          options: ["font-style", "text-size", "font-size", "text-style"],
          correctOption: "font-size",
        },
        {
          question: "How do you display hyperlinks without an underline?",
          options: [
            "a {text-decoration:none;}",
            "a {decoration:no-underline;}",
            "a {underline:none;}",
            "a {text-decoration:no-underline;}",
          ],
          correctOption: "a {text-decoration:none;}",
        },
        {
          question: "Which property is used to change the font of an element?",
          options: ["font-weight", "font-style", "font-family", "font-variant"],
          correctOption: "font-family",
        },
        {
          question: "How do you make the text bold?",
          options: [
            "font:bold;",
            "style:bold;",
            "font-weight:bold;",
            "font-style:bold;",
          ],
          correctOption: "font-weight:bold;",
        },
        {
          question: "How do you center text in an element?",
          options: [
            "text-align:center;",
            "margin:center;",
            "text:center;",
            "padding:center;",
          ],
          correctOption: "text-align:center;",
        },
        {
          question:
            "Which property is used to change the left margin of an element?",
          options: ["padding-left", "margin-left", "indent", "left-margin"],
          correctOption: "margin-left",
        },
      ],
    },
  ];

  const savedQuizzes = JSON.parse(localStorage.getItem("savedQuizzes")) || [];
//   console.log(savedQuizzes);
  if (savedQuizzes.length === 0) {
    localStorage.setItem("savedQuizzes", JSON.stringify(defaultQuizzes));
  }
}
