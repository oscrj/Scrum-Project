function init(){
  addEventListeners();

}

function addEventListeners(){
  document.getElementById("starters").addEventListener("click", starter, true);
}

function starter(){
  document.getElementsByTagName("body")[0].innerHTML = "";

  let section = document.createElement("section");
  document.body.appendChild(section);

  let header = document.createElement("h1");
  header.textContent = "macka";
  header.setAttribute("id", "page-header");
  section.appendChild(header);

  let image = document.createElement("img");
  image.src = "starters/gin/starter1.jpg";
  image.setAttribute("style", "height:300px");
  section.appendChild(image);

  let divPrepareInfo = document.createElement("div");
  divPrepareInfo.setAttribute("style", "height:50px; background-color:lightgrey");
  section.appendChild(divPrepareInfo);

  let divIngredients = document.createElement("div");
  section.appendChild(divIngredients);

  let list = document.createElement("ul");
  section.appendChild(list);

  let ing1 = document.createElement("li");
  ing1.textContent = "1 kg sill";
  list.appendChild(ing1);


}



document.addEventListener("DOMContentLoaded", init);