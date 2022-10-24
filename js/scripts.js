window.addEventListener("load", function() {
  //declaring our variables
  const body = document.querySelector("body");
  const divElement = document.createElement("div");
  const pElement = document.createElement("p");
  pElement.innerText = "this is our p element";
  //attaching the div to the body
  document.body.appendChild(divElement);
  //attaching the p to the div
  firstDiv = document.querySelector('div');
  firstDiv.append(pElement);
});


//finish this up!