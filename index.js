let mainFooter = document.createElement('footer');
let section = document.createElement("section");

function init(){
  addEventListeners();
}

function addEventListeners(){
  document.getElementById("starters").addEventListener("click", starterMenu);
  document.getElementById("maincourse").addEventListener("click", mainCourseMenu);
  document.getElementById("dessert").addEventListener("click", dessertMenu);
  document.getElementById("vegetarian").addEventListener("click", vegetarianMenu);
  document.getElementById("vegan").addEventListener("click", veganMenu);
}

//Starters - random
function randomStarter(){
  let randomNr = Math.floor(Math.random() * 3) + 1;

  if (randomNr === 1){
    starter1();
  }
  if (randomNr === 2){
    starter2();
  }
  if (randomNr === 3){
    starter3();
  }
}

//Main courses - random
function randomMainCourse(){
  let randomNr = Math.floor(Math.random() * 3) + 1;

  if (randomNr === 1){
    mainCourse1();
  }
  if (randomNr === 2){
    mainCourse2();
  }
  if (randomNr === 3){
    mainCourse3();
  }
}

//Desserts - random
function randomDessert(){
  let randomNr = Math.floor(Math.random() * 3) + 1;

  if (randomNr === 1){
    dessert1();
  }
  if (randomNr === 2){
    dessert2();
  }
  if (randomNr === 3){
    dessert3();
  }
}

//Vegeterian - random
function randomVegetarian(){
  let randomNr = Math.floor(Math.random() * 3) + 1;

  if (randomNr === 1){
    vegetarian1();
  }
  if (randomNr === 2){
    vegetarian2();
  }
  if (randomNr === 3){
    vegetarian3();
  }
}

//Vegan - random
function randomVegan(){
  let randomNr = Math.floor(Math.random() * 3) + 1;

  if (randomNr === 1){
    vegan1();
  }
  if (randomNr === 2){
    vegan2();
  }
  if (randomNr === 3){
    vegan3();
  }
}

//  Starter recipes list  
function starterMenu(){
  document.getElementsByTagName("body")[0].innerHTML = "";

  let headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  document.body.appendChild(headerWrapper);

  //  Page Header
  let secondMainHeader = document.createElement("h1");
  secondMainHeader.textContent = "Förrätt";
  headerWrapper.appendChild(secondMainHeader);

  section = document.createElement("section");
  section.id = "secondMenuSection"
  document.body.appendChild(section);

  for(let i = 0; i < 4; i++){
    let divWrapper = document.createElement("div");
    divWrapper.setAttribute("class","secondMenuWrapper");
    section.appendChild(divWrapper);
  }

  let recepie1 = document.getElementsByClassName("secondMenuWrapper")[0];
  let recepie2 = document.getElementsByClassName("secondMenuWrapper")[1];
  let recepie3 = document.getElementsByClassName("secondMenuWrapper")[2];
  let randomBtn = document.getElementsByClassName("secondMenuWrapper")[3];

  //  add eventlisterner
  recepie1.addEventListener("click", starter1);
  recepie2.addEventListener("click", starter2);
  recepie3.addEventListener("click", starter3);
  randomBtn.addEventListener("click", randomStarter);

  //  recepie1
  let recepieImg = document.createElement("img");
  recepieImg.src = "starters/gin/starter1.jpg";
  recepie1.appendChild(recepieImg);

  let recepieHeader = document.createElement("h5");
  recepieHeader.textContent = "GIN & TONIC-GRAVAD LAX MED INLAGD GURKA"
  recepie1.appendChild(recepieHeader);

  //  recepie2
  let recepieImg2 = document.createElement("img");
  recepieImg2.src = "starters/sill/pask-rora-sill-potatis-agg-glas-utvald-980x515-c.jpg";
  recepie2.appendChild(recepieImg2);

  let recepieHeader2 = document.createElement("h5");
  recepieHeader2.textContent = "RÖRA MED SILL, POTATIS OCH ÄGG I GLAS"
  recepie2.appendChild(recepieHeader2);

  //  recepie3
  let recepieImg3 = document.createElement("img");
  recepieImg3.src = "starters/soppa/vargron-artsoppa-recept-980x515-c.jpg";
  recepie3.appendChild(recepieImg3);

  let recepieHeader3 = document.createElement("h5");
  recepieHeader3.textContent = "VÅRGRÖN ÄRTSOPPA MED VITT VIN"
  recepie3.appendChild(recepieHeader3);

  //  Random recepie
  let randomAtag = document.createElement("a");
  randomAtag.setAttribute("class", "button");
  randomAtag.textContent = "Slumpa ett recept";
  randomBtn.appendChild(randomAtag);
  
  footer();
  btnBack();
}

/** Start1 - Gin */
function starter1(){
  document.getElementsByTagName("body")[0].innerHTML = "";
  
  section = document.createElement("section");
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
  selector.id = "numberOfPortions";

  for(let i = 2; i <= 8; i+=2){
    let foo =  selector.appendChild(document.createElement("option"));
    foo.value = i;
    foo.text = i +" port";
    if (foo.value == 4){
      foo.setAttribute("selected","selected");
    }
  }

  let imgCutlery = document.createElement("img");
  divCookTime.id = "cookTime";
  divCutlery.id = "portions";
  imgTime.src = "media/timer.png";
  imgTime.style.height = "30px";
  imgTime.style.width = "30px";
  cookTime.textContent = "38 min";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
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

  selector.onchange = function(){resizeIngredients(numberOfPortions);false};

  function resizeIngredients(){
    let foo = parseInt(document.getElementById("numberOfPortions").value);
    removeIngredients();
    switch(foo){
      case 2:
        twoPortions();
        break;
      case 4:
        fourPortions();
        break;
      case 6:
        sixPortions();
        break;
      case 8:
        eightPortions();
        break;
    }
  }

  function removeIngredients(){
    document.getElementById("ingredients").innerHTML = "";
  }

  function twoPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "200 g sushilax";
    list.appendChild(document.createElement("li")).textContent = "2 enbär";
    list.appendChild(document.createElement("li")).textContent = "13 g salt";
    list.appendChild(document.createElement("li")).textContent = "1 msk socker";  
    list.appendChild(document.createElement("li")).textContent = "1 msk gin";
    list.appendChild(document.createElement("li")).textContent = "1/2 dl tonic";
   
    let head1 = document.createElement("li");
    head1.textContent = "Limesås:";
    head1.setAttribute("class", "listHeader");
    list.appendChild(head1);

    list.appendChild(document.createElement("li")).textContent = "2 msk crème fraiche";
    list.appendChild(document.createElement("li")).textContent = "1/3 lime, saft och rivet skal";
    list.appendChild(document.createElement("li")).textContent = "2 msk gräddfil";
    list.appendChild(document.createElement("li")).textContent = "socker";
    list.appendChild(document.createElement("li")).textContent = "salt och nymalen svartpeppar";

    let head2 = document.createElement("li");
    head2.textContent = "Inlagd gurka:";
    head2.setAttribute("class", "listHeader");
    list.appendChild(head2);

    list.appendChild(document.createElement("li")).textContent = "2 snacksgurka";
    list.appendChild(document.createElement("li")).textContent = "1 msk ättika, 12%";
    list.appendChild(document.createElement("li")).textContent = "1 msk socker";
    list.appendChild(document.createElement("li")).textContent = "1 msk tonic";
  }

  function fourPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "400 g sushilax";
    list.appendChild(document.createElement("li")).textContent = "4 enbär";
    list.appendChild(document.createElement("li")).textContent = "25 g salt";
    list.appendChild(document.createElement("li")).textContent = "2 msk socker";  
    list.appendChild(document.createElement("li")).textContent = "2 msk gin";
    list.appendChild(document.createElement("li")).textContent = "1 dl tonic";
   
    let head1 = document.createElement("li");
    head1.textContent = "Limesås:";
    head1.setAttribute("class", "listHeader");
    list.appendChild(head1);

    list.appendChild(document.createElement("li")).textContent = "4 msk crème fraiche";
    list.appendChild(document.createElement("li")).textContent = "1/2 lime, saft och rivet skal";
    list.appendChild(document.createElement("li")).textContent = "4 msk gräddfil";
    list.appendChild(document.createElement("li")).textContent = "socker";
    list.appendChild(document.createElement("li")).textContent = "salt och nymalen svartpeppar";

    let head2 = document.createElement("li");
    head2.textContent = "Inlagd gurka:";
    head2.setAttribute("class", "listHeader");
    list.appendChild(head2);

    list.appendChild(document.createElement("li")).textContent = "4 snacksgurka";
    list.appendChild(document.createElement("li")).textContent = "2 msk ättika, 12%";
    list.appendChild(document.createElement("li")).textContent = "2 msk socker";
    list.appendChild(document.createElement("li")).textContent = "2 msk tonic";
  }

  function sixPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "600 g sushilax";
    list.appendChild(document.createElement("li")).textContent = "6 enbär";
    list.appendChild(document.createElement("li")).textContent = "40 g salt";
    list.appendChild(document.createElement("li")).textContent = "3 msk socker";  
    list.appendChild(document.createElement("li")).textContent = "3 msk gin";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 dl tonic";
   
    let head1 = document.createElement("li");
    head1.textContent = "Limesås:";
    head1.setAttribute("class", "listHeader");
    list.appendChild(head1);

    list.appendChild(document.createElement("li")).textContent = "1 dl crème fraiche";
    list.appendChild(document.createElement("li")).textContent = "1 lime, saft och rivet skal";
    list.appendChild(document.createElement("li")).textContent = "6 msk gräddfil";
    list.appendChild(document.createElement("li")).textContent = "socker";
    list.appendChild(document.createElement("li")).textContent = "salt och nymalen svartpeppar";

    let head2 = document.createElement("li");
    head2.textContent = "Inlagd gurka:";
    head2.setAttribute("class", "listHeader");
    list.appendChild(head2);

    list.appendChild(document.createElement("li")).textContent = "6 snacksgurka";
    list.appendChild(document.createElement("li")).textContent = "3 msk ättika, 12%";
    list.appendChild(document.createElement("li")).textContent = "3 msk socker";
    list.appendChild(document.createElement("li")).textContent = "3 msk tonic";
  }

  function eightPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "800 g sushilax";
    list.appendChild(document.createElement("li")).textContent = "8 enbär";
    list.appendChild(document.createElement("li")).textContent = "52 g salt";
    list.appendChild(document.createElement("li")).textContent = "4 msk socker";  
    list.appendChild(document.createElement("li")).textContent = "4 msk gin";
    list.appendChild(document.createElement("li")).textContent = "2 dl tonic";
   
    let head1 = document.createElement("li");
    head1.textContent = "Limesås:";
    head1.setAttribute("class", "listHeader");
    list.appendChild(head1);

    list.appendChild(document.createElement("li")).textContent = "8 msk crème fraiche";
    list.appendChild(document.createElement("li")).textContent = "1 lime, saft och rivet skal";
    list.appendChild(document.createElement("li")).textContent = "8 msk gräddfil";
    list.appendChild(document.createElement("li")).textContent = "socker";
    list.appendChild(document.createElement("li")).textContent = "salt och nymalen svartpeppar";

    let head2 = document.createElement("li");
    head2.textContent = "Inlagd gurka:";
    head2.setAttribute("class", "listHeader");
    list.appendChild(head2);

    list.appendChild(document.createElement("li")).textContent = "8 snacksgurka";
    list.appendChild(document.createElement("li")).textContent = "4 msk ättika, 12%";
    list.appendChild(document.createElement("li")).textContent = "4 msk socker";
    list.appendChild(document.createElement("li")).textContent = "4 msk tonic";
  }

  fourPortions();
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

/**Start2 - sill */
function starter2(){
  document.getElementsByTagName("body")[0].innerHTML = "";

  section = document.createElement("section");
  document.body.appendChild(section);

  let header = document.createElement("header");
  header.setAttribute("id", "rec-header");
  section.appendChild(header);

  let headerH1 = document.createElement("h1");
  headerH1.textContent = "RÖRA MED SILL, POTATIS OCH ÄGG I GLAS";
  header.appendChild(headerH1);

  let image = document.createElement("img");
  image.src = "starters/sill/pask-rora-sill-potatis-agg-glas-utvald-980x515-c.jpg";
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
  selector.id = "numberOfPortions";

  for(let i = 2; i <= 8; i+=2){
    let foo =  selector.appendChild(document.createElement("option"));
    foo.value = i;
    foo.text = i +" port";
    if (foo.value == 4){
      foo.setAttribute("selected","selected");
    }
  }

  let imgCutlery = document.createElement("img");
  divCookTime.id = "cookTime";
  divCutlery.id = "portions";
  imgTime.src = "media/timer.png";
  imgTime.style.height = "30px";
  imgTime.style.width = "30px";
  cookTime.textContent = "45 min";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
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

  let divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);

  //  Gör så här .
  let descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör så här:";
  divDescription.appendChild(descriptionHeader);
  let descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);
  let desc1 = document.createElement("li");
  desc1.textContent = "Börja med att göra kavringssmulor. Värm ugnen till 150°. Bryt kavringen i mindre bitar. Rosta brödet i ugnen i cirka 10 minuter eller tills det är torrt. Rör om då och då. Låt svalna och smula i mindre bitar.";
  let desc2 = document.createElement("li");
  desc2.textContent = "Skala och tärna potatisen. Hacka äggen och sillen. Blanda alla ingredienserna förutom kavringsmulor till en röra och smaka av med salt och peppar.";
  let desc3 = document.createElement("li");
  desc3.textContent = "Fördela röran i små portionsformar eller i små glas. Garnera med kavringsmulor, gräslök och rödlök.";

  descriptionList.appendChild(desc1);
  descriptionList.appendChild(desc2);
  descriptionList.appendChild(desc3);

  selector.onchange = function(){resizeIngredients(numberOfPortions);false};

  function resizeIngredients(){
    let foo = parseInt(document.getElementById("numberOfPortions").value);
    removeIngredients();
    switch(foo){
      case 2:
        twoPortions();
        break;
      case 4:
        fourPortions();
        break;
      case 6:
        sixPortions();
        break;
      case 8:
        eightPortions();
        break;
    }
  }

  function removeIngredients(){
    document.getElementById("ingredients").innerHTML = "";
  }

  function twoPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "1 skivor kavring";
    list.appendChild(document.createElement("li")).textContent = "75 g kokt potatis, avsvalnad";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 ägg, hårdkokta";
    list.appendChild(document.createElement("li")).textContent = "1/2 liten burk inlagd sill, (240 g, avrunnen 120 g)";  
    list.appendChild(document.createElement("li")).textContent = "1 msk finhackad rödlök";
    list.appendChild(document.createElement("li")).textContent = "1 msk finhackad dill";
    list.appendChild(document.createElement("li")).textContent = "1/2 msk finhackad gräslök";
    list.appendChild(document.createElement("li")).textContent = "1/4 dl crème fraiche";
    list.appendChild(document.createElement("li")).textContent = "1/2 msk majonnäs";
    list.appendChild(document.createElement("li")).textContent = "rivet skal från ½ citron";
    list.appendChild(document.createElement("li")).textContent = "salt och svartpeppar";
   
    let head1 = document.createElement("li");
    head1.textContent = "Till garnering:";
    head1.setAttribute("class", "listHeader");
    list.appendChild(head1);

    list.appendChild(document.createElement("li")).textContent = "1 msk hackad gräslök";
    list.appendChild(document.createElement("li")).textContent = "1 msk hackad rödlök";    
  }
  
  function fourPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "2 skivor kavring";
    list.appendChild(document.createElement("li")).textContent = "150 g kokt potatis, avsvalnad";
    list.appendChild(document.createElement("li")).textContent = "3 ägg, hårdkokta";
    list.appendChild(document.createElement("li")).textContent = "1 liten burk inlagd sill, (240 g, avrunnen 120 g)";  
    list.appendChild(document.createElement("li")).textContent = "2 msk finhackad rödlök";
    list.appendChild(document.createElement("li")).textContent = "2 msk finhackad dill";
    list.appendChild(document.createElement("li")).textContent = "1 msk finhackad gräslök";
    list.appendChild(document.createElement("li")).textContent = "1/2 dl crème fraiche";
    list.appendChild(document.createElement("li")).textContent = "1 msk majonnäs";
    list.appendChild(document.createElement("li")).textContent = "rivet skal från ½ citron";
    list.appendChild(document.createElement("li")).textContent = "salt och svartpeppar";
   
    let head1 = document.createElement("li");
    head1.textContent = "Till garnering:";
    head1.setAttribute("class", "listHeader");
    list.appendChild(head1);

    list.appendChild(document.createElement("li")).textContent = "2 msk hackad gräslök";
    list.appendChild(document.createElement("li")).textContent = "2 msk hackad rödlök";    
  }

  function sixPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "3 skivor kavring";
    list.appendChild(document.createElement("li")).textContent = "225 g kokt potatis, avsvalnad";
    list.appendChild(document.createElement("li")).textContent = "4 ägg, hårdkokta";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 liten burk inlagd sill, (240 g, avrunnen 120 g)";  
    list.appendChild(document.createElement("li")).textContent = "3 msk finhackad rödlök";
    list.appendChild(document.createElement("li")).textContent = "3 msk finhackad dill";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 msk finhackad gräslök";
    list.appendChild(document.createElement("li")).textContent = "3/4 dl crème fraiche";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 msk majonnäs";
    list.appendChild(document.createElement("li")).textContent = "rivet skal från ½ citron";
    list.appendChild(document.createElement("li")).textContent = "salt och svartpeppar";
   
    let head1 = document.createElement("li");
    head1.textContent = "Till garnering:";
    head1.setAttribute("class", "listHeader");
    list.appendChild(head1);

    list.appendChild(document.createElement("li")).textContent = "3 msk hackad gräslök";
    list.appendChild(document.createElement("li")).textContent = "3 msk hackad rödlök";    
  }

  function eightPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "4 skivor kavring";
    list.appendChild(document.createElement("li")).textContent = "300 g kokt potatis, avsvalnad";
    list.appendChild(document.createElement("li")).textContent = "6 ägg, hårdkokta";
    list.appendChild(document.createElement("li")).textContent = "2 små burkar inlagd sill, (240 g, avrunnen 120 g)";  
    list.appendChild(document.createElement("li")).textContent = "2 msk finhackad rödlök";
    list.appendChild(document.createElement("li")).textContent = "4 msk finhackad dill";
    list.appendChild(document.createElement("li")).textContent = "2 msk finhackad gräslök";
    list.appendChild(document.createElement("li")).textContent = "1 dl crème fraiche";
    list.appendChild(document.createElement("li")).textContent = "2 msk majonnäs";
    list.appendChild(document.createElement("li")).textContent = "rivet skal från ½ citron";
    list.appendChild(document.createElement("li")).textContent = "salt och svartpeppar";
   
    let head1 = document.createElement("li");
    head1.textContent = "Till garnering:";
    head1.setAttribute("class", "listHeader");
    list.appendChild(head1);

    list.appendChild(document.createElement("li")).textContent = "4 msk hackad gräslök";
    list.appendChild(document.createElement("li")).textContent = "4 msk hackad rödlök";    
  }

  fourPortions();
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

/**Start3 - soppa */
function starter3(){
  document.getElementsByTagName("body")[0].innerHTML = "";

  section = document.createElement("section");
  document.body.appendChild(section);

  let header = document.createElement("header");
  header.setAttribute("id", "rec-header");
  section.appendChild(header);

  let headerH1 = document.createElement("h1");
  headerH1.textContent = "VÅRGRÖN ÄRTSOPPA MED VITT VIN";
  header.appendChild(headerH1);

  let image = document.createElement("img");
  image.src = "starters/soppa/vargron-artsoppa-recept-980x515-c.jpg";
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
  selector.id = "numberOfPortions";

  for(let i = 2; i <= 8; i+=2){
    let foo =  selector.appendChild(document.createElement("option"));
    foo.value = i;
    foo.text = i +" port";
    if (foo.value == 4){
      foo.setAttribute("selected","selected");
    }
  }
 
  let imgCutlery = document.createElement("img");
  divCookTime.id = "cookTime";
  divCutlery.id = "portions";
  imgTime.src = "media/timer.png";
  imgTime.style.height = "30px";
  imgTime.style.width = "30px";
  cookTime.textContent = "65 min";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
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
 
  let divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);

  //  Gör så här:
  let descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör så här";
  divDescription.appendChild(descriptionHeader);
  let descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);
  let desc1 = document.createElement("li");
  desc1.textContent = "Hacka löken grovt. Ansa purjolöken och skär i skivor. Finhacka vitlöken. Stek all lök i smör några minuter, utan att den tar färg.";
  let desc2 = document.createElement("li");
  desc2.textContent = "Tillsätt vinet och låt koka in.";
  let desc3 = document.createElement("li");
  desc3.textContent = "Tillsätt buljong och frysta ärter och låt allt sjuda cirka 10 minuter.";
  let desc4 = document.createElement("li");
  desc4.textContent = "Mixa soppan med stavmixer.";
  let desc5 = document.createElement("li");
  desc5.textContent = "Tillsätt grädde. Smaka av med lite citronsaft, salt och peppar.";
  let desc6 = document.createElement("li");
  desc6.textContent = "Rosta nötflagorna i en torr stekpanna.";
  let desc7 = document.createElement("li");
  desc7.textContent = "Fördela soppan i tallrikar, klicka lite crème fraiche på toppen.";
  let desc8 = document.createElement("li");
  desc8.textContent = "Strö nötflagor, örter eller groddar och gärna lite ätbara blommor över och servera tillsammans med rostat bröd.";
  
  descriptionList.appendChild(desc1);
  descriptionList.appendChild(desc2);
  descriptionList.appendChild(desc3);
  descriptionList.appendChild(desc4);
  descriptionList.appendChild(desc5);
  descriptionList.appendChild(desc6);
  descriptionList.appendChild(desc7);
  descriptionList.appendChild(desc8);

  selector.onchange = function(){resizeIngredients(numberOfPortions);false};

  function resizeIngredients(){
    let foo = parseInt(document.getElementById("numberOfPortions").value);
    removeIngredients();
    switch(foo){
      case 2:
        twoPortions();
        break;
      case 4:
        fourPortions();
        break;
      case 6:
        sixPortions();
        break;
      case 8:
        eightPortions();
        break;
    }
  }

  function removeIngredients(){
    document.getElementById("ingredients").innerHTML = "";
  }

  function twoPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    let head1 = document.createElement("li");
    head1.textContent = "Soppa:";
    head1.setAttribute("class", "listHeader");
    list.appendChild(head1);

    list.appendChild(document.createElement("li")).textContent = "1 schalottenlök";
    list.appendChild(document.createElement("li")).textContent = "1/2 purjolök";
    list.appendChild(document.createElement("li")).textContent = "1/2 klyfta vitlök";
    list.appendChild(document.createElement("li")).textContent = "1 msk smör";  
    list.appendChild(document.createElement("li")).textContent = "1 dl vitt vin";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 dl färdig grönsaks- eller hönsbuljong";
    list.appendChild(document.createElement("li")).textContent = "250 g frysta gröna ärter";
    list.appendChild(document.createElement("li")).textContent = "1/2 dl vispgrädde";
    list.appendChild(document.createElement("li")).textContent = "1/2 citron, lite av saften";
    list.appendChild(document.createElement("li")).textContent = "Salt och svartpeppar";

    let head2 = document.createElement("li");
    head2.textContent = "Till servering:";
    head2.setAttribute("class", "listHeader");
    list.appendChild(head2);

    list.appendChild(document.createElement("li")).textContent = "2 msk crème fraiche";
    list.appendChild(document.createElement("li")).textContent = "Rostat bröd";

    let head3 = document.createElement("li");
    head3.textContent = "Garnering:";
    head3.setAttribute("class", "listHeader");
    list.appendChild(head3);

    list.appendChild(document.createElement("li")).textContent = "15 g hasselnötsflagor, eller hackade nötter";
    list.appendChild(document.createElement("li")).textContent = "Färska örter eller groddar";
    list.appendChild(document.createElement("li")).textContent = "Ätliga blommor";
  }

  function fourPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    let head1 = document.createElement("li");
    head1.textContent = "Soppa:";
    head1.setAttribute("class", "listHeader");
    list.appendChild(head1);

    list.appendChild(document.createElement("li")).textContent = "2 schalottenlökar";
    list.appendChild(document.createElement("li")).textContent = "1 purjolök";
    list.appendChild(document.createElement("li")).textContent = "1 klyfta vitlök";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 msk smör";  
    list.appendChild(document.createElement("li")).textContent = "1 1/2 dl vitt vin";
    list.appendChild(document.createElement("li")).textContent = "3 dl färdig grönsaks- eller hönsbuljong";
    list.appendChild(document.createElement("li")).textContent = "500 g frysta gröna ärter";
    list.appendChild(document.createElement("li")).textContent = "1 dl vispgrädde";
    list.appendChild(document.createElement("li")).textContent = "1 citron, lite av saften";
    list.appendChild(document.createElement("li")).textContent = "Salt och svartpeppar";

    let head2 = document.createElement("li");
    head2.textContent = "Till servering:";
    head2.setAttribute("class", "listHeader");
    list.appendChild(head2);

    list.appendChild(document.createElement("li")).textContent = "4 msk crème fraiche";
    list.appendChild(document.createElement("li")).textContent = "Rostat bröd";

    let head3 = document.createElement("li");
    head3.textContent = "Garnering:";
    head3.setAttribute("class", "listHeader");
    list.appendChild(head3);

    list.appendChild(document.createElement("li")).textContent = "30 g hasselnötsflagor, eller hackade nötter";
    list.appendChild(document.createElement("li")).textContent = "Färska örter eller groddar";
    list.appendChild(document.createElement("li")).textContent = "Ätliga blommor";
  }

  function sixPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    let head1 = document.createElement("li");
    head1.textContent = "Soppa:";
    head1.setAttribute("class", "listHeader");
    list.appendChild(head1);

    list.appendChild(document.createElement("li")).textContent = "3 schalottenlökar";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 purjolök";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 klyfta vitlök";
    list.appendChild(document.createElement("li")).textContent = "2 msk smör";  
    list.appendChild(document.createElement("li")).textContent = "2 dl vitt vin";
    list.appendChild(document.createElement("li")).textContent = "4 1/2 dl färdig grönsaks- eller hönsbuljong";
    list.appendChild(document.createElement("li")).textContent = "750 g frysta gröna ärter";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 dl vispgrädde";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 citron, lite av saften";
    list.appendChild(document.createElement("li")).textContent = "Salt och svartpeppar";

    let head2 = document.createElement("li");
    head2.textContent = "Till servering:";
    head2.setAttribute("class", "listHeader");
    list.appendChild(head2);

    list.appendChild(document.createElement("li")).textContent = "6 msk crème fraiche";
    list.appendChild(document.createElement("li")).textContent = "Rostat bröd";

    let head3 = document.createElement("li");
    head3.textContent = "Garnering:";
    head3.setAttribute("class", "listHeader");
    list.appendChild(head3);

    list.appendChild(document.createElement("li")).textContent = "45 g hasselnötsflagor, eller hackade nötter";
    list.appendChild(document.createElement("li")).textContent = "Färska örter eller groddar";
    list.appendChild(document.createElement("li")).textContent = "Ätliga blommor";
  }

  function eightPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    let head1 = document.createElement("li");
    head1.textContent = "Soppa:";
    head1.setAttribute("class", "listHeader");
    list.appendChild(head1);

    list.appendChild(document.createElement("li")).textContent = "4 schalottenlökar";
    list.appendChild(document.createElement("li")).textContent = "2 purjolökar";
    list.appendChild(document.createElement("li")).textContent = "2 klyftor vitlök";
    list.appendChild(document.createElement("li")).textContent = "3 msk smör";  
    list.appendChild(document.createElement("li")).textContent = "3 dl vitt vin";
    list.appendChild(document.createElement("li")).textContent = "6 dl färdig grönsaks- eller hönsbuljong";
    list.appendChild(document.createElement("li")).textContent = "1000 g frysta gröna ärter";
    list.appendChild(document.createElement("li")).textContent = "2 dl vispgrädde";
    list.appendChild(document.createElement("li")).textContent = "2 citroner, lite av saften";
    list.appendChild(document.createElement("li")).textContent = "Salt och svartpeppar";

    let head2 = document.createElement("li");
    head2.textContent = "Till servering:";
    head2.setAttribute("class", "listHeader");
    list.appendChild(head2);

    list.appendChild(document.createElement("li")).textContent = "8 msk crème fraiche";
    list.appendChild(document.createElement("li")).textContent = "Rostat bröd";

    let head3 = document.createElement("li");
    head3.textContent = "Garnering:";
    head3.setAttribute("class", "listHeader");
    list.appendChild(head3);

    list.appendChild(document.createElement("li")).textContent = "60 g hasselnötsflagor, eller hackade nötter";
    list.appendChild(document.createElement("li")).textContent = "Färska örter eller groddar";
    list.appendChild(document.createElement("li")).textContent = "Ätliga blommor";
  }

  fourPortions();
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

/** -------------------------------- */
/** Starter4 - filo */
function starter4(){
  document.getElementsByTagName("body")[0].innerHTML = "";
  //  Building-blocks that will create main elements on the recepie-page.
  let headerWrapper;  //  Create header-tag, contains mainHeader
  let mainHeader;  //  Create recepie header
  let recepieImage;  //  Recepie image
  let divIngredients;  // Wrapper that contains ingredians 
  let ingrediensList;  //  Create a list of ingredians
  let divDescription;  //  Create a list of "How to do" the recepie
  let descriptionHeader;  //  Descripton header
  let descriptionList;  //  Create a list of step by step description
  let mainFooter;  //  Create a wrapper that will cointain "Go back button"

  //  Array of ingredians
  let ingrediensFilodegskorgar = [
    "25 g smör",
    "4 filodegsark"
  ]

  let ingrediensCitronmajonnas = [
    "1 citron, finrivet skal och sasft",
    "100 g majonnäs",
    "1 msk finhackad dill",
    "Salt och nymalen svartpeppar"
  ]

  let ingrediensRakfyllning = [
    "1 knippe grön sparris",
    "300 g skalade räkor",
    "1 hjärtsallatshuvud"
  ]

  let ingrediensTillservering = [
    "Färsk körvel",
    "Färsk dill"
  ]

  //  Array of "StepByStep" how to
  let howTofilodegskorgarna = [
    "Sätt ugnen på 175°. Smält smöret i en liten kastrull.",
    "Skär filodegsarken i 8 lika stora fyrkanter, totalt 32 st. Pensla alla med smält smör.",
    "Lägg 4 filodegsfyrkanter ovanpå varandra så de bildar en stjärna. Gör likadant med resten av arken så du får 8 filodegsstjärnor.",
    "Pensla ett muffinsbleck med smör och tryck försiktigt ner filodegsstjärnorna i var sin form.",
    "Grädda dem i ugnen i cirka 10 minuter tills de är spröda.",
    "Låt svalna, ta ur formen och lägg på galler."
  ]

  let howToRakfyllningen = [
    "Skölj sparrisen och bryt loss den nedre träiga delen.",
    "Skala dem i långa tunna strimlor med en potatisskalare och lägg i skål med isvatten i 15 minuter så de blir krispiga och krullar ihop sig."
  ]

  let howToCitronmajonnas = [
    "Skölj citronen och finriv skalet. Halvera citronen och pressa ur saften.",
    "Rör ihop citronskal, dill och majonnäs. Smaka av med citronsaft, salt och peppar.",
    "Skölj och strimla salladen.",
    "Fyll korgarna med sallad, räkor och sparris.",
    "Toppa med citronmajonnäs och strö över körvel och dill.",
    "Frasiga filodegskorgar med räkor, sparris och citronmajonnäs",
    "Filodegskorgar med räkor och citronmajonnäs."
  ]

  section = document.createElement("section");
  document.body.appendChild(section);
  headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  section.appendChild(headerWrapper);

  //  Page Header
  mainHeader = document.createElement("h1");
  mainHeader.textContent = "FILODEGSKORGAR MED RÄKOR OCH CITRONMAJONNÄS";
  headerWrapper.appendChild(mainHeader);

  //  Recepie img
  recepieImage = document.createElement("img");
  recepieImage.src = "/starters/filo/filodegskorgar-rakor-sparris-citron-980x515-c.jpg";
  section.appendChild(recepieImage);

  //  Info below img
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
  cookTime.textContent = "60 min";
  option2.text = "2 port";
  option4.text = "4 port";
  option6.text = "6 port";
  option8.text = "8 port";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  selector.appendChild(option8);  //  choose how many servings/portion.
  divPrepareInfo.appendChild(divCookTime);
  divPrepareInfo.appendChild(divCutlery);
  divCookTime.appendChild(imgTime);
  divCookTime.appendChild(cookTime);
  divCutlery.appendChild(imgCutlery);
  divCutlery.appendChild(selector);
  //  will create a line under info.
  let hr = document.createElement("hr");
  section.appendChild(hr);

  //  Ingrediens
  divIngredients = document.createElement("div");
  divIngredients.setAttribute("class", "container");
  divIngredients.id = "ingredients";
  section.appendChild(divIngredients);
  ingrediensList = document.createElement("ul");
  divIngredients.appendChild(ingrediensList);
  
  let ingrediensHeader = document.createElement("h4");
  ingrediensHeader.textContent = "Filodegskorgar:";
  ingrediensHeader.setAttribute("class", "listHeader");
  ingrediensList.appendChild(ingrediensHeader);

  for(let i = 0; i < ingrediensFilodegskorgar.length; i++){
    let ingredien = document.createElement("li");
    ingredien.textContent = ingrediensFilodegskorgar[i];
    ingrediensList.appendChild(ingredien);
  }

  let ingrediensSecondHeader = document.createElement("h4");
  ingrediensSecondHeader.textContent = "Citronmajonnäs:";
  ingrediensSecondHeader.setAttribute("class", "listHeader");
  ingrediensList.appendChild(ingrediensSecondHeader);
  
  for(let i = 0; i < ingrediensCitronmajonnas.length; i++){
    let ingredien = document.createElement("li")
    ingredien.textContent = ingrediensCitronmajonnas[i];
    ingrediensList.appendChild(ingredien);
  }

  let ingrediensThirdHeader = document.createElement("h4");
  ingrediensThirdHeader.textContent = "Räkfyllning:";
  ingrediensThirdHeader.setAttribute("class", "listHeader");
  ingrediensList.appendChild(ingrediensThirdHeader);
  
  for(let i = 0; i < ingrediensRakfyllning.length; i++){
    let ingredien = document.createElement("li")
    ingredien.textContent = ingrediensRakfyllning[i];
    ingrediensList.appendChild(ingredien);
  }

  let ingrediensFourthHeader = document.createElement("h4");
  ingrediensFourthHeader.textContent = "Till servering:";
  ingrediensFourthHeader.setAttribute("class", "listHeader");
  ingrediensList.appendChild(ingrediensFourthHeader);
  
  for(let i = 0; i < ingrediensTillservering.length; i++){
    let ingredien = document.createElement("li")
    ingredien.textContent = ingrediensTillservering[i];
    ingrediensList.appendChild(ingredien);
  }

  //  Description / How-to-do
  divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);
  descriptionHeader1 = document.createElement("h4");
  descriptionHeader1.innerText = "Gör filodegskorgarna så här:";
  divDescription.appendChild(descriptionHeader1);
  descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);

  for(let i = 0; i < howTofilodegskorgarna.length; i++){
    let description = document.createElement("li");
    description.textContent = howTofilodegskorgarna[i];
    descriptionList.appendChild(description);
  }
  
  descriptionHeader2 = document.createElement("h4");
  descriptionHeader2.innerText = "Gör räkfyllningen så här:";
  divDescription.appendChild(descriptionHeader2);
  descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);

  for(let i = 0; i < howToRakfyllningen.length; i++){
    let description = document.createElement("li");
    description.textContent = howToRakfyllningen[i];
    descriptionList.appendChild(description);
  }

  descriptionHeader3 = document.createElement("h4");
  descriptionHeader3.innerText = "Gör citronmajonnäs så här:";
  divDescription.appendChild(descriptionHeader3);
  descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);

  for(let i = 0; i < howToCitronmajonnas.length; i++){
    let description = document.createElement("li");
    description.textContent = howToCitronmajonnas[i];
    descriptionList.appendChild(description);
  }
  
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

/** -------------------------------- */
/**Start5 pizza */
function starter5(){
  document.getElementsByTagName("body")[0].innerHTML = "";
  //  Building-blocks that will create main elements on the recepie-page.
  let headerWrapper;  //  Create header-tag, contains mainHeader
  let mainHeader;  //  Create recepie header
  let recepieImage;  //  Recepie image
  let divIngredients;  // Wrapper that contains ingredians 
  let ingrediensList;  //  Create a list of ingredians
  let divDescription;  //  Create a list of "How to do" the recepie
  let descriptionHeader;  //  Descripton header
  let descriptionList;  //  Create a list of step by step description
  let mainFooter;  //  Create a wrapper that will cointain "Go back button"

  //  Array of ingredians
  let ingrediensDeg = [
    "3 dl vatten",
    "15 g jäst",
    "1 msk olivolja",
    "2 tsk salt",
    "1 dl dinkelmjöl",
    "6 1/4 dl vetemjöl"
  ]

  let ingrediensTopping = [
    "250 g ricotta",
    "4 msk olivolja",
    "2–3 rödbetor",
    "100 g getost",
    "2 msk pinjenötter",
    "1 msk flytande honung"
  ]

  let ingrediensBasilikaolja = [
    "1 kruka basilika",
    "1 olivolja",
    "salt",
    "färskmalen svartpeppar"
  ]

  //  Array of "StepByStep" how to
  let howTo = [
    "Häll 37-gradigt vatten i en skål och lös upp jästen i det. Tillsätt olja, salt och dinkelmjöl. Knåda sedan i vetemjölet till en blank och smidig deg. Låt jäsa under bakduk i 30 minuter på ett dragfritt ställe i huset.",
    "Mixa alla ingredienserna till basilikaoljan i en matberedare, smaka av med salt och nymalen svartpeppar.",
    "Kavla ut degen på mjölat bord till två tunna pizzabottnar.",
    "Bred på ett tunt lager ricotta på pizzabottnarna, låt 1 cm av degen vara fri från fyllning och pensla den kanten med olja. Skala och skär rödbetorna så tunt som möjligt, gärna på en mandolin. Om du vill kan du använda olikfärgade betor för en vacker effekt, exempelvis gulbetor och polkabetor. Fördela dem i tunna lager på pizzan. Smula över getost och strö över pinjenötter.",
    "Ringla honung och basilikaoljan över pizzan innan servering. Njut nygräddad eller lite avsvalnad."
  ]

  section = document.createElement("section");
  document.body.appendChild(section);
  headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  section.appendChild(headerWrapper);

  //  Page Header
  mainHeader = document.createElement("h1");
  mainHeader.textContent = "PIZZA BIANCO MED GETOST OCH RÖDBETOR";
  headerWrapper.appendChild(mainHeader);

  //  Recepie img
  recepieImage = document.createElement("img");
  recepieImage.src = "/starters/pizza/pizza-bianco-getost-rodbetor-utvald-980x515-c.jpg";
  section.appendChild(recepieImage);

  //  Info below img
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
  cookTime.textContent = "50 min";
  option2.text = "2 port";
  option4.text = "4 port";
  option6.text = "6 port";
  option8.text = "8 port";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  selector.appendChild(option4);  //  choose how many servings/portion.
  divPrepareInfo.appendChild(divCookTime);
  divPrepareInfo.appendChild(divCutlery);
  divCookTime.appendChild(imgTime);
  divCookTime.appendChild(cookTime);
  divCutlery.appendChild(imgCutlery);
  divCutlery.appendChild(selector);
  //  will create a line under info.
  let hr = document.createElement("hr");
  section.appendChild(hr);

  //  Ingrediens
  divIngredients = document.createElement("div");
  divIngredients.setAttribute("class", "container");
  divIngredients.id = "ingredients";
  section.appendChild(divIngredients);
  ingrediensList = document.createElement("ul");
  divIngredients.appendChild(ingrediensList);
  
  let ingrediensHeader = document.createElement("h4");
  ingrediensHeader.textContent = "Deg:";
  ingrediensHeader.setAttribute("class", "listHeader");
  ingrediensList.appendChild(ingrediensHeader);

  for(let i = 0; i < ingrediensDeg.length; i++){
    let ingredien = document.createElement("li");
    ingredien.textContent = ingrediensDeg[i];
    ingrediensList.appendChild(ingredien);
  }

  let ingrediensSecondHeader = document.createElement("h4");
  ingrediensSecondHeader.textContent = "Topping:";
  ingrediensSecondHeader.setAttribute("class", "listHeader");
  ingrediensList.appendChild(ingrediensSecondHeader);
  
  for(let i = 0; i < ingrediensTopping.length; i++){
    let ingredien = document.createElement("li")
    ingredien.textContent = ingrediensTopping[i];
    ingrediensList.appendChild(ingredien);
  }

  let ingrediensThirdHeader = document.createElement("h4");
  ingrediensThirdHeader.textContent = "Basilikaolja:";
  ingrediensThirdHeader.setAttribute("class", "listHeader");
  ingrediensList.appendChild(ingrediensThirdHeader);
  
  for(let i = 0; i < ingrediensBasilikaolja.length; i++){
    let ingredien = document.createElement("li")
    ingredien.textContent = ingrediensBasilikaolja[i];
    ingrediensList.appendChild(ingredien);
  }

  //  Description / How-to-do
  divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);
  descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör så här:";
  divDescription.appendChild(descriptionHeader);
  descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);

  for(let i = 0; i < howTo.length; i++){
    let description = document.createElement("li");
    description.textContent = howTo[i];
    descriptionList.appendChild(description);
  }
  
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
} 

//  Main course recipes list  
function mainCourseMenu(){
  document.getElementsByTagName("body")[0].innerHTML = "";

  let headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  document.body.appendChild(headerWrapper);

  //  Page Header
  let secondMainHeader = document.createElement("h1");
  secondMainHeader.textContent = "Huvudrätt";
  headerWrapper.appendChild(secondMainHeader);

  section = document.createElement("section");
  section.id = "secondMenuSection"
  document.body.appendChild(section);

  for(let i = 0; i < 4; i++){
    let divWrapper = document.createElement("div");
    divWrapper.setAttribute("class","secondMenuWrapper");
    section.appendChild(divWrapper);
  }

  let recepie1 = document.getElementsByClassName("secondMenuWrapper")[0];
  let recepie2 = document.getElementsByClassName("secondMenuWrapper")[1];
  let recepie3 = document.getElementsByClassName("secondMenuWrapper")[2];
  let randomBtn = document.getElementsByClassName("secondMenuWrapper")[3];

  //  add eventlisterner
  recepie1.addEventListener("click", mainCourse1);
  recepie2.addEventListener("click", mainCourse2);
  recepie3.addEventListener("click", mainCourse3);
  randomBtn.addEventListener("click", randomMainCourse);

  //  recepie1
  let recepieImg = document.createElement("img");
  recepieImg.src = "/Kötträtter/Mannerströms Oxfile/oxfile.jpg";
  recepie1.appendChild(recepieImg);

  let recepieHeader = document.createElement("h5");
  recepieHeader.textContent = "MANNERSTRÖM OXFILE MED PEPPARSÅS"
  recepie1.appendChild(recepieHeader);

  //  recepie2
  let recepieImg2 = document.createElement("img");
  recepieImg2.src = "/Kötträtter/Korv Stroganoff/korvstroganoff.jpg";
  recepie2.appendChild(recepieImg2);

  let recepieHeader2 = document.createElement("h5");
  recepieHeader2.textContent = "KORV STROGANOFF"
  recepie2.appendChild(recepieHeader2);

  //  recepie3
  let recepieImg3 = document.createElement("img");
  recepieImg3.src = "/Kötträtter/Mustig Lövbiffsgryta/lövbiffsgryta.jpg";
  recepie3.appendChild(recepieImg3);

  let recepieHeader3 = document.createElement("h5");
  recepieHeader3.textContent = "MUSTIG LÖVBIFFSGRYTA"
  recepie3.appendChild(recepieHeader3);

  //  Random recepie
  let randomAtag = document.createElement("a");
  randomAtag.setAttribute("class", "button");
  randomAtag.textContent = "Slumpa ett recept";
  randomBtn.appendChild(randomAtag);
  
  footer();
  btnBack();
}

/** Maincourse1 - MANNERSTRÖM OXFILE MED PEPPARSÅS */
function mainCourse1(){
  document.getElementsByTagName("body")[0].innerHTML = "";

  let rubrik = "MANNERSTRÖM OXFILE MED PEPPARSÅS";
  let matBild = "/Kötträtter/Mannerströms Oxfile/oxfile.jpg";
  let tillagningsTid = "60min";
  let ingrediensRubrik1 = "Pepparsås";
  let ingrediensRubrik2 = "Oxfilé";
  let ingrediensRubrik3 = "";
  let ingrediensRubrik4 = "";
  let ingrediensRubrik5 = "";
  let ingrediens1 = "";
  let ingrediens2 = "";
  let ingrediens3 = "";
  let ingrediens4 = "";
  let ingrediens5 = "";
  let ingrediens6 = "";
  let ingrediens7 = "";
  let ingrediens8 = "";
  let ingrediens9 = "";
  let ingrediens10 = "";
  let ingrediens11 = "";
  let ingrediens12 = "";
  let ingrediens13 = "";
  let ingrediens14 = "";
  let ingrediens15 = "";
  let ingrediens16 = "";
  let ingrediens17 = "";
  let ingrediens18 = "";
  let ingrediens19 = "";
  let ingrediens20 = "";
  let beskrivningsRubrik1 = "Gör såhär:";
  let beskrivningsRubrik2 = "";
  let beskrivningsRubrik3 = "";
  let beskrivningsRubrik4 = "";
  let beskrivningsRubrik5 = "";
  let beskrivning1 = "Rosta vitpeppar i ugnen på 150 grader i 10min eller i en varm, torr panna, stöt den sedan grovt i mortel.";
  let beskrivning2 = "Fräs schalottenlöken, grönpeppar, estragon samt lite av den rostade vitpepparen.";
  let beskrivning3 = "Slå i lite olja, slå på kalvfond, rödvin, konjak. OBS! Om du använder koncentrerad fond på flaska måste du späda ut den enligt förpackningen så att du får 3 dl buljong.";
  let beskrivning4 = "Låt koka ihop i ca 10 min. Slå sedan i grädden och låt koka ytterligare i ca 10 min.";
  let beskrivning5 = "Rulla kanterna på oxfilébitarna i peppar och stek köttet.";
  let beskrivning6 = "Servera med pepparsåsen.";

  section = document.createElement("section");
  document.body.appendChild(section);

  //Skapar header
  let header = document.createElement("header");
  header.setAttribute("id", "rec-header");
  section.appendChild(header);

  //Skapar rubriken
  let headerH1 = document.createElement("h1");
  headerH1.textContent = rubrik; 
  header.appendChild(headerH1);

  //Bild på maten
  let image = document.createElement("img");
  image.src = matBild;
  section.appendChild(image);

  //Div innehållandes tillagningstid och för hur många personer
  let divPrepareInfo = document.createElement("div");
  divPrepareInfo.id = "prepareInfo";
  divPrepareInfo.setAttribute("class", "container");
  section.appendChild(divPrepareInfo);
  let divCookTime = document.createElement("div");
  let divCutlery = document.createElement("div");
  let imgTime = document.createElement("img");
  let cookTime = document.createElement("h2");
  let selector = document.createElement("select");
  selector.id = "numberOfPortions";

  for(let i = 2; i <= 8; i+=2){
    let foo =  selector.appendChild(document.createElement("option"));
    foo.value = i;
    foo.text = i +" port";
    if (foo.value == 4){
      foo.setAttribute("selected","selected");
    }
  }

  let imgCutlery = document.createElement("img");
  divCookTime.id = "cookTime";
  divCutlery.id = "portions";
  imgTime.src = "media/timer.png";
  imgTime.style.height = "30px";
  imgTime.style.width = "30px";

  //Sättär tillagningstiden
  cookTime.textContent = tillagningsTid;
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  
  //Välj "utgångsläge" för hur många portioner. Appenda fler options för fler val (Senare vid skalning)
  divPrepareInfo.appendChild(divCookTime);
  divPrepareInfo.appendChild(divCutlery);
  divCookTime.appendChild(imgTime);
  divCookTime.appendChild(cookTime);
  divCutlery.appendChild(imgCutlery);
  divCutlery.appendChild(selector);

  //Skapar break-line
  let hr = document.createElement("hr");
  section.appendChild(hr);

  //Div container innehållandes ingredienser
  let divIngredients = document.createElement("div");
  divIngredients.setAttribute("class", "container");
  divIngredients.id = "ingredients";
  section.appendChild(divIngredients);

  //Ingrediensrubriker 1-5
  let head1 = document.createElement("li");
  head1.textContent = ingrediensRubrik1;
  head1.setAttribute("class", "listHeader");
  let head2 = document.createElement("li");
  head2.textContent = ingrediensRubrik2;
  head2.setAttribute("class", "listHeader");

  let divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);

  //Skapar ol flr beskrivningar
  let descriptionList = document.createElement("ol");
  
  //Rubriker för beskrivningen
  let descriptionHeader1 = document.createElement("h4");
  descriptionHeader1.innerText = beskrivningsRubrik1;

  //Beskrivningar
  let desc1 = document.createElement("li");
  desc1.textContent = beskrivning1;
  let desc2 = document.createElement("li");
  desc2.textContent = beskrivning2;
  let desc3 = document.createElement("li");
  desc3.textContent = beskrivning3;
  let desc4 = document.createElement("li");
  desc4.textContent = beskrivning4;
  let desc5 = document.createElement("li");
  desc5.textContent = beskrivning5;
  let desc6 = document.createElement("li");
  desc6.textContent = beskrivning6;

  //Appenda OL med rubriker och beskrivningar
  divDescription.appendChild(descriptionList); //OL listan
  descriptionList.appendChild(descriptionHeader1) //Rubrik 1
  descriptionList.appendChild(desc1);
  descriptionList.appendChild(desc2);
  descriptionList.appendChild(desc3);
  descriptionList.appendChild(desc4);
  descriptionList.appendChild(desc5);
  descriptionList.appendChild(desc6);

  selector.onchange = function(){resizeIngredients(numberOfPortions);false};

  function twoPortions(){
    ingrediens1 = "1msk vitpepparkorn";
    ingrediens2 = "0,5 schalottenlök, finhackad";
    ingrediens3 = "0,25msk grönpeppar";
    ingrediens4 = "0,25msk estragon, finhackad";
    ingrediens5 = "olja";
    ingrediens6 = "1,5dl kalvfond";
    ingrediens7 = "0,5dl rött vin";
    ingrediens8 = "1msk cognac";
    ingrediens9 = "1dl grädde";
    ingrediens10 = "500g oxfilé, i 4 bitar";
    ingrediens11 = "peppar, att rulla köttet i";
  }

  function fourPortions(){
    ingrediens1 = "2msk vitpepparkorn";
    ingrediens2 = "1st schalottenlök, finhackad";
    ingrediens3 = "0,5msk grönpeppar";
    ingrediens4 = "0,5msk estragon, finhackad";
    ingrediens5 = "olja";
    ingrediens6 = "3dl kalvfond";
    ingrediens7 = "1dl rött vin";
    ingrediens8 = "2msk cognac";
    ingrediens9 = "2dl grädde";
    ingrediens10 = "1000g oxfilé, i 4 bitar";
    ingrediens11 = "peppar, att rulla köttet i";
  }

  function sixPortions(){
    ingrediens1 = "3msk vitpepparkorn";
    ingrediens2 = "1,5 schalottenlök, finhackad";
    ingrediens3 = "0,75msk grönpeppar";
    ingrediens4 = "0,75msk estragon, finhackad";
    ingrediens5 = "olja";
    ingrediens6 = "4,5dl kalvfond";
    ingrediens7 = "1,5dl rött vin";
    ingrediens8 = "3msk cognac";
    ingrediens9 = "3dl grädde";
    ingrediens10 = "1500g oxfilé, i 4 bitar";
    ingrediens11 = "peppar, att rulla köttet i";
  }

  function eightPortions(){
    ingrediens1 = "4msk vitpepparkorn";
    ingrediens2 = "2st schalottenlök, finhackad";
    ingrediens3 = "1msk grönpeppar";
    ingrediens4 = "1msk estragon, finhackad";
    ingrediens5 = "olja";
    ingrediens6 = "6dl kalvfond";
    ingrediens7 = "2dl rött vin";
    ingrediens8 = "4msk cognac";
    ingrediens9 = "4dl grädde";
    ingrediens10 = "2000g oxfilé, i 4 bitar";
    ingrediens11 = "peppar, att rulla köttet i";
  }

  function createAndAppendIngredients(){ //Ingredienser och ingrediensrubriker
    //Skapar UL listan för ingredienser
    let list = document.createElement("ul");
    divIngredients.appendChild(list); // ul listan
    list.appendChild(head1); //Rubrik 1
    list.appendChild(document.createElement("li")).textContent = ingrediens1;
    list.appendChild(document.createElement("li")).textContent = ingrediens2;
    list.appendChild(document.createElement("li")).textContent = ingrediens3;
    list.appendChild(document.createElement("li")).textContent = ingrediens4;
    list.appendChild(document.createElement("li")).textContent = ingrediens5;
    list.appendChild(document.createElement("li")).textContent = ingrediens6;
    list.appendChild(document.createElement("li")).textContent = ingrediens7;
    list.appendChild(document.createElement("li")).textContent = ingrediens8;
    list.appendChild(document.createElement("li")).textContent = ingrediens9;
    list.appendChild(head2);
    list.appendChild(document.createElement("li")).textContent = ingrediens10;
    list.appendChild(document.createElement("li")).textContent = ingrediens11;
  }
  
  function resizeIngredients(){
    let foo = parseInt(document.getElementById("numberOfPortions").value);
    removeIngredients();
    switch(foo){
      case 2:
        twoPortions();
        createAndAppendIngredients();
        break;
      case 4:
        fourPortions();
        createAndAppendIngredients();
        break;
      case 6:
        sixPortions();
        createAndAppendIngredients();
        break;
      case 8:
        eightPortions();
        createAndAppendIngredients();
        break;
    }
  }

  function removeIngredients(){
    document.getElementById("ingredients").innerHTML = "";
  }

  fourPortions();
  createAndAppendIngredients();

  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

/** Maincourse2 - KORV STROGANOFF */
function mainCourse2(){
  document.getElementsByTagName("body")[0].innerHTML = "";

  let rubrik = "KORV STROGANOFF";
  let matBild = "/Kötträtter/Korv Stroganoff/korvstroganoff.jpg";
  let tillagningsTid = "30min";
  let ingrediensRubrik1 = "";
  let ingrediensRubrik2 = "Servering";
  let ingrediensRubrik3 = "";
  let ingrediensRubrik4 = "";
  let ingrediensRubrik5 = "";
  let ingrediens1 = "";
  let ingrediens2 = "";
  let ingrediens3 = "";
  let ingrediens4 = "";
  let ingrediens5 = "";
  let ingrediens6 = "";
  let ingrediens7 = "";
  let ingrediens8 = "";
  let ingrediens9 = "";
  let ingrediens10 = "";
  let ingrediens11 = "";
  let ingrediens12 = "";
  let ingrediens13 = "";
  let ingrediens14 = "";
  let ingrediens15 = "";
  let ingrediens16 = "";
  let ingrediens17 = "";
  let ingrediens18 = "";
  let ingrediens19 = "";
  let ingrediens20 = "";
  let beskrivningsRubrik1 = "Gör så här";
  let beskrivning1 = "Skär korven i centimetertjocka stavar. Skala och hacka löken.";
  let beskrivning2 = "Fräs korv och lök i smör i en stor stekpanna.";
  let beskrivning3 = "Rör ner tomatpuré, paprikapulver och lagerblad och fräs i ytterligare några minuter. Späd med buljongen och grädden. Låt sjuda tills såsen är smidig och simmig – inte för tunn och inte för stabbig. Red eventuellt av med aningen redningsmjöl. Smaka av med salt och peppar.";
  let beskrivning4 = "Servera med kokt ris och en klick gräddfil.";

  section = document.createElement("section");
  document.body.appendChild(section);

  //Skapar header
  let header = document.createElement("header");
  header.setAttribute("id", "rec-header");
  section.appendChild(header);

  //Skapar rubriken
  let headerH1 = document.createElement("h1");
  headerH1.textContent = rubrik; 
  header.appendChild(headerH1);

  //Bild på maten
  let image = document.createElement("img");
  image.src = matBild;
  section.appendChild(image);

  //Div innehållandes tillagningstid och för hur många personer
  let divPrepareInfo = document.createElement("div");
  divPrepareInfo.id = "prepareInfo";
  divPrepareInfo.setAttribute("class", "container");
  section.appendChild(divPrepareInfo);
  let divCookTime = document.createElement("div");
  let divCutlery = document.createElement("div");
  let imgTime = document.createElement("img");
  let cookTime = document.createElement("h2");
  let selector = document.createElement("select");
  selector.id = "numberOfPortions";

  for(let i = 2; i <= 8; i+=2){
    let foo =  selector.appendChild(document.createElement("option"));
    foo.value = i;
    foo.text = i +" port";
    if (foo.value == 4){
      foo.setAttribute("selected","selected");
    }
  }
  
  let imgCutlery = document.createElement("img");
  divCookTime.id = "cookTime";
  divCutlery.id = "portions";
  imgTime.src = "media/timer.png";
  imgTime.style.height = "30px";
  imgTime.style.width = "30px";

  //Sättär tillagningstiden
  cookTime.textContent = tillagningsTid;
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  
  //Välj "utgångsläge" för hur många portioner. Appenda fler options för fler val (Senare vid skalning)
  divPrepareInfo.appendChild(divCookTime);
  divPrepareInfo.appendChild(divCutlery);
  divCookTime.appendChild(imgTime);
  divCookTime.appendChild(cookTime);
  divCutlery.appendChild(imgCutlery);
  divCutlery.appendChild(selector);

  //Skapar break-line
  let hr = document.createElement("hr");
  section.appendChild(hr);

  //Div container innehållandes ingredienser
  let divIngredients = document.createElement("div");
  divIngredients.setAttribute("class", "container");
  divIngredients.id = "ingredients";
  section.appendChild(divIngredients);

  //Ingrediensrubriker 1-5
  let head1 = document.createElement("li");
  head1.textContent = ingrediensRubrik1;
  head1.setAttribute("class", "listHeader");
  let head2 = document.createElement("li");
  head2.textContent = ingrediensRubrik2;
  head2.setAttribute("class", "listHeader");

  let divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);

  //Skapar ol flr beskrivningar
  let descriptionList = document.createElement("ol");
  
  //Rubriker för beskrivningen
  let descriptionHeader1 = document.createElement("h4");
  descriptionHeader1.innerText = beskrivningsRubrik1;

  //Beskrivningar
  let desc1 = document.createElement("li");
  desc1.textContent = beskrivning1;
  let desc2 = document.createElement("li");
  desc2.textContent = beskrivning2;
  let desc3 = document.createElement("li");
  desc3.textContent = beskrivning3;
  let desc4 = document.createElement("li");
  desc4.textContent = beskrivning4;

  //Appenda OL med rubriker och beskrivningar
  divDescription.appendChild(descriptionList); //OL listan
  descriptionList.appendChild(descriptionHeader1) //Rubrik 1
  descriptionList.appendChild(desc1);
  descriptionList.appendChild(desc2);
  descriptionList.appendChild(desc3);
  descriptionList.appendChild(desc4);
  
  selector.onchange = function(){resizeIngredients(numberOfPortions);false};

  function twoPortions(){
    ingrediens1 = "250 g falukorv (av god kvalitet)";
    ingrediens2 = "1 gul lök";
    ingrediens3 = "1 msk smör";
    ingrediens4 = "1-2 msk tomatpuré";
    ingrediens5 = "0,5 msk paprikapulver";
    ingrediens6 = "1 lagerblad";
    ingrediens7 = "0,5 dl köttbuljong";
    ingrediens8 = "1 dl kaffegrädde (eller vispgrädde + mjölk)";
    ingrediens9 = "ev ljust redningsmjöl";
    ingrediens10 = "500g oxfilé, i 2 bitar";
    ingrediens11 = "salt";
    ingrediens12 = "peppar";
    ingrediens13 = "kokt ris";
    ingrediens14 = "gräddfil";
  }

  function fourPortions(){
    ingrediens1 = "500 g falukorv (av god kvalitet)";
    ingrediens2 = "2 gula lökar";
    ingrediens3 = "2 msk smör";
    ingrediens4 = "2-3 msk tomatpuré";
    ingrediens5 = "1 msk paprikapulver";
    ingrediens6 = "2 lagerblad";
    ingrediens7 = "1 dl köttbuljong";
    ingrediens8 = "2 dl kaffegrädde (eller vispgrädde + mjölk)";
    ingrediens9 = "ev ljust redningsmjöl";
    ingrediens10 = "1000g oxfilé, i 4 bitar";
    ingrediens11 = "salt";
    ingrediens12 = "peppar";
    ingrediens13 = "kokt ris";
    ingrediens14 = "gräddfil";
  }

  function sixPortions(){
    ingrediens1 = "750 g falukorv (av god kvalitet)";
    ingrediens2 = "3 gula lökar";
    ingrediens3 = "3 msk smör";
    ingrediens4 = "3-5 msk tomatpuré";
    ingrediens5 = "1,5 msk paprikapulver";
    ingrediens6 = "3 lagerblad";
    ingrediens7 = "1,5 dl köttbuljong";
    ingrediens8 = "3 dl kaffegrädde (eller vispgrädde + mjölk)";
    ingrediens9 = "ev ljust redningsmjöl";
    ingrediens10 = "1500g oxfilé, i 6 bitar";
    ingrediens11 = "salt";
    ingrediens12 = "peppar";
    ingrediens13 = "kokt ris";
    ingrediens14 = "gräddfil";
  }

  function eightPortions(){
    ingrediens1 = "1000 g falukorv (av god kvalitet)";
    ingrediens2 = "4 gula lökar";
    ingrediens3 = "4 msk smör";
    ingrediens4 = "4-6 msk tomatpuré";
    ingrediens5 = "2 msk paprikapulver";
    ingrediens6 = "4 lagerblad";
    ingrediens7 = "2 dl köttbuljong";
    ingrediens8 = "4 dl kaffegrädde (eller vispgrädde + mjölk)";
    ingrediens9 = "ev ljust redningsmjöl";
    ingrediens10 = "2000g oxfilé, i 8 bitar";
    ingrediens11 = "salt";
    ingrediens12 = "peppar";
    ingrediens13 = "kokt ris";
    ingrediens14 = "gräddfil";
  }

  function createAndAppendIngredients(){ //Ingredienser och ingrediensrubriker
    //Skapar UL listan för ingredienser
    let list = document.createElement("ul");
    divIngredients.appendChild(list); // ul listan
    list.appendChild(head1); //Rubrik 1
    list.appendChild(document.createElement("li")).textContent = ingrediens1;
    list.appendChild(document.createElement("li")).textContent = ingrediens2;
    list.appendChild(document.createElement("li")).textContent = ingrediens3;
    list.appendChild(document.createElement("li")).textContent = ingrediens4;
    list.appendChild(document.createElement("li")).textContent = ingrediens5;
    list.appendChild(document.createElement("li")).textContent = ingrediens6;
    list.appendChild(document.createElement("li")).textContent = ingrediens7;
    list.appendChild(document.createElement("li")).textContent = ingrediens8;
    list.appendChild(document.createElement("li")).textContent = ingrediens9;
    list.appendChild(document.createElement("li")).textContent = ingrediens10;
    list.appendChild(document.createElement("li")).textContent = ingrediens11;
    list.appendChild(document.createElement("li")).textContent = ingrediens12;
    list.appendChild(head2);
    list.appendChild(document.createElement("li")).textContent = ingrediens13;
    list.appendChild(document.createElement("li")).textContent = ingrediens14;
  }

  function resizeIngredients(){
    let foo = parseInt(document.getElementById("numberOfPortions").value);
    removeIngredients();
    switch(foo){
      case 2:
        twoPortions();
        createAndAppendIngredients();
        break;
      case 4:
        fourPortions();
        createAndAppendIngredients();
        break;
      case 6:
        sixPortions();
        createAndAppendIngredients();
        break;
      case 8:
        eightPortions();
        createAndAppendIngredients();
        break;
    }
  }

  function removeIngredients(){
    document.getElementById("ingredients").innerHTML = "";
  }

  fourPortions();
  createAndAppendIngredients();
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

/** Maincourse3 - MUSTIG LÖVBIFFSGRYTA */
function mainCourse3(){
  document.getElementsByTagName("body")[0].innerHTML = "";

  let rubrik = "MUSTIG LÖVBIFFSGRYTA";
  let matBild = "/Kötträtter/Mustig Lövbiffsgryta/lövbiffsgryta.jpg";
  let tillagningsTid = "2h";
  let ingrediensRubrik1 = "";
  let ingrediensRubrik2 = "";
  let ingrediensRubrik3 = "";
  let ingrediensRubrik4 = "";
  let ingrediensRubrik5 = "";
  let ingrediens1 = "";
  let ingrediens2 = "";
  let ingrediens3 = "";
  let ingrediens4 = "";
  let ingrediens5 = "";
  let ingrediens6 = "";
  let ingrediens7 = "";
  let ingrediens8 = "";
  let ingrediens9 = "";
  let ingrediens10 = "";
  let ingrediens11 = "";
  let ingrediens12 = "";
  let ingrediens13 = "";
  let ingrediens14 = "";
  let ingrediens15 = "";
  let ingrediens16 = "";
  let ingrediens17 = "";
  let ingrediens18 = "";
  let ingrediens19 = "";
  let ingrediens20 = "";
  let beskrivningsRubrik1 = "Gör så här";
  let beskrivning1 = "Skär lövbiffen i centimeterbreda strimlor. Hetta upp en stekpanna med smör och bryn köttet tills det får färg.";
  let beskrivning2 = "Rör ner tomatpurén och låt fräsa en kort stund.";
  let beskrivning3 = "Blanda ner vattnet och låt sjuda under lock på svag värme i 1,5-2 timmar. Nästan allt vattnet ska ha ångat bort.";
  let beskrivning4 = "Tillsätt oxfond, soja, grädde och crème fraiche. Rör ihop och låt alltsammans sjuda i några minuter och smaka av med flingsalt.";
  let beskrivning5 = "Klipp över persilja och servera med kokt potatis eller ris.";

  section = document.createElement("section");
  document.body.appendChild(section);

  //Skapar header
  let header = document.createElement("header");
  header.setAttribute("id", "rec-header");
  section.appendChild(header);

  //Skapar rubriken
  let headerH1 = document.createElement("h1");
  headerH1.textContent = rubrik; 
  header.appendChild(headerH1);

  //Bild på maten
  let image = document.createElement("img");
  image.src = matBild;
  section.appendChild(image);

  //Div innehållandes tillagningstid och för hur många personer
  let divPrepareInfo = document.createElement("div");
  divPrepareInfo.id = "prepareInfo";
  divPrepareInfo.setAttribute("class", "container");
  section.appendChild(divPrepareInfo);
  let divCookTime = document.createElement("div");
  let divCutlery = document.createElement("div");
  let imgTime = document.createElement("img");
  let cookTime = document.createElement("h2");
  let selector = document.createElement("select");
  selector.id = "numberOfPortions";

  for(let i = 2; i <= 8; i+=2){
    let foo =  selector.appendChild(document.createElement("option"));
    foo.value = i;
    foo.text = i +" port";
    if (foo.value == 4){
      foo.setAttribute("selected","selected");
    }
  }

  let imgCutlery = document.createElement("img");
  divCookTime.id = "cookTime";
  divCutlery.id = "portions";
  imgTime.src = "media/timer.png";
  imgTime.style.height = "30px";
  imgTime.style.width = "30px";

  //Sättär tillagningstiden
  cookTime.textContent = tillagningsTid;
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  
  //Välj "utgångsläge" för hur många portioner. Appenda fler options för fler val (Senare vid skalning)
  divPrepareInfo.appendChild(divCookTime);
  divPrepareInfo.appendChild(divCutlery);
  divCookTime.appendChild(imgTime);
  divCookTime.appendChild(cookTime);
  divCutlery.appendChild(imgCutlery);
  divCutlery.appendChild(selector);

  //Skapar break-line
  let hr = document.createElement("hr");
  section.appendChild(hr);

  //Div container innehållandes ingredienser
  let divIngredients = document.createElement("div");
  divIngredients.setAttribute("class", "container");
  divIngredients.id = "ingredients";
  section.appendChild(divIngredients);

  //Ingrediensrubriker 1-5
  let head1 = document.createElement("li");
  head1.textContent = ingrediensRubrik1;
  head1.setAttribute("class", "listHeader");
  let head2 = document.createElement("li");
  head2.textContent = ingrediensRubrik2;
  head2.setAttribute("class", "listHeader");
  let head3 = document.createElement("li");
  head3.textContent = ingrediensRubrik3;
  head3.setAttribute("class", "listHeader");
  let head4 = document.createElement("li");
  head4.textContent = ingrediensRubrik4;
  head4.setAttribute("class", "listHeader");
  let head5 = document.createElement("li");
  head5.textContent = ingrediensRubrik5;
  head5.setAttribute("class", "listHeader");
 
  let divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);

  //Skapar ol flr beskrivningar
  let descriptionList = document.createElement("ol");
  
  //Rubriker för beskrivningen
  let descriptionHeader1 = document.createElement("h4");
  descriptionHeader1.innerText = beskrivningsRubrik1;

  //Beskrivningar
  let desc1 = document.createElement("li");
  desc1.textContent = beskrivning1;
  let desc2 = document.createElement("li");
  desc2.textContent = beskrivning2;
  let desc3 = document.createElement("li");
  desc3.textContent = beskrivning3;
  let desc4 = document.createElement("li");
  desc4.textContent = beskrivning4;
  let desc5 = document.createElement("li");
  desc5.textContent = beskrivning5;

  //Appenda OL med rubriker och beskrivningar
  divDescription.appendChild(descriptionList); //OL listan
  descriptionList.appendChild(descriptionHeader1) //Rubrik 1
  descriptionList.appendChild(desc1);
  descriptionList.appendChild(desc2);
  descriptionList.appendChild(desc3);
  descriptionList.appendChild(desc4);
  descriptionList.appendChild(desc5);
 
  selector.onchange = function(){resizeIngredients(numberOfPortions);false};

  function twoPortions(){
    ingrediens1 = "400 g lövbiff";
    ingrediens2 = "smör, att steka i";
    ingrediens3 = "2 msk tomatpuré";
    ingrediens4 = "1,5 dl vatten";
    ingrediens5 = "1,5 msk koncentrerad oxfond";
    ingrediens6 = "1 msk kinesisk soja";
    ingrediens7 = "1,5 dl crème fraîche";
    ingrediens8 = "flingsalt";
    ingrediens9 = "persilja, att garnera med";
  }

  function fourPortions(){
    ingrediens1 = "800 g lövbiff";
    ingrediens2 = "smör, att steka i";
    ingrediens3 = "4 msk tomatpuré";
    ingrediens4 = "3 dl vatten";
    ingrediens5 = "3 msk koncentrerad oxfond";
    ingrediens6 = "2 msk kinesisk soja";
    ingrediens7 = "3 dl crème fraîche";
    ingrediens8 = "flingsalt";
    ingrediens9 = "persilja, att garnera med";
  }

  function sixPortions(){
    ingrediens1 = "1200 g lövbiff";
    ingrediens2 = "smör, att steka i";
    ingrediens3 = "6 msk tomatpuré";
    ingrediens4 = "4,5 dl vatten";
    ingrediens5 = "4,5 msk koncentrerad oxfond";
    ingrediens6 = "3 msk kinesisk soja";
    ingrediens7 = "4,5 dl crème fraîche";
    ingrediens8 = "flingsalt";
    ingrediens9 = "persilja, att garnera med";
  }

  function eightPortions(){
    ingrediens1 = "1600 g lövbiff";
    ingrediens2 = "smör, att steka i";
    ingrediens3 = "8 msk tomatpuré";
    ingrediens4 = "6 dl vatten";
    ingrediens5 = "6 msk koncentrerad oxfond";
    ingrediens6 = "4 msk kinesisk soja";
    ingrediens7 = "6 dl crème fraîche";
    ingrediens8 = "flingsalt";
    ingrediens9 = "persilja, att garnera med";
  }
  
  function createAndAppendIngredients(){ //Ingredienser och ingrediensrubriker
    //Skapar UL listan för ingredienser
    let list = document.createElement("ul");
    divIngredients.appendChild(list); // ul listan
    list.appendChild(head1); //Rubrik 1
    list.appendChild(document.createElement("li")).textContent = ingrediens1;
    list.appendChild(document.createElement("li")).textContent = ingrediens2;
    list.appendChild(document.createElement("li")).textContent = ingrediens3;
    list.appendChild(document.createElement("li")).textContent = ingrediens4;
    list.appendChild(document.createElement("li")).textContent = ingrediens5;
    list.appendChild(document.createElement("li")).textContent = ingrediens6;
    list.appendChild(document.createElement("li")).textContent = ingrediens7;
    list.appendChild(document.createElement("li")).textContent = ingrediens8;
    list.appendChild(document.createElement("li")).textContent = ingrediens9;
  }
  
  function resizeIngredients(){
    let foo = parseInt(document.getElementById("numberOfPortions").value);
    removeIngredients();
    switch(foo){
      case 2:
        twoPortions();
        createAndAppendIngredients();
        break;
      case 4:
        fourPortions();
        createAndAppendIngredients();
        break;
      case 6:
        sixPortions();
        createAndAppendIngredients();
        break;
      case 8:
        eightPortions();
        createAndAppendIngredients();
        break;
    }
  }

  function removeIngredients(){
    document.getElementById("ingredients").innerHTML = "";
  }

  fourPortions();
  createAndAppendIngredients();
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

/** -------------------------------- */
/** Maincourse4 - ITALIENSK KYCKLINGGRATÄNG */
function maincourse4(){
  document.getElementsByTagName("body")[0].innerHTML = "";
  //  Building-blocks that will create main elements on the recepie-page.
  let headerWrapper;  //  Create header-tag, contains mainHeader
  let mainHeader;  //  Create recepie header
  let recepieImage;  //  Recepie image
  let divIngredients;  // Wrapper that contains ingredians 
  let ingrediensList;  //  Create a list of ingredians
  let divDescription;  //  Create a list of "How to do" the recepie
  let descriptionHeader;  //  Descripton header
  let descriptionList;  //  Create a list of step by step description
  let mainFooter;  //  Create a wrapper that will cointain "Go back button"

  //  Array of ingredians
  let ingrediens = [
    "8 kycklinglårfiléer med skinn",
    "flingsalt",
    "svartpeppar, nymald",
    "10 soltorkade tomater, i olja",
    "1 klyfta vitlök",
    "0,5 röd chilifrukt, utan kärnor",
    "1 tsk torkad timjan",
    "1 tsk torkad oregano",
    "3 dl kycklingbuljong",
    "1,5 dl vispgrädde",
    "1 dl parmesanost, fint riven"
  ]

  let ingrediensTillservering = [
    "8 körsbärstomater",
    "0,5 kruka basilika",
    "4 port pasta, kokt"
  ]

  //  Array of "StepByStep" how to
  let howTo = [
    "Värm ugnen till 180 grader, varmluft.",
    "Koka pastan enligt anvisningar på förpackningen.",
    "Fräs kycklingen på medelvärme tills den får lite färg runtom, i cirka 5 minuter. Salta och peppra. Lägg över i en ugnsform.",
    "Strimla de soltorkade tomaterna. Skala och finhacka vitlöken. Finhacka chilin. Fräs tomaterna, vitlöken och chilin i cirka 2 minuter, tills det börjar dofta härligt.",
    "Krydda med timjan och oregano och häll i buljongen. Tillsätt grädden och parmesanosten. Låt det sjuda försiktigt tills osten smälter.",
    "Skeda såsen över kycklingen i formen. Grädda i mitten av ugnen i cirka 15 minuter.",
    "Dela körsbärstomaterna i halvor. Plocka basilikabladen.",
    "Ta ut formen. Lägg ut körsbärstomaterna i formen och toppa med färsk basilika. Servera gratängen direkt med pasta.",
    "Matsortera dina lökskal till återvinning och njut av din krämiga gratäng!"
  ]

  section = document.createElement("section");
  document.body.appendChild(section);
  headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  section.appendChild(headerWrapper);

  //  Page Header
  mainHeader = document.createElement("h1");
  mainHeader.textContent = "ITALIENSK KYCKLINGGRATÄNG";
  headerWrapper.appendChild(mainHeader);

  //  Recepie img
  recepieImage = document.createElement("img");
  recepieImage.src = "/Kötträtter/Italiensk kycklinggratäng/kycklinggratäng.jpg";
  section.appendChild(recepieImage);

  //  Info below img
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
  cookTime.textContent = "45 min";
  option2.text = "2 port";
  option4.text = "4 port";
  option6.text = "6 port";
  option8.text = "8 port";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  selector.appendChild(option4);  //  choose how many servings/portion.
  divPrepareInfo.appendChild(divCookTime);
  divPrepareInfo.appendChild(divCutlery);
  divCookTime.appendChild(imgTime);
  divCookTime.appendChild(cookTime);
  divCutlery.appendChild(imgCutlery);
  divCutlery.appendChild(selector);
  //  will create a line under info.
  let hr = document.createElement("hr");
  section.appendChild(hr);

  //  Ingrediens
  divIngredients = document.createElement("div");
  divIngredients.setAttribute("class", "container");
  divIngredients.id = "ingredients";
  section.appendChild(divIngredients);
  ingrediensList = document.createElement("ul");
  divIngredients.appendChild(ingrediensList);
  

  for(let i = 0; i < ingrediens.length; i++){
    let ingredien = document.createElement("li");
    ingredien.textContent = ingrediens[i];
    ingrediensList.appendChild(ingredien);
  }

  let ingrediensSecondHeader = document.createElement("h4");
  ingrediensSecondHeader.textContent = "Till servering:";
  ingrediensSecondHeader.setAttribute("class", "listHeader");
  ingrediensList.appendChild(ingrediensSecondHeader);
  
  for(let i = 0; i < ingrediensTillservering.length; i++){
    let ingredien = document.createElement("li")
    ingredien.textContent = ingrediensTillservering[i];
    ingrediensList.appendChild(ingredien);
  }

  //  Description / How-to-do
  divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);
  descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör så här:";
  divDescription.appendChild(descriptionHeader);
  descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);

  for(let i = 0; i < howTo.length; i++){
    let description = document.createElement("li");
    description.textContent = howTo[i];
    descriptionList.appendChild(description);
  }
  
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
} 

/** -------------------------------- */
/** Maincourse5 - PANNBIFF */
function maincourse5(){
  document.getElementsByTagName("body")[0].innerHTML = "";
  //  Building-blocks that will create main elements on the recepie-page.
  let headerWrapper;  //  Create header-tag, contains mainHeader
  let mainHeader;  //  Create recepie header
  let recepieImage;  //  Recepie image
  let divIngredients;  // Wrapper that contains ingredians 
  let ingrediensList;  //  Create a list of ingredians
  let divDescription;  //  Create a list of "How to do" the recepie
  let descriptionHeader;  //  Descripton header
  let descriptionList;  //  Create a list of step by step description
  let mainFooter;  //  Create a wrapper that will cointain "Go back button"

  //  Array of ingredians
  let ingrediens = [
    "300 g nötfärs",
    "300 g blandfärs",
    "2 gula lökar",
    "smör, till stekning",
    "olja, till stekning",
    "3 potatisar, kokta",
    "0,5 dl grädde",
    "0,5 dl mjölk",
    "1 ägg",
    "1 dl ströbröd",
    "1 dl vatten",
    "1 msk koncentrerad kalvfond",
    "1 msk japansk soja",
    "salt",
    "peppar",
    "2 gula lökar (stora)",
    "smör, till stekning",
    "strösocker (en nypa)",
    "potatis, stekt (eller kokt)",
    "pressgurka",
    "skysås"
  ]

  //  Array of "StepByStep" how to
  let howTo = [
    "Skala de medelstora lökarna.",
    "Riv en av lökarna, den andra hackar du fint och bryner i smör.",
    "Mosa potatisarna med en gaffel.",
    "Blanda grädden, mjölken, ägget, den rivna och den frästa löken, potatisen, ströbrödet och vattnet i en bunke.",
    "Ställ åt sidan och låt svälla en stund.",
    "Blanda smeten med färsen, kalvfond och soja.",
    "Salta och peppra och blanda noga ihop till en jämn smet.",
    "Provstek en bit för att smaka av kryddningen.",
    "Ställ smeten åt sidan.",
    "Skala de stora lökarna och skär dem i tunna skivor.",
    "Stek dem gyllenbruna i smör, pudra över en nypa socker och ställ åt sidan.",
    "Forma fyra stora pannbiffar och stek dem sakta i smör och lite olja tills de är knaprigt gyllenbruna, 4–5 minuter på varje sida.",
    "Fräs samtidigt löken en gång till och lägg den sedan i ett tjockt lager ovanpå den färdigstekta biffen.",
    "Matsortera dina lökskal och potatisskal till återvinning och njut av din pannbiff!"
  ]

  section = document.createElement("section");
  document.body.appendChild(section);
  headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  section.appendChild(headerWrapper);

  //  Page Header
  mainHeader = document.createElement("h1");
  mainHeader.textContent = "PANNBIFF";
  headerWrapper.appendChild(mainHeader);

  //  Recepie img
  recepieImage = document.createElement("img");
  recepieImage.src = "/Kötträtter/Pannbiff/pannbiff.jpg";
  section.appendChild(recepieImage);

  //  Info below img
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
  option2.text = "2 port";
  option4.text = "4 port";
  option6.text = "6 port";
  option8.text = "8 port";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  selector.appendChild(option4);  //  choose how many servings/portion.
  divPrepareInfo.appendChild(divCookTime);
  divPrepareInfo.appendChild(divCutlery);
  divCookTime.appendChild(imgTime);
  divCookTime.appendChild(cookTime);
  divCutlery.appendChild(imgCutlery);
  divCutlery.appendChild(selector);
  //  will create a line under info.
  let hr = document.createElement("hr");
  section.appendChild(hr);

  //  Ingrediens
  divIngredients = document.createElement("div");
  divIngredients.setAttribute("class", "container");
  divIngredients.id = "ingredients";
  section.appendChild(divIngredients);
  ingrediensList = document.createElement("ul");
  divIngredients.appendChild(ingrediensList);

  for(let i = 0; i < ingrediens.length; i++){
    let ingredien = document.createElement("li");
    ingredien.textContent = ingrediens[i];
    ingrediensList.appendChild(ingredien);
  }

  //  Description / How-to-do
  divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);
  descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör så här:";
  divDescription.appendChild(descriptionHeader);
  descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);

  for(let i = 0; i < howTo.length; i++){
    let description = document.createElement("li");
    description.textContent = howTo[i];
    descriptionList.appendChild(description);
  }
  
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

// Desserts recipes list  
function dessertMenu(){
  document.getElementsByTagName("body")[0].innerHTML = "";

  let headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  document.body.appendChild(headerWrapper);

  //  Page Header
  let secondMainHeader = document.createElement("h1");
  secondMainHeader.textContent = "Efterrätt";
  headerWrapper.appendChild(secondMainHeader);

  section = document.createElement("section");
  section.id = "secondMenuSection"
  document.body.appendChild(section);

  for(let i = 0; i < 4; i++){
    let divWrapper = document.createElement("div");
    divWrapper.setAttribute("class","secondMenuWrapper");
    section.appendChild(divWrapper);
  }

  let recepie1 = document.getElementsByClassName("secondMenuWrapper")[0];
  let recepie2 = document.getElementsByClassName("secondMenuWrapper")[1];
  let recepie3 = document.getElementsByClassName("secondMenuWrapper")[2];
  let randomBtn = document.getElementsByClassName("secondMenuWrapper")[3];

  //  add eventlisterner
  recepie1.addEventListener("click", dessert1);
  recepie2.addEventListener("click", dessert2);
  recepie3.addEventListener("click", dessert3);
  randomBtn.addEventListener("click", randomDessert);

  //  recepie1
  let recepieImg = document.createElement("img");
  recepieImg.src = "/Desserts/Banansushi/banana-sushi.jpg";
  recepie1.appendChild(recepieImg);

  let recepieHeader = document.createElement("h5");
  recepieHeader.textContent = "BANANSUSHI MED JORDNÖTSSMÖR OCH NUTELLA"
  recepie1.appendChild(recepieHeader);

  //  recepie2
  let recepieImg2 = document.createElement("img");
  recepieImg2.src = "/Desserts/Chokladmousse/avokado-choklad-mousse-shutterstock.jpg";
  recepie2.appendChild(recepieImg2);

  let recepieHeader2 = document.createElement("h5");
  recepieHeader2.textContent = "CHOKLADMOUSSE PÅ AVOKADO OCH BANANA"
  recepie2.appendChild(recepieHeader2);

  //  recepie3
  let recepieImg3 = document.createElement("img");
  recepieImg3.src = "/Desserts/Fudge-brownies/vegan-fudge-brownie-980x515-c.jpg";
  recepie3.appendChild(recepieImg3);

  let recepieHeader3 = document.createElement("h5");
  recepieHeader3.textContent = "FUDGE BROWNIES"
  recepie3.appendChild(recepieHeader3);

  //  Random recepie
  let randomAtag = document.createElement("a");
  randomAtag.setAttribute("class", "button");
  randomAtag.textContent = "Slumpa ett recept";
  randomBtn.appendChild(randomAtag);
  
  footer();
  btnBack();
}

/** Dessert1 - BANANSUSHI MED JORDNÖTSSMÖR OCH NUTELLA */
function dessert1(){
  document.getElementsByTagName("body")[0].innerHTML = "";
  //  Building-blocks that will create main elements on the recepie-page.
  let headerWrapper;  //  Create header-tag, contains mainHeader
  let mainHeader;  //  Create recepie header
  let recepieImage;  //  Recepie image
  let divIngredients;  // Wrapper that contains ingredians 
  let ingrediensList;  //  Create a list of ingredians
  let divDescription;  //  Create a list of "How to do" the recepie
  let descriptionHeader;  //  Descripton header
  let descriptionList;  //  Create a list of step by step description

  //  Array of ingredians
  let ingrediensTwoPortions = [
    "2 st Bananer",
    "2 dl hasselnötter",
    "1/2dl kakao",
    "2 tsk agavesirap",
    "2 tsk vaniljepulver en nypa havssalt",
    "1 msk kokosolja värmd över vattenbad", 
    "5 dl mandelmjölk",
    "1 avocado"
  ]

  let ingrediensFourPortions = [
    "4 st Bananer",
    "4 dl hasselnötter",
    "1 dl kakao",
    "4 tsk agavesirap",
    "4 tsk vaniljepulver en nypa havssalt",
    "2 msk kokosolja värmd över vattenbad", 
    "1 l mandelmjölk",
    "2 avocado"
  ]

  let ingrediensSixPortions = [
    "6 st Bananer",
    "6 dl hasselnötter",
    "1 1/2 dl kakao",
    "6 tsk agavesirap",
    "6 tsk vaniljepulver en nypa havssalt",
    "3 msk kokosolja värmd över vattenbad", 
    "1 1/2 l mandelmjölk",
    "3 avocado"
  ]

  let ingrediensEightPortions = [
    "8 st Bananer",
    "8 dl hasselnötter",
    "2 dl kakao",
    "8 tsk agavesirap",
    "8 tsk vaniljepulver en nypa havssalt",
    "4 msk kokosolja värmd över vattenbad", 
    "2 l mandelmjölk",
    "4 avocado"
  ]

  let ingrediensVeganTwoPortions = [
    "3-4 msk kokosolja värmd över vattenbad",
    "5-6 msk raw kakaopulver",
    "1 tsk cayennepeppar",
    "2-3 msk agavesirap",
    "1 knivsudd himalayasalt"
  ]

  let ingrediensVeganFourPortions = [
    "1-1 1/2 dl kokosolja värmd över vattenbad",
    "1 1/2-2 dl raw kakaopulver",
    "2 tsk cayennepeppar",
    "4-6 msk agavesirap",
    "2 knivsuddar himalayasalt"
  ]

  let ingrediensVeganSixPortions = [
    "1 1/2-2 dl kokosolja värmd över vattenbad",
    "2-2 1/2 dl raw kakaopulver",
    "3 tsk cayennepeppar",
    "1-1 1/2 dl agavesirap",
    "3 knivsuddar himalayasalt"
  ]

  let ingrediensVeganEightPortions = [
    "2-3 dl kokosolja värmd över vattenbad",
    "3-4 dl raw kakaopulver",
    "4 tsk cayennepeppar",
    "1 1/2-2 dl agavesirap",
    "4 knivsuddar himalayasalt"
  ]

  //  Array of "StepByStep" how to
  let howTo = [
    "Skär bananen längs med.",
    "Gröp ut i mitten med sked. Innandömet är perfekt att äta direkt eller ha i en smoothie.",
    "Fyll bananen med till exempel jordnötssmör och kokosflingor eller nutella och hackade hasselnötter.",
    "Lägg ihop banandelarna och smeta på en topping.",
    "Skär i bitar och servera gärna med chokladsås att doppa i. Klart!"
  ]

  section = document.createElement("section");
  document.body.appendChild(section);
  headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  section.appendChild(headerWrapper);

  //  Page Header
  mainHeader = document.createElement("h1");
  mainHeader.textContent = "BANANSUSHI MED JORDNÖTSSMÖR OCH NUTELLA";
  headerWrapper.appendChild(mainHeader);

  //  Recepie img
  recepieImage = document.createElement("img");
  recepieImage.src = "/Desserts/Banansushi/banana-sushi.jpg";
  section.appendChild(recepieImage);

  //  Info below img
  let divPrepareInfo = document.createElement("div");
  divPrepareInfo.id = "prepareInfo";
  divPrepareInfo.setAttribute("class", "container");
  section.appendChild(divPrepareInfo);
  let divCookTime = document.createElement("div");
  let divCutlery = document.createElement("div");
  let imgTime = document.createElement("img");
  let cookTime = document.createElement("h2");
  let selector = document.createElement("select");
  selector.id = "numberOfPortions";

  for(let i = 2; i <= 8; i+=2){
    let foo =  selector.appendChild(document.createElement("option"));
    foo.value = i;
    foo.text = i +" port";
    if (foo.value == 2){
      foo.setAttribute("selected","selected");
    }
  }
  
  let imgCutlery = document.createElement("img");
  divCookTime.id = "cookTime";
  divCutlery.id = "portions";
  imgTime.src = "media/timer.png";
  imgTime.style.height = "30px";
  imgTime.style.width = "30px";
  cookTime.textContent = "10 min";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  divPrepareInfo.appendChild(divCookTime);
  divPrepareInfo.appendChild(divCutlery);
  divCookTime.appendChild(imgTime);
  divCookTime.appendChild(cookTime);
  divCutlery.appendChild(imgCutlery);
  divCutlery.appendChild(selector);
  //  will create a line under info.
  let hr = document.createElement("hr");
  section.appendChild(hr);

  //  Ingrediens
  divIngredients = document.createElement("div");
  divIngredients.setAttribute("class", "container");
  divIngredients.id = "ingredients";
  section.appendChild(divIngredients);

  //  Description / How-to-do
  divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);
  descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör så här:";
  divDescription.appendChild(descriptionHeader);
  descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);

  for(let i = 0; i < howTo.length; i++){
    let description = document.createElement("li");
    description.textContent = howTo[i];
    descriptionList.appendChild(description);
  }

  selector.onchange = function(){resizeIngredients(numberOfPortions);false};

  function createAndAppendIngredientsTwoPortions(){
    ingrediensList = document.createElement("ul");
    divIngredients.appendChild(ingrediensList);
  
    let ingrediensHeader = document.createElement("h4");
    ingrediensHeader.textContent = "Raw nutella:";
    ingrediensHeader.setAttribute("class", "listHeader");
    ingrediensList.appendChild(ingrediensHeader);

    for(let i = 0; i < ingrediensTwoPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingrediensTwoPortions[i];
      ingrediensList.appendChild(ingredien);
    }

    let ingrediensSecondHeader = document.createElement("h4");
    ingrediensSecondHeader.textContent = "Raw vegan chokladsås:";
    ingrediensSecondHeader.setAttribute("class", "listHeader");
    ingrediensList.appendChild(ingrediensSecondHeader);
  
    for(let i = 0; i < ingrediensVeganTwoPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingrediensVeganTwoPortions[i];
      ingrediensList.appendChild(ingredien);
    }
  }

  function createAndAppendIngredientsFourPortions(){
    ingrediensList = document.createElement("ul");
    divIngredients.appendChild(ingrediensList);
  
    let ingrediensHeader = document.createElement("h4");
    ingrediensHeader.textContent = "Raw nutella:";
    ingrediensHeader.setAttribute("class", "listHeader");
    ingrediensList.appendChild(ingrediensHeader);

    for(let i = 0; i < ingrediensFourPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingrediensFourPortions[i];
      ingrediensList.appendChild(ingredien);
    }

    let ingrediensSecondHeader = document.createElement("h4");
    ingrediensSecondHeader.textContent = "Raw vegan chokladsås:";
    ingrediensSecondHeader.setAttribute("class", "listHeader");
    ingrediensList.appendChild(ingrediensSecondHeader);
  
    for(let i = 0; i < ingrediensVeganFourPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingrediensVeganFourPortions[i];
      ingrediensList.appendChild(ingredien);
    }
  }

  function createAndAppendIngredientsSixPortions(){
    ingrediensList = document.createElement("ul");
    divIngredients.appendChild(ingrediensList);
  
    let ingrediensHeader = document.createElement("h4");
    ingrediensHeader.textContent = "Raw nutella:";
    ingrediensHeader.setAttribute("class", "listHeader");
    ingrediensList.appendChild(ingrediensHeader);

    for(let i = 0; i < ingrediensSixPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingrediensSixPortions[i];
      ingrediensList.appendChild(ingredien);
    }

    let ingrediensSecondHeader = document.createElement("h4");
    ingrediensSecondHeader.textContent = "Raw vegan chokladsås:";
    ingrediensSecondHeader.setAttribute("class", "listHeader");
    ingrediensList.appendChild(ingrediensSecondHeader);
  
    for(let i = 0; i < ingrediensVeganSixPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingrediensVeganSixPortions[i];
      ingrediensList.appendChild(ingredien);
    }
  }

  function createAndAppendIngredientsEightPortions(){
    ingrediensList = document.createElement("ul");
    divIngredients.appendChild(ingrediensList);
  
    let ingrediensHeader = document.createElement("h4");
    ingrediensHeader.textContent = "Raw nutella:";
    ingrediensHeader.setAttribute("class", "listHeader");
    ingrediensList.appendChild(ingrediensHeader);

    for(let i = 0; i < ingrediensEightPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingrediensEightPortions[i];
      ingrediensList.appendChild(ingredien);
    }

    let ingrediensSecondHeader = document.createElement("h4");
    ingrediensSecondHeader.textContent = "Raw vegan chokladsås:";
    ingrediensSecondHeader.setAttribute("class", "listHeader");
    ingrediensList.appendChild(ingrediensSecondHeader);
  
    for(let i = 0; i < ingrediensVeganEightPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingrediensVeganEightPortions[i];
      ingrediensList.appendChild(ingredien);
    }
  }

  function resizeIngredients(){
    let foo = parseInt(document.getElementById("numberOfPortions").value);
    removeIngredients();
    switch(foo){
      case 2:
        createAndAppendIngredientsTwoPortions();
        break;
      case 4:
        createAndAppendIngredientsFourPortions();
        break;
      case 6:
        createAndAppendIngredientsSixPortions();
        break;
      case 8:
        createAndAppendIngredientsEightPortions();
        break;
    }
  }

  function removeIngredients(){
    document.getElementById("ingredients").innerHTML = "";
  }
  
  createAndAppendIngredientsTwoPortions();
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

/** Dessert2 - CHOKLADMOUSSE PÅ AVOKADO OCH BANAN */
function dessert2(){
  document.getElementsByTagName("body")[0].innerHTML = "";
  //  Building-blocks that will create main elements on the recepie-page.
  let headerWrapper;  //  Create header-tag, contains mainHeader
  let mainHeader;  //  Create recepie header
  let recepieImage;  //  Recepie image
  let divIngredients;  // Wrapper that contains ingredians 
  let ingrediensList;  //  Create a list of ingredians
  let divDescription;  //  Create a list of "How to do" the recepie
  let descriptionHeader;  //  Descripton header
  let descriptionList;  //  Create a list of step by step description

  //  Array of ingredians
  let ingrediensTwoPortions = [
    "1 mogen avokado",
    "2 mogna bananer",
    "6 dadlar",
    "3 msk vatten",
    "1 msk lönnsirap",
    "2 rågade tsk mandelsmör", 
    "2 rågade tsk raw kakao"
  ]

  let ingrediensFourPortions = [
    "2 mogna avokado",
    "4 mogna bananer",
    "12 dadlar",
    "1 dl vatten",
    "2 msk lönnsirap",
    "4 rågade tsk mandelsmör", 
    "4 rågade tsk raw kakao"
  ]

  let ingrediensSixPortions = [
    "3 mogna avokado",
    "6 mogna bananer",
    "18 dadlar",
    "1 1/2 dl vatten",
    "3 msk lönnsirap",
    "2 rågade msk mandelsmör", 
    "2 rågade msk raw kakao"
  ]

  let ingrediensEightPortions = [
    "4 mogna avokado",
    "8 mogna bananer",
    "24 dadlar",
    "2 dl vatten",
    "4 msk lönnsirap",
    "8 rågade tsk mandelsmör", 
    "8 rågade tsk raw kakao"
  ]

  //  Array of "StepByStep" how to
  let howTo = [
    "Lägg alla ingredienser i en mixer",
    "Dadlarna först",
    "Mixa till en fluffig smet",
    "Förvara i kylen till det är dags att hugga in"
  ]

  section = document.createElement("section");
  document.body.appendChild(section);
  headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  section.appendChild(headerWrapper);

  //  Page Header
  mainHeader = document.createElement("h1");
  mainHeader.textContent = "CHOKLADMOUSSE PÅ AVOKADO OCH BANAN";
  headerWrapper.appendChild(mainHeader);

  //  Recepie img
  recepieImage = document.createElement("img");
  recepieImage.src = "/Desserts/Chokladmousse/avokado-choklad-mousse-shutterstock.jpg";
  section.appendChild(recepieImage);

  //  Info below img
  let divPrepareInfo = document.createElement("div");
  divPrepareInfo.id = "prepareInfo";
  divPrepareInfo.setAttribute("class", "container");
  section.appendChild(divPrepareInfo);
  let divCookTime = document.createElement("div");
  let divCutlery = document.createElement("div");
  let imgTime = document.createElement("img");
  let cookTime = document.createElement("h2");
  let selector = document.createElement("select");
  selector.id = "numberOfPortions";

  for(let i = 2; i <= 8; i+=2){
    let foo =  selector.appendChild(document.createElement("option"));
    foo.value = i;
    foo.text = i +" port";
    if (foo.value == 2){
      foo.setAttribute("selected","selected");
    }
  }
  
  let imgCutlery = document.createElement("img");
  divCookTime.id = "cookTime";
  divCutlery.id = "portions";
  imgTime.src = "media/timer.png";
  imgTime.style.height = "30px";
  imgTime.style.width = "30px";
  cookTime.textContent = "20 min";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  divPrepareInfo.appendChild(divCookTime);
  divPrepareInfo.appendChild(divCutlery);
  divCookTime.appendChild(imgTime);
  divCookTime.appendChild(cookTime);
  divCutlery.appendChild(imgCutlery);
  divCutlery.appendChild(selector);

  //  will create a line under info.
  let hr = document.createElement("hr");
  section.appendChild(hr);

  //  Ingrediens
  divIngredients = document.createElement("div");
  divIngredients.setAttribute("class", "container");
  divIngredients.id = "ingredients";
  section.appendChild(divIngredients);

  //  Description / How-to-do
  divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);
  descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör så här:";
  divDescription.appendChild(descriptionHeader);
  descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);

  for(let i = 0; i < howTo.length; i++){
    let description = document.createElement("li");
    description.textContent = howTo[i];
    descriptionList.appendChild(description);
  }

  selector.onchange = function(){resizeIngredients(numberOfPortions);false};

  function createAndAppendIngredientsTwoPortions(){
    ingrediensList = document.createElement("ul");
    divIngredients.appendChild(ingrediensList);

    let ingrediensHeader = document.createElement("h4");
    ingrediensHeader.textContent = "";
    ingrediensHeader.setAttribute("class", "listHeader");
    //ingrediensList.appendChild(ingrediensHeader);
  
    for(let i = 0; i < ingrediensTwoPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingrediensTwoPortions[i];
      ingrediensList.appendChild(ingredien);
    }
  }

  function createAndAppendIngredientsFourPortions(){
    ingrediensList = document.createElement("ul");
    divIngredients.appendChild(ingrediensList);

    let ingrediensHeader = document.createElement("h4");
    ingrediensHeader.textContent = "";
    ingrediensHeader.setAttribute("class", "listHeader");
    //ingrediensList.appendChild(ingrediensHeader);
  
    for(let i = 0; i < ingrediensFourPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingrediensFourPortions[i];
      ingrediensList.appendChild(ingredien);
    }
  }

  function createAndAppendIngredientsSixPortions(){
    ingrediensList = document.createElement("ul");
    divIngredients.appendChild(ingrediensList);

    let ingrediensHeader = document.createElement("h4");
    ingrediensHeader.textContent = "";
    ingrediensHeader.setAttribute("class", "listHeader");
    //ingrediensList.appendChild(ingrediensHeader);
  
    for(let i = 0; i < ingrediensSixPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingrediensSixPortions[i];
      ingrediensList.appendChild(ingredien);
    }
  }

  function createAndAppendIngredientsEightPortions(){
    ingrediensList = document.createElement("ul");
    divIngredients.appendChild(ingrediensList);

    let ingrediensHeader = document.createElement("h4");
    ingrediensHeader.textContent = "";
    ingrediensHeader.setAttribute("class", "listHeader");
    //ingrediensList.appendChild(ingrediensHeader);
  
    for(let i = 0; i < ingrediensEightPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingrediensEightPortions[i];
      ingrediensList.appendChild(ingredien);
    }
  }

  function resizeIngredients(){
    let foo = parseInt(document.getElementById("numberOfPortions").value);
    removeIngredients();
    switch(foo){
      case 2:
        createAndAppendIngredientsTwoPortions();
        break;
      case 4:
        createAndAppendIngredientsFourPortions();
        break;
      case 6:
        createAndAppendIngredientsSixPortions();
        break;
      case 8:
        createAndAppendIngredientsEightPortions();
        break;
    }
  }

  function removeIngredients(){
    document.getElementById("ingredients").innerHTML = "";
  }
  
  createAndAppendIngredientsTwoPortions();
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

/** Dessert3 - FUDGE BROWNIES */
function dessert3(){
  document.getElementsByTagName("body")[0].innerHTML = "";
  //  Building-blocks that will create main elements on the recepie-page.
  let headerWrapper;  //  Create header-tag, contains mainHeader
  let mainHeader;  //  Create recepie header
  let recepieImage;  //  Recepie image
  let divIngredients;  // Wrapper that contains ingredians 
  let ingrediensList;  //  Create a list of ingredians
  let divDescription;  //  Create a list of "How to do" the recepie
  let descriptionHeader;  //  Descripton header
  let descriptionList;  //  Create a list of step by step description

  //  Array of ingredians
  let ingrediensTwoPortions = [
    "6 ordentligt mogna bananer (ungefär 5 dl när de är mosade)",
    "2,5 dl jordnötssmör (eller annat nötsmör)",
    "8 msk proteinpulver",
    "4 msk kakao",
  ]

  let ingrediensFourPortions = [
    "12 ordentligt mogna bananer (ungefär 5 dl när de är mosade)",
    "5 dl jordnötssmör (eller annat nötsmör)",
    "2,5 dl proteinpulver",
    "8 msk kakao",
  ]

  let ingrediensSixPortions = [
    "18 ordentligt mogna bananer (ungefär 5 dl när de är mosade)",
    "7,5 dl jordnötssmör (eller annat nötsmör)",
    "4 dl proteinpulver",
    "2 dl kakao",
  ]

  let ingrediensEightPortions = [
    "24 ordentligt mogna bananer (ungefär 5 dl när de är mosade)",
    "1 l jordnötssmör (eller annat nötsmör)",
    "5 dl proteinpulver",
    "2,5 dl kakao",
  ]

  //  Array of "StepByStep" how to
  let howTo = [
    "Värm ugnen till 180 grader. Smörj en bakform, eller klä i bakplåtspapper, ca 20 cm i diameter.",
    "Mosa bananerna och vispa ihop ordentligt med jordnötssmöret. Rör ner proteinpulvret och kakaon med en sked, och häll sedan ner i bakformen. Ställ i ugnen till önskad konsistens, mellan 12-20 minuter.",
    "Låt svalna i minst 10 minuter innan du skär upp. Kan sparas i kylen i ungefär tre dagar (vi tror dock inte att du kommer få det problemet)."
  ]

  section = document.createElement("section");
  document.body.appendChild(section);
  headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  section.appendChild(headerWrapper);

  //  Page Header
  mainHeader = document.createElement("h1");
  mainHeader.textContent = "FUDGE BROWNIES";
  headerWrapper.appendChild(mainHeader);

  //  Recepie img
  recepieImage = document.createElement("img");
  recepieImage.src = "/Desserts/Fudge-brownies/vegan-fudge-brownie-980x515-c.jpg";
  section.appendChild(recepieImage);

  //  Info below img
  let divPrepareInfo = document.createElement("div");
  divPrepareInfo.id = "prepareInfo";
  divPrepareInfo.setAttribute("class", "container");
  section.appendChild(divPrepareInfo);
  let divCookTime = document.createElement("div");
  let divCutlery = document.createElement("div");
  let imgTime = document.createElement("img");
  let cookTime = document.createElement("h2");
  let selector = document.createElement("select");
  selector.id = "numberOfPortions";

  for(let i = 2; i <= 8; i+=2){
    let foo =  selector.appendChild(document.createElement("option"));
    foo.value = i;
    foo.text = i +" port";
    if (foo.value == 2){
      foo.setAttribute("selected","selected");
    }
  }
 
  let imgCutlery = document.createElement("img");
  divCookTime.id = "cookTime";
  divCutlery.id = "portions";
  imgTime.src = "media/timer.png";
  imgTime.style.height = "30px";
  imgTime.style.width = "30px";
  cookTime.textContent = "60 min";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  divPrepareInfo.appendChild(divCookTime);
  divPrepareInfo.appendChild(divCutlery);
  divCookTime.appendChild(imgTime);
  divCookTime.appendChild(cookTime);
  divCutlery.appendChild(imgCutlery);
  divCutlery.appendChild(selector);
  //  will create a line under info.
  let hr = document.createElement("hr");
  section.appendChild(hr);

  //  Ingrediens
  divIngredients = document.createElement("div");
  divIngredients.setAttribute("class", "container");
  divIngredients.id = "ingredients";
  section.appendChild(divIngredients);

  //  Description / How-to-do
  divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);
  descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör så här:";
  divDescription.appendChild(descriptionHeader);
  descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);

  for(let i = 0; i < howTo.length; i++){
    let description = document.createElement("li");
    description.textContent = howTo[i];
    descriptionList.appendChild(description);
  }
  
  selector.onchange = function(){resizeIngredients(numberOfPortions);false};
  
  function createAndAppendIngredientsTwoPortions(){
    ingrediensList = document.createElement("ul");
    divIngredients.appendChild(ingrediensList);
  
    let ingrediensHeader = document.createElement("h4");
    ingrediensHeader.textContent = "";
    ingrediensHeader.setAttribute("class", "listHeader");
    //ingrediensList.appendChild(ingrediensHeader);

    for(let i = 0; i < ingrediensTwoPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingrediensTwoPortions[i];
      ingrediensList.appendChild(ingredien);
    }
  }

  function createAndAppendIngredientsFourPortions(){
    ingrediensList = document.createElement("ul");
    divIngredients.appendChild(ingrediensList);
  
    let ingrediensHeader = document.createElement("h4");
    ingrediensHeader.textContent = "";
    ingrediensHeader.setAttribute("class", "listHeader");
    //ingrediensList.appendChild(ingrediensHeader);

    for(let i = 0; i < ingrediensFourPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingrediensFourPortions[i];
      ingrediensList.appendChild(ingredien);
    }
  }

  function createAndAppendIngredientsSixPortions(){
    ingrediensList = document.createElement("ul");
    divIngredients.appendChild(ingrediensList);
  
    let ingrediensHeader = document.createElement("h4");
    ingrediensHeader.textContent = "";
    ingrediensHeader.setAttribute("class", "listHeader");
    //ingrediensList.appendChild(ingrediensHeader);

    for(let i = 0; i < ingrediensSixPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingrediensSixPortions[i];
      ingrediensList.appendChild(ingredien);
    }
  }

  function createAndAppendIngredientsEightPortions(){
    ingrediensList = document.createElement("ul");
    divIngredients.appendChild(ingrediensList);
  
    let ingrediensHeader = document.createElement("h4");
    ingrediensHeader.textContent = "";
    ingrediensHeader.setAttribute("class", "listHeader");
    //ingrediensList.appendChild(ingrediensHeader);

    for(let i = 0; i < ingrediensEightPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingrediensEightPortions[i];
      ingrediensList.appendChild(ingredien);
    }
  }

  function resizeIngredients(){
    let foo = parseInt(document.getElementById("numberOfPortions").value);
    removeIngredients();
    switch(foo){
      case 2:
        createAndAppendIngredientsTwoPortions();
        break;
      case 4:
        createAndAppendIngredientsFourPortions();
        break;
      case 6:
        createAndAppendIngredientsSixPortions();
        break;
      case 8:
        createAndAppendIngredientsEightPortions();
        break;
    }
  }

  function removeIngredients(){
    document.getElementById("ingredients").innerHTML = "";
  }
  
  createAndAppendIngredientsTwoPortions();
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

/** -------------------------------- */
/** Dessert4 - KEYLIMEPIE */
function dessert4(){
  document.getElementsByTagName("body")[0].innerHTML = "";
  //  Building-blocks that will create main elements on the recepie-page.
  let headerWrapper;  //  Create header-tag, contains mainHeader
  let mainHeader;  //  Create recepie header
  let recepieImage;  //  Recepie image
  let divIngredients;  // Wrapper that contains ingredians 
  let ingrediensList;  //  Create a list of ingredians
  let divDescription;  //  Create a list of "How to do" the recepie
  let descriptionHeader;  //  Descripton header
  let descriptionList;  //  Create a list of step by step description
  let mainFooter;  //  Create a wrapper that will cointain "Go back button"

  //  Array of ingredians
  let ingrediens = [
    "150 g digestivekex",
    "50 g smör",
    "200 g söt kondenserad mjölk",
    "2 äggulor",
    "1/2 dl färskpressad limejuice",
    "1/2 tsk vaniljsocker",
    "1/2 liter färska jordgubbar",
    "2 dl vispgrädde",
    "4 limeklyftor"
  ]

  //  Array of "StepByStep" how to
  let howTo = [
    "Smula kexen med kniv i en matberedare.",
    "Smält smör och blanda med kexsmulorna.",
    "Rör samman kondenserad mjölk, äggulor, limejuice och vaniljsocker.",
    "Varva ”limekrämen” med kexsmulor och skivade jordgubbar i vackra glas.",
    "Garnera med vispad grädde och en limeklyfta."
  ]

  section = document.createElement("section");
  document.body.appendChild(section);
  headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  section.appendChild(headerWrapper);

  //  Page Header
  mainHeader = document.createElement("h1");
  mainHeader.textContent = "KEY LIME PIE I GLAS";
  headerWrapper.appendChild(mainHeader);

  //  Recepie img
  recepieImage = document.createElement("img");
  recepieImage.src = "/Desserts/KeyLimePie/key-lime-pie-glas-utvald-980x515-c.jpg";
  section.appendChild(recepieImage);

  //  Info below img
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
  cookTime.textContent = "15 min";
  option2.text = "2 port";
  option4.text = "4 port";
  option6.text = "6 port";
  option8.text = "8 port";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  selector.appendChild(option4);  //  choose how many servings/portion.
  divPrepareInfo.appendChild(divCookTime);
  divPrepareInfo.appendChild(divCutlery);
  divCookTime.appendChild(imgTime);
  divCookTime.appendChild(cookTime);
  divCutlery.appendChild(imgCutlery);
  divCutlery.appendChild(selector);
  //  will create a line under info.
  let hr = document.createElement("hr");
  section.appendChild(hr);

  //  Ingrediens
  divIngredients = document.createElement("div");
  divIngredients.setAttribute("class", "container");
  divIngredients.id = "ingredients";
  section.appendChild(divIngredients);
  ingrediensList = document.createElement("ul");
  divIngredients.appendChild(ingrediensList);

  for(let i = 0; i < ingrediens.length; i++){
    let ingredien = document.createElement("li");
    ingredien.textContent = ingrediens[i];
    ingrediensList.appendChild(ingredien);
  }

  //  Description / How-to-do
  divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);
  descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör så här:";
  divDescription.appendChild(descriptionHeader);
  descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);

  for(let i = 0; i < howTo.length; i++){
    let description = document.createElement("li");
    description.textContent = howTo[i];
    descriptionList.appendChild(description);
  }
  
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
} 

/** -------------------------------- */
/** Dessert5 - KLADDKAKA */
function dessert5(){
  document.getElementsByTagName("body")[0].innerHTML = "";
  //  Building-blocks that will create main elements on the recepie-page.
  let headerWrapper;  //  Create header-tag, contains mainHeader
  let mainHeader;  //  Create recepie header
  let recepieImage;  //  Recepie image
  let divIngredients;  // Wrapper that contains ingredians 
  let ingrediensList;  //  Create a list of ingredians
  let divDescription;  //  Create a list of "How to do" the recepie
  let descriptionHeader;  //  Descripton header
  let descriptionList;  //  Create a list of step by step description
  let mainFooter;  //  Create a wrapper that will cointain "Go back button"

  //  Array of ingredians
  let ingrediens = [
    "125g mörk choklad",
    "100g smör",
    "2,5 msk lakritspulver",
    "1 tsk vaniljsocker",
    "1 krm salt",
    "2 dl strösocker",
    "2 ägg",
    "1,5 dl vetemjöl",
    "0,5 tsk bakpulver",
    "1 ask hallon (cirka 250g)",
    "3 dl vispgrädde",
    "florsocker"
  ]

  //  Array of "StepByStep" how to
  let howTo = [
    "Byt chokladen till mindre bitar i en bunke. Smält smöret i en kastrull och häll det över chokladen så den smälter. Rör i lakritspulver, vaniljsocker, salt och strösocker så det löser upp sig. Rör i äggen sist.",
    "Rör ihop chokladsmeten med vetemjöl och bakpulver.",
    "Smöra och mjöla en springform på cirka 23 centimeter i diameter. Häll smeten i formen och grädda kakan i 175°C i 20-25 minuter. Låt svalna.",
    "Varva ”limekrämen” med kexsmulor och skivade jordgubbar i vackra glas.",
    "Vispa grädden. Lossa kakan från formen och lägg på ett fat. Toppa med grädde, hallon och pudra över lite florsocker. Vill du vafriera det hela byter du hallonen mot jordgubbar. Det är också gott att blanda både jordgubbar och hallon."
  ]

  section = document.createElement("section");
  document.body.appendChild(section);
  headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  section.appendChild(headerWrapper);

  //  Page Header
  mainHeader = document.createElement("h1");
  mainHeader.textContent = "KLADDKAKA MED LAKRITS OCH HALLON";
  headerWrapper.appendChild(mainHeader);

  //  Recepie img
  recepieImage = document.createElement("img");
  recepieImage.src = "/Desserts/Kladdkaka/kladdkaka-0D5A7372.jpg";
  section.appendChild(recepieImage);

  //  Info below img
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
  cookTime.textContent = "40 min";
  option2.text = "2 port";
  option4.text = "4 port";
  option6.text = "6 port";
  option8.text = "8 port";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  selector.appendChild(option8);  //  choose how many servings/portion.
  divPrepareInfo.appendChild(divCookTime);
  divPrepareInfo.appendChild(divCutlery);
  divCookTime.appendChild(imgTime);
  divCookTime.appendChild(cookTime);
  divCutlery.appendChild(imgCutlery);
  divCutlery.appendChild(selector);
  //  will create a line under info.
  let hr = document.createElement("hr");
  section.appendChild(hr);

  //  Ingrediens
  divIngredients = document.createElement("div");
  divIngredients.setAttribute("class", "container");
  divIngredients.id = "ingredients";
  section.appendChild(divIngredients);
  ingrediensList = document.createElement("ul");
  divIngredients.appendChild(ingrediensList);

  for(let i = 0; i < ingrediens.length; i++){
    let ingredien = document.createElement("li");
    ingredien.textContent = ingrediens[i];
    ingrediensList.appendChild(ingredien);
  }

  //  Description / How-to-do
  divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);
  descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör så här:";
  divDescription.appendChild(descriptionHeader);
  descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);

  for(let i = 0; i < howTo.length; i++){
    let description = document.createElement("li");
    description.textContent = howTo[i];
    descriptionList.appendChild(description);
  }
  
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

// Vegetarian recipes list  
function vegetarianMenu(){
  document.getElementsByTagName("body")[0].innerHTML = "";

  let headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  document.body.appendChild(headerWrapper);

  //  Page Header
  let secondMainHeader = document.createElement("h1");
  secondMainHeader.textContent = "Vegetariskt";
  headerWrapper.appendChild(secondMainHeader);

  section = document.createElement("section");
  section.id = "secondMenuSection"
  document.body.appendChild(section);

  for(let i = 0; i < 6; i++){
    let divWrapper = document.createElement("div");
    divWrapper.setAttribute("class","secondMenuWrapper");
    section.appendChild(divWrapper);
  }

  let recepie1 = document.getElementsByClassName("secondMenuWrapper")[0];
  let recepie2 = document.getElementsByClassName("secondMenuWrapper")[1];
  let recepie3 = document.getElementsByClassName("secondMenuWrapper")[2];
  let recepie4 = document.getElementsByClassName("secondMenuWrapper")[3];
  let recepie5 = document.getElementsByClassName("secondMenuWrapper")[4];
  let randomBtn = document.getElementsByClassName("secondMenuWrapper")[5];

  //  add eventlisterner
  recepie1.addEventListener("click", vegetarian1);
  recepie2.addEventListener("click", vegetarian2);
  recepie3.addEventListener("click", vegetarian3);
  recepie4.addEventListener("click", vegetarian4);
  recepie5.addEventListener("click", vegetarian5);
  randomBtn.addEventListener("click", randomVegetarian);

  //  recepie1
  let recepieImg = document.createElement("img");
  recepieImg.src = "Vegetarisk/pastagratang/pastagratang.jpg";
  recepie1.appendChild(recepieImg);

  let recepieHeader = document.createElement("h5");
  recepieHeader.textContent = "ITALIENSK PASTAGRATÄNG MED AUBERGINE";
  recepie1.appendChild(recepieHeader);

  //  recepie2
  let recepieImg2 = document.createElement("img");
  recepieImg2.src = "Vegetarisk/Vegobullar/vegobullar-med-kryddpeppar-och-karameliserad-lok.jpg";
  recepie2.appendChild(recepieImg2);

  let recepieHeader2 = document.createElement("h5");
  recepieHeader2.textContent = "VEGOBULLAR MED KRYDDEPPAR OCH KARAMELISERAD LÖK";
  recepie2.appendChild(recepieHeader2);

  //  recepie3
  let recepieImg3 = document.createElement("img");
  recepieImg3.src = "Vegetarisk/Vegetariska kroppkakor/vegetariska-kroppkakor-med-brynt-smor-och-krasse.jpg";
  recepie3.appendChild(recepieImg3);

  let recepieHeader3 = document.createElement("h5");
  recepieHeader3.textContent = "VEGETARISKA KROPPKAKOR MED BRYNT SMÖR OCH KRASSE";
  recepie3.appendChild(recepieHeader3);

  //  recepie4
  let recepieImg4 = document.createElement("img");
  recepieImg4.src = "Vegetarisk/Vego auberginepizza/vego-auberginepizza-med-oliver-och-champinjoner.jpg";
  recepie4.appendChild(recepieImg4);

  let recepieHeader4 = document.createElement("h5");
  recepieHeader4.textContent = "VEGO AUBERGINEPIZZA MED OLIVER OCH CHAMPINJONER";
  recepie4.appendChild(recepieHeader4);

  //  recepie5
  let recepieImg5 = document.createElement("img");
  recepieImg5.src = "Vegetarisk/Vegoburgare/vegetarisk-matsvinnsburgare.jpg";
  recepie5.appendChild(recepieImg5);

  let recepieHeader5 = document.createElement("h5");
  recepieHeader5.textContent = "VEGETARISK MATSVINNSBURGARE";
  recepie5.appendChild(recepieHeader5);


  //  Random recepie
  let randomAtag = document.createElement("a");
  randomAtag.setAttribute("class", "button");
  randomAtag.textContent = "Slumpa ett recept";
  randomBtn.appendChild(randomAtag);
  
  footer();
  btnBack();
}

/** Vegetarian1 - ITALIENSK PASTAGRATÄNG MED AUBERGINE */
function vegetarian1(){
  document.getElementsByTagName("body")[0].innerHTML = "";
  //  Building-blocks that will create main elements on the recepie-page.
  let headerWrapper;  //  Create header-tag, contains mainHeader
  let mainHeader;  //  Create recepie header
  let recepieImage;  //  Recepie image
  let divIngredients;  // Wrapper that contains ingredians 
  let ingredientsList;  //  Create a list of ingredians
  let divDescription;  //  Create a list of "How to do" the recepie
  let descriptionHeader;  //  Descripton header
  let descriptionList;  //  Create a list of step by step description

  //  Array of ingredians
  let ingredients1TwoPortions = ["250 g pasta (gärna kort som t.ex. penne)"];

  let ingredients2TwoPortions = [
    "175 g passerade tomater",
    "175 g krossade tomater",
    "2 klyftor vitlök",
    "0,5 kruka basilika, strimlade basilikablad",
    "ca 0,5 tsk salt",
    "0,5 tsk strösocker",
    "2 msk olivolja",
    "250 g aubergine, skuren i bitar",
    "1,5-2 msk olivolja",
    "0,5 tsk salt",
    "0,25 krm svartpeppar",
    "0,75 dl parmesanost",
    "ca 125 g mozzarellaost",
    "0,5-1 dl ströbröd"
  ];

  let ingredients3TwoPortions = [
    "0,5 huvudsallad",
    "1,5 msk olivolja",
    "0,5 msk balsamvinäger (av god kvalitet)",
    "0,5 rödlök"
  ];

  let ingredients1FourPortions = ["500 g pasta (gärna kort som t.ex. penne)"];

  let ingredients2FourPortions = [
    "350 g passerade tomater",
    "350 g krossade tomater",
    "4 klyftor vitlök",
    "1 kruka basilika, strimlade basilikablad",
    "ca 1 tsk salt",
    "1 tsk strösocker",
    "4 msk olivolja",
    "500 g aubergine, skuren i bitar",
    "3-4 msk olivolja",
    "1 tsk salt",
    "0,5 krm svartpeppar",
    "1,5 dl parmesanost",
    "ca 250 g mozzarellaost",
    "1-2 dl ströbröd"
  ];

  let ingredients3FourPortions = [
    "1 huvudsallad",
    "3 msk olivolja",
    "1 msk balsamvinäger (av god kvalitet)",
    "1 rödlök"
  ];

  let ingredients1SixPortions = ["750 g pasta (gärna kort som t.ex. penne)"];

  let ingredients2SixPortions = [
    "525 g passerade tomater",
    "525 g krossade tomater",
    "6 klyftor vitlök",
    "1,5 kruka basilika, strimlade basilikablad",
    "ca 1,5 tsk salt",
    "1,5 tsk strösocker",
    "6 msk olivolja",
    "750 g aubergine, skuren i bitar",
    "4,5-6 msk olivolja",
    "1,5 tsk salt",
    "0,75 krm svartpeppar",
    "2,25 dl parmesanost",
    "ca 375 g mozzarellaost",
    "1,5-3 dl ströbröd"
  ];

  let ingredients3SixPortions = [
    "1,5 huvudsallad",
    "4,5 msk olivolja",
    "1,5 msk balsamvinäger (av god kvalitet)",
    "1,5 rödlök"
  ];

  let ingredients1EightPortions = ["1 kg pasta (gärna kort som t.ex. penne)"];

  let ingredients2EightPortions = [
    "700 g passerade tomater",
    "700 g krossade tomater",
    "8 klyftor vitlök",
    "2 krukor basilika, strimlade basilikablad",
    "ca 2 tsk salt",
    "2 tsk strösocker",
    "8 msk olivolja",
    "1 kg aubergine, skuren i bitar",
    "6-8 msk olivolja",
    "2 tsk salt",
    "1 krm svartpeppar",
    "3 dl parmesanost",
    "ca 500 g mozzarellaost",
    "2-4 dl ströbröd"
  ];

  let ingredients3EightPortions = [
    "2 huvudsallad",
    "6 msk olivolja",
    "2 msk balsamvinäger (av god kvalitet)",
    "2 rödlök"
  ];


  //  Array of "StepByStep" how to
  let howTo = [
    "Värm upp olivoljan i en kastrull. Låt vitlöksklyftorna fräsa långsamt i oljan, utan att de tar färg.",
    "Tillsätt tomater, basilika, salt och socker. Späd med lite vatten om det behövs. Låt tomatsåsen koka under lock på svag värme i ca 45 minuter.",
    "Plocka upp och kasta vitlöksklyftorna, smaka av med salt.",
    "Lägg auberginebitarna på en lutande skärbräda i 30 minuter. Strö över lite salt och låt lite av den beska vätskan rinna ur.",
    "Sätt ugnen på 200 grader.",
    "Värm hälften av olivoljan i en stor stekpanna, lägg i auberginebitarna och låt dem fräsa på hög värme i ca 5 minuter. Tillsätt ytterligare lite olivolja om det behövs. För att bitarna inte ska bli översaltade smaka först av, salta och peppra sedan. Passa noga så att de inte bränns.",
    "Koka upp lättsaltat pastavatten i en kastrull. Koka pastan ett par minuter kortare tid än vad som anges på förpackningen. Pastan ska vara ordentligt 'al dente'. Låt rinna av i ett durkslag.",
    "Häll tillbaka pastan i kastrullen. Blanda den noga med tomatsås, aubergine och de båda ostsorterna.",
    "Smörj en ugnsform rikligt med olivolja och strö ett lager ströbröd i botten på formen.",
    "Häll sedan försiktigt över lite av pastablandningen i formen. Riv över hälften av osten. Häll över resten av pastabladningen. Riv över resten av osten. Strö sedan över ett jämnt lager ströbröd. Ringla över lite olivolja.",
    "Sätt in formen i ugnen och gratinera pastan ca 15-20 minuter. Stäng av ugnen och låt formen stå kvar i ugnen i 5 minuter.",
    "Skölj salladsbladen i kallt vatten och torka dem med en salladsslunga eller skaka dem torra i en kökshandduk. Riv bladen i bitar och lägg dem i en rymlig salladsskål. Rör ihop alla ingredienser till dressingen och blanda ner den i salladen, försiktigt men noga.",
    "Glöm inte att matsortera resterna från vitlök, basilika och rödlök för en mer hållbar matlagning, och njut av din pastagratäng."
  ]

  section = document.createElement("section");
  document.body.appendChild(section);
  headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  section.appendChild(headerWrapper);

  //  Page Header
  mainHeader = document.createElement("h1");
  mainHeader.textContent = "ITALIENSK PASTAGRATÄNG MED AUBERGINE";
  headerWrapper.appendChild(mainHeader);

  //  Recepie img
  recepieImage = document.createElement("img");
  recepieImage.src = "Vegetarisk/pastagratang/pastagratang.jpg";
  section.appendChild(recepieImage);

  //  Info below img
  let divPrepareInfo = document.createElement("div");
  divPrepareInfo.id = "prepareInfo";
  divPrepareInfo.setAttribute("class", "container");
  section.appendChild(divPrepareInfo);
  let divCookTime = document.createElement("div");
  let divCutlery = document.createElement("div");
  let imgTime = document.createElement("img");
  let cookTime = document.createElement("h2");
  let selector = document.createElement("select");
  selector.id = "numberOfPortions";

  for(let i = 2; i <= 8; i+=2){
    let foo =  selector.appendChild(document.createElement("option"));
    foo.value = i;
    foo.text = i +" port";
    if (foo.value == 4){
      foo.setAttribute("selected","selected");
    }
  }
 
  let imgCutlery = document.createElement("img");
  divCookTime.id = "cookTime";
  divCutlery.id = "portions";
  imgTime.src = "media/timer.png";
  imgTime.style.height = "30px";
  imgTime.style.width = "30px";
  cookTime.textContent = "60 min";  // estimated cooking time
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  divPrepareInfo.appendChild(divCookTime);
  divPrepareInfo.appendChild(divCutlery);
  divCookTime.appendChild(imgTime);
  divCookTime.appendChild(cookTime);
  divCutlery.appendChild(imgCutlery);
  divCutlery.appendChild(selector);
  //  will create a line under info.
  let hr = document.createElement("hr");
  section.appendChild(hr);

  //  Ingredients
  divIngredients = document.createElement("div");
  divIngredients.setAttribute("class", "container");
  divIngredients.id = "ingredients";
  section.appendChild(divIngredients);

  //  Description / How-to-do
  divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);
  descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör så här:";
  divDescription.appendChild(descriptionHeader);
  descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);

  for(let i = 0; i < howTo.length; i++){
    let description = document.createElement("li");
    description.textContent = howTo[i];
    descriptionList.appendChild(description);
  }

  selector.onchange = function(){resizeIngredients(numberOfPortions);false};
  
  function createAndAppendIngredientsTwoPortions(){
    ingredientsList = document.createElement("ul");
    divIngredients.appendChild(ingredientsList);
  
    let ingredientsHeader = document.createElement("h4");
    ingredientsHeader.textContent = "Pasta:";
    ingredientsHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsHeader);

    for(let i = 0; i < ingredients1TwoPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingredients1TwoPortions[i];
      ingredientsList.appendChild(ingredien);
    }

    let ingredientsSecondHeader = document.createElement("h4");
    ingredientsSecondHeader.textContent = "Tomatsås:";
    ingredientsSecondHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsSecondHeader);
  
    for(let i = 0; i < ingredients2TwoPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingredients2TwoPortions[i];
      ingredientsList.appendChild(ingredien);
    }

    let ingredientsThirdHeader = document.createElement("h4");
    ingredientsThirdHeader.textContent = "Sallad:";
    ingredientsThirdHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsThirdHeader);
  
    for(let i = 0; i < ingredients3TwoPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingredients3TwoPortions[i];
      ingredientsList.appendChild(ingredien);
    }
  }

  function createAndAppendIngredientsFourPortions(){
    ingredientsList = document.createElement("ul");
    divIngredients.appendChild(ingredientsList);
  
    let ingredientsHeader = document.createElement("h4");
    ingredientsHeader.textContent = "Pasta:";
    ingredientsHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsHeader);

    for(let i = 0; i < ingredients1FourPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingredients1FourPortions[i];
      ingredientsList.appendChild(ingredien);
    }

    let ingredientsSecondHeader = document.createElement("h4");
    ingredientsSecondHeader.textContent = "Tomatsås:";
    ingredientsSecondHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsSecondHeader);
  
    for(let i = 0; i < ingredients2FourPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingredients2FourPortions[i];
      ingredientsList.appendChild(ingredien);
    }

    let ingredientsThirdHeader = document.createElement("h4");
    ingredientsThirdHeader.textContent = "Sallad:";
    ingredientsThirdHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsThirdHeader);
  
    for(let i = 0; i < ingredients3FourPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingredients3FourPortions[i];
      ingredientsList.appendChild(ingredien);
    }
  }

  function createAndAppendIngredientsSixPortions(){
    ingredientsList = document.createElement("ul");
    divIngredients.appendChild(ingredientsList);
  
    let ingredientsHeader = document.createElement("h4");
    ingredientsHeader.textContent = "Pasta:";
    ingredientsHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsHeader);

    for(let i = 0; i < ingredients1SixPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingredients1SixPortions[i];
      ingredientsList.appendChild(ingredien);
    }

    let ingredientsSecondHeader = document.createElement("h4");
    ingredientsSecondHeader.textContent = "Tomatsås:";
    ingredientsSecondHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsSecondHeader);
  
    for(let i = 0; i < ingredients2SixPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingredients2SixPortions[i];
      ingredientsList.appendChild(ingredien);
    }

    let ingredientsThirdHeader = document.createElement("h4");
    ingredientsThirdHeader.textContent = "Sallad:";
    ingredientsThirdHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsThirdHeader);
  
    for(let i = 0; i < ingredients3SixPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingredients3SixPortions[i];
      ingredientsList.appendChild(ingredien);
    }
  }

  function createAndAppendIngredientsEightPortions(){
    ingredientsList = document.createElement("ul");
    divIngredients.appendChild(ingredientsList);
  
    let ingredientsHeader = document.createElement("h4");
    ingredientsHeader.textContent = "Pasta:";
    ingredientsHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsHeader);

    for(let i = 0; i < ingredients1EightPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingredients1EightPortions[i];
      ingredientsList.appendChild(ingredien);
    }

    let ingredientsSecondHeader = document.createElement("h4");
    ingredientsSecondHeader.textContent = "Tomatsås:";
    ingredientsSecondHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsSecondHeader);
  
    for(let i = 0; i < ingredients2EightPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingredients2EightPortions[i];
      ingredientsList.appendChild(ingredien);
    }

    let ingredientsThirdHeader = document.createElement("h4");
    ingredientsThirdHeader.textContent = "Sallad:";
    ingredientsThirdHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsThirdHeader);
  
    for(let i = 0; i < ingredients3EightPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingredients3EightPortions[i];
      ingredientsList.appendChild(ingredien);
    }
  }

  function resizeIngredients(){
    let foo = parseInt(document.getElementById("numberOfPortions").value);
    removeIngredients();
    switch(foo){
      case 2:
        createAndAppendIngredientsTwoPortions();
        break;
      case 4:
        createAndAppendIngredientsFourPortions();
        break;
      case 6:
        createAndAppendIngredientsSixPortions();
        break;
      case 8:
        createAndAppendIngredientsEightPortions();
        break;
    }
  }

  function removeIngredients(){
    document.getElementById("ingredients").innerHTML = "";
  }
  
  createAndAppendIngredientsFourPortions();
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

/** Vegetarian2 - VEGOBULLAR MED KRYDDEPPAR OCH KARAMELISERAD LÖK */
function vegetarian2(){
  document.getElementsByTagName("body")[0].innerHTML = "";
  //  Building-blocks that will create main elements on the recepie-page.
  let headerWrapper;  //  Create header-tag, contains mainHeader
  let mainHeader;  //  Create recepie header
  let recepieImage;  //  Recepie image
  let divIngredients;  // Wrapper that contains ingredians 
  let ingredientsList;  //  Create a list of ingredians
  let divDescription;  //  Create a list of "How to do" the recepie
  let descriptionHeader;  //  Descripton header
  let descriptionList;  //  Create a list of step by step description

  //  Array of ingredians
  let ingredientsTwoPortions = [
    "200 g Hälsans Kök Incredible Mince",
    "1 gul lök",
    "1,5 msk rapsolja",
    "0,5 tsk malen kryddpeppar",
    "0,5 tsk svartpeppar",
    "1 krm vitpeppar",
    "1 msk dijonsenap",
    "1 msk soja",
    "0,5 msk grönsaksfond"
  ];

  let ingredientsFourPortions = [
    "400 g Hälsans Kök Incredible Mince",
    "2 gula lökar",
    "3 msk rapsolja",
    "1 tsk malen kryddpeppar",
    "1 tsk svartpeppar",
    "0,5 tsk vitpeppar",
    "2 msk dijonsenap",
    "2 msk soja",
    "1 msk grönsaksfond"
  ];

  let ingredientsSixPortions = [
    "600 g Hälsans Kök Incredible Mince",
    "3 gula lökar",
    "4,5 msk rapsolja",
    "1,5 tsk malen kryddpeppar",
    "1,5 tsk svartpeppar",
    "1 tsk vitpeppar",
    "3 msk dijonsenap",
    "3 msk soja",
    "1,5 msk grönsaksfond"
  ];

  let ingredientsEightPortions = [
    "800 g Hälsans Kök Incredible Mince",
    "4 gula lökar",
    "6 msk rapsolja",
    "2 tsk malen kryddpeppar",
    "2 tsk svartpeppar",
    "1 tsk vitpeppar",
    "4 msk dijonsenap",
    "4 msk soja",
    "2 msk grönsaksfond"
  ];

  //  Array of "StepByStep" how to
  let howTo = [
    "Tärna löken fint. Stek på låg värme tills den är gyllene i rapsolja, ca 15 minuter. Låt svalna.",
    "Blanda alla ingredienserna i en skål och krydda med salt.",
    "Rulla små bollar och stek i rapsolja tills de är gyllene.",
    ]

  section = document.createElement("section");
  document.body.appendChild(section);
  headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  section.appendChild(headerWrapper);

  //  Page Header
  mainHeader = document.createElement("h1");
  mainHeader.textContent = "VEGOBULLAR MED KRYDDEPPAR OCH KARAMELISERAD LÖK";
  headerWrapper.appendChild(mainHeader);

  //  Recepie img
  recepieImage = document.createElement("img");
  recepieImage.src = "Vegetarisk/Vegobullar/vegobullar-med-kryddpeppar-och-karameliserad-lok.jpg";
  section.appendChild(recepieImage);

  //  Info below img
  let divPrepareInfo = document.createElement("div");
  divPrepareInfo.id = "prepareInfo";
  divPrepareInfo.setAttribute("class", "container");
  section.appendChild(divPrepareInfo);
  let divCookTime = document.createElement("div");
  let divCutlery = document.createElement("div");
  let imgTime = document.createElement("img");
  let cookTime = document.createElement("h2");
  let selector = document.createElement("select");
  selector.id = "numberOfPortions";

  for(let i = 2; i <= 8; i+=2){
    let foo =  selector.appendChild(document.createElement("option"));
    foo.value = i;
    foo.text = i +" port";
    if (foo.value == 4){
      foo.setAttribute("selected","selected");
    }
  }
 
  let imgCutlery = document.createElement("img");
  divCookTime.id = "cookTime";
  divCutlery.id = "portions";
  imgTime.src = "media/timer.png";
  imgTime.style.height = "30px";
  imgTime.style.width = "30px";
  cookTime.textContent = "30 min";  // estimated cooking time
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  divPrepareInfo.appendChild(divCookTime);
  divPrepareInfo.appendChild(divCutlery);
  divCookTime.appendChild(imgTime);
  divCookTime.appendChild(cookTime);
  divCutlery.appendChild(imgCutlery);
  divCutlery.appendChild(selector);
  //  will create a line under info.
  let hr = document.createElement("hr");
  section.appendChild(hr);

  //  Ingredients
  divIngredients = document.createElement("div");
  divIngredients.setAttribute("class", "container");
  divIngredients.id = "ingredients";
  section.appendChild(divIngredients);

  //  Description / How-to-do
  divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);
  descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör så här:";
  divDescription.appendChild(descriptionHeader);
  descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);

  for(let i = 0; i < howTo.length; i++){
    let description = document.createElement("li");
    description.textContent = howTo[i];
    descriptionList.appendChild(description);
  }

  selector.onchange = function(){resizeIngredients(numberOfPortions);false};
  
  function createAndAppendIngredientsTwoPortions(){
    ingredientsList = document.createElement("ul");
    divIngredients.appendChild(ingredientsList);
  
    let ingredientsHeader = document.createElement("h4");
    ingredientsHeader.textContent = "";
    ingredientsHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsHeader);

    for(let i = 0; i < ingredientsTwoPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingredientsTwoPortions[i];
      ingredientsList.appendChild(ingredien);
    }
  }

  function createAndAppendIngredientsFourPortions(){
    ingredientsList = document.createElement("ul");
    divIngredients.appendChild(ingredientsList);
  
    let ingredientsHeader = document.createElement("h4");
    ingredientsHeader.textContent = "";
    ingredientsHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsHeader);

    for(let i = 0; i < ingredientsFourPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingredientsFourPortions[i];
      ingredientsList.appendChild(ingredien);
    }
  }

  function createAndAppendIngredientsSixPortions(){
    ingredientsList = document.createElement("ul");
    divIngredients.appendChild(ingredientsList);
  
    let ingredientsHeader = document.createElement("h4");
    ingredientsHeader.textContent = "";
    ingredientsHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsHeader);

    for(let i = 0; i < ingredientsSixPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingredientsSixPortions[i];
      ingredientsList.appendChild(ingredien);
    }
  }

  function createAndAppendIngredientsEightPortions(){
    ingredientsList = document.createElement("ul");
    divIngredients.appendChild(ingredientsList);
  
    let ingredientsHeader = document.createElement("h4");
    ingredientsHeader.textContent = "";
    ingredientsHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsHeader);

    for(let i = 0; i < ingredientsEightPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingredientsEightPortions[i];
      ingredientsList.appendChild(ingredien);
    }
  }

  function resizeIngredients(){
    let foo = parseInt(document.getElementById("numberOfPortions").value);
    removeIngredients();
    switch(foo){
      case 2:
        createAndAppendIngredientsTwoPortions();
        break;
      case 4:
        createAndAppendIngredientsFourPortions();
        break;
      case 6:
        createAndAppendIngredientsSixPortions();
        break;
      case 8:
        createAndAppendIngredientsEightPortions();
        break;
    }
  }

  function removeIngredients(){
    document.getElementById("ingredients").innerHTML = "";
  }
  
  createAndAppendIngredientsFourPortions();
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

/** Vegetarian3 - VEGETARISKA KROPPKAKOR MED BRYNT SMÖR OCH KARSSE */
function vegetarian3(){
  document.getElementsByTagName("body")[0].innerHTML = "";
  //  Building-blocks that will create main elements on the recepie-page.
  let headerWrapper;  //  Create header-tag, contains mainHeader
  let mainHeader;  //  Create recepie header
  let recepieImage;  //  Recepie image
  let divIngredients;  // Wrapper that contains ingredians 
  let ingredientsList;  //  Create a list of ingredians
  let divDescription;  //  Create a list of "How to do" the recepie
  let descriptionHeader;  //  Descripton header
  let descriptionList;  //  Create a list of step by step description

  //  Array of ingredians
  let ingredients1TwoPortions = [
    "0,5 kg mjölig potatis",
    "0,5 tsk salt",
    "0,5 ägg",
    "1,5 dl vetemjöl",
    "olja, till stekning"
  ];

  // Fyllning
  let ingredients2TwoPortions = [
    "0,5 gul lök",
    "0,5 morot",
    "75 g rotselleri",
    "75 g vitkål",
    "1 msk solrosfrö",
    "0,5 tsk vitpeppar",
    "0,25 krm liquid smoke",
    "salt",
    "peppar"
  ];

  let ingredients3TwoPortions = [
    "38 g smör, brynt",
    "0,25 ask krasse",
    "1 dl rårörda lingon"
  ];

  let ingredients1FourPortions = [
    "1 kg mjölig potatis",
    "1 tsk salt",
    "1 ägg",
    "3 dl vetemjöl",
    "olja, till stekning"
  ];

  // Fyllning
  let ingredients2FourPortions = [
    "1 gul lök",
    "1 morot",
    "150 g rotselleri",
    "150 g vitkål",
    "2 msk solrosfrö",
    "1 tsk vitpeppar",
    "0,5 krm liquid smoke",
    "salt",
    "peppar"
  ];

  let ingredients3FourPortions = [
    "75 g smör, brynt",
    "0,5 ask krasse",
    "2 dl rårörda lingon"
  ];

  let ingredients1SixPortions = [
    "1,5 kg mjölig potatis",
    "1,5 tsk salt",
    "1,5 ägg",
    "4,5 dl vetemjöl",
    "olja, till stekning"
  ];

  // Fyllning
  let ingredients2SixPortions = [
    "1,5 gul lök",
    "1,5 morot",
    "225 g rotselleri",
    "225 g vitkål",
    "3 msk solrosfrö",
    "1,5 tsk vitpeppar",
    "0,75 krm liquid smoke",
    "salt",
    "peppar"
  ];

  let ingredients3SixPortions = [
    "110 g smör, brynt",
    "0,75 ask krasse",
    "3 dl rårörda lingon"
  ];

  let ingredients1EightPortions = [
    "2 kg mjölig potatis",
    "2 tsk salt",
    "2 ägg",
    "6 dl vetemjöl",
    "olja, till stekning"
  ];

  // Fyllning
  let ingredients2EightPortions = [
    "2 gula lökar",
    "2 morötter",
    "300 g rotselleri",
    "300 g vitkål",
    "4 msk solrosfrö",
    "2 tsk vitpeppar",
    "1 krm liquid smoke",
    "salt",
    "peppar"
  ];

  let ingredients3EightPortions = [
    "150 g smör, brynt",
    "1 ask krasse",
    "4 dl rårörda lingon"
  ];

  //  Array of "StepByStep" how to
  let howTo = [
    "Skala potatisen och koka den mjuk i saltat vatten.",
    "Pressa potatis med potatispress och låt svalna helt.",
    "Skala och riv morot och rotselleri på grova sidan av rivjärnet. Skiva vitkålen och hacka löken.",
    "Stek morot, rotselleri och lök i olja på hög värme så att allt får lite färg. Tillsätt vitkålen och några droppar liquid smoke. Salta och peppra. Låt svalna.",
    "Blanda den svalnade potatisen med ägg, mjöl och salt till en smidig deg.",
    "Ta en bit deg och platta ut den, fyll med 1 msk fyllning och gör bollar.",
    "Koka i ca 2 minuter tills de flyter upp till ytan. Ta upp med hålslev.",
    "Bryn smöret i en kastrull.",
    "Vänd runt kroppkakorna i brynt smör och servera med krasse och rårörda lingon.",
    "Glöm inte att matsortera skal från ägg, potatis och grönsaker för en mer hållbar matlagning, och njut av din vegetariska kroppkakor."
  ];

  section = document.createElement("section");
  document.body.appendChild(section);
  headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  section.appendChild(headerWrapper);

  //  Page Header
  mainHeader = document.createElement("h1");
  mainHeader.textContent = "VEGETARISKA KROPPKAKOR MED BRYNT SMÖR OCH KARSSE";
  headerWrapper.appendChild(mainHeader);

  //  Recepie img
  recepieImage = document.createElement("img");
  recepieImage.src = "Vegetarisk/Vegetariska kroppkakor/vegetariska-kroppkakor-med-brynt-smor-och-krasse.jpg";
  section.appendChild(recepieImage);

  //  Info below img
  let divPrepareInfo = document.createElement("div");
  divPrepareInfo.id = "prepareInfo";
  divPrepareInfo.setAttribute("class", "container");
  section.appendChild(divPrepareInfo);
  let divCookTime = document.createElement("div");
  let divCutlery = document.createElement("div");
  let imgTime = document.createElement("img");
  let cookTime = document.createElement("h2");
  let selector = document.createElement("select");
  selector.id = "numberOfPortions";

  for(let i = 2; i <= 8; i+=2){
    let foo =  selector.appendChild(document.createElement("option"));
    foo.value = i;
    foo.text = i +" port";
    if (foo.value == 4){
      foo.setAttribute("selected","selected");
    }
  }
 
  let imgCutlery = document.createElement("img");
  divCookTime.id = "cookTime";
  divCutlery.id = "portions";
  imgTime.src = "media/timer.png";
  imgTime.style.height = "30px";
  imgTime.style.width = "30px";
  cookTime.textContent = "60 min";  // estimated cooking time
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  divPrepareInfo.appendChild(divCookTime);
  divPrepareInfo.appendChild(divCutlery);
  divCookTime.appendChild(imgTime);
  divCookTime.appendChild(cookTime);
  divCutlery.appendChild(imgCutlery);
  divCutlery.appendChild(selector);
  //  will create a line under info.
  let hr = document.createElement("hr");
  section.appendChild(hr);

  //  Ingredients
  divIngredients = document.createElement("div");
  divIngredients.setAttribute("class", "container");
  divIngredients.id = "ingredients";
  section.appendChild(divIngredients);

  function createAndAppendIngredientsTwoPortions(){
    ingredientsList = document.createElement("ul");
    divIngredients.appendChild(ingredientsList);
  
    let ingredientsHeader = document.createElement("h4");
    ingredientsHeader.textContent = "";
    ingredientsHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsHeader);

    for(let i = 0; i < ingredients1TwoPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingredients1TwoPortions[i];
      ingredientsList.appendChild(ingredien);
    }

    let ingredientsSecondHeader = document.createElement("h4");
    ingredientsSecondHeader.textContent = "Fyllning:";
    ingredientsSecondHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsSecondHeader);
  
    for(let i = 0; i < ingredients2TwoPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingredients2TwoPortions[i];
      ingredientsList.appendChild(ingredien);
    }

    let ingredientsThirdHeader = document.createElement("h4");
    ingredientsThirdHeader.textContent = "Till servering:";
    ingredientsThirdHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsThirdHeader);
  
    for(let i = 0; i < ingredients3TwoPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingredients3TwoPortions[i];
      ingredientsList.appendChild(ingredien);
    }
  }

  function createAndAppendIngredientsFourPortions(){
    ingredientsList = document.createElement("ul");
    divIngredients.appendChild(ingredientsList);
  
    let ingredientsHeader = document.createElement("h4");
    ingredientsHeader.textContent = "";
    ingredientsHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsHeader);

    for(let i = 0; i < ingredients1FourPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingredients1FourPortions[i];
      ingredientsList.appendChild(ingredien);
    }

    let ingredientsSecondHeader = document.createElement("h4");
    ingredientsSecondHeader.textContent = "Fyllning:";
    ingredientsSecondHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsSecondHeader);
  
    for(let i = 0; i < ingredients2FourPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingredients2FourPortions[i];
      ingredientsList.appendChild(ingredien);
    }

    let ingredientsThirdHeader = document.createElement("h4");
    ingredientsThirdHeader.textContent = "Till servering:";
    ingredientsThirdHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsThirdHeader);
  
    for(let i = 0; i < ingredients3FourPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingredients3FourPortions[i];
      ingredientsList.appendChild(ingredien);
    }
  }

  function createAndAppendIngredientsSixPortions(){
    ingredientsList = document.createElement("ul");
    divIngredients.appendChild(ingredientsList);
  
    let ingredientsHeader = document.createElement("h4");
    ingredientsHeader.textContent = "";
    ingredientsHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsHeader);

    for(let i = 0; i < ingredients1SixPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingredients1SixPortions[i];
      ingredientsList.appendChild(ingredien);
    }

    let ingredientsSecondHeader = document.createElement("h4");
    ingredientsSecondHeader.textContent = "Fyllning:";
    ingredientsSecondHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsSecondHeader);
  
    for(let i = 0; i < ingredients2SixPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingredients2SixPortions[i];
      ingredientsList.appendChild(ingredien);
    }

    let ingredientsThirdHeader = document.createElement("h4");
    ingredientsThirdHeader.textContent = "Till servering:";
    ingredientsThirdHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsThirdHeader);
  
    for(let i = 0; i < ingredients3SixPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingredients3SixPortions[i];
      ingredientsList.appendChild(ingredien);
    }
  }
  
  function createAndAppendIngredientsEightPortions(){
    ingredientsList = document.createElement("ul");
    divIngredients.appendChild(ingredientsList);
  
    let ingredientsHeader = document.createElement("h4");
    ingredientsHeader.textContent = "";
    ingredientsHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsHeader);

    for(let i = 0; i < ingredients1EightPortions.length; i++){
      let ingredien = document.createElement("li");
      ingredien.textContent = ingredients1EightPortions[i];
      ingredientsList.appendChild(ingredien);
    }

    let ingredientsSecondHeader = document.createElement("h4");
    ingredientsSecondHeader.textContent = "Fyllning:";
    ingredientsSecondHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsSecondHeader);
  
    for(let i = 0; i < ingredients2EightPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingredients2EightPortions[i];
      ingredientsList.appendChild(ingredien);
    }

    let ingredientsThirdHeader = document.createElement("h4");
    ingredientsThirdHeader.textContent = "Till servering:";
    ingredientsThirdHeader.setAttribute("class", "listHeader");
    ingredientsList.appendChild(ingredientsThirdHeader);
  
    for(let i = 0; i < ingredients3EightPortions.length; i++){
      let ingredien = document.createElement("li")
      ingredien.textContent = ingredients3EightPortions[i];
      ingredientsList.appendChild(ingredien);
    }
  }

  //  Description / How-to-do
  divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);
  descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör så här:";
  divDescription.appendChild(descriptionHeader);
  descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);

  for(let i = 0; i < howTo.length; i++){
    let description = document.createElement("li");
    description.textContent = howTo[i];
    descriptionList.appendChild(description);
  }

  selector.onchange = function(){resizeIngredients(numberOfPortions);false};

  function resizeIngredients(){
    let foo = parseInt(document.getElementById("numberOfPortions").value);
    removeIngredients();
    switch(foo){
      case 2:
        createAndAppendIngredientsTwoPortions();
        break;
      case 4:
        createAndAppendIngredientsFourPortions();
        break;
      case 6:
        createAndAppendIngredientsSixPortions();
        break;
      case 8:
        createAndAppendIngredientsEightPortions();
        break;
    }
  }

  function removeIngredients(){
    document.getElementById("ingredients").innerHTML = "";
  }
  
  createAndAppendIngredientsFourPortions();
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}


/** Vegetarian4 - VEGO AUBERGINEPIZZA MED OLIVER OCH CHAMPINJONER */
function vegetarian4(){
  document.getElementsByTagName("body")[0].innerHTML = "";
  //  Building-blocks that will create main elements on the recepie-page.
  let headerWrapper;  //  Create header-tag, contains mainHeader
  let mainHeader;  //  Create recepie header
  let recepieImage;  //  Recepie image
  let divIngredients;  // Wrapper that contains ingredians 
  let ingredientsList;  //  Create a list of ingredians
  let divDescription;  //  Create a list of "How to do" the recepie
  let descriptionHeader;  //  Descripton header
  let descriptionList;  //  Create a list of step by step description

  //  Pizzabotten
  let ingredients = [
    "2 dl vatten",
    "0,5 förp torrjäst",
    "4 dl vetemjöl",
    "0,5 krm salt"
  ];

  // Tomatsås
  let ingredients2 = [
    "400 g krossade tomater",
    "1 gul lök",
    "2 klyfta vitlök",
    "1 stjälk stjälkselleri",
    "1 röd chilifrukt",
    "0,5 krm salt"
  ];

  // Topping
  let ingredients3 = [
    "1 aubergine",
    "grovt havssalt",
    "10 svarta oliver",
    "3 champinjoner",
    "150 g Valio Oddlygood Veggie grated",
    "färsk basilika"
  ];

  //  Array of "StepByStep" how to
  let howTo = [
    "Värm vattnet till 41 grader.",
    "Blanda ihop de torra ingredienser till pizzabotten och rör ut dem i vattnet.",
    "Knåda degen ordentligt. Låt degen jäsa under bakduk medan du tillreder fyllningen.",
    "Finhacka alla grönsaker till tomatsåsen och lägg ner dem i en kastrull.",
    "Låt koka på svag värme i 15 minuter. Salta och peppra.",
    "Skär auberginen i tunna skivor. Lägg ut skivorna på ett hushållspapper på arbetsbänken. Strö på rikligt med havssalt och vänta tills vätskan från auberginen dragits ut. Torka av vätska och överflödigt salt. Stek skivorna i olja i stekpanna eller i ugn på mittersta/översta falsen i 250 grader 15 minuter.",
    "Kavla ut degen och lägg den på bakplåtspapper på en bakplåt. Bred på tomatsås och fördela aubergine, oliver och skivade champinjoner över pizzan. Strö riven Oddlygood ovanpå. Grädda i 15 minuter.",
    "Toppa med färsk basilika."
  ];

  section = document.createElement("section");
  document.body.appendChild(section);
  headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  section.appendChild(headerWrapper);

  //  Page Header
  mainHeader = document.createElement("h1");
  mainHeader.textContent = "VEGO AUBERGINEPIZZA MED OLIVER OCH CHAMPINJONER";
  headerWrapper.appendChild(mainHeader);

  //  Recepie img
  recepieImage = document.createElement("img");
  recepieImage.src = "Vegetarisk/Vego auberginepizza/vego-auberginepizza-med-oliver-och-champinjoner.jpg";
  section.appendChild(recepieImage);

  //  Info below img
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
  cookTime.textContent = "60 min";  // estimated cooking time
  option2.text = "2 port";
  option4.text = "4 port";
  option6.text = "6 port";
  option8.text = "8 port";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  selector.appendChild(option4);  //  choose how many servings/portion.
  divPrepareInfo.appendChild(divCookTime);
  divPrepareInfo.appendChild(divCutlery);
  divCookTime.appendChild(imgTime);
  divCookTime.appendChild(cookTime);
  divCutlery.appendChild(imgCutlery);
  divCutlery.appendChild(selector);
  //  will create a line under info.
  let hr = document.createElement("hr");
  section.appendChild(hr);

  //  Ingredients
  divIngredients = document.createElement("div");
  divIngredients.setAttribute("class", "container");
  divIngredients.id = "ingredients";
  section.appendChild(divIngredients);
  ingredientsList = document.createElement("ul");
  divIngredients.appendChild(ingredientsList);
  
  let ingredientsHeader = document.createElement("h4");
  ingredientsHeader.textContent = "Pizzabotten:";
  ingredientsHeader.setAttribute("class", "listHeader");
  ingredientsList.appendChild(ingredientsHeader);

  for(let i = 0; i < ingredients.length; i++){
    let ingredien = document.createElement("li");
    ingredien.textContent = ingredients[i];
    ingredientsList.appendChild(ingredien);
  }

  let ingredientsSecondHeader = document.createElement("h4");
  ingredientsSecondHeader.textContent = "Tomatsås:";
  ingredientsSecondHeader.setAttribute("class", "listHeader");
  ingredientsList.appendChild(ingredientsSecondHeader);
  
  for(let i = 0; i < ingredients2.length; i++){
    let ingredien = document.createElement("li")
    ingredien.textContent = ingredients2[i];
    ingredientsList.appendChild(ingredien);
  }

  let ingredientsThirdHeader = document.createElement("h4");
  ingredientsThirdHeader.textContent = "Topping:";
  ingredientsThirdHeader.setAttribute("class", "listHeader");
  ingredientsList.appendChild(ingredientsThirdHeader);
  
  for(let i = 0; i < ingredients3.length; i++){
    let ingredien = document.createElement("li")
    ingredien.textContent = ingredients3[i];
    ingredientsList.appendChild(ingredien);
  }

  //  Description / How-to-do
  divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);
  descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör såhär:";
  divDescription.appendChild(descriptionHeader);
  descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);

  for(let i = 0; i < howTo.length; i++){
    let description = document.createElement("li");
    description.textContent = howTo[i];
    descriptionList.appendChild(description);
  }

  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

function vegetarian5(){
  document.getElementsByTagName("body")[0].innerHTML = "";
  let headerWrapper;  //  Create header-tag, contains mainHeader
  let mainHeader;  //  Create recepie header
  let recepieImage;  //  Recepie image
  let divIngredients;  // Wrapper that contains ingredians 
  let ingredientsList;  //  Create a list of ingredians
  let divDescription;  //  Create a list of "How to do" the recepie
  let descriptionHeader;  //  Descripton header
  let descriptionList;  //  Create a list of step by step description

  //  Ingredients
  let ingredients = [
    "3 potatisar, kokta",
    "100 g champinjoner",
    "1 dl ströbröd",
    "1 dl röda linser, kokta",
    "2 klyfta vitlök",
    "3 salladslökar (eller 1 gul lök)",
    "salt",
    "peppar"
  ];

  // Servering
  let ingredients2 = [
    "4 hamburgerbröd",
    "ketchup",
    "senap",
    "1 tomat",
    "majonnäs",
    "hackad gurkmix"
  ];

  //  Array of "StepByStep" how to
  let howTo = [
    "Skala potatisen och mosa den. Hacka vitlök och salladslök, även det gröna på salladslöken. Riv champinjonerna på den grova sidan av rivjärnet.",
    "Blanda ihop alla ingredienser, låt svälla i 10 minuter. Är smeten för lös? Blanda i mer ströbröd och låt stå en stund till. För torr? Blanda i en skvätt vatten.",
    "Forma smeten till burgare och stek i rapsolja i en non stick panna.",
    "Servera burgarna i bröd med alla tillbehören på."
  ];

  section = document.createElement("section");
  document.body.appendChild(section);
  headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  section.appendChild(headerWrapper);

  //  Page Header
  mainHeader = document.createElement("h1");
  mainHeader.textContent = "VEGETARISK MATSVINNSBURGARE";
  headerWrapper.appendChild(mainHeader);

  //  Recepie img
  recepieImage = document.createElement("img");
  recepieImage.src = "Vegetarisk/Vegoburgare/vegetarisk-matsvinnsburgare.jpg";
  section.appendChild(recepieImage);

  //  Info below img
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
  cookTime.textContent = "30 min";  // estimated cooking time
  option2.text = "2 port";
  option4.text = "4 port";
  option6.text = "6 port";
  option8.text = "8 port";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  selector.appendChild(option4);  //  choose how many servings/portion.
  divPrepareInfo.appendChild(divCookTime);
  divPrepareInfo.appendChild(divCutlery);
  divCookTime.appendChild(imgTime);
  divCookTime.appendChild(cookTime);
  divCutlery.appendChild(imgCutlery);
  divCutlery.appendChild(selector);
  //  will create a line under info.
  let hr = document.createElement("hr");
  section.appendChild(hr);

  //  Ingredients
  divIngredients = document.createElement("div");
  divIngredients.setAttribute("class", "container");
  divIngredients.id = "ingredients";
  section.appendChild(divIngredients);
  ingredientsList = document.createElement("ul");
  divIngredients.appendChild(ingredientsList);
  
  let ingredientsHeader = document.createElement("h4");
  ingredientsHeader.textContent = "Burgare:";
  ingredientsHeader.setAttribute("class", "listHeader");
  ingredientsList.appendChild(ingredientsHeader);

  for(let i = 0; i < ingredients.length; i++){
    let ingredien = document.createElement("li");
    ingredien.textContent = ingredients[i];
    ingredientsList.appendChild(ingredien);
  }

  let ingredientsSecondHeader = document.createElement("h4");
  ingredientsSecondHeader.textContent = "Servering:";
  ingredientsSecondHeader.setAttribute("class", "listHeader");
  ingredientsList.appendChild(ingredientsSecondHeader);
  
  for(let i = 0; i < ingredients2.length; i++){
    let ingredien = document.createElement("li")
    ingredien.textContent = ingredients2[i];
    ingredientsList.appendChild(ingredien);
  }

  //  Description / How-to-do
  divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);
  descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör såhär:";
  divDescription.appendChild(descriptionHeader);
  descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);

  for(let i = 0; i < howTo.length; i++){
    let description = document.createElement("li");
    description.textContent = howTo[i];
    descriptionList.appendChild(description);
  }

  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

// Vegan recepies list  
function veganMenu(){
  document.getElementsByTagName("body")[0].innerHTML = "";

  let headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "rec-header");
  document.body.appendChild(headerWrapper);

  //  Page Header
  let secondMainHeader = document.createElement("h1");
  secondMainHeader.textContent = "Veganskt";
  headerWrapper.appendChild(secondMainHeader);

  section = document.createElement("section");
  section.id = "secondMenuSection"
  document.body.appendChild(section);

  for(let i = 0; i < 4; i++){
    let divWrapper = document.createElement("div");
    divWrapper.setAttribute("class","secondMenuWrapper");
    section.appendChild(divWrapper);
  }

  let recepie1 = document.getElementsByClassName("secondMenuWrapper")[0];
  let recepie2 = document.getElementsByClassName("secondMenuWrapper")[1];
  let recepie3 = document.getElementsByClassName("secondMenuWrapper")[2];
  let randomBtn = document.getElementsByClassName("secondMenuWrapper")[3];

  //  add eventlisterner
  recepie1.addEventListener("click", vegan1);
  recepie2.addEventListener("click", vegan2);
  recepie3.addEventListener("click", vegan3);
  randomBtn.addEventListener("click", randomVegan);

  //  recepie1
  let recepieImg = document.createElement("img");
  recepieImg.src = "vegan/broccolisoppa-med-kryddrostade-kikärter-och-tofu/broccolisoppa-med-kryddrostade-kikärter-och-tofu.jpg";
  recepie1.appendChild(recepieImg);

  let recepieHeader = document.createElement("h5");
  recepieHeader.textContent = "BROCCOLISOPPA MED KRYDDROSTADE KIKÄRTER OCH TOFU"
  recepie1.appendChild(recepieHeader);

  //  recepie2
  let recepieImg2 = document.createElement("img");
  recepieImg2.src = "vegan/sötpotatisbiffar-med-ingefära-och-nötter/sötpotatisbiffar-med-ingefära-och-nötter.jpg";
  recepie2.appendChild(recepieImg2);

  let recepieHeader2 = document.createElement("h5");
  recepieHeader2.textContent = "SÖTPOTATISBIFFAR MED INGEFÖRA OCH NÖTTER"
  recepie2.appendChild(recepieHeader2);

  //  recepie3
  let recepieImg3 = document.createElement("img");
  recepieImg3.src = "vegan/vegansk-kalops/vegansk-kalops.jpg";
  recepie3.appendChild(recepieImg3);

  let recepieHeader3 = document.createElement("h5");
  recepieHeader3.textContent = "VEGANSK KALOPS"
  recepie3.appendChild(recepieHeader3);

  //  Random recepie
  let randomAtag = document.createElement("a");
  randomAtag.setAttribute("class", "button");
  randomAtag.textContent = "Slumpa ett recept";
  randomBtn.appendChild(randomAtag);
  
  footer();
  btnBack();
}

/** Vegan1 - BROCCOLISOPPA MED KRYDDROSTADE KIKÄRTER OCH TOFU */
function vegan1(){
  document.getElementsByTagName("body")[0].innerHTML = "";

  section = document.createElement("section");
  document.body.appendChild(section);

  let header = document.createElement("header");
  header.setAttribute("id", "rec-header");
  section.appendChild(header);

  let headerH1 = document.createElement("h1");
  headerH1.textContent = "BROCCOLISOPPA MED KRYDDROSTADE KIKÄRTER OCH TOFU";
  header.appendChild(headerH1);

  let image = document.createElement("img");
  image.src = "vegan/broccolisoppa-med-kryddrostade-kikärter-och-tofu/broccolisoppa-med-kryddrostade-kikärter-och-tofu.jpg";
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
  selector.id = "numberOfPortions";

  for(let i = 2; i <= 8; i+=2){
    let foo =  selector.appendChild(document.createElement("option"));
    foo.value = i;
    foo.text = i +" port";
    if (foo.value == 4){
      foo.setAttribute("selected","selected");
    }
  }
 
  let imgCutlery = document.createElement("img");
  divCookTime.id = "cookTime";
  divCutlery.id = "portions";
  imgTime.src = "media/timer.png";
  imgTime.style.height = "30px";
  imgTime.style.width = "30px";
  cookTime.textContent = "45 min";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
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

  let divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);

  let descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör så här";
  divDescription.appendChild(descriptionHeader);
  let descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);
  let desc1 = document.createElement("li")
  desc1.textContent = "Skala och hacka löken. Ansa och skiva broccolin. Skala och riv ingefäran.";
  let desc2 = document.createElement("li");
  desc2.textContent = "Fräs lök och broccoli i olja i en gryta.";
  let desc3 = document.createElement("li");
  desc3.textContent = "Sänk värmen och rör i ingefära, pressad vitlök och sambal. Tillsätt kokosmjölk, buljong och vatten i grytan och sjud ca 12 minuter.";
  let desc4 = document.createElement("li");
  desc4.textContent = "Skölj kikärterna och låt dem rinna av ordentligt. Rosta dem i en het stekpanna i olivolja. Krydda med spiskummin, salt och peppar.";
  let desc5 = document.createElement("li");
  desc5.textContent = "Mixa soppan slät och smaka av med salt och peppar.";
  let desc6 = document.createElement("li");
  desc6.textContent = "Hacka persiljan och skär tofun i bitar.";
  let desc7 = document.createElement("li");
  desc7.textContent = "Servera soppan med kikärter, tofu och persilja.";

  descriptionList.appendChild(desc1);
  descriptionList.appendChild(desc2);
  descriptionList.appendChild(desc3);
  descriptionList.appendChild(desc4);
  descriptionList.appendChild(desc5);
  descriptionList.appendChild(desc6);
  descriptionList.appendChild(desc7);

  selector.onchange = function(){resizeIngredients(numberOfPortions);false};

  function resizeIngredients(){
    let foo = parseInt(document.getElementById("numberOfPortions").value);
    removeIngredients();
    switch(foo){
      case 2:
        twoPortions();
        break;
      case 4:
        fourPortions();
        break;
      case 6:
        sixPortions();
        break;
      case 8:
        eightPortions();
        break;
    }
  }

  function removeIngredients(){
    document.getElementById("ingredients").innerHTML = "";
  }

  function twoPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "1/2 gul lök";
    list.appendChild(document.createElement("li")).textContent = "1 broccoli (à 250 g)";
    list.appendChild(document.createElement("li")).textContent = "1/2 msk riven ingefära";
    list.appendChild(document.createElement("li")).textContent = "1/2 tsk olja";
    list.appendChild(document.createElement("li")).textContent = "1/2 vitlöksklyfta";
    list.appendChild(document.createElement("li")).textContent = "1/2 tsk sambal oelek";
    list.appendChild(document.createElement("li")).textContent = "200 ml kokosmjölk";
    list.appendChild(document.createElement("li")).textContent = "3 3/4 dl grönsaksbuljong";
    list.appendChild(document.createElement("li")).textContent = "1/2 förp kokta kikärter (à 380 g)";
    list.appendChild(document.createElement("li")).textContent = "1/2 tsk olivolja";
    list.appendChild(document.createElement("li")).textContent = "1/4 tsk spiskummin";
    list.appendChild(document.createElement("li")).textContent = "1/4 kruka persilja";
    list.appendChild(document.createElement("li")).textContent = "135 g tofu";
    list.appendChild(document.createElement("li")).textContent = "Salt och peppar";
  }

  function fourPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "1 gul lök";
    list.appendChild(document.createElement("li")).textContent = "2 broccoli (à 250 g)";
    list.appendChild(document.createElement("li")).textContent = "1 msk riven ingefära";
    list.appendChild(document.createElement("li")).textContent = "1 tsk olja";
    list.appendChild(document.createElement("li")).textContent = "1 vitlöksklyfta";
    list.appendChild(document.createElement("li")).textContent = "1 tsk sambal oelek";
    list.appendChild(document.createElement("li")).textContent = "400 ml kokosmjölk";
    list.appendChild(document.createElement("li")).textContent = "7 1/2 dl grönsaksbuljong";
    list.appendChild(document.createElement("li")).textContent = "1 förp kokta kikärter (à 380 g)";
    list.appendChild(document.createElement("li")).textContent = "1 tsk olivolja";
    list.appendChild(document.createElement("li")).textContent = "1/2 tsk spiskummin";
    list.appendChild(document.createElement("li")).textContent = "1/2 kruka persilja";
    list.appendChild(document.createElement("li")).textContent = "270 g tofu";
    list.appendChild(document.createElement("li")).textContent = "Salt och peppar";
  }

  function sixPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "1 1/2 gul lök";
    list.appendChild(document.createElement("li")).textContent = "3 broccoli (à 250 g)";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 msk riven ingefära";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 tsk olja";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 vitlöksklyfta";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 tsk sambal oelek";
    list.appendChild(document.createElement("li")).textContent = "600 ml kokosmjölk";
    list.appendChild(document.createElement("li")).textContent = "1 1/8 liter grönsaksbuljong";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 förp kokta kikärter (à 380 g)";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 tsk olivolja";
    list.appendChild(document.createElement("li")).textContent = "3/4 tsk spiskummin";
    list.appendChild(document.createElement("li")).textContent = "3/4 kruka persilja";
    list.appendChild(document.createElement("li")).textContent = "400 g tofu";
    list.appendChild(document.createElement("li")).textContent = "Salt och peppar";
  }

  function eightPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "2 gula lökar";
    list.appendChild(document.createElement("li")).textContent = "4 broccoli (à 250 g)";
    list.appendChild(document.createElement("li")).textContent = "2 msk riven ingefära";
    list.appendChild(document.createElement("li")).textContent = "2 tsk olja";
    list.appendChild(document.createElement("li")).textContent = "2 vitlöksklyfta";
    list.appendChild(document.createElement("li")).textContent = "2 tsk sambal oelek";
    list.appendChild(document.createElement("li")).textContent = "800 ml kokosmjölk";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 liter grönsaksbuljong";
    list.appendChild(document.createElement("li")).textContent = "2 förp kokta kikärter (à 380 g)";
    list.appendChild(document.createElement("li")).textContent = "2 tsk olivolja";
    list.appendChild(document.createElement("li")).textContent = "1 tsk spiskummin";
    list.appendChild(document.createElement("li")).textContent = "1 kruka persilja";
    list.appendChild(document.createElement("li")).textContent = "540 g tofu";
    list.appendChild(document.createElement("li")).textContent = "Salt och peppar";
  }

  fourPortions();
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

/** Vegan2 - SÖTPOTATISBIFFAR MED INGEFÖRA OCH NÖTTER */
function vegan2(){
  document.getElementsByTagName("body")[0].innerHTML = "";

  section = document.createElement("section");
  document.body.appendChild(section);

  let header = document.createElement("header");
  header.setAttribute("id", "rec-header");
  section.appendChild(header);

  let headerH1 = document.createElement("h1");
  headerH1.textContent = "SÖTPOTATISBIFFAR MED INGEFÖRA OCH NÖTTER";
  header.appendChild(headerH1);

  let image = document.createElement("img");
  image.src = "vegan/sötpotatisbiffar-med-ingefära-och-nötter/sötpotatisbiffar-med-ingefära-och-nötter.jpg";
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
  selector.id = "numberOfPortions";

  for(let i = 2; i <= 8; i+=2){
    let foo =  selector.appendChild(document.createElement("option"));
    foo.value = i;
    foo.text = i +" port";
    if (foo.value == 4){
      foo.setAttribute("selected","selected");
    }
  }
  let imgCutlery = document.createElement("img");
  divCookTime.id = "cookTime";
  divCutlery.id = "portions";
  imgTime.src = "media/timer.png";
  imgTime.style.height = "30px";
  imgTime.style.width = "30px";
  cookTime.textContent = "45 min";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
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

  let divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);

  let descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör så här";
  divDescription.appendChild(descriptionHeader);
  let descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);
  let desc1 = document.createElement("li")
  desc1.textContent = "Lägg cashewnötterna i kallt vatten ca 10 minuter.";
  let desc2 = document.createElement("li");
  desc2.textContent = "Skala och riv sötpotatisen grovt. Pressa ur överflödig vätska. Skala och riv ingefäran. Riv det yttersta skalet av limen. Skölj bönorna och låt dem rinna av.";
  let desc3 = document.createElement("li");
  desc3.textContent = "Mosa bönorna grovt med en gaffel. Blanda dem med ingefära och limeskal. Krydda med salt och peppar. Blanda bakpulvret med majsstärkelsen. Låt nötterna rinna av och mixa dem.";
  let desc4 = document.createElement("li");
  desc4.textContent = "Rör ner nötter, sötpotatis och bakpulversblandningen med bönorna. Blanda snabbt ihop till en smet. Låt vila minst 15 minuter.";
  let desc5 = document.createElement("li");
  desc5.textContent = "Häll ut sesamfröna i en djup tallrik. Forma bönsmeten till 8 burgare (för 4 port) med oljade händer. Vänd dem i sesamfröna.";
  let desc6 = document.createElement("li");
  desc6.textContent = "Grilla burgarna på indirekt värme ca 12 minuter, vänd då och då.";
  let desc7 = document.createElement("li");
  desc7.textContent = "Servera med grön couscous.";

  descriptionList.appendChild(desc1);
  descriptionList.appendChild(desc2);
  descriptionList.appendChild(desc3);
  descriptionList.appendChild(desc4);
  descriptionList.appendChild(desc5);
  descriptionList.appendChild(desc6);
  descriptionList.appendChild(desc7);

  selector.onchange = function(){resizeIngredients(numberOfPortions);false};

  function resizeIngredients(){
    let foo = parseInt(document.getElementById("numberOfPortions").value);
    removeIngredients();
    switch(foo){
      case 2:
        twoPortions();
        break;
      case 4:
        fourPortions();
        break;
      case 6:
        sixPortions();
        break;
      case 8:
        eightPortions();
        break;
    }
  }

  function removeIngredients(){
    document.getElementById("ingredients").innerHTML = "";
  }

  function twoPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "1/2 dl cashewnötter";
    list.appendChild(document.createElement("li")).textContent = "100 g sötpotatis";
    list.appendChild(document.createElement("li")).textContent = "3/4 msk finriven färsk ingefära";
    list.appendChild(document.createElement("li")).textContent = "1/2 lime";
    list.appendChild(document.createElement("li")).textContent = "1 förp kokta vita bönor (à 380 g)";
    list.appendChild(document.createElement("li")).textContent = "1/2 krm svartpeppar";
    list.appendChild(document.createElement("li")).textContent = "1/4 msk bakpulver";
    list.appendChild(document.createElement("li")).textContent = "1/4 dl majsstärkelse";
    list.appendChild(document.createElement("li")).textContent = "1/2 dl sesamfrön";

    let head2 = document.createElement("li");
    head2.textContent = "Tillbehör:";
    head2.setAttribute("class", "listHeader");
    list.appendChild(head2);

    list.appendChild(document.createElement("li")).textContent = "Grön couscous";
  }

  function fourPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "1 dl cashewnötter";
    list.appendChild(document.createElement("li")).textContent = "200 g sötpotatis";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 msk finriven färsk ingefära";
    list.appendChild(document.createElement("li")).textContent = "1 lime";
    list.appendChild(document.createElement("li")).textContent = "2 förp kokta vita bönor (à 380 g)";
    list.appendChild(document.createElement("li")).textContent = "1 krm svartpeppar";
    list.appendChild(document.createElement("li")).textContent = "1/2 msk bakpulver";
    list.appendChild(document.createElement("li")).textContent = "1/2 dl majsstärkelse";
    list.appendChild(document.createElement("li")).textContent = "1 dl sesamfrön";

    let head2 = document.createElement("li");
    head2.textContent = "Tillbehör:";
    head2.setAttribute("class", "listHeader");
    list.appendChild(head2);

    list.appendChild(document.createElement("li")).textContent = "Grön couscous";
  }

  function sixPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "1 1/2 dl cashewnötter";
    list.appendChild(document.createElement("li")).textContent = "300 g sötpotatis";
    list.appendChild(document.createElement("li")).textContent = "2 1/4 msk finriven färsk ingefära";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 lime";
    list.appendChild(document.createElement("li")).textContent = "3 förp kokta vita bönor (à 380 g)";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 krm svartpeppar";
    list.appendChild(document.createElement("li")).textContent = "2 1/4 msk bakpulver";
    list.appendChild(document.createElement("li")).textContent = "3/4 dl majsstärkelse";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 dl sesamfrön";

    let head2 = document.createElement("li");
    head2.textContent = "Tillbehör:";
    head2.setAttribute("class", "listHeader");
    list.appendChild(head2);

    list.appendChild(document.createElement("li")).textContent = "Grön couscous";
  }

  function eightPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "2 dl cashewnötter";
    list.appendChild(document.createElement("li")).textContent = "400 g sötpotatis";
    list.appendChild(document.createElement("li")).textContent = "3 msk finriven färsk ingefära";
    list.appendChild(document.createElement("li")).textContent = "2 lime";
    list.appendChild(document.createElement("li")).textContent = "4 förp kokta vita bönor (à 380 g)";
    list.appendChild(document.createElement("li")).textContent = "2 krm svartpeppar";
    list.appendChild(document.createElement("li")).textContent = "1 msk bakpulver";
    list.appendChild(document.createElement("li")).textContent = "1 dl majsstärkelse";
    list.appendChild(document.createElement("li")).textContent = "2 dl sesamfrön";

    let head2 = document.createElement("li");
    head2.textContent = "Tillbehör:";
    head2.setAttribute("class", "listHeader");
    list.appendChild(head2);

    list.appendChild(document.createElement("li")).textContent = "Grön couscous";
  }

  fourPortions();
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

/** Vegan3 - VEGANSK KALOPS */
function vegan3(){
  document.getElementsByTagName("body")[0].innerHTML = "";

  section = document.createElement("section");
  document.body.appendChild(section);

  let header = document.createElement("header");
  header.setAttribute("id", "rec-header");
  section.appendChild(header);

  let headerH1 = document.createElement("h1");
  headerH1.textContent = "VEGANSK KALOPS";
  header.appendChild(headerH1);

  let image = document.createElement("img");
  image.src = "vegan/vegansk-kalops/vegansk-kalops.jpg";
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
  selector.id = "numberOfPortions";

  for(let i = 2; i <= 8; i+=2){
    let foo =  selector.appendChild(document.createElement("option"));
    foo.value = i;
    foo.text = i +" port";
    if (foo.value == 6){
      foo.setAttribute("selected","selected");
    }
  }
 
  let imgCutlery = document.createElement("img");
  divCookTime.id = "cookTime";
  divCutlery.id = "portions";
  imgTime.src = "media/timer.png";
  imgTime.style.height = "30px";
  imgTime.style.width = "30px";
  cookTime.textContent = "80 min";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
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

  let divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);

  let descriptionHeader = document.createElement("h4");
  descriptionHeader.innerText = "Gör så här";
  divDescription.appendChild(descriptionHeader);
  let descriptionList = document.createElement("ol");
  divDescription.appendChild(descriptionList);
  let desc1 = document.createElement("li")
  desc1.textContent = "Värm upp en stor gryta och smält matfettet.";
  let desc2 = document.createElement("li");
  desc2.textContent = "Rör ner hela kryddpepparkorn, lagerblad och mjöl i matfettet och låt fräsa någon minut på låg värme utan att det tar färg.";
  let desc3 = document.createElement("li");
  desc3.textContent = "Tillsätt vatten, soja, grönsaksfond, vegokött, salt och peppar efter smak.";
  let desc4 = document.createElement("li");
  desc4.textContent = "Låt koka under lock i 1 timme. Skala under tiden morötter och lök. Skär morötterna i ca 2-3 cm stora bitar och dela lökarna på hälften eller i kvartar beroende på storlek. Behåll roten kvar så håller de ihop.";
  let desc5 = document.createElement("li");
  desc5.textContent = "Bryn morötter och lök på hög värme i en stekpanna i lite matfett. Salta och peppra.";
  let desc6 = document.createElement("li");
  desc6.textContent = "När grytan kokat en timme, smaka av med salt och peppar och lägg ner grönsakerna i grytan.";
  let desc7 = document.createElement("li");
  desc7.textContent = "Koka 10 minuter till, smaka av igen.";
  let desc8 = document.createElement("li");
  desc8.textContent = "Servera med kokt potatis och inlagda rödbetor, garnera med persilja.";

  descriptionList.appendChild(desc1);
  descriptionList.appendChild(desc2);
  descriptionList.appendChild(desc3);
  descriptionList.appendChild(desc4);
  descriptionList.appendChild(desc5);
  descriptionList.appendChild(desc6);
  descriptionList.appendChild(desc7);
  descriptionList.appendChild(desc8);

  selector.onchange = function(){resizeIngredients(numberOfPortions);false};

  function resizeIngredients(){
    let foo = parseInt(document.getElementById("numberOfPortions").value);
    removeIngredients();
    switch(foo){
      case 2:
        twoPortions();
        break;
      case 4:
        fourPortions();
        break;
      case 6:
        sixPortions();
        break;
      case 8:
        eightPortions();
        break;
    }
  }

  function removeIngredients(){
    document.getElementById("ingredients").innerHTML = "";
  }

  function twoPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "2/3 msk mjölkfritt matfett (+ extra till stekning av grönsaker)";
    list.appendChild(document.createElement("li")).textContent = "7 kryddpepparkorn";
    list.appendChild(document.createElement("li")).textContent = "3 lagerblad";
    list.appendChild(document.createElement("li")).textContent = "1 msk vetemjöl";
    list.appendChild(document.createElement("li")).textContent = "1/2 l vatten";
    list.appendChild(document.createElement("li")).textContent = "3/4 msk kinesisk soja";
    list.appendChild(document.createElement("li")).textContent = "2/3 msk konc mörk grönsaksfond";
    list.appendChild(document.createElement("li")).textContent = "1 paket naturellt vegokött (à 300 g)";
    list.appendChild(document.createElement("li")).textContent = "1/3 dl sesamfrön";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 stora morötter";
    list.appendChild(document.createElement("li")).textContent = "2 små gula lökar";
    list.appendChild(document.createElement("li")).textContent = "salt och svartpeppar";

    // Tillbehör
    let head2 = document.createElement("li");
    head2.textContent = "Tillbehör:";
    head2.setAttribute("class", "listHeader");
    list.appendChild(head2);

    list.appendChild(document.createElement("li")).textContent = "Kokt potatis";
    list.appendChild(document.createElement("li")).textContent = "Inlagda rödbetor";
    list.appendChild(document.createElement("li")).textContent = "Färsk persilja";
  }

  function fourPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "1 1/2 msk mjölkfritt matfett (+ extra till stekning av grönsaker)";
    list.appendChild(document.createElement("li")).textContent = "14 kryddpepparkorn";
    list.appendChild(document.createElement("li")).textContent = "6 lagerblad";
    list.appendChild(document.createElement("li")).textContent = "2 msk vetemjöl";
    list.appendChild(document.createElement("li")).textContent = "1 l vatten";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 msk kinesisk soja";
    list.appendChild(document.createElement("li")).textContent = "1 1/3 msk konc mörk grönsaksfond";
    list.appendChild(document.createElement("li")).textContent = "2 paket naturellt vegokött (à 300 g)";
    list.appendChild(document.createElement("li")).textContent = "2/3 dl sesamfrön";
    list.appendChild(document.createElement("li")).textContent = "3 stora morötter";
    list.appendChild(document.createElement("li")).textContent = "4 små gula lökar";
    list.appendChild(document.createElement("li")).textContent = "salt och svartpeppar";

    // Tillbehör
    let head2 = document.createElement("li");
    head2.textContent = "Tillbehör:";
    head2.setAttribute("class", "listHeader");
    list.appendChild(head2);

    list.appendChild(document.createElement("li")).textContent = "Kokt potatis";
    list.appendChild(document.createElement("li")).textContent = "Inlagda rödbetor";
    list.appendChild(document.createElement("li")).textContent = "Färsk persilja";
  }

  function sixPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "2 msk mjölkfritt matfett (+ extra till stekning av grönsaker)";
    list.appendChild(document.createElement("li")).textContent = "20 kryddpepparkorn";
    list.appendChild(document.createElement("li")).textContent = "8 lagerblad";
    list.appendChild(document.createElement("li")).textContent = "1/2 dl vetemjöl";
    list.appendChild(document.createElement("li")).textContent = "1 1/2 l vatten";
    list.appendChild(document.createElement("li")).textContent = "2 1/2 msk kinesisk soja";
    list.appendChild(document.createElement("li")).textContent = "2 msk konc mörk grönsaksfond";
    list.appendChild(document.createElement("li")).textContent = "3 paket naturellt vegokött (à 300 g)";
    list.appendChild(document.createElement("li")).textContent = "1 dl sesamfrön";
    list.appendChild(document.createElement("li")).textContent = "4 stora morötter";
    list.appendChild(document.createElement("li")).textContent = "5 små gula lökar";
    list.appendChild(document.createElement("li")).textContent = "salt och svartpeppar";

    // Tillbehör
    let head2 = document.createElement("li");
    head2.textContent = "Tillbehör:";
    head2.setAttribute("class", "listHeader");
    list.appendChild(head2);

    list.appendChild(document.createElement("li")).textContent = "Kokt potatis";
    list.appendChild(document.createElement("li")).textContent = "Inlagda rödbetor";
    list.appendChild(document.createElement("li")).textContent = "Färsk persilja";
  }

  function eightPortions(){
    let list = document.createElement("ul");
    divIngredients.appendChild(list);

    list.appendChild(document.createElement("li")).textContent = "3 msk mjölkfritt matfett (+ extra till stekning av grönsaker)";
    list.appendChild(document.createElement("li")).textContent = "30 kryddpepparkorn";
    list.appendChild(document.createElement("li")).textContent = "12 lagerblad";
    list.appendChild(document.createElement("li")).textContent = "4 msk vetemjöl";
    list.appendChild(document.createElement("li")).textContent = "2 l vatten";
    list.appendChild(document.createElement("li")).textContent = "3 msk kinesisk soja";
    list.appendChild(document.createElement("li")).textContent = "2 1/2 msk konc mörk grönsaksfond";
    list.appendChild(document.createElement("li")).textContent = "4 paket naturellt vegokött (à 300 g)";
    list.appendChild(document.createElement("li")).textContent = "1 1/3 dl sesamfrön";
    list.appendChild(document.createElement("li")).textContent = "6 stora morötter";
    list.appendChild(document.createElement("li")).textContent = "8 små gula lökar";
    list.appendChild(document.createElement("li")).textContent = "salt och svartpeppar";

    // Tillbehör
    let head2 = document.createElement("li");
    head2.textContent = "Tillbehör:";
    head2.setAttribute("class", "listHeader");
    list.appendChild(head2);

    list.appendChild(document.createElement("li")).textContent = "Kokt potatis";
    list.appendChild(document.createElement("li")).textContent = "Inlagda rödbetor";
    list.appendChild(document.createElement("li")).textContent = "Färsk persilja";
  }

  sixPortions();
  footer();
  btnBackOneStep();
  btnBack();
  btnsLikeDislike();
}

// Footer creation
function footer(){
  mainFooter.innerHTML = "";
  mainFooter.setAttribute('id', 'main-footer');
  document.body.appendChild(mainFooter);
}

  // Back to main menu Button
function btnBack(){
  let aTag = document.createElement("a");
  aTag.setAttribute("href", "index.html");
  aTag.setAttribute("class", "button");
  aTag.textContent = "Huvudmeny";
  mainFooter.appendChild(aTag);
}

// Like and Dislike buttons
function btnsLikeDislike(){
  let likeButton = document.createElement("a");
  //likeButton.setAttribute("href", "#");
  likeButton.setAttribute("class", "button thumbs");
  likeButton.textContent = '👍';
  likeButton.addEventListener('click', function(){
    likeButton.style.backgroundColor = "black";
    alert("Gillat!\nFler funktioner kommer....");
  })
  let dislikeButton = document.createElement("a");
  //dislikeButton.setAttribute("href", "#");
  dislikeButton.setAttribute("class", "button thumbs");
  dislikeButton.textContent = '👎';
  dislikeButton.addEventListener('click', function(){
    dislikeButton.style.backgroundColor = "black";
    alert("Testa något annat då....!\nFler funktioner kommer....");
  })
  let holdButtonsDiv = document.createElement('div');
  mainFooter.appendChild(holdButtonsDiv)
  holdButtonsDiv.appendChild(likeButton);
  holdButtonsDiv.appendChild(dislikeButton);
}

// Go back to recipelist
function btnBackOneStep(){
  let backOneButton = document.createElement("a");
  //backOneButton.setAttribute("href", "#"); //Sparar denna utkommenterade koden då den senare ska länkas tillbaka till "mellanmenyn"
  backOneButton.setAttribute("class", "button arrow");
  backOneButton.textContent = '⟵';
  mainFooter.appendChild(backOneButton);
  backOneButton.addEventListener('click', function(){
    alert("Ingen funktion ännu....");
  })
}

document.addEventListener("DOMContentLoaded", init);