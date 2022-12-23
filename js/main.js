
const links = [
  {
    label: "Week1 notes",
    url: "week_01/index.html"
  },
  {
    label: "Week2 notes",
    url: "week_02/index.html"
  }
]

//This is the place where I set the li elemets
const orderList = document.querySelector('ol');

//Then I need to pass in the array to create every li element
links.forEach(link => {
  //I created the li elements
  const liElemets = document.createElement('li');

  //Then I created the a element (link)
  const linkElement = document.createElement('a');

  //Then for the link element I assigned an src attribute
  linkElement.setAttribute('href', link.url);

  //Also, I settled the text into the link element
  linkElement.textContent = link.label;

  //Then to the liElement I attached the a element
  liElemets.appendChild(linkElement);

  //finally to the order list I attached the li element
  orderList.append(liElemets);


  
});

 


