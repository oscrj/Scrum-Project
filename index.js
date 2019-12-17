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

  let header = document.createElement("header");

  header.setAttribute("id", "rec-header");
  section.appendChild(header);

  let headerH1 = document.createElement("h1");
  headerH1.textContent = "Sillmacka";
  header.appendChild(headerH1);

  let image = document.createElement("img");
  image.src = "starters/gin/starter1.jpg";
  section.appendChild(image);

  let divPrepareInfo = document.createElement("div");
  divPrepareInfo.id = "prepareInfo";
  divPrepareInfo.setAttribute("class", "container");
  section.appendChild(divPrepareInfo);
  let divCookTime = document.createElement("div");
  let divCutlery = document.createElement("div");
  let imgTime = document.createElement("img");
  let cookTime = document.createElement("h2");
  let selector = document.createElement("select");
  let option2 = document.createElement("option");
  let option4 = document.createElement("option");
  let option6 = document.createElement("option");
  let option8 = document.createElement("option");
  let imgCutlery = document.createElement("img");
  divCookTime.id = "cookTime";
  divCutlery.id = "portions";
  imgTime.src = "media/timer.png";
  imgTime.style.height = "30px";
  imgTime.style.width = "30px";
  cookTime.textContent = "30 min";
  option4.text = "4 port";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  
  selector.appendChild(option4);
  divPrepareInfo.appendChild(divCookTime);
  divPrepareInfo.appendChild(divCutlery);
  divCookTime.appendChild(imgTime);
  divCookTime.appendChild(cookTime);
  divCutlery.appendChild(imgCutlery);
  divCutlery.appendChild(selector);

  let hr = document.createElement("hr");
  section.appendChild(hr);

  let divIngredients = document.createElement("div");
  divIngredients.setAttribute("class", "container");
  divIngredients.id = "ingredients";
  section.appendChild(divIngredients);

  let list = document.createElement("ul");
  divIngredients.appendChild(list);

  let ing1 = document.createElement("li");
  ing1.textContent = "1 kg sill";
  list.appendChild(ing1);

  let ing2 = document.createElement("li");
  ing2.textContent = "1 st chokladvaniljmarängbotten";
  list.appendChild(ing2);

  let ing3 = document.createElement("li");
  ing3.textContent = "1 kg sill";
  list.appendChild(ing3);

  let ing4 = document.createElement("li");
  ing4.textContent = "sprit";
  list.appendChild(ing4);


}



document.addEventListener("DOMContentLoaded", init);