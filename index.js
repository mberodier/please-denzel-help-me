// Q1. Create a variable called `denzel` - that can't be redeclared - and assign it the string 'please denzel, help me'

const denzel="please denzel, help me" ;


// Q2. Use the variable `actor` to create a new variable called `inspirational` that is assigned the string "Is Denzel Washington an inspirational actor?"
const actor = 'Denzel Washington';
const inspirational = 'Is ' + actor + ' an inspirational actor?';

// Q3  Create an object called `family` and give it the following properties:
// family has been `married` on "1983" (Number)
// family is not `presidentOfTheUnitedStates` (boolean)
// family has `children` called "John David", "Katia", "Olivia" and "Malcolm" (array of strings)

const family = {
  'married': 1983,
  'presidentOfTheUnitedStates': false,
  'children': ['John David', 'Katia', 'Olivia', 'Malcolm']
};

// Q4. Change
// * the `name` stage to "A Raisin in the Sun"
// * the `year` stage to "2014"
// by using the dot notation
const stage = {
  'name': 'Fences',
  'year': '2010'
};
stage.name = 'A Raisin in the Sun';
stage.year = '2014';

// Q5. Change the `movie` "glory" to "Training Day" using square bracket notation
const awards = {
  'movie': 'glory'
};
awards['movie'] = 'Training Day';
// Q6. Create an object called "earlywork"
// The key should be the movie name and the value the release year
// Movies are
// * Carbon Copy (1981)
// * A Soldier Story (1984)
// * Power (1986)
// * Cry Freedom (1987)
// * For Queen and Countryy (1988)

// Q7. Return a new array from `debaters` with all item in uppercase
const debaters = ['we do', 'what we have to do', 'in order to do', 'what we want to do'];

// Q8. Using this array.
// Do the following 5 steps
const directors = ['spikelee', 'ridleyscott', 'zemeckis'];

// 1. add "tonyscott" value to the end of `directors` array

// 2. remove "spikelee" value and store it in a variable called firstDirector

// 3. add "himself" value to the start of `directors` array

// 4. remove "ridleyscott" value from the array and store it in a variable called secondDirector

// 5. let 'zemeckis' in the array but put a copy of it on a variable called thirdDirector


// Q9. Write the function `duplicate` that return the expected result
console.log(duplicate(['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']));
// ❯ ['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child', 'Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']


// Q10. Refactor the current ES5-style function `police` in ES6-style.
const police = function (names) {
  const results = [];

  for (let i = 0; i < names.length; i++) {
    results.push(names[i] + 'I am the police');
  }
  return results;
};

const quotes = ['You will never see the light of... ', 'I run shit around here ', 'King Kong aint got shit on me '];

console.log(police(chorus));
 // ❯ ['You will never see the light of... I am the police', 'I run shit around here I am the police', 'King Kong aint got shit on me I am the police'];


// Q11. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// What's the query selector to get all Cast Credits titles (Live with Kelly & Ryan, The Late Show with Stephen Colbert...).

// Q12. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// How many http requests are performed to render the page?

// Q13. Related to the following api call with "curl"
// ❯ curl "http://api.tvmaze.com/people/6616"
// Could you describe and explain the response?

// Q14. Refactor the following codebase with a promise notation
fs.readFile(filePath, function(err, data) {
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})

// Q15. Refactor the following codebase with async/await notation
fetch('http://api.tvmaze.com/search/people?q=denzel+washington')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const {person} = data[0];
    const {id} = person;

    return fetch(`http://api.tvmaze.com/people/${id}/castcredits?embed=show`);
  })
  .then(response => {
    return response.json();
  })
  .then(console.log);

// Q16. Give me at least 3 memorable websites that engage to continue (because of nice UX/UI AND avoid to give me facebook, airbnb etc...)
/*
canva.com : Canva is a website that contains a great catalog of visuals (logos, presentation, posters..) which are editable and downloadable for free. The UI is very intuitive and provide people whithout design knowledge to make pro visuals.

wetransfer.com : WeTransfer is a very well known websites for documents/photos sharing. It allows you to share documents with both computer and smartphone users by giving the receiver email. The UI is also very clean and enhance the user experience to me.

linguee.fr : Linguee is a multi language translator which uses the DeepL algorithm. It's interface is very ergonomic and detailed regarding the definitions and examples provided. I'm using it since 5 years now and it is clearly a reference in term of translator. 

*/
// Q17. Describe an ESILV project that you worked on that you’re proud of?
/*
During this year, for my PI2 project, I had the opportunity to work with KnockKnock, a french cyber security company, and 3 random ESILV students. 
The team synergy was fabulous and we managed to build a Python application that can test 4 different website vulnerability. 
This project was very challenging and I feel very proud of the final results and feedbacks we obtained. 
*/
// Q18. Describe an ESILV project that you worked on that you’re not so proud of?
/*
I'm not proud of this year's WAA project. The project seemed very interresting regarding the diversity of computing skills involved, And I wish I managed to do better. 
Besides I struggled a lot in focusing on this particular project as I had other ones to do at the same time. And because it was the most difficult for me (new coding language, new concept, new working method)
However, I insist that the content of the course is very clear and motivating.
*/
// Q19. What are some things you like about the developer tools you use?
/*
My favourite coding language are SQL & Python.

Python for its simplicity of use and for all the packages it contains. 
Moreover, this language is used by a very large community always ready to help on the web, and this online mutual help is very pleasant to me. 

SQL because I've got a particular interest in databases. I'm currently doing an internship in Allianz as a Data Platform Business Analyst, and I really love to browse big business databases.
Besides, SQL isn't just a programming tool, but it also allows to analyse real performances by filtering virtual documented tables. 

*/
// Q20. Last question: could you explain me - in your terms - why the title of the course is "Web Application Architecture(s)" and not "Web Application Architecture"?
/*

*/