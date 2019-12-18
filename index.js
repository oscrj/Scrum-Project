function init(){
  addEventListeners();

}

function addEventListeners(){
  document.getElementById("starters").addEventListener("click", starter);
  document.getElementById("maincourse").addEventListener("click", mainCourse);
  document.getElementById("dessert").addEventListener("click", dessert);
  document.getElementById("vegetarian").addEventListener("click", vegetarian);
  document.getElementById("vegan").addEventListener("click", vegan);
}

function starter(){
  document.getElementsByTagName("body")[0].innerHTML = "";

  let section = document.createElement("section");
  document.body.appendChild(section);

  let header = document.createElement("header");

  header.setAttribute("id", "rec-header");
  section.appendChild(header);

  let headerH1 = document.createElement("h1");
  headerH1.textContent = "GIN & TONIC-GRAVAD LAX MED INLAGD GURKA";
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
  cookTime.textContent = "38 min";
  option2.text = "2 port";
  option4.text = "4 port";
  option6.text = "6 port";
  option8.text = "8 port";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  
  selector.appendChild(option6);
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
  ing1.textContent = "600 g sushilax";
  list.appendChild(ing1);

  let ing2 = document.createElement("li");
  ing2.textContent = "6 enbär";
  list.appendChild(ing2);

  let ing3 = document.createElement("li");
  ing3.textContent = "75 g salt";
  list.appendChild(ing3);

  let ing4 = document.createElement("li");
  ing4.textContent = "1/2 dl socker";
  list.appendChild(ing4);

  let ing5 = document.createElement("li");
  ing5.textContent = "1/2 dl gin";
  list.appendChild(ing5);

  let ing6 = document.createElement("li");
  ing6.textContent = "1 1/2 dl tonic";
  list.appendChild(ing6);

  let head1 = document.createElement("li");
  head1.textContent = "Limesås:";
  head1.setAttribute("class", "listHeader");
  list.appendChild(head1);

  let ing7 = document.createElement("li");
  ing7.textContent = "1 dl crème fraiche";
  list.appendChild(ing7);

  let ing8 = document.createElement("li");
  ing8.textContent = "1 lime, saft och rivet skal";
  list.appendChild(ing8);

  let ing9 = document.createElement("li");
  ing9.textContent = "1 dl gräddfil";
  list.appendChild(ing9);

  let ing10 = document.createElement("li");
  ing10.textContent = "socker";
  list.appendChild(ing10);

  let ing11 = document.createElement("li");
  ing11.textContent = "salt och nymalen svartpeppar";
  list.appendChild(ing11);

  let head2 = document.createElement("li");
  head2.textContent = "Inlagd gurka:";
  head2.setAttribute("class", "listHeader");
  list.appendChild(head2);

  let ing12 = document.createElement("li");
  ing12.textContent = "4 snacksgurkor";
  list.appendChild(ing12);

  let ing13 = document.createElement("li");
  ing13.textContent = "1/2 dl ättika, 12%";
  list.appendChild(ing13);

  let ing14 = document.createElement("li");
  ing14.textContent = "1/2 dl socker";
  list.appendChild(ing14);

  let ing15 = document.createElement("li");
  ing15.textContent = "1/2 dl tonic";
  list.appendChild(ing15);

  let divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);

  //  Gör laxen.
  let descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör laxen såhär:";
  divDescription.appendChild(descriptionHeader);
  let descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);
  let desc1 = document.createElement("li");
  desc1.textContent = "Lägg laxen i en liten form, inte mycket större än biten själv.";
  let desc2 = document.createElement("li");
  desc2.textContent = "Mortla enbär, blanda med salt och socker och klappa in över laxen.";
  let desc3 = document.createElement("li");
  desc3.textContent = "Häll över gin och tonic och täck formen med plastfolie. Ställ i kylen i 12 timmar, vänd laxen och ställ i kylen ytterligare 12 timmar.";

  descriptionList.appendChild(desc1);
  descriptionList.appendChild(desc2);
  descriptionList.appendChild(desc3);

  //  Gör såsen.
  let descriptionHeader2 = document.createElement("h4");
  descriptionHeader2.innerText = "Gör limesåsen så här:";
  divDescription.appendChild(descriptionHeader2);
  let descriptionList2 = document.createElement("ol");
  divDescription.appendChild(descriptionList2);

  let descr1 = document.createElement("li");
  descr1.textContent = "Rör samman crème fraiche, gräddfil, finrivet limeskal och limesaft.";
  let descr2 = document.createElement("li");
  descr2.textContent = "Smaka av med socker, salt och peppar.";


  descriptionList2.appendChild(descr1);
  descriptionList2.appendChild(descr2);


  // Gurka
  let descriptionHeader3 = document.createElement("h4");
  descriptionHeader3.innerText = "Gör den inlagda så här:";
  divDescription.appendChild(descriptionHeader3);
  let descriptionList3 = document.createElement("ol");
  divDescription.appendChild(descriptionList3);

  let descri1 = document.createElement("li");
  descri1.textContent = "Skölj gurkan och hyvla i tunna skivor på längden.";
  let descri2 = document.createElement("li");
  descri2.textContent = "Vispa ihop ättika, socker och tonic och häll lagen över gurkorna. Låt dra 10 minuter.";
  let descri3 = document.createElement("li");
  descri3.textContent = "Ta upp laxfilén ur lagen, klappa torr med hushållspapper. Skär i tunna skivor och lägg upp på tallrik tillsammans med inlagd gurka, limesås, rostat rågbröd och örter.";


  descriptionList3.appendChild(descri1);
  descriptionList3.appendChild(descri2);
  descriptionList3.appendChild(descri3);


  let aTag = document.createElement("a");
  aTag.setAttribute("href", "index.html");
  aTag.setAttribute("class", "button");
  aTag.textContent = "Huvudmeny";
  section.appendChild(aTag);
}

function mainCourse(){
  console.log("main");
}

function dessert(){
  console.log("dessert");
}

function vegetarian(){
  console.log("vegetarian");
}

function vegan(){
  console.log("vegan");
}

document.addEventListener("DOMContentLoaded", init);