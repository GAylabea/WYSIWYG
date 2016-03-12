"use strict";
// always write this on your js scripts from now on - "let" will now be var
  
let people = [{
  title: "Chief Librairian at the Library of Alexandria",
  name: "Eratosthenes",
  bio: "Greek mathematician, geographer, poet, astronomer and music theorist.",
  image: "images/Eratosthenes.jpg",
  lifespan: {
    birth: 276, 
    death: 195
  }
},

{
  title: " Librarian of the Count Waldstien Collection",
  name: " Giacomo Casanova",
  bio: "Italian adventurer, author and (late in life) librarian.",
  image: "images/Casanova.jpg",
  lifespan: {
    birth: 1725,
    death: 1798
  }
},

{
  title: "Librarian at the Bibliotheque Sainte-Genvieve",
  name: "Marcel Duchamp",
  bio: "Painter, sculptor, chess player, writer and librarian",
  image: "images/Duchamp.jpg",
  lifespan: {
    birth: 1887,
    death: 1968
  }
},

{
  title: "Father of Modern Librarianship",
  name: "Melvil Dewey",
  bio: "Librarian, edcator, inventor of the Dewey Decimal System and founder of the Lake Placid Club",
  image: "images/Dewey.jpg",
  lifespan: {
    birth: 1851,
    death: 1930
  }
},

{
  title: "Children's Librarian",
  name: "Beverly Cleary",
  bio: "Writer of fiction and young adult novels.",
  image: "images/Beverly_Cleary_1971.jpg",
  lifespan: {
    birth: 1916,
    death: 2017
  }
},

{
  title: "Librarian and Writer-in-Residence at Cathedral of St. John the Divine",
  name: "Madeleine L'Engle",
  bio: "Newberry winning writer of fiction and young adult novels.",
  image: "images/Madeleine_lengle.jpg",
  lifespan: {
    birth: 1918,
    death: 2007
  }
}];

let container = document.getElementById("container");
let input = document.getElementById("input");
let card = document.getElementsByClassName("card");
let bio = document.getElementsByClassName("bio"); 

// This loop adds information to the card, creates a new variable(let) to only output one person at a time, builds the card 
// and puts it into the container in our html by calling the buildCard function (below) and passing person (the object/array) thruwe are also passing thru each card - we must define this as a seperate variable
// we are also passing thru each card - we must define this as a seperate variable
function populateDom () {
for (let i=0; i<people.length; i++) {
  let person = people[i]; 
  buildCard(person); 
  }
addClickEvent();
}

function buildCard(person) {
  container.innerHTML += `<person class="card"><header><h2>${person.title}${person.name}</h2></header><section><p class="bio">${person.bio}</p><img src="${person.image}"></section><footer>${person.lifespan.birth}-${person.lifespan.death}</footer></person>`
}

// There are several things attached to this click event. First, we set our variables to focus on the bio and card
// then, we need to add an event listern for the click to remove the selected card. Also had to collect the input from the value field
// then apply the focus as a method to put a cursor up in the input whenever the user clicks on one of the cards - it's called 'selected'
function addClickEvent() {
  for (let i = 0; i < card.length; i++) {
  let currCard = card[i];
  let currBio=bio[i]; 
   currCard.addEventListener('click', function() {
    removeSelected();
    input.value = ' ';
    input.focus();
    currCard.classList.add('selected');
    keyEvent(currCard, currBio);
    })
  }
}
  
// this will remove the selected card by selecting each individual card (getting rid of the dotted border)
function removeSelected() {   
  for(let i = 0; i<card.length; i++) {
    card[i].classList.remove('selected'); 
  }
}

// This one is complicated. We wanted to add several things to the keyEvent - both replacing the bio with the stuff
// entered into the input field and also giving the enter key (which is key "13") a job to clear the input field with the magical ' '
// also - remember target is specifying that we want a specfic tag inside the currCard (we had to find all the properies on the 
// event object by console logging stuff and search thru the properties)
function keyEvent(currCard, currBio) {
  input.addEventListener('keyup', function(event) {
  if (currCard.classList.contains('selected')) {
    let newBio = event.currentTarget.value
    currBio.innerHTML = newBio;
  if (event.keyCode === 13) {
    currBio.innerHTML = newBio;
    input.value = ' '; 
    }
   }
  })
 }

populateDom()


