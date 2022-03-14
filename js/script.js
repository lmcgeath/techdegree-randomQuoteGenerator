/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*An array of quotes to be cycled through and displayed to the page*/
var quotes = [
    {  quote: 'It’s not the daily increase but daily decrease. Hack away at the unessential.',
       source: 'Bruce Lee',
       tag: 'Focus'
    },
    {  quote: "Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject. So you know you are getting the best possible information.",
       source: 'Michael Scott',
       citation: 'The Office, U.S. television series, episode 47',
       year: 2007,
       tag: 'Funny'
     },
    {  quote:"Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
       source: 'Lao Tzu',
       tag: 'Inspirational',
      },
    {  quote:"The goal is not to be better than the other man, but your previous self.",
       source: 'The Dalai Lama',
       tag: 'Inspirational',
       },
     {  quote:"If you're not first, you're last.",
        source: 'Ricky Bobby',
        citation: 'Talladega Nights',
        year: 2006,
        tag: 'Inspirational',
        },
    {  quote:"Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight.",
       source: 'Helen Keller',
       tag: 'Inspirational',
           }
];

//Creates a function that loops through the 'quotes' object and returns a random quote
function getRandomQuote (list){
  var ranNum = Math.floor(Math.random() * quotes.length);
  var ranQuote;
  for (i= 0; i<=quotes.length; i+=1){
    ranNum[i]
  };
  ranQuote = quotes[ranNum];
  return ranQuote;
};

/***
Creates a function to use the getRandomQuote function to cycle through quotes
and their properties and prints them to the page.
***/
function printQuote(list){
  var newQuote = getRandomQuote();
  var message = '';
  message = '<p class="quote">' + newQuote.quote + ' ' +  '</p>';
  message += '<p class="source">' + newQuote.source + ' ';
    if (newQuote.citation != undefined){
      message += '<span class="citation">' + newQuote.citation + ' ' +  '</span>';
    }
    if (newQuote.year != undefined){
      message += '<span class="year">' + newQuote.year + ' ' +  '</span>';
    }
    if (newQuote.tag != undefined){
      message += '<span class="tag">' + newQuote.tag  + ' ' +  '</span>';
    }
  message += '</p>';
  document.getElementById('quote-box').innerHTML = message;
  return message;
}
console.log(printQuote());

/***
Creates a function to assign random RGB values, adding them to a string and
applying them to the background.
***/
function ranBgColor(r,g,b) {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + r + "," + b + "," + g + ")";
  return document.body.style.background = bgColor;
    }
//calls the ranBgColor function to display a random color upon initial loading of the page.
ranBgColor();

/*adds event listeners to cycle through quotes and change background color every
time the 'show another quote' button is clicked.*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", ranBgColor);

//Sets a 10 second timer to refresh the quote and add a new background color.
setInterval(function(){ printQuote() }, 10000);
setInterval(function(){ ranBgColor() }, 10000);
