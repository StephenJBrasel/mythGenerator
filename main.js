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
var JSONViewTextArea;
var x = 0;
var elementNumber = 0; //Used to keep track of how many elements are in a grammar when generating new elements
var totalGrammarAmount = 4;
var data = [
    myth = {
        "origin": [],
    },
    hero = {
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
        "origin": [
            "#[#setSingluarPronouns#][#setOccupation#][hero:#name#]story#"
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
        "origin": [],
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
    resetWorkingData();
    fillViews();

    url += 'words?ml=ringing+in+the+ears&max=4';
    loadJSON(url, obtainedData);
}

function buildSelector(){
    var selector = document.getElementById("grammarSelect");
    clearClassesOrTags('.GrammarTypeOptions');
    var option;
    for (var i = 0; i < data.length; i++){
        option = document.createElement("OPTION");
        option.classList.add("GrammarTypeOptions");
        option.value = i;
        option.innerHTML = JSON.stringify(data[i]);
        selector.appendChild(option);
    }
    option = document.createElement("OPTION");
    option.classList.add("GrammarTypeOptions");
    option.value="new";
    option.innerHTML="New";
    selector.appendChild(option);
}

function changeCurrentView(){
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

function changeCurrentDirectory() {
    var selector = document.getElementById("grammarSelect");
    var selectedValue = selector.value;
    var isNum = /^\d+$/.test(selectedValue);
    console.log(isNum);
    if (isNum) {
        currentDirectory = data[selectedValue];
    } else {
        var newGrammar = 
        dataKey = "data" + totalGrammarAmount;
        data[totalGrammarAmount] = {[dataKey]:[]}
        currentDirectory = data[totalGrammarAmount++]; //?
    }
    deleteAllGrammarElements(false);
    resetWorkingData();
    fillViews();
}

function fillViews() {
    fillJSONTextArea();
    fillElements();
}

function fillElements() {
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
    fillElements();
    resetWorkingData();
}

function resetWorkingDataElements() {
    //TODO
    //set currentDirectory to JSON-parsed elements
    // make new javascript object. populate it.
    // set currentDirectory to object.
    resetWorkingData();
}

function resetWorkingData() {
    grammar = tracery.createGrammar(currentDirectory);
}

function clearClassesOrTags(search = '.generatedText') {
    var elements = selectAll(search);
    for (var i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
}

function generate() {
    var expansion = grammar.flatten('#origin#');
    newParagraph(expansion);
}

function makeElementView(InputText = "", AreaText = "") {
    elementDivision = document.getElementById("elements");

    newDiv = document.createElement("DIV");
    newDiv.classList.add("elementView");
    var id = ("element" + elementNumber++);
    newDiv.id = id;

    textInput = document.createElement("INPUT");
    textInput.type = "text";
    textInput.placeholder = "Element";
    textInput.id = ("input_" + id);
    textInput.value = InputText;

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

    elementDivision.appendChild(newDiv);
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

function obtainedData(data) {
    // console.log(JSON.stringify(data));
    var holder = document.createElement("TEXTAREA")
    const formatter = document.createTextNode(JSON.stringify(data, null, '\t'));
    holder.appendChild(formatter);
    holder.rows = 6;
    holder.classList.add("grammarView");
    document.body.appendChild(holder);
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