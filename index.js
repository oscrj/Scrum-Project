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
  cookTime.textContent = "? min";
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




  let divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);

  let descriptionP = document.createElement("p");
  descriptionP.id = "descriptionText";
  descriptionP.innerText = `Gör laxen så här:
    Lägg laxen i en liten form, inte mycket större än biten själv. Mortla enbär, blanda med salt och socker och klappa in över laxen. Häll över gin och tonic och täck formen med plastfolie. Ställ i kylen i 12 timmar, vänd laxen och ställ i kylen ytterligare 12 timmar.\n
    Gör limesåsen så här:
    Rör samman crème fraiche, gräddfil, finrivet limeskal och limesaft. Smaka av med socker, salt och peppar.\n
    Gör den inlagda gurkan så här:
    Skölj gurkan och hyvla i tunna skivor på längden. Vispa ihop ättika, socker och tonic och häll lagen över gurkorna. Låt dra 10 minuter. Ta upp laxfilén ur lagen, klappa torr med hushållspapper. Skär i tunna skivor och lägg upp på tallrik tillsammans med inlagd gurka, limesås, rostat rågbröd och örter.`;
  divDescription.appendChild(descriptionP);
}

/*
Gin & tonic-gravad lax med inlagd gurka och limesås
Gin & tonic-gravad lax med inlagd gurka.

Gillar du också gin & tonic? Då är det här den perfekta rätten för dig! Gin & tonic-gravad lax med inlagd gurka – fungerar både som förrätt och huvudrätt.


AV REDAKTIONEN
Dags att uppdatera den gravade laxen med pigg gin & tonic-smak!

6–8 personer

Gin & tonic-gravad lax:
600 g sushilax
6 enbär
75 g salt
1/2 dl socker
1/2 dl gin
1 1/2 dl tonic

Limesås:
1 dl crème fraiche
1 lime, saft och rivet skal
1 dl gräddfil
socker
salt och nymalen svartpeppar

Inlagd gurka:
4 snacksgurkor
1/2 dl ättika, 12 %
1/2 dl socker
1/2 dl tonic

Till servering:
4 tunna skivor rågbröd
färska örter

Gör laxen så här:
Lägg laxen i en liten form, inte mycket större än biten själv.
Mortla enbär, blanda med salt och socker och klappa in över laxen.
Häll över gin och tonic och täck formen med plastfolie. Ställ i kylen i 12 timmar, vänd laxen och ställ i kylen ytterligare 12 timmar.
Gör limesåsen så här:
Rör samman crème fraiche, gräddfil, finrivet limeskal och limesaft.
Smaka av med socker, salt och peppar.
Gör den inlagda gurkan så här:
Skölj gurkan och hyvla i tunna skivor på längden.
Vispa ihop ättika, socker och tonic och häll lagen över gurkorna. Låt dra 10 minuter.
Ta upp laxfilén ur lagen, klappa torr med hushållspapper.
Skär i tunna skivor och lägg upp på tallrik tillsammans med inlagd gurka, limesås, rostat rågbröd och örter.
Recept på gin & tonic-gravad lax med inlagd gurka och limesås.
Gin & tonic-gravad lax med inlagd gurka.

Av: Gitte Heidi Rasmussen, Julie Hey
Foto: Stine Christiansen, Betina Hastoft
*/

document.addEventListener("DOMContentLoaded", init);