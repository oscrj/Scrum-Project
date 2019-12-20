function init(){
  addEventListeners();
  var section;  // Create section-tag that will wrap the recepie 

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

  btnBack();
}

function mainCourse(){
  document.getElementsByTagName("body")[0].innerHTML = "";

  let rubrik = "Mannerströms oxfilé med pepparsås";
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

  btnBack();
}

function dessert(){
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

  //  "Go-Back-Button"
  mainFooter = document.createElement('footer');
  mainFooter.setAttribute('id', 'main-footer');
  section.appendChild(mainFooter);
  let aTag = document.createElement("a");
  aTag.setAttribute("href", "index.html");
  aTag.setAttribute("class", "button");
  aTag.textContent = "Huvudmeny";
  mainFooter.appendChild(aTag);
}

function vegetarian(){
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

  btnBack();
}

function vegan(){
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

  btnBack();
}

function btnBack(){
  //  "Go-Back-Button"
  let mainFooter = document.createElement('footer');
  mainFooter.setAttribute('id', 'main-footer');
  section.appendChild(mainFooter);
  let aTag = document.createElement("a");
  aTag.setAttribute("href", "index.html");
  aTag.setAttribute("class", "button");
  aTag.textContent = "Huvudmeny";
  mainFooter.appendChild(aTag);
}

document.addEventListener("DOMContentLoaded", init);