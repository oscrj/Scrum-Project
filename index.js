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

//Starters
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

//Main courses
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

//Desserts
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

//Vegeterian
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

//Vegan
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

//  selection of three recepies and choose to random pick one of them.  
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
  recepie2.addEventListener("click", starter3);
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
  
  selector.appendChild(option6); // 6 - 8 port
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

  footer();
  btnBackOneStep();
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
  
  selector.appendChild(option4); // 4 - 6 port
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
  ing1.textContent = "2 skivor kavring";
  list.appendChild(ing1);

  let ing2 = document.createElement("li");
  ing2.textContent = "150 g kokt potatis, avsvalnad";
  list.appendChild(ing2);

  let ing3 = document.createElement("li");
  ing3.textContent = "3 ägg, hårdkokta";
  list.appendChild(ing3);

  let ing4 = document.createElement("li");
  ing4.textContent = "1 liten burk inlagd sill, (240 g, avrunnen 120 g)";
  list.appendChild(ing4);

  let ing5 = document.createElement("li");
  ing5.textContent = "2 msk finhackad rödlök";
  list.appendChild(ing5);

  let ing6 = document.createElement("li");
  ing6.textContent = "2 msk finhackad dill";
  list.appendChild(ing6);

  let ing7 = document.createElement("li");
  ing7.textContent = "1 msk finhackad gräslök";
  list.appendChild(ing7);

  let ing8 = document.createElement("li");
  ing8.textContent = "1/2 dl crème fraiche";
  list.appendChild(ing8);  

  let ing9 = document.createElement("li");
  ing9.textContent = "1 msk majonnäs";
  list.appendChild(ing9);

  let ing10 = document.createElement("li");
  ing10.textContent = "rivet skal från ½ citron";
  list.appendChild(ing10);

  let ing11 = document.createElement("li");
  ing11.textContent = "salt och svartpeppar";
  list.appendChild(ing11);

  let head1 = document.createElement("li");
  head1.textContent = "Till garnering:";
  head1.setAttribute("class", "listHeader");
  list.appendChild(head1);

  let ing12 = document.createElement("li");
  ing12.textContent = "2 msk hackad gräslök";
  list.appendChild(ing12);

  let ing13 = document.createElement("li");
  ing13.textContent = "2 msk hackad rödlök";
  list.appendChild(ing13);

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

  footer();
  btnBackOneStep();
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
  cookTime.textContent = "65 min";
  option2.text = "2 port";
  option4.text = "4 port";
  option6.text = "6 port";
  option8.text = "8 port";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  
  selector.appendChild(option4); // 4 port
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

  /**Soppa */
  let head1 = document.createElement("li");
  head1.textContent = "Soppa:";
  head1.setAttribute("class", "listHeader");
  list.appendChild(head1);

  let ing1 = document.createElement("li");
  ing1.textContent = "2 schalottenlökar";
  list.appendChild(ing1);

  let ing2 = document.createElement("li");
  ing2.textContent = "1 purjolök";
  list.appendChild(ing2);

  let ing3 = document.createElement("li");
  ing3.textContent = "1 klyfta vitlök";
  list.appendChild(ing3);

  let ing4 = document.createElement("li");
  ing4.textContent = "1 1/2 msk smör";
  list.appendChild(ing4);

  let ing5 = document.createElement("li");
  ing5.textContent = "1 1/2 dl vitt vin";
  list.appendChild(ing5);

  let ing6 = document.createElement("li");
  ing6.textContent = "3 dl färdig grönsaks- eller hönsbuljong";
  list.appendChild(ing6);

  let ing7 = document.createElement("li");
  ing7.textContent = "500 g frysta gröna ärter";
  list.appendChild(ing7);

  let ing8 = document.createElement("li");
  ing8.textContent = "1 dl vispgrädde";
  list.appendChild(ing8);

  let ing9 = document.createElement("li");
  ing9.textContent = "1 citron, lite av saften";
  list.appendChild(ing9);

  let ing10 = document.createElement("li");
  ing10.textContent = "Salt och svartpeppar";
  list.appendChild(ing10);

  /** Till servering */
  let head2 = document.createElement("li");
  head2.textContent = "Till servering:";
  head2.setAttribute("class", "listHeader");
  list.appendChild(head2);

  let ing11 = document.createElement("li");
  ing11.textContent = "4 msk crème fraiche";
  list.appendChild(ing11);

  let ing12 = document.createElement("li");
  ing12.textContent = "Rostat bröd";
  list.appendChild(ing12);

  /** Garnering */
  let head3 = document.createElement("li");
  head3.textContent = "Garnering:";
  head3.setAttribute("class", "listHeader");
  list.appendChild(head3);

  let ing13 = document.createElement("li");
  ing13.textContent = "30 g hasselnötsflagor, eller hackade nötter";
  list.appendChild(ing13);

  let ing14 = document.createElement("li");
  ing14.textContent = "Färska örter eller groddar";
  list.appendChild(ing14);

  let ing15 = document.createElement("li");
  ing15.textContent = "Ätliga blommor";
  list.appendChild(ing15);

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
  
  footer();
  btnBackOneStep();
  btnsLikeDislike();
}

//  selection of three recepies and choose to random pick one of them.  
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
  let ingrediens1 = "2msk vitpepparkorn";
  let ingrediens2 = "1st schalottenlök, finhackad";
  let ingrediens3 = "0,5msk grönpeppar";
  let ingrediens4 = "0,5msk estragon, finhackad";
  let ingrediens5 = "olja";
  let ingrediens6 = "3dl kalvfond";
  let ingrediens7 = "1dl rött vin";
  let ingrediens8 = "2msk cognac";
  let ingrediens9 = "2dl grädde";
  let ingrediens10 = "1000g oxfilé, i 4 bitar";
  let ingrediens11 = "peppar, att rulla köttet i";
  let ingrediens12 = "";
  let ingrediens13 = "";
  let ingrediens14 = "";
  let ingrediens15 = "";
  let ingrediens16 = "";
  let ingrediens17 = "";
  let ingrediens18 = "";
  let ingrediens19 = "";
  let ingrediens20 = "";
  let beskrivningsRubrik1 = "";
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
  let beskrivning7 = "";
  let beskrivning8 = "";
  let beskrivning9 = "";
  let beskrivning10 = "";
  let beskrivning11 = "";
  let beskrivning12 = "";
  let beskrivning13 = "";
  let beskrivning14 = "";
  let beskrivning15 = "";
  let beskrivning16 = "";
  let beskrivning17 = "";
  let beskrivning18 = "";
  let beskrivning19 = "";
  let beskrivning20 = "";

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

  //Sättär tillagningstiden
  cookTime.textContent = tillagningsTid;

  option2.text = "2 port";
  option4.text = "4 port";
  option6.text = "6 port";
  option8.text = "8 port";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  
  //Välj "utgångsläge" för hur många portioner. Appenda fler options för fler val (Senare vid skalning)
  selector.appendChild(option4);
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

  //Skapar UL listan för ingredienser
  let list = document.createElement("ul");

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

  //Ingredienser
  let ing1 = document.createElement("li");
  ing1.textContent = ingrediens1;
  let ing2 = document.createElement("li");
  ing2.textContent = ingrediens2;
  let ing3 = document.createElement("li");
  ing3.textContent = ingrediens3;
  let ing4 = document.createElement("li");
  ing4.textContent = ingrediens4;
  let ing5 = document.createElement("li");
  ing5.textContent = ingrediens5;
  let ing6 = document.createElement("li");
  ing6.textContent = ingrediens6;
  let ing7 = document.createElement("li");
  ing7.textContent = ingrediens7;
  let ing8 = document.createElement("li");
  ing8.textContent = ingrediens8;
  let ing9 = document.createElement("li");
  ing9.textContent = ingrediens9;
  let ing10 = document.createElement("li");
  ing10.textContent = ingrediens10;
  let ing11 = document.createElement("li");
  ing11.textContent = ingrediens11;
  let ing12 = document.createElement("li");
  ing12.textContent = ingrediens12;
  let ing13 = document.createElement("li");
  ing13.textContent = ingrediens13;
  let ing14 = document.createElement("li");
  ing14.textContent = ingrediens14;
  let ing15 = document.createElement("li");
  ing15.textContent = ingrediens15;
  let ing16 = document.createElement("li");
  ing16.textContent = ingrediens16;
  let ing17 = document.createElement("li");
  ing17.textContent = ingrediens17;
  let ing18 = document.createElement("li");
  ing18.textContent = ingrediens18;
  let ing19 = document.createElement("li");
  ing19.textContent = ingrediens19;
  let ing20 = document.createElement("li");
  ing20.textContent = ingrediens20;

  //Appenda ingredienser och ingrediensrubriker
  divIngredients.appendChild(list); // ul listan
  list.appendChild(head1); //Rubrik 1
  list.appendChild(ing1);
  list.appendChild(ing2);
  list.appendChild(ing3);
  list.appendChild(ing4);
  list.appendChild(ing5);
  list.appendChild(ing6);
  list.appendChild(ing7);
  list.appendChild(ing8);
  list.appendChild(ing9);
  list.appendChild(head2); //Rubrik 2
  list.appendChild(ing10);
  list.appendChild(ing11);
  // list.appendChild(ing12);
  // list.appendChild(ing13);
  // list.appendChild(ing14);
  // list.appendChild(ing15);
  // list.appendChild(ing16);
  // list.appendChild(ing17);
  // list.appendChild(ing18);
  // list.appendChild(ing19);
  // list.appendChild(ing20);
  // list.appendChild(head3); //Rubrik 3
  // list.appendChild(head4); //Rubrik 4
  // list.appendChild(head5); //Rubrik 5

  //Div container innehållandes tillagningsbeskrivningar
  let divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);

  //Skapar ol flr beskrivningar
  let descriptionList = document.createElement("ol");
  
  //Rubriker för beskrivningen
  let descriptionHeader1 = document.createElement("h4");
  descriptionHeader1.innerText = beskrivningsRubrik1;
  let descriptionHeader2 = document.createElement("h4");
  descriptionHeader2.innerText = beskrivningsRubrik2;
  let descriptionHeader3 = document.createElement("h4");
  descriptionHeader3.innerText = beskrivningsRubrik3;
  let descriptionHeader4 = document.createElement("h4");
  descriptionHeader4.innerText = beskrivningsRubrik4;
  let descriptionHeader5 = document.createElement("h4");
  descriptionHeader5.innerText = beskrivningsRubrik5;

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
  let desc7 = document.createElement("li");
  desc7.textContent = beskrivning7;
  let desc8 = document.createElement("li");
  desc8.textContent = beskrivning8;
  let desc9 = document.createElement("li");
  desc9.textContent = beskrivning9;
  let desc10 = document.createElement("li");
  desc10.textContent = beskrivning10;
  let desc11 = document.createElement("li");
  desc11.textContent = beskrivning11;
  let desc12 = document.createElement("li");
  desc12.textContent = beskrivning12;
  let desc13 = document.createElement("li");
  desc13.textContent = beskrivning13;
  let desc14 = document.createElement("li");
  desc14.textContent = beskrivning14;
  let desc15 = document.createElement("li");
  desc15.textContent = beskrivning15;
  let desc16 = document.createElement("li");
  desc16.textContent = beskrivning16;
  let desc17 = document.createElement("li");
  desc17.textContent = beskrivning17;
  let desc18 = document.createElement("li");
  desc18.textContent = beskrivning18;
  let desc19 = document.createElement("li");
  desc19.textContent = beskrivning19;
  let desc20 = document.createElement("li");
  desc20.textContent = beskrivning20;

  //Appenda OL med rubriker och beskrivningar
  divDescription.appendChild(descriptionList); //OL listan
  descriptionList.appendChild(descriptionHeader1) //Rubrik 1
  descriptionList.appendChild(desc1);
  descriptionList.appendChild(desc2);
  descriptionList.appendChild(desc3);
  descriptionList.appendChild(desc4);
  descriptionList.appendChild(desc5);
  descriptionList.appendChild(desc6);
  //descriptionList.appendChild(desc7);
  //descriptionList.appendChild(desc8);
  //descriptionList.appendChild(desc9);
  //descriptionList.appendChild(desc10);
  //descriptionList.appendChild(desc10);
  //descriptionList.appendChild(desc12);
  //descriptionList.appendChild(desc13);
  //descriptionList.appendChild(desc14);
  //descriptionList.appendChild(desc15);
  //descriptionList.appendChild(desc16);
  //descriptionList.appendChild(desc17);
  //descriptionList.appendChild(desc18);
  //descriptionList.appendChild(desc19);
  //descriptionList.appendChild(desc20);
  //descriptionList.appendChild(descriptionHeader2) //Rubrik 2
  //descriptionList.appendChild(descriptionHeader3) //Rubrik 3
  //descriptionList.appendChild(descriptionHeader4) //Rubrik 4
  //descriptionList.appendChild(descriptionHeader5) //Rubrik 5
  footer();
  btnBackOneStep();
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
  let ingrediens1 = "500 g falukorv (av god kvalitet)";
  let ingrediens2 = "2 gula lökar";
  let ingrediens3 = "2 msk smör";
  let ingrediens4 = "2-3 msk tomatpuré";
  let ingrediens5 = "1 msk paprikapulver";
  let ingrediens6 = "2 lagerblad";
  let ingrediens7 = "1 dl köttbuljong";
  let ingrediens8 = "2 dl kaffegrädde (eller vispgrädde + mjölk)";
  let ingrediens9 = "ev ljust redningsmjöl";
  let ingrediens10 = "1000g oxfilé, i 4 bitar";
  let ingrediens11 = "salt";
  let ingrediens12 = "peppar";
  let ingrediens13 = "kokt ris";
  let ingrediens14 = "gräddfil";
  let ingrediens15 = "";
  let ingrediens16 = "";
  let ingrediens17 = "";
  let ingrediens18 = "";
  let ingrediens19 = "";
  let ingrediens20 = "";
  let beskrivningsRubrik1 = "Gör så här";
  let beskrivningsRubrik2 = "";
  let beskrivningsRubrik3 = "";
  let beskrivningsRubrik4 = "";
  let beskrivningsRubrik5 = "";
  let beskrivning1 = "Skär korven i centimetertjocka stavar. Skala och hacka löken.";
  let beskrivning2 = "Fräs korv och lök i smör i en stor stekpanna.";
  let beskrivning3 = "Rör ner tomatpuré, paprikapulver och lagerblad och fräs i ytterligare några minuter. Späd med buljongen och grädden. Låt sjuda tills såsen är smidig och simmig – inte för tunn och inte för stabbig. Red eventuellt av med aningen redningsmjöl. Smaka av med salt och peppar.";
  let beskrivning4 = "Servera med kokt ris och en klick gräddfil.";
  let beskrivning5 = "";
  let beskrivning6 = "";
  let beskrivning7 = "";
  let beskrivning8 = "";
  let beskrivning9 = "";
  let beskrivning10 = "";
  let beskrivning11 = "";
  let beskrivning12 = "";
  let beskrivning13 = "";
  let beskrivning14 = "";
  let beskrivning15 = "";
  let beskrivning16 = "";
  let beskrivning17 = "";
  let beskrivning18 = "";
  let beskrivning19 = "";
  let beskrivning20 = "";

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

  //Sättär tillagningstiden
  cookTime.textContent = tillagningsTid;

  option2.text = "2 port";
  option4.text = "4 port";
  option6.text = "6 port";
  option8.text = "8 port";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  
  //Välj "utgångsläge" för hur många portioner. Appenda fler options för fler val (Senare vid skalning)
  selector.appendChild(option4);
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

  //Skapar UL listan för ingredienser
  let list = document.createElement("ul");

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

  //Ingredienser
  let ing1 = document.createElement("li");
  ing1.textContent = ingrediens1;
  let ing2 = document.createElement("li");
  ing2.textContent = ingrediens2;
  let ing3 = document.createElement("li");
  ing3.textContent = ingrediens3;
  let ing4 = document.createElement("li");
  ing4.textContent = ingrediens4;
  let ing5 = document.createElement("li");
  ing5.textContent = ingrediens5;
  let ing6 = document.createElement("li");
  ing6.textContent = ingrediens6;
  let ing7 = document.createElement("li");
  ing7.textContent = ingrediens7;
  let ing8 = document.createElement("li");
  ing8.textContent = ingrediens8;
  let ing9 = document.createElement("li");
  ing9.textContent = ingrediens9;
  let ing10 = document.createElement("li");
  ing10.textContent = ingrediens10;
  let ing11 = document.createElement("li");
  ing11.textContent = ingrediens11;
  let ing12 = document.createElement("li");
  ing12.textContent = ingrediens12;
  let ing13 = document.createElement("li");
  ing13.textContent = ingrediens13;
  let ing14 = document.createElement("li");
  ing14.textContent = ingrediens14;
  let ing15 = document.createElement("li");
  ing15.textContent = ingrediens15;
  let ing16 = document.createElement("li");
  ing16.textContent = ingrediens16;
  let ing17 = document.createElement("li");
  ing17.textContent = ingrediens17;
  let ing18 = document.createElement("li");
  ing18.textContent = ingrediens18;
  let ing19 = document.createElement("li");
  ing19.textContent = ingrediens19;
  let ing20 = document.createElement("li");
  ing20.textContent = ingrediens20;

  //Appenda ingredienser och ingrediensrubriker
  divIngredients.appendChild(list); // ul listan
  list.appendChild(head1); //Rubrik 1
  list.appendChild(ing1);
  list.appendChild(ing2);
  list.appendChild(ing3);
  list.appendChild(ing4);
  list.appendChild(ing5);
  list.appendChild(ing6);
  list.appendChild(ing7);
  list.appendChild(ing8);
  list.appendChild(ing9);
  list.appendChild(ing10);
  list.appendChild(ing11);
  list.appendChild(ing12);
  list.appendChild(head2); //Rubrik 2
  list.appendChild(ing13);
  list.appendChild(ing14);
  // list.appendChild(ing15);
  // list.appendChild(ing16);
  // list.appendChild(ing17);
  // list.appendChild(ing18);
  // list.appendChild(ing19);
  // list.appendChild(ing20);
  // list.appendChild(head3); //Rubrik 3
  // list.appendChild(head4); //Rubrik 4
  // list.appendChild(head5); //Rubrik 5

  //Div container innehållandes tillagningsbeskrivningar
  let divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);

  //Skapar ol flr beskrivningar
  let descriptionList = document.createElement("ol");
  
  //Rubriker för beskrivningen
  let descriptionHeader1 = document.createElement("h4");
  descriptionHeader1.innerText = beskrivningsRubrik1;
  let descriptionHeader2 = document.createElement("h4");
  descriptionHeader2.innerText = beskrivningsRubrik2;
  let descriptionHeader3 = document.createElement("h4");
  descriptionHeader3.innerText = beskrivningsRubrik3;
  let descriptionHeader4 = document.createElement("h4");
  descriptionHeader4.innerText = beskrivningsRubrik4;
  let descriptionHeader5 = document.createElement("h4");
  descriptionHeader5.innerText = beskrivningsRubrik5;

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
  let desc7 = document.createElement("li");
  desc7.textContent = beskrivning7;
  let desc8 = document.createElement("li");
  desc8.textContent = beskrivning8;
  let desc9 = document.createElement("li");
  desc9.textContent = beskrivning9;
  let desc10 = document.createElement("li");
  desc10.textContent = beskrivning10;
  let desc11 = document.createElement("li");
  desc11.textContent = beskrivning11;
  let desc12 = document.createElement("li");
  desc12.textContent = beskrivning12;
  let desc13 = document.createElement("li");
  desc13.textContent = beskrivning13;
  let desc14 = document.createElement("li");
  desc14.textContent = beskrivning14;
  let desc15 = document.createElement("li");
  desc15.textContent = beskrivning15;
  let desc16 = document.createElement("li");
  desc16.textContent = beskrivning16;
  let desc17 = document.createElement("li");
  desc17.textContent = beskrivning17;
  let desc18 = document.createElement("li");
  desc18.textContent = beskrivning18;
  let desc19 = document.createElement("li");
  desc19.textContent = beskrivning19;
  let desc20 = document.createElement("li");
  desc20.textContent = beskrivning20;

  //Appenda OL med rubriker och beskrivningar
  divDescription.appendChild(descriptionList); //OL listan
  descriptionList.appendChild(descriptionHeader1) //Rubrik 1
  descriptionList.appendChild(desc1);
  descriptionList.appendChild(desc2);
  descriptionList.appendChild(desc3);
  descriptionList.appendChild(desc4);
  // descriptionList.appendChild(desc5);
  // descriptionList.appendChild(desc6);
  //descriptionList.appendChild(desc7);
  //descriptionList.appendChild(desc8);
  //descriptionList.appendChild(desc9);
  //descriptionList.appendChild(desc10);
  //descriptionList.appendChild(desc10);
  //descriptionList.appendChild(desc12);
  //descriptionList.appendChild(desc13);
  //descriptionList.appendChild(desc14);
  //descriptionList.appendChild(desc15);
  //descriptionList.appendChild(desc16);
  //descriptionList.appendChild(desc17);
  //descriptionList.appendChild(desc18);
  //descriptionList.appendChild(desc19);
  //descriptionList.appendChild(desc20);
  //descriptionList.appendChild(descriptionHeader2) //Rubrik 2
  //descriptionList.appendChild(descriptionHeader3) //Rubrik 3
  //descriptionList.appendChild(descriptionHeader4) //Rubrik 4
  //descriptionList.appendChild(descriptionHeader5) //Rubrik 5

  footer();
  btnBackOneStep();
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
  let ingrediens1 = "800 g lövbiff";
  let ingrediens2 = "smör, att steka i";
  let ingrediens3 = "4 msk tomatpuré";
  let ingrediens4 = "3 dl vatten";
  let ingrediens5 = "3 msk koncentrerad oxfond";
  let ingrediens6 = "2 msk kinesisk soja";
  let ingrediens7 = "3 dl crème fraîche";
  let ingrediens8 = "flingsalt";
  let ingrediens9 = "persilja, att garnera med";
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
  let beskrivningsRubrik2 = "";
  let beskrivningsRubrik3 = "";
  let beskrivningsRubrik4 = "";
  let beskrivningsRubrik5 = "";
  let beskrivning1 = "Skär lövbiffen i centimeterbreda strimlor. Hetta upp en stekpanna med smör och bryn köttet tills det får färg.";
  let beskrivning2 = "Rör ner tomatpurén och låt fräsa en kort stund.";
  let beskrivning3 = "Blanda ner vattnet och låt sjuda under lock på svag värme i 1,5-2 timmar. Nästan allt vattnet ska ha ångat bort.";
  let beskrivning4 = "Tillsätt oxfond, soja, grädde och crème fraiche. Rör ihop och låt alltsammans sjuda i några minuter och smaka av med flingsalt.";
  let beskrivning5 = "Klipp över persilja och servera med kokt potatis eller ris.";
  let beskrivning6 = "";
  let beskrivning7 = "";
  let beskrivning8 = "";
  let beskrivning9 = "";
  let beskrivning10 = "";
  let beskrivning11 = "";
  let beskrivning12 = "";
  let beskrivning13 = "";
  let beskrivning14 = "";
  let beskrivning15 = "";
  let beskrivning16 = "";
  let beskrivning17 = "";
  let beskrivning18 = "";
  let beskrivning19 = "";
  let beskrivning20 = "";

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

  //Sättär tillagningstiden
  cookTime.textContent = tillagningsTid;

  option2.text = "2 port";
  option4.text = "4 port";
  option6.text = "6 port";
  option8.text = "8 port";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  
  //Välj "utgångsläge" för hur många portioner. Appenda fler options för fler val (Senare vid skalning)
  selector.appendChild(option4);
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

  //Skapar UL listan för ingredienser
  let list = document.createElement("ul");

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

  //Ingredienser
  let ing1 = document.createElement("li");
  ing1.textContent = ingrediens1;
  let ing2 = document.createElement("li");
  ing2.textContent = ingrediens2;
  let ing3 = document.createElement("li");
  ing3.textContent = ingrediens3;
  let ing4 = document.createElement("li");
  ing4.textContent = ingrediens4;
  let ing5 = document.createElement("li");
  ing5.textContent = ingrediens5;
  let ing6 = document.createElement("li");
  ing6.textContent = ingrediens6;
  let ing7 = document.createElement("li");
  ing7.textContent = ingrediens7;
  let ing8 = document.createElement("li");
  ing8.textContent = ingrediens8;
  let ing9 = document.createElement("li");
  ing9.textContent = ingrediens9;
  let ing10 = document.createElement("li");
  ing10.textContent = ingrediens10;
  let ing11 = document.createElement("li");
  ing11.textContent = ingrediens11;
  let ing12 = document.createElement("li");
  ing12.textContent = ingrediens12;
  let ing13 = document.createElement("li");
  ing13.textContent = ingrediens13;
  let ing14 = document.createElement("li");
  ing14.textContent = ingrediens14;
  let ing15 = document.createElement("li");
  ing15.textContent = ingrediens15;
  let ing16 = document.createElement("li");
  ing16.textContent = ingrediens16;
  let ing17 = document.createElement("li");
  ing17.textContent = ingrediens17;
  let ing18 = document.createElement("li");
  ing18.textContent = ingrediens18;
  let ing19 = document.createElement("li");
  ing19.textContent = ingrediens19;
  let ing20 = document.createElement("li");
  ing20.textContent = ingrediens20;

  //Appenda ingredienser och ingrediensrubriker
  divIngredients.appendChild(list); // ul listan
  list.appendChild(head1); //Rubrik 1
  list.appendChild(ing1);
  list.appendChild(ing2);
  list.appendChild(ing3);
  list.appendChild(ing4);
  list.appendChild(ing5);
  list.appendChild(ing6);
  list.appendChild(ing7);
  list.appendChild(ing8);
  list.appendChild(ing9);
  // list.appendChild(ing10);
  // list.appendChild(ing11);
  // list.appendChild(ing12);
  // list.appendChild(head2); //Rubrik 2
  // list.appendChild(ing13);
  // list.appendChild(ing14);
  // list.appendChild(ing15);
  // list.appendChild(ing16);
  // list.appendChild(ing17);
  // list.appendChild(ing18);
  // list.appendChild(ing19);
  // list.appendChild(ing20);
  // list.appendChild(head3); //Rubrik 3
  // list.appendChild(head4); //Rubrik 4
  // list.appendChild(head5); //Rubrik 5

  //Div container innehållandes tillagningsbeskrivningar
  let divDescription = document.createElement("div");
  divDescription.setAttribute("class", "container");
  divDescription.id = "description";
  section.appendChild(divDescription);

  //Skapar ol flr beskrivningar
  let descriptionList = document.createElement("ol");
  
  //Rubriker för beskrivningen
  let descriptionHeader1 = document.createElement("h4");
  descriptionHeader1.innerText = beskrivningsRubrik1;
  let descriptionHeader2 = document.createElement("h4");
  descriptionHeader2.innerText = beskrivningsRubrik2;
  let descriptionHeader3 = document.createElement("h4");
  descriptionHeader3.innerText = beskrivningsRubrik3;
  let descriptionHeader4 = document.createElement("h4");
  descriptionHeader4.innerText = beskrivningsRubrik4;
  let descriptionHeader5 = document.createElement("h4");
  descriptionHeader5.innerText = beskrivningsRubrik5;

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
  let desc7 = document.createElement("li");
  desc7.textContent = beskrivning7;
  let desc8 = document.createElement("li");
  desc8.textContent = beskrivning8;
  let desc9 = document.createElement("li");
  desc9.textContent = beskrivning9;
  let desc10 = document.createElement("li");
  desc10.textContent = beskrivning10;
  let desc11 = document.createElement("li");
  desc11.textContent = beskrivning11;
  let desc12 = document.createElement("li");
  desc12.textContent = beskrivning12;
  let desc13 = document.createElement("li");
  desc13.textContent = beskrivning13;
  let desc14 = document.createElement("li");
  desc14.textContent = beskrivning14;
  let desc15 = document.createElement("li");
  desc15.textContent = beskrivning15;
  let desc16 = document.createElement("li");
  desc16.textContent = beskrivning16;
  let desc17 = document.createElement("li");
  desc17.textContent = beskrivning17;
  let desc18 = document.createElement("li");
  desc18.textContent = beskrivning18;
  let desc19 = document.createElement("li");
  desc19.textContent = beskrivning19;
  let desc20 = document.createElement("li");
  desc20.textContent = beskrivning20;

  //Appenda OL med rubriker och beskrivningar
  divDescription.appendChild(descriptionList); //OL listan
  descriptionList.appendChild(descriptionHeader1) //Rubrik 1
  descriptionList.appendChild(desc1);
  descriptionList.appendChild(desc2);
  descriptionList.appendChild(desc3);
  descriptionList.appendChild(desc4);
  descriptionList.appendChild(desc5);
  //descriptionList.appendChild(desc6);
  //descriptionList.appendChild(desc7);
  //descriptionList.appendChild(desc8);
  //descriptionList.appendChild(desc9);
  //descriptionList.appendChild(desc10);
  //descriptionList.appendChild(desc10);
  //descriptionList.appendChild(desc12);
  //descriptionList.appendChild(desc13);
  //descriptionList.appendChild(desc14);
  //descriptionList.appendChild(desc15);
  //descriptionList.appendChild(desc16);
  //descriptionList.appendChild(desc17);
  //descriptionList.appendChild(desc18);
  //descriptionList.appendChild(desc19);
  //descriptionList.appendChild(desc20);
  //descriptionList.appendChild(descriptionHeader2) //Rubrik 2
  //descriptionList.appendChild(descriptionHeader3) //Rubrik 3
  //descriptionList.appendChild(descriptionHeader4) //Rubrik 4
  //descriptionList.appendChild(descriptionHeader5) //Rubrik 5

  footer();
  btnBackOneStep();
  btnsLikeDislike();
}

//  selection of three recepies and choose to random pick one of them.  
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
  let ingrediens = [
    "2 st Bananer",
    "2 dl hasselnötter",
    "1/2dl kakao",
    "2 tsk agavesirap",
    "2 tsk vaniljepulver en nypa havssalt",
    "1 msk kokosolja värmd över vattenbad", 
    "5 dl mandelmjölk",
    "1 avocado"
  ]
  let ingrediensVegan = [
    "3-4 msk kokosolja värmd över vattenbad",
    "5-6 msk raw kakaopulver",
    "1 tsk cayennepeppar",
    "2-3 msk agavesirap",
    "1 knivsudd himalayasalt"
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
  cookTime.textContent = "10 min";
  option2.text = "2 port";
  option4.text = "4 port";
  option6.text = "6 port";
  option8.text = "8 port";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  selector.appendChild(option2);  //  choose how many servings/portion.
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
  ingrediensHeader.textContent = "Raw nutella:";
  ingrediensHeader.setAttribute("class", "listHeader");
  ingrediensList.appendChild(ingrediensHeader);

  for(let i = 0; i < ingrediens.length; i++){
    let ingredien = document.createElement("li");
    ingredien.textContent = ingrediens[i];
    ingrediensList.appendChild(ingredien);
  }

  let ingrediensSecondHeader = document.createElement("h4");
  ingrediensSecondHeader.textContent = "Raw vegan chokladsås:";
  ingrediensSecondHeader.setAttribute("class", "listHeader");
  ingrediensList.appendChild(ingrediensSecondHeader);
  
  for(let i = 0; i < ingrediensVegan.length; i++){
    let ingredien = document.createElement("li")
    ingredien.textContent = ingrediensVegan[i];
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
  let ingrediens = [
    "1 mogen avokado",
    "2 mogna bananer",
    "6 dadlar",
    "3 msk vatten",
    "1 msk lönnsirap",
    "2 rågade tsk mandelsmör", 
    "2 rågade tsk raw kakao"
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
  cookTime.textContent = "20 min";
  option2.text = "2 port";
  option4.text = "4 port";
  option6.text = "6 port";
  option8.text = "8 port";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  selector.appendChild(option2);  //  choose how many servings/portion.
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
  ingrediensHeader.textContent = "";
  ingrediensHeader.setAttribute("class", "listHeader");
  //ingrediensList.appendChild(ingrediensHeader);

  for(let i = 0; i < ingrediens.length; i++){
    let ingredien = document.createElement("li");
    ingredien.textContent = ingrediens[i];
    ingrediensList.appendChild(ingredien);
  }

  let ingrediensSecondHeader = document.createElement("h4");
  ingrediensSecondHeader.textContent = "";
  ingrediensSecondHeader.setAttribute("class", "listHeader");
  //ingrediensList.appendChild(ingrediensSecondHeader);
  
  // for(let i = 0; i < ingrediensVegan.length; i++){
  //   let ingredien = document.createElement("li")
  //   ingredien.textContent = ingrediensVegan[i];
  //   ingrediensList.appendChild(ingredien);
  // }

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
  let ingrediens = [
    "6 ordentligt mogna bananer (ungefär 5 dl när de är mosade)",
    "2,5 dl jordnötssmör (eller annat nötsmör)",
    "8 msk proteinpulver",
    "4 msk kakao",
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
  selector.appendChild(option2);  //  choose how many servings/portion.
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
  ingrediensHeader.textContent = "";
  ingrediensHeader.setAttribute("class", "listHeader");
  //ingrediensList.appendChild(ingrediensHeader);

  for(let i = 0; i < ingrediens.length; i++){
    let ingredien = document.createElement("li");
    ingredien.textContent = ingrediens[i];
    ingrediensList.appendChild(ingredien);
  }

  let ingrediensSecondHeader = document.createElement("h4");
  ingrediensSecondHeader.textContent = "";
  ingrediensSecondHeader.setAttribute("class", "listHeader");
  //ingrediensList.appendChild(ingrediensSecondHeader);
  
  // for(let i = 0; i < ingrediensVegan.length; i++){
  //   let ingredien = document.createElement("li")
  //   ingredien.textContent = ingrediensVegan[i];
  //   ingrediensList.appendChild(ingredien);
  // }

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
  btnsLikeDislike();
}

//  selection of three recepies and choose to random pick one of them.  
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
  recepie1.addEventListener("click", vegetarian1);
  recepie2.addEventListener("click", vegetarian2);
  recepie3.addEventListener("click", vegetarian3);
  randomBtn.addEventListener("click", randomVegetarian);

  //  recepie1
  let recepieImg = document.createElement("img");
  recepieImg.src = "Vegetarisk/pastagratang/pastagratang.jpg";
  recepie1.appendChild(recepieImg);

  let recepieHeader = document.createElement("h5");
  recepieHeader.textContent = "ITALIENSK PASTAGRATÄNG MED AUBERGINE"
  recepie1.appendChild(recepieHeader);

  //  recepie2
  let recepieImg2 = document.createElement("img");
  recepieImg2.src = "Vegetarisk/Vegobullar/vegobullar-med-kryddpeppar-och-karameliserad-lok.jpg";
  recepie2.appendChild(recepieImg2);

  let recepieHeader2 = document.createElement("h5");
  recepieHeader2.textContent = "VEGOBULLAR MED KRYDDEPPAR OCH KARAMELISERAD LÖK"
  recepie2.appendChild(recepieHeader2);

  //  recepie3
  let recepieImg3 = document.createElement("img");
  recepieImg3.src = "Vegetarisk/Vegetariska kroppkakor/vegetariska-kroppkakor-med-brynt-smor-och-krasse.jpg";
  recepie3.appendChild(recepieImg3);

  let recepieHeader3 = document.createElement("h5");
  recepieHeader3.textContent = "VEGETARISKA KROPPKAKOR MED BRYNT SMÖR OCH KARSSE"
  recepie3.appendChild(recepieHeader3);

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
  let ingredients = ["500 g pasta (gärna kort som t.ex. penne)"];

  let ingredients2 = [
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

  let ingredients3 = [
    "1 huvudsallad",
    "3 msk olivolja",
    "1 msk balsamvinäger (av god kvalitet)",
    "1 rödlök"
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
  ingredientsHeader.textContent = "Pasta:";
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
  ingredientsThirdHeader.textContent = "Sallad:";
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
  let ingredients = [
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
  ingredientsHeader.textContent = "";
  ingredientsHeader.setAttribute("class", "listHeader");
  ingredientsList.appendChild(ingredientsHeader);

  for(let i = 0; i < ingredients.length; i++){
    let ingredien = document.createElement("li");
    ingredien.textContent = ingredients[i];
    ingredientsList.appendChild(ingredien);
  }

  let ingredientsSecondHeader = document.createElement("h4");
  ingredientsSecondHeader.textContent = "";
  ingredientsSecondHeader.setAttribute("class", "listHeader");
  //ingredientsList.appendChild(ingredientsSecondHeader);
  
  // for(let i = 0; i < ingredients2.length; i++){
  //   let ingredien = document.createElement("li")
  //   ingredien.textContent = ingredients2[i];
  //   ingredientsList.appendChild(ingredien);
  // }

  let ingredientsThirdHeader = document.createElement("h4");
  ingredientsThirdHeader.textContent = "";
  ingredientsThirdHeader.setAttribute("class", "listHeader");
  //ingredientsList.appendChild(ingredientsThirdHeader);
  
  // for(let i = 0; i < ingredients3.length; i++){
  //   let ingredien = document.createElement("li")
  //   ingredien.textContent = ingredients3[i];
  //   ingredientsList.appendChild(ingredien);
  // }

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
  let ingredients = [
    "1 kg mjölig potatis",
    "1 tsk salt",
    "1 ägg",
    "3 dl vetemjöl",
    "olja, till stekning"
  ];

  // Fyllning
  let ingredients2 = [
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

  let ingredients3 = [
    "75 g smör, brynt",
    "0,5 ask krasse",
    "2 dl rårörda lingon"
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
  ingredientsHeader.textContent = "";
  ingredientsHeader.setAttribute("class", "listHeader");
  ingredientsList.appendChild(ingredientsHeader);

  for(let i = 0; i < ingredients.length; i++){
    let ingredien = document.createElement("li");
    ingredien.textContent = ingredients[i];
    ingredientsList.appendChild(ingredien);
  }

  let ingredientsSecondHeader = document.createElement("h4");
  ingredientsSecondHeader.textContent = "Fyllning:";
  ingredientsSecondHeader.setAttribute("class", "listHeader");
  ingredientsList.appendChild(ingredientsSecondHeader);
  
  for(let i = 0; i < ingredients2.length; i++){
    let ingredien = document.createElement("li")
    ingredien.textContent = ingredients2[i];
    ingredientsList.appendChild(ingredien);
  }

  let ingredientsThirdHeader = document.createElement("h4");
  ingredientsThirdHeader.textContent = "Till servering:";
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
  btnsLikeDislike();
}

//  selection of three recepies and choose to random pick one of them.  
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
  ing1.textContent = "1 gul lök";
  list.appendChild(ing1);

  let ing2 = document.createElement("li");
  ing2.textContent = "2 broccoli (à 250 g)";
  list.appendChild(ing2);

  let ing3 = document.createElement("li");
  ing3.textContent = "1 msk riven ingefära";
  list.appendChild(ing3);

  let ing4 = document.createElement("li");
  ing4.textContent = "1 tsk olja";
  list.appendChild(ing4);

  let ing5 = document.createElement("li");
  ing5.textContent = "1 vitlöksklyfta";
  list.appendChild(ing5);

  let ing6 = document.createElement("li");
  ing6.textContent = "1 tsk sambal oelek";
  list.appendChild(ing6);

  let ing7 = document.createElement("li");
  ing7.textContent = "400 ml kokosmjölk";
  list.appendChild(ing7);

  let ing8 = document.createElement("li");
  ing8.textContent = "7 1/2 dl grönsaksbuljong";
  list.appendChild(ing8);

  let ing9 = document.createElement("li");
  ing9.textContent = "1 förp kokta kikärter (à 380 g)";
  list.appendChild(ing9);

  let ing10 = document.createElement("li");
  ing10.textContent = "1 tsk olivolja";
  list.appendChild(ing10);

  let ing11 = document.createElement("li");
  ing11.textContent = "1/2 tsk spiskummin";
  list.appendChild(ing11);

  let ing12 = document.createElement("li");
  ing12.textContent = "1/2 kruka persilja";
  list.appendChild(ing12);

  let ing13 = document.createElement("li");
  ing13.textContent = "270 g tofu";
  list.appendChild(ing13);

  let ing14 = document.createElement("li");
  ing14.textContent = "Salt och peppar";
  list.appendChild(ing14);

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

  footer();
  btnBackOneStep();
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
  ing1.textContent = "1 dl cashewnötter";
  list.appendChild(ing1);

  let ing2 = document.createElement("li");
  ing2.textContent = "200 g sötpotatis";
  list.appendChild(ing2);

  let ing3 = document.createElement("li");
  ing3.textContent = "1 1/2 msk finriven färsk ingefära";
  list.appendChild(ing3);

  let ing4 = document.createElement("li");
  ing4.textContent = "1 lime";
  list.appendChild(ing4);

  let ing5 = document.createElement("li");
  ing5.textContent = "2 förp kokta vita bönor (à 380 g)";
  list.appendChild(ing5);

  let ing6 = document.createElement("li");
  ing6.textContent = "1 krm svartpeppar";
  list.appendChild(ing6);

  let ing7 = document.createElement("li");
  ing7.textContent = "1/2 msk bakpulver";
  list.appendChild(ing7);

  let ing8 = document.createElement("li");
  ing8.textContent = "1/2 dl majsstärkelse";
  list.appendChild(ing8);

  let ing9 = document.createElement("li");
  ing9.textContent = "1 dl sesamfrön";
  list.appendChild(ing9);

  // Tillbehör
  let head2 = document.createElement("li");
  head2.textContent = "Tillbehör:";
  head2.setAttribute("class", "listHeader");
  list.appendChild(head2);

  let ing10 = document.createElement("li");
  ing10.textContent = "Grön couscous";
  list.appendChild(ing10);

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

  footer();
  btnBackOneStep();
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
  cookTime.textContent = "80 min";
  option2.text = "2 port";
  option4.text = "4 port";
  option6.text = "6 port";
  option8.text = "8 port";
  imgCutlery.src = "media/cutlery.png";
  imgCutlery.style.height = "28px";
  imgCutlery.style.width = "28px";
  
  selector.appendChild(option6); // 6 port
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
  ing1.textContent = "2 msk mjölkfritt matfett (+ extra till stekning av grönsaker)";
  list.appendChild(ing1);

  let ing2 = document.createElement("li");
  ing2.textContent = "20 kryddpepparkorn";
  list.appendChild(ing2);

  let ing3 = document.createElement("li");
  ing3.textContent = "8 lagerblad";
  list.appendChild(ing3);

  let ing4 = document.createElement("li");
  ing4.textContent = "1/2 dl vetemjöl";
  list.appendChild(ing4);

  let ing5 = document.createElement("li");
  ing5.textContent = "1 1/2 l vatten";
  list.appendChild(ing5);

  let ing6 = document.createElement("li");
  ing6.textContent = "2 1/2 msk kinesisk soja";
  list.appendChild(ing6);

  let ing7 = document.createElement("li");
  ing7.textContent = "2 msk konc mörk grönsaksfond";
  list.appendChild(ing7);

  let ing8 = document.createElement("li");
  ing8.textContent = "3 paket naturellt vegokött (à 300 g)";
  list.appendChild(ing8);

  let ing9 = document.createElement("li");
  ing9.textContent = "1 dl sesamfrön";
  list.appendChild(ing9);
  
  let ing10 = document.createElement("li");
  ing10.textContent = "4 stora morötter";
  list.appendChild(ing10);

  let ing11 = document.createElement("li");
  ing11.textContent = "5 små gula lökar";
  list.appendChild(ing11);

  let ing12 = document.createElement("li");
  ing12.textContent = "salt och svartpeppar";
  list.appendChild(ing12);

  // Tillbehör
  let head2 = document.createElement("li");
  head2.textContent = "Tillbehör:";
  head2.setAttribute("class", "listHeader");
  list.appendChild(head2);

  let ing13 = document.createElement("li");
  ing13.textContent = "Kokt potatis";
  list.appendChild(ing13);

  let ing14 = document.createElement("li");
  ing14.textContent = "Inlagda rödbetor";
  list.appendChild(ing14);

  let ing15 = document.createElement("li");
  ing15.textContent = "Färsk persilja";
  list.appendChild(ing15);

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

  footer();
  btnBackOneStep();
  btnsLikeDislike();
}

function footer(){
  mainFooter.setAttribute('id', 'main-footer');
  document.body.appendChild(mainFooter);
}

function btnBack(){
  //  "Go-Back-Button"
  let aTag = document.createElement("a");
  aTag.setAttribute("href", "index.html");
  aTag.setAttribute("class", "button");
  aTag.textContent = "Huvudmeny";
  mainFooter.appendChild(aTag);
}

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

function btnBackOneStep(){
  let backOneButton = document.createElement("a");
  //dislikeButton.setAttribute("href", "#");
  backOneButton.setAttribute("class", "button arrow");
  backOneButton.textContent = '⟵';
  mainFooter.appendChild(backOneButton);
  backOneButton.addEventListener('click', function(){
    alert("Ingen funktion ännu....");
  })
}

document.addEventListener("DOMContentLoaded", init);