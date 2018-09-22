// A2Z F16
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F16

// Tracery by Kate Compton
// https://github.com/galaxykate/tracery

// import JSONFormatter from 'json-formatter-js';
// var jsonFormat = require('./node_modules/json-format');
// var fs = require('fs');

var grammar = [];
var url = 'https://api.datamuse.com/';
var words = 'words?'
var JSONViewTextArea;
var elementNumber = 0; //Used to keep track of how many elements are in a grammar when generating new elements
var totalGrammarAmount = 4;
var data = [
    myth = {
        "origin": [
            "#[#setFantasyLevel#][#setCharacters#]story#"
        ],
        "setCharacters": [
            "[#setHero#][monster:#monsterRaces#]"
        ],
        "setFantasyLevel": [
            "[npcRaces:human][monsterRaces:#terrestrialAnimalLarge#][petRaces:#petAnimalSmall#]",
            "[npcRaces:#humanRaces#][monsterRaces:#terrestrialAnimalLarge#][petRaces:#petAnimalSmall#]", 
            "[npcRaces:#fantasticRaces#][monsterRaces:#terrestrialAnimalLarge#][petRaces:#petAnimalSmall#]", 
            "[npcRaces:#fantasyRaces#][monsterRaces:#monsterTypes#][petRaces:#petAnimalSmall#]", 
            "[npcRaces:#ridiculousRaces#][monsterRaces:#monsterTypes#][petRaces:#petAnimalSmall#]"
        ],
        "setHero": [
            "[#setHeroGender#][heroRace:#npcRaces#][heroPet:#petRaces#]"
        ],
        "setHeroGender": [
            "[heroGender:female][#setHeroFemalePronouns#][heroName:#femaleNames#]",
            "[heroGender:female][#setHeroFemalePronouns#][heroName:#femaleIshNames#]",
            "[heroGender:male][#setHeroMalePronouns#][heroName:#maleNames#]",
            "[heroGender:male][#setHeroMalePronouns#][heroName:#maleIshNames#]"
        ],
        "setHeroFemalePronouns": [
            "[heroThey:she][heroThem:her][heroTheir:her][heroTheirs:hers]"
        ],
        "setHeroMalePronouns": [
            "[heroThey:he][heroThem:him][heroTheir:his][heroTheirs:his]"
        ],
        "setHeroAndrogynousPronouns": [
            "[heroThey:it][heroThem:it][heroTheir:its][heroTheirs:its]"
        ],
        "femaleIshNames": [
            "#femaleNames",
            "#androgynousNames#"
        ],
        "maleIshNames": [
            "#maleNames#",
            "#androgynousNames#"
        ],
        "maleNames": [
            "Steve",
            "Daniel",
            "Terry",
            "Jake"
        ],
        "femaleNames": [
            "Susan",
            "Emma",
            "Mary",
            "Abby"
        ],
        "androgynousNames": [
            "Ash",
            "Reese",
            "Skyler",
            "Robbie"
        ],
        "humanRaces": [
            "scandinavian",
            "african",
            "texan",
            "floridian",
            "indian",
            "native American",
            "asian"
        ],
        "fantasticRaces": [
            "#humanRaces#",
            "ape-men"
        ],
        "fantasyRaces": [
            "#humanRaces#",
            "elf",
            "dwarf"
        ],
        "ridiculousRaces": [
            "#fantasyRaces#",
            "#monsterTypes#"
        ],
        "monsterTypes": [
            '#undeadMonster#',
            '#dragonMonster#',
            '#WereMonster#'
        ],
        // "intelligentEvilOccupation": [
        //     'bandit',
        //     'outlaw',
        //     'thug',
        //     'assassin',
        //     'warlord'
        // ],
        "undeadMonster": [
            'zombie',
            'ghoul',
            'ghost',
            'wight',
            'wraith',
            'lich'
        ],
        "animalSmall": [
            '#petAnimalSmall#',
            'lizard',
            'spider',
            'bee'
        ],
        "petAnimalSmall": [
            'rat',
            'cat',
            'dog',
            'rabbit',
            'fox'
        ],
        "animalLarge": [
            '#terrestrialAnimalLarge#',
            '#aquaticAnimalLarge#'
        ],
        "terrestrialAnimalLarge": [
            '#forestAnimalLarge#',
            '#jungleAnimalLarge'
        ],
        "aquaticAnimalLarge": [
            "whale",
            "squid",
            "octopus",
            "#sharkTypes#"
        ],
        "sharkTypes": [
            "shark",
            "#sharkDescriptor# shark",
            "megalodon"
        ],
        "sharkDescriptor": [
            "great white",
            "tiger",
            "hammerhead",
            "whale"
        ],
        "forestAnimalLarge": [
            'wolf',
            'puma',
            'bear'
        ],
        "jungleAnimalLarge": [
            'gorilla',
            'tiger',
            'jaguar',
            '#reptileAnimalLarge#'
        ],
        "reptileAnimalLarge": [
            'crocodile',
            'alligator',
            '#snake#'
        ],
        "snake": [
            'python',
            'cobra',
            'anaconda'
        ],
        "WereMonster": [
            'were#animalLarge#',
            'vampire'
        ],
        "dragonMonster": [
            'dragon',
            'wyvern',
            'drake',
            'wyrm',
            'hydra',
            'serpent'
        ],
        "prologue": [
            "greetings"
        ],
        "greetings":[
            "Hi#Punctuation#",
            "Hello#Punctuation#"
        ],
        "Punctuation":[
            ".",
            "!"
        ],
        "beginning": [
            "In the beginning there was #heroGender.a# #heroRace.capitalize# named #heroName#.",
            "Since time immemorial, there has been #heroGender.a# #heroRace.capitalize# named #heroName#.",
            "Once upon a time there was #heroGender.a# #heroRace.capitalize# named #heroName#.",
            "In the void there was #heroGender.a# #heroRace.capitalize# named #heroName#."
        ],
        "middle": [
            "#conflict#"
        ],
        "fought": [
            "fought",
            "wrestled",
            "battled"
        ],
        "conflict": [
            "#heroName.capitalize# #fought# with #monster.a#.",
            "#heroName.capitalize# #fought# with #monster.s#."
        ],
        "end": [
            "\nFin.",
            "\nThe End.",
            "\nAnd then, after many years, you were born."
        ],
        "epilogue": [
            "Bye#greetings#"
        ],
        "story": [
            "#prologue# #beginning# #middle# #end# #epilogue#"
        ]
    },
    hero = {
        "origin": [
            "#[#setSingluarPronouns#][#setOccupation#][hero:#name#]story#"
        ],
        "setSingluarPronouns": ["[heroThey:she][heroThem:her][heroTheir:her][heroTheirs:hers]",
            "[heroThey:he][heroThem:him][heroTheir:his][heroTheirs:his]"
        ],
        "setPluralPronouns": [
            "[heroThey:they][heroThem:them][heroTheir:their][heroTheirs:theirs]",
        ],
        "setOccupation": [
            "[occupation:baker]" +
            "[didStuff:" +
            "baked bread," +
            "decorated cupcakes," +
            "folded dough," +
            "made croissants," +
            "iced a cake]",

            "[occupation:warrior]" +
            "[didStuff:" +
            "fought #monster.a#," +
            "saved a village from #monster.a#," +
            "battled #monster.a#," +
            "defeated #monster.a#]"
        ],
        "monster": [
            "dragon",
            "ogre",
            "witch",
            "wizard",
            "goblin",
            "golem",
            "giant",
            "sphinx",
            "warlord"
        ],
        "name": [
            "Cheri",
            "Fox",
            "Morgana",
            "Jedoo",
            "Brick",
            "Shadow",
            "Krox",
            "Urga",
            "Zelph"
        ],
        "story": [
            "#hero.capitalize# was a great #occupation#, and this song tells of #heroTheir# adventure. #hero.capitalize# #didStuff#, then #heroThey# #didStuff#, then #heroThey# went home to read a book."
        ]
    },
    tale = {
        "origin": ["#[heroFavFood:#food#][hero:#character#][villain:#monster#]composition#"],
        "composition": [
            "#heroOrigin# #heroDescription# #heroMeetsVillain# #heroVSVillain# #heroEnd#",
            "#heroOrigin# #heroDescription# #heroDescription# #heroMeetsVillain# #heroVSVillain# #heroEnd#",
            "#heroOrigin# #heroDescription# #heroMeetsVillain# #heroVSVillain# #heroEnd#"
        ],
        "heroOrigin": [
            "Once upon a time, there was #heroADJ.a# #hero#.",
            "In the beginning, there was #hero.capitalize#.",
            "On a #darkADJ# and #stormyADJ# night, #hero.a# appeared."],
        "heroDescription": [
            // "That #hero# was very #heroADJ#.",
            "The #hero# liked #heroFavFood#."
            // "The #hero# was very #goodADJ#."
        ],
        "heroMeetsVillain": [
            "Then the #hero# met a #adj# #adj# #villain#."
        ],
        "heroVSVillain": [
            "And she killed the #villain#."
        ],
        "heroEnd": [
            "And then the #hero# ate #heroFavFood# and she was so #adj# and she was #adj#."
        ],
        "often": [
            "rarely",
            "never",
            "often",
            "almost always",
            "always",
            "sometimes"
        ],
        "darkADJ": [
            'dark',
            'pitch-black',
            'shadowy'],
        "stormyADJ": [
            'stormy',
            'wild',
            'blustery'],
        "character": [
            "#fantasyAnimalSmall#",
            "#fantasyAnimalLarge#",
            "#youngRoyalty#",
            "#animalLarge#",
            "#membersOfCourt#"
        ],
        "youngRoyalty": [
            'princess',
            'prince'
        ],
        "membersOfCourt": [
            'knight',
            'duchess',
            'duke'
        ],
        "adj": [
            '#goodADJ#',
            '#emotiveADJ#',
            '#badADJ#'
        ],
        "goodADJ": [
            '#intelligentADJ#',
            '#strongADJ#',
            '#robustADJ#', // High constitution
            '#dextrousADJ#',
            '#wiseADJ',
            '#charismaticADJ#',
            '#beautyADJ#',
            '#funnyADJ#',
            '#heroADJ#'
        ],
        "heroADJ": [
            'brave',
            'bold',
            'amazing',
            'incredible'
        ],
        "emotiveADJ": [
            // anger, contempt, disgust, fear, joy, sadness and surprise
            '#angryADJ#',
            '#contemptADJ#',
            '#disgustADJ#',
            '#fearADJ#',
            '#happyADJ#',
            '#sadADJ#',
            '#surpriseADJ#'
        ],
        "badADJ": [
            '#odourousADJ#',
            '#weirdADJ#',
            '#evilADJ#'
        ],
        "intelligentADJ": [
            'smart',
            'intelligent',
            'witty',
            'cunning'
        ],
        "strongADJ": [
            'strong'
        ],
        "robustADJ": [
            'robust',
            'hardy'
        ],
        "dextrousADJ": [
            'dextrous',
            'limber'
        ],
        "wiseADJ": [
            'wise'
        ],
        "charismaticADJ": [
            'charismatic',
            'charming',
            'appealing',
            'influential',
            'entertaining',
            'magnetic',
            'enticing',
            'alluring'
        ],
        "beautyADJ": [
            'pretty',
            'beautiful',
            'attractive',
            'stunning',
            'georgeuos'
        ],
        "funnyADJ": [
            'funny',
            'humorous'
        ],
        "angryADJ": [
            'angry',
            'furious'
        ],
        "contemptADJ": [
            'contemptuous'
        ],
        "disgustADJ": [
            'disgusted'
        ],
        "fearADJ": [
            'afraid',
            'scared',
            'terrified'
        ],
        "happyADJ": [
            'happy',
            'overjoyed'
        ],
        "sadADJ": [
            'sad',
            'morose'
        ],
        "surpriseADJ": [
            'surprised'
        ],
        "odourousADJ": [
            'smelly',
            'stinky',
            'foul-smelling'],
        "weirdADJ": [
            'weird',
            'strange',
            'curious',
            'odd',
            'perplexing'
        ],
        "evilADJ": [
            'evil',
            'wicked',
            'malicious',
            'malevolent',
            'unholy',
            'heinous',
            'depraved',
            'vile'
        ],
        "foodGoodADJ": [
            'delicious',
            'delectable',
            'scrumptious',
            'tasty',
            'sumptuous',
            'savoury'
        ],
        "food": [
            '#foodGroups#',
            '#foodGoodADJ# #foodGroups#'
        ],
        "foodGroups": [
            '#soup#',
            '#entree#',
            '#snack.s#'
        ],
        "entree": [
            'steak',
            'pork chop',
            'shrimp',
            'salmon'
        ],
        "snack": [
            'pretzel',
            'fry',
            'chip'
        ],
        "soup": [
            'soup',
            'stew',
            'broth',
            'bisque',
            'chowder'],
        "monster": [
            '#undeadMonster#',
            '#dragonMonster#',
            '#WereMonster#',
            '#humanMonster#'
        ],
        "humanMonster": [
            'bandit',
            'outlaw',
            'thug',
            'assassin'
        ],
        "undeadMonster": [
            'zombie',
            'ghoul',
            'ghost',
            'wight',
            'wraith',
            'lich'],
        "animalSmall": [
            'rat',
            'cat',
            'dog',
            'rabbit',
            'lizard',
            'spider',
            'bee'
        ],
        "animalLarge": [
            'wolf',
            'bear',
            'crocodile',
            'alligator',
            '#snake#',
            'giant squid'
        ],
        "snake": [
            'python',
            'cobra',
            'anaconda'
        ],
        "fantasyAnimalLarge": [
            'unicorn',
            '#dragonMonster#'
        ],
        "fantasyAnimalSmall": [
            'fairy'
        ],
        "WereMonster": [
            'were#animalLarge#',
            'vampire'
        ],
        "dragonMonster": [
            'dragon',
            'wyvern',
            'drake',
            'wyrm',
            'hydra',
            'serpent']
    },
    quest = {
        "origin": [
            "#[#setQuestType#][#setQuestFailCases#]quest#"
        ],
        "setQuestType": [
            "#travel#", //go to [place]
            "#escort#", //#travel# #interact# #guard#
            "#deliver#", //bring [noun] to [person] at [place] [in [place]]
            "#fetch#", //get [thing:noun] from [place] and bring #thing# to [other place]

            "#destroy#", //destroy something
            '#guard#', //guard something, and if threat: destroy threat.

            // "#skill#", //perform [action] using only N skill(s).
            // "#interact#", //perform [action] with N [person]
            // "#combo#", //perform [action] N times. (e.g. for N [person], for N [place])
            "#craft#", //make [thing]

            "#solve#", //bypass or complete puzzle/test
        ],
        "travel": [],
        "escort": [],
        "deliver": [],
        "fetch": [],

        "destroy": [],
        "guard": [],

        // "skill":[],
        // "interact":[],
        // "combo":[],
        "craft": [],
        "solve": [],

        "quest": []
    }
]
var currentDirectory;

function setup() {
    noCanvas();
    //Set a "working" directory so we don't inadvertently delete everything while testing.
    // buildSelector();
    currentDirectory = data[0];
    JSONViewTextArea = document.getElementById("JSONViewTextArea");
    //Establish the grammar.
    reCreateGrammar();
    fillViews();
    changeCurrentView();
    searchDataMuseSimple();
    makeAPISwitchToggle();
}

function makeAPISwitchToggle() {
    var detailsSearch = document.getElementById("Word Search Area");
    var APISwitch = document.getElementById("APISwitchUserMode");
    detailsSearch.addEventListener("toggle", function (evt) {
        if (detailsSearch.open) {
            /* the element was toggled open */
            APISwitch.style.visibility = "visible";
        }
        else {
            /* the element was toggled closed */
            APISwitch.style.visibility = "hidden";
        }
    }, false);
}

function changeCurrentView() {
    hideAllViews();
    var viewSelector = document.getElementById("viewSelect");
    var selectedValue = viewSelector.value;
    document.getElementById(selectedValue).style.display = "block";
}

function hideAllViews() {
    var elements = document.getElementsByClassName("view");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}

function changeCurrentSelectedGrammar(selectedValue) {
    var isNum = /^\d+$/.test(selectedValue);
    if (isNum) {
        currentDirectory = data[selectedValue];
    } else {
        var newGrammar =
            dataKey = "data" + totalGrammarAmount;
        data[totalGrammarAmount] = { [dataKey]: [] }
        currentDirectory = data[totalGrammarAmount++]; //?
    }
    deleteAllGrammarElements(modifyCurrentDirectory=false);
    reCreateGrammar();
    fillViews();
}

function fillViews() {
    fillJSONTextArea();
    fillElementViews();
}

function fillElementViews() {
    for (element in currentDirectory) {
        var arr = currentDirectory[element];
        var newString = arr.length === 0 ? "" : '"' + arr.join('",\n"') + '"';
        makeElementView(element, newString);
    }
}

function fillJSONTextArea() {
    JSONViewTextArea.innerHTML = JSON.stringify(currentDirectory, null, '\t');
}

function resetWorkingDataJSON() { //onblur from JSON textarea
    currentDirectory = JSON.parse(JSONViewTextArea.value);
    deleteAllGrammarElements(false);
    fillElementViews();
    reCreateGrammar();
}

function resetWorkingDataElements() {
    //TODO
    //set currentDirectory to JSON-parsed elements
    // make new javascript object. populate it.
    // set currentDirectory to object.
    reCreateGrammar();
}

function reCreateGrammar() {
    grammar = tracery.createGrammar(currentDirectory);
}

function clearClassesOrTags(search = '.generatedText') {
    var elements = selectAll(search);
    for (var i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
    if (search == '.generatedText') {
        document.getElementById('clearAll').style.visibility = "hidden";
    }
}

function generate() {
    var expansion = grammar.flatten('#origin#');
    document.getElementById('clearAll').style.visibility = "visible";
    newParagraph(expansion);
}

function makeNewElementFromSearch(){
    var arrayValues = document.getElementById('searchResultsArray').value;

    makeElementView("", arrayValues);
    document.getElementById("viewSelect").selectedIndex = 1;
    changeCurrentView();
    document.getElementById("Views").open = true;
}

function makeElementView(InputText = "", AreaText = "") {
    newDiv = document.createElement("DIV");
    newDiv.classList.add("elementView");
    var id = ("element" + elementNumber++);
    newDiv.id = id;

    textInput = document.createElement("INPUT");
    textInput.type = "text";
    textInput.placeholder = "Element";
    textInput.id = ("input_" + id);
    if (InputText == ""){
        textInput.value = id;
    } else {
        textInput.value = InputText;
    }

    newTextArea = document.createElement("TEXTAREA");
    newTextArea.classList.add("grammarView");
    newTextArea.placeholder = "thing1, thing2, thingRed, thingBlue";
    newTextArea.value = AreaText;

    deleteButton = document.createElement("BUTTON");
    // deleteButton.onclick = deleteElement();
    deleteButton.setAttribute("onclick", "deleteGrammarElement('" + id + "')");
    deleteButton.innerHTML = "X";

    newDiv.appendChild(textInput);
    newDiv.appendChild(document.createTextNode(":"));
    newDiv.appendChild(newTextArea);
    newDiv.appendChild(deleteButton);

    // var objString = '{ "' + textInput.value + '": ' + AreaText + '}';
    // console.log(objString);
    // var obj = JSON.parse(objString);
    // console.log(obj);

    // currentDirectory[obj[textInput.value]] = [obj.value];

    fillJSONTextArea();
    document.getElementById("elements").appendChild(newDiv);
}

function deleteAllGrammarElements(modifyCurrentDirectory = "true") {
    for (var i = 0; i < elementNumber; i++) {
        deleteGrammarElement("element" + i, modifyCurrentDirectory);
    }
    elementNumber = 0;
}

function deleteGrammarElement(search, modifyCurrentDirectory = "true") {
    var toDelete = document.getElementById(search);
    if (document.getElementById("input_" + search) != null) {
        // console.log(document.getElementById("input_" + search).value);
        if (modifyCurrentDirectory) {
            delete currentDirectory[document.getElementById("input_" + search).value];
        }
        toDelete.remove();
    }
    //TODO
    //refresh other views, generation tools.
}

function newParagraph(value) {
    var holder = document.createElement("P");
    var par = document.createTextNode(value);
    holder.appendChild(par);

    var r = floor(random(100, 255));
    var g = floor(random(150, 255));
    var b = floor(random(200, 255));
    holder.setAttribute('style', 'background-color:rgb(' + r + ',' + g + ',' + b + ');');

    holder.classList.add('generatedText');
    holder.setAttribute("contenteditable", "true");
    document.body.appendChild(holder);
}

function switchUserMode() {
    var text = document.getElementById("APISwitchUserMode");
    var APIAdvanced = document.getElementById("dataMuseAPIAdvanced");
    var APISimple = document.getElementById("dataMuseAPISimple");
    if (text.innerHTML == 'Advanced') {
        text.innerHTML = 'Simple';
        APIAdvanced.style.display = "block";
        APISimple.style.display = "none";
    } else if (text.innerHTML == 'Simple') {
        text.innerHTML = 'Advanced';
        APIAdvanced.style.display = "none";
        APISimple.style.display = "block";
    }
}

function searchDataMuse() {
    var query = url + words;
    var queryExists = false;

    var searchboxes = document.getElementsByClassName("dataMuseSearchAdvanced");
    for (element in searchboxes){
        var x = (searchboxes[element].value);
        if (x != "" && x != null) {
            if (queryExists) {
                query += "&";
            }
            query += searchboxes[element].placeholder + "=" + x;
            queryExists = true;
        }
    }

    if (queryExists) {
        loadJSON(query, obtainedData);
    }
}

function searchDataMuseSimple() {
    var query = url + words;
    var ml = document.getElementById("dataMuseSearchBox").value;
    if (ml != "" && ml != null) {
        query += "ml= " + ml;
    }
    loadJSON(query, obtainedData);
}

function obtainedData(data) {
    // console.log(JSON.stringify(data));
    var searchResultsJSON = document.getElementById("searchResultsJSON")
    var searchResultsWordArray = document.getElementById("searchResultsArray")
    var fullJSON = JSON.stringify(data, null, '\t');
    var wordList = [];
    for (element in data) {
        var arr = data[element];
        wordList.push(arr.word);
        // var newString = arr.length === 0 ? "" : '"' + arr['word']('",\n"') + '"';
        // console.log(arr.word);
    }
    var newString = wordList.length === 0 ? "" : '"' + wordList.join('",\n"') + '"';
    searchResultsJSON.value = (fullJSON);
    searchResultsWordArray.value = (newString);
    // newParagraph(JSON.stringify(data, null, 3));
    // return data;
}

function createDetails() {
    var holder = document.createElement("DETAILS");
    var summary = document.createElement("SUMMARY");
    summary.innerHTML = "Help";
    var paragraph = document.createElement("P");
    holder.appendChild(summary);
    holder.appendChild(paragraph);
}