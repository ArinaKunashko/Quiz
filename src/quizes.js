export const jsQuiz = {
  title: 'JS',
  position: 3,
  path: '/jsQuestions',
  name: 'Javascript Quiz',
  questions: [
    {
      title: 'Inside which HTML element do we put the JavaScript?',
      variants:
        ['<script>',
          '<javascript>',
          '<scripting>',
          '<js>',
        ],
      correct: 0,
    },
    {
      title: 'What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>',
      variants:
        ['document.getElementById("demo").innerHTML = "Hello World!"; ',
          'document.getElementByName("p").innerHTML = "Hello World!";',
          '#demo.innerHTML = "Hello World!";',
          'document.getElement("p").innerHTML = "Hello World!";',
        ],
      correct: 0,
    },
    {
      title: 'Where is the correct place to insert a JavaScript?',
      variants:
        ['The <body> section ',
          'Both the <head> section and the <body> section are correct ',
          'The <head> section',
        ],
      correct: 1,
    },
    {
      title: 'What is the correct syntax for referring to an external script called "xxx.js"?',
      variants:
        ['<script href="xxx.js"> ',
          '<script name="xxx.js">',
          '<script src="xxx.js"> ',
        ],
      correct: 2,
    },
    {
      title: 'The external JavaScript file must contain the <script> tag.',
      variants:
        ['True',
          'False ',
        ],
      correct: 1,
    },
    {
      title: 'How do you write "Hello World" in an alert box?',
      variants:
        ['alert("Hello World");',
          'msgBox("Hello World");',
          'msg("Hello World");',
          'alertBox("Hello World");',
        ],
      correct: 0,
    },
    {
      title: 'How do you create a function in JavaScript?',
      variants:
        ['function = myFunction()',
          'function:myFunction()',
          'function myFunction() ',
        ],
      correct: 2,
    },
    {
      title: 'How do you call a function named "myFunction"?',
      variants:
        ['myFunction() ',
          'call function myFunction()',
          'call myFunction()',
        ],
      correct: 0,
    },
    {
      title: 'How to write an IF statement in JavaScript?',
      variants:
        ['if (i == 5) ',
          'if i = 5',
          'if i = 5 then',
          'if i == 5 then',
        ],
      correct: 0,
    },
    {
      title: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
      variants:
        ['if (i != 5) ',
          'if i =! 5 then',
          'if (i <> 5)',
          'if i <> 5',
        ],
      correct: 0,
    },
    {
      title: 'How does a WHILE loop start?',
      variants:
        ['while (i <= 10; i++) ',
          'while (i <= 10) ',
          'while i = 1 to 10',
        ],
      correct: 1,
    },
    {
      title: 'How does a FOR loop start?',
      variants:
        ['for (i = 0; i <= 5; i++)',
          'for (i <= 5; i++)',
          'for i = 1 to 5',
          'for (i = 0; i <= 5)',
        ],
      correct: 0,
    },
    {
      title: 'How can you add a comment in a JavaScript?',
      variants:
        ['//This is a comment ',
          '"This is a comment"',
          '<!--This is a comment--> ',
        ],
      correct: 1,
    },
    {
      title: 'How to insert a comment that has more than one line?',
      variants:
        ['<!--This comment has more than one line-->  ',
          '/*This comment has more than one line*/  ',
          '//This comment has more than one line//',
        ],
      correct: 1,
    },
    {
      title: 'What is the correct way to write a JavaScript array?',
      variants:
        ['var colors = ["red", "green", "blue"] ',
          'var colors = "red", "green", "blue"',
          'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
          'var colors = (1:"red", 2:"green", 3:"blue")',
        ],
      correct: 0,
    },
    {
      title: 'How do you round the number 7.25, to the nearest integer?',
      variants:
        ['Math.round(7.25) ',
          'Math.rnd(7.25) ',
          'round(7.25)',
          'rnd(7.25)',
        ],
      correct: 0,
    },
    {
      title: 'How do you find the number with the highest value of x and y?',
      variants:
        ['Math.max(x, y) ',
          'Math.ceil(x, y) ',
          'top(x, y)',
          'ceil(x, y)',
        ],
      correct: 0,
    },
    {
      title: 'What is the correct JavaScript syntax for opening a new window called "w2" ? ',
      variants:
        ['w2 = window.new("http://www.w3schools.com"); ',
          'w2 = window.open("http://www.w3schools.com"); ',
        ],
      correct: 1,
    },
    {
      title: 'JavaScript is the same as Java.',
      variants:
        ['False',
          'True',
        ],
      correct: 0,
    },
    {
      title: 'How can you detect the client is browser name?',
      variants:
        ['browser.name',
          'client.navName',
          'navigator.appName',
        ],
      correct: 2,
    },
    {
      title: 'Which event occurs when the user clicks on an HTML element?',
      variants:
        ['onclick',
          'onchange',
          'onmouseclick',
          'onmouseover',
        ],
      correct: 0,
    },
    {
      title: 'How do you declare a JavaScript variable?',
      variants:
        ['var carName;',
          'v carName;',
          'variable carName;',

        ],
      correct: 0,
    },
    {
      title: 'Which operator is used to assign a value to a variable?',
      variants:
        ['= ',
          'x',
          '*',
          '-',
        ],
      correct: 0,
    },
    {
      title: 'What will the following code return: Boolean(10 > 9)',
      variants:
        ['NaN ',
          'true ',
          'false ',
        ],
      correct: 1,
    },
    {
      title: 'Is JavaScript case-sensitive?',
      variants:
        ['Yes',
          'No',
        ],
      correct: 0,
    },
  ]
}

export const htmlQuiz = {
  title: 'HTML',
  position: 1,
  path: '/htmlQuestions',
  name: 'HTML Quiz',
  questions: [
    {
      title: 'What does HTML stand for?',
      variants:
        ['Hyper Text Modul Language',
          'Hyper Text Markup Language',
          'Hyper Test Markup Language',
          'Hyperlink Markup Language',
        ],
      correct: 1,
    },
    {
      title: 'Who is making the Web standards?',
      variants:
        ['Google',
          'The World Wide Web Consortium',
          'Mozilla',
          'Microsoft',
        ],
      correct: 1,
    },
    {
      title: 'Choose the correct HTML element for the largest heading:',
      variants:
        ['<head> ',
          '<h1>',
          '<h6>',
          '<heading>',
        ],
      correct: 1,
    },
    {
      title: 'What is the correct HTML element for inserting a line break?',
      variants:
        ['<break>',
          '<lb>',
          '<br>',
        ],
      correct: 2,
    },
    {
      title: 'What is the correct HTML for adding a background color?',
      variants:
        ['<body style="background-color:yellow;">',
          '<body bg="yellow">',
          '<background>yellow</background>',

        ],
      correct: 0,
    },
    {
      title: 'Choose the correct HTML element to define important text',
      variants:
        ['<important>',
          '<i>',
          '<strong> ',
          '<b>',
        ],
      correct: 2,
    },
    {
      title: 'Choose the correct HTML element to define emphasized text',
      variants:
        ['<em>',
          '<i>',
          '<italic> ',
        ],
      correct: 0,
    },
    {
      title: 'What is the correct HTML for creating a hyperlink?',
      variants:
        ['<a href="http://www.w3schools.com">W3Schools</a> ',
          '<a name="http://www.w3schools.com">W3Schools.com</a>',
          '<a url="http://www.w3schools.com">W3Schools.com</a>',
          '<a>http://www.w3schools.com</a>',
        ],
      correct: 0,
    },
    {
      title: 'Which character is used to indicate an end tag?',
      variants:
        ['/ ',
          '*',
          '^',
          '<',

        ],
      correct: 0,
    },
    {
      title: 'How can you open a link in a new tab/browser window?',
      variants:
        ['<a href="url" target="new">',
          '<a href="url" new>',
          '<a href="url" target="_blank"> ',
        ],
      correct: 2,
    },
    {
      title: 'Which of these elements are all <table> elements?',
      variants:
        ['<table><tr><td>',
          '<table><tr><tt>',
          '<thead><body><tr>',
          '<table><head><tfoot>',
        ],
      correct: 0,
    },
    {
      title: 'Inline elements are normally displayed without starting a new line.',
      variants:
        ['True',
          'False',
        ],
      correct: 0,
    },
    {
      title: 'How can you make a numbered list?',
      variants:
        ['<ul>',
          '<ol> ',
          '<dl>',
          '<list>',
        ],
      correct: 1,
    },
    {
      title: 'How can you make a bulleted list?',
      variants:
        ['<ol>',
          '<dl>',
          '<list>',
          '<ul>',
        ],
      correct: 3,
    },
    {
      title: 'What is the correct HTML for making a checkbox?',
      variants:
        ['<input type="checkbox">',
          '<input type="check">',
          '<checkbox>',
          '<check>',
        ],
      correct: 0,
    },
    {
      title: 'What is the correct HTML for making a text input field?',
      variants:
        ['<input type="text">',
          '<textinput type="text">',
          '<textfield>',
          '<input type="textfield">',
        ],
      correct: 0,
    },

    {
      title: 'What is the correct HTML for making a drop-down list?',
      variants:
        ['<list>',
          '<input type="dropdown">',
          '<input type="list">',
          '<select>',
        ],
      correct: 3,
    },

    {
      title: 'What is the correct HTML for making a text area?',
      variants:
        ['<textarea>',
          '<input type="textbox">',
          '<input type="textarea">',
        ],
      correct: 0,
    },
    {
      title: 'What is the correct HTML for inserting an image?',
      variants:
        ['<img src="image.gif" alt="MyImage">',
          '<img alt="MyImage">image.gif</img>',
          '<image src="image.gif" alt="MyImage">',
          '<img href="image.gif" alt="MyImage">',
        ],
      correct: 0,
    },
    {
      title: 'What is the correct HTML for inserting a background image?',
      variants:
        ['<body style="background-image:url(background.gif)"> ',
          '<background img="background.gif">',
          '<body bg="background.gif">',
        ],
      correct: 0,
    },
    {
      title: 'An <iframe> is used to display a web page within a web page.',
      variants:
        ['False',
          'There is no such thing as an <iframe>',
          'True',
        ],
      correct: 2,
    },
    {
      title: 'HTML comments start with <!-- and end with -->',
      variants:
        ['<False ',
          '<textinput type="text">',
          '<textfield>',
          '<input type="textfield">',
        ],
      correct: 1,
    },
    {
      title: 'Block elements are normally displayed without starting a new line.',
      variants:
        ['False',
          'True',
        ],
      correct: 0,
    },
    {
      title: 'Which HTML element defines the title of a document?',
      variants:
        ['<title>',
          '<head>',
          '<meta>',
        ],
      correct: 0,
    },
    {
      title: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
      variants:
        ['src',
          'title',
          'alt',
          'longdesc',
        ],
      correct: 2,
    },
    {
      title: 'Which doctype is correct for HTML5?',
      variants:
        ['<!DOCTYPE HTML5>',
          '<!DOCTYPE html>',
          '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd">',
        ],
      correct: 1,
    },
    {
      title: 'Which HTML element is used to specify a footer for a document or section?',
      variants:
        ['<footer>',
          '<bottom>',
          '<section>',
        ],
      correct: 0,
    },
    {
      title: 'In HTML, you can embed SVG elements directly into an HTML page.',
      variants:
        ['True',
          'False',
        ],
      correct: 0,
    },
    {
      title: 'What is the correct HTML element for playing video files?',
      variants:
        ['<media>',
          '<video> ',
          '<movie>',
        ],
      correct: 1,
    },
    {
      title: 'What is the correct HTML element for playing audio files?',
      variants:
        ['<mp3>',
          '<sound>',
          '<audio> ',
        ],
      correct: 2,
    },
    {
      title: 'The HTML global attribute, "contenteditable" is used to:',
      variants:
        ['Update content from the server ',
          'Return the position of the first found occurrence of content inside a string',
          'Specifies a context menu for an element. The menu appears when a user right-clicks on the element',
          'Specify whether the content of an element should be editable or not',
        ],
      correct: 3,
    },
    {
      title: 'In HTML, onblur and onfocus are:',
      variants:
        ['Event attributes',
          'Style attributes',
          'HTML elements',
        ],
      correct: 0,
    },
    {
      title: 'Graphics defined by SVG is in which format?',
      variants:
        ['CSS',
          'XML',
          'HTML',
        ],
      correct: 1,
    },
    {
      title: 'The HTML <canvas> element is used to:',
      variants:
        ['draw graphics',
          'manipulate data in MySQL',
          'display database records',
          'create draggable elements',
        ],
      correct: 0,
    },
    {
      title: 'In HTML, which attribute is used to specify that an input field must be filled out?',
      variants:
        ['required',
          'placeholder',
          'validate',
          'formvalidate',
        ],
      correct: 0,
    },
    {
      title: 'Which input type defines a slider control?',
      variants:
        ['slider',
          'controls',
          'search',
          'range ',
        ],
      correct: 3,
    },
    {
      title: 'Which HTML element is used to display a scalar measurement within a range?',
      variants:
        ['<range>',
          '<meter> ',
          '<measure>',
          '<gauge>',
        ],
      correct: 1,
    },
    {
      title: 'Which HTML element defines navigation links?',
      variants:
        ['<navigate> ',
          '<navigation>',
          'Specifies a context menu for an element. The menu appears when a user right-clicks on the element',
          'Specify whether the content of an element should be editable or not',
        ],
      correct: 2,
    },
    {
      title: 'In HTML, what does the <aside> element define?',
      variants:
        ['Content aside from the page content',
          'A navigation list to be shown at the left side of the page',
          'The ASCII character-set; to send information between computers on the Internet',
        ],
      correct: 3,
    },
    {
      title: 'Which HTML element is used to specify a header for a document or section?',
      variants:
        ['<head>',
          '<section>',
          '<header>',
          '<top>',
        ],
      correct: 2,
    },
    
  ]
}

export const cssQuiz = {
  title: 'CSS',
  position: 2,
  path: '/cssQuestions',
  name: 'CSS Quiz',
  questions: [
    {
      title: 'What does CSS stand for?',
      variants:
        ['Colorful Style Sheets ',
          'Computer Style Sheets',
          'Creative Style Sheets',
          'Cascading Style Sheets ',
        ],
      correct: 3,
    },
    {
      title: 'What is the correct HTML for referring to an external style sheet?',
      variants:
        ['<link rel="stylesheet" type="text/css" href="mystyle.css">  ',
          '<style src="mystyle.css">',
          '<stylesheet>mystyle.css</stylesheet>',
        ],
      correct: 0,
    },
    {
      title: 'Where in an HTML document is the correct place to refer to an external style sheet?',
      variants:
        ['At the end of the document  ',
          'In the <head> section  ',
          'In the <body> section',
        ],
      correct: 1,
    },
    {
      title: 'Which HTML tag is used to define an internal style sheet?',
      variants:
        ['<style>',
          '<css>',
          '<script>',
        ],
      correct: 0,
    },
    {
      title: 'Which HTML attribute is used to define inline styles?',
      variants:
        ['style ',
          'styles ',
          'font',
          'class',
        ],
      correct: 0,
    },
    {
      title: 'Which is the correct CSS syntax?',
      variants:
        ['{body:color=black;} ',
          '{body;color:black;}',
          'body:color=black;',
          'body {color: black;}',
        ],
      correct: 3,
    },
    {
      title: 'How do you insert a comment in a CSS file?',
      variants:
        ['" this is a comment ',
          '/* this is a comment */  ',
          '// this is a comment //',
          '// this is a comment',
        ],
      correct: 1,
    },
    {
      title: 'Which property is used to change the background color?',
      variants:
        ['color',
          'bgcolor',
          'background-color',
        ],
      correct: 2,
    },
    {
      title: 'How do you add a background color for all <h1> elements?',
      variants:
        ['h1 {background-color:#FFFFFF;}  ',
          'h1.all {background-color:#FFFFFF;} ',
          'all.h1 {background-color:#FFFFFF;}',
          
        ],
      correct: 0,
    },
    {
      title: 'Which CSS property is used to change the text color of an element?',
      variants:
        ['fgcolor ',
          'text-color',
          'color ',
        ],
      correct: 2,
    },
    {
      title: 'Which CSS property controls the text size?',
      variants:
        ['font-style',
          'font-size',
          'text-size',
          'text-style',
        ],
      correct: 1,
    },
    {
      title: 'What is the correct CSS syntax for making all the <p> elements bold?',
      variants:
        ['<p style="text-size:bold;"> ',
          'p {font-weight:bold;} ',
          'p {text-size:bold;}',
          '<p style="font-size:bold;">',
        ],
      correct: 1,
    },
    {
      title: 'How do you display hyperlinks without an underline?',
      variants:
        ['a {decoration:no-underline;}  ',
          'a {text-decoration:no-underline;}',
          'a {text-decoration:none;} ',
          'a {underline:none;}',
        ],
      correct: 2,
    },
    {
      title: 'How do you make each word in a text start with a capital letter?',
      variants:
        ['text-transform:capitalize',
          'text-style:capitalize',
          'transform:capitalize',
          'You can not do that with CSS',
        ],
      correct: 0,
    },
    {
      title: 'Which property is used to change the font of an element?',
      variants:
        ['font-weight  ',
          'font-style',
          'font-family  ',
        ],
      correct: 2,
    },
    {
      title: 'How do you make the text bold?',
      variants:
        ['font-weight:bold;',
          'font:bold;',
          'style:bold;',
        ],
      correct: 0,
    },
    {
      title: 'How do you display a border like this: The top border = 10 pixels; The bottom border = 5 pixels; The left border = 20 pixels; The right border = 1pixel?',
      variants:
        ['border-width:5px 20px 10px 1px;  ',
          'border-width:10px 5px 20px 1px;',
          'border-width:10px 20px 5px 1px;',
          'border-width:10px 1px 5px 20px;  ',
        ],
      correct: 3,
    },
    {
      title: 'Which property is used to change the left margin of an element?',
      variants:
        ['margin-left  ',
          'indent',
          'padding-left',
        ],
      correct: 0,
    },
    {
      title: 'When using the padding property; are you allowed to use negative values?',
      variants:
        ['No',
          'Yes',
        ],
      correct: 0,
    },
    {
      title: 'How do you make a list that lists its items with squares?',
      variants:
        ['list-style-type: square;',
          'list: square;',
          'list-type: square;',
        ],
      correct: 0,
    },

    {
      title: 'How do you select an element with id "demo"?',
      variants:
        ['demo ',
          '#demo ',
          '*demo',
          '.demo',
        ],
      correct: 1,
    },
    {
      title: 'How do you select elements with class name "test"?',
      variants:
        ['#test  ',
          '.test ',
          'test',
          '*test',
        ],
      correct: 1,
    },
    {
      title: 'How do you select all p elements inside a div element?',
      variants:
        ['div + p ',
          'div p ',
          'div.p',
        ],
      correct: 1,
    },
    {
      title: 'How do you group selectors?',
      variants:
        ['Separate each selector with a comma ',
          'Separate each selector with a plus sign',
          'Separate each selector with a space',
        ],
      correct: 0,
    },
    {
      title: 'What is the default value of the position property?',
      variants:
        ['absolute',
          'static',
          'fixed',
          'relative',
        ],
      correct: 1,
    },
  ]
}

export const reactQuiz = {
  title: 'React',
  position: 4,
  path: '/reactQuestions',
  name: 'React Quiz',
  questions: [{
    title: 'What is the correct command to create a new React project?',
    variants:
      ['npm create-react-app  ',
        'npx create-react-app',
        'npx create-react-app myReactApp  ',
        'npm create-react-app myReactApp',
      ],
    correct: 2,
  },
  {
    title: 'What does myReactApp refer to in the following command? npx create-react-app myReactApp',
    variants:
      ['A reference to an existing app ',
        'The type of app to create',
        'The name you want to use for the new app',
        'The directory to create the new app in',
      ],
    correct: 2,
  },
  {
    title: 'What command is used to start the React local development server?',
    variants:
      ['npm run dev ',
        'npm build',
        'npm start',
        'npm serve',
      ],
    correct: 2,
  },
  {
    title: 'What is the default local host port that a React development server uses?',
    variants:
      ['5000 ',
        '8080',
        '3500',
        '3000 ',
      ],
    correct: 3,
  },
  {
    title: 'To develop and run React code, Node.js is required.',
    variants:
      ['True',
        'False',
        ],
    correct: 0,
  },
  {
    title: 'What is the children prop?/> ',
    variants:
      ['A property that adds child values to state  ',
        'A property that lets you pass data to child components',
        'A property that lets you set an object as a property',
        'A property that lets you nest components in other components',
      ],
    correct: 3,
  },
  {
    title: 'Which keyword creates a constant in JavaScript?',
    variants:
      ['constant'  ,
        'var',
        'let',
        'const'],
    correct: 3,
  },
  {
    title: 'A copy of the "real" DOM that is kept in memory is called what?',
    variants:
      ['Shadow DOM ',
        'Virtual DOM ',
        'React DOM',
        'DOM',
      ],
    correct: 1,
  },
  {
    title: 'React component names must begin with an uppercase letter.',
    variants:
      ['True',
        'False',
      ],
    correct: 0,
  },
  {
    title: 'Which operator can be used to conditionally render a React component?',
    variants:
      ['&& ',
        '||',
        '::',
        '??',
      ],
    correct: 0,
  },
  {
    title: 'When rendering a list using the JavaScript map() method, what is required for each element rendered?',
    variants:
      ['id',
        'index',
        'key',
        'data',
      ],
    correct: 2,
  },
  {
    title: 'What tool does React use to compile JSX?',
    variants:
      ['JSX Compiler ',
        'React Router',
        'ReactDOM',
        'Babel',
      ],
    correct: 3,
  },
  {
    title: 'How can you optimze performance for a function component that always renders the same way?',
    variants:
      ['Use the useReducer Hook.',
        'Use the shouldComponentUpdate lifecycle method.',
        'Wrap it in the React.memo higher-order component.',
        'Use the useMemo Hook. ',
      ],
    correct: 3,
  },
  {
    title: 'What is a common use case for ref?',
    variants:
      ['To refer to another JavaScript file',
        'To refer to a function',
        'To directly access a DOM node ',
        'To bind the function',
      ],
    correct: 2,
  },


  {
    title: 'React can only render elements in the root document element.',
    variants:
      ['True',
        'False ',
      ],
    correct: 1,
  },

  {
    title: 'What is the correct syntax to import a Component from React?',
    variants:
      ['import { Component } from "react"',
        'import React.Component from "react"',
        'import [ Component ] from "react"',
        'import Component from "react"',
      ],
    correct: 0,
  },

  {
    title: 'React separates the user interface into components. How are components combinded to create a user interface?',
    variants:
      ['By putting them in a folder structure',
        'By nesting components ',
        'With webpack',
        'With code splitting',
      ],
    correct: 1,
  },

  {
    title: 'Although React Hooks generally replace class components, there are no plans to remove classes from React.',
    variants:
      ['False',
        'True',
      ],
    correct: 1,
  },

  {
    title: 'Which of the following is NOT a rule for React Hooks?',
    variants:
      ['Hooks can be called in Class or Function components  ',
        'Hooks can only be called at the top level of a component',
        'Hooks cannot be conditional',
        'Hooks can only be called inside React Function components',
      ],
    correct: 0,
  },

  {
    title: 'Why should you avoid copying the values of props into a component is state?',
    variants:
      ['Because you should never mutate state',
        'Because that would create two instances of the same state that could become out of sync ',
        'Because you want to allow data to flow back up to the parent',
        'Because prop values cannot be stored in state',
      ],
    correct: 1,
  },

  ]
}
