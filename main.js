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
var url;
var textarea;
var data = [
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
    }
]

function setup() {
    noCanvas();
    loadTextArea();
    //https://stackoverflow.com/questions/3515523/javascript-how-to-generate-formatted-easy-to-read-json-straight-from-an-object
    textarea.innerHTML = JSON.stringify(data[2], null, '\t');

    url = 'https://api.datamuse.com/words?ml=ringing+in+the+ears&max=4';
    loadJSON(url, obtainedData);
}

function loadTextArea(){
    textarea = document.getElementById("mainGrammar");
    data[2] = JSON.parse(textarea.value);
    grammar = tracery.createGrammar(data[2]);
}

function clearAll() {
    var elements = selectAll('.text');
    for (var i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
}

function generate() {
    var expansion = grammar.flatten('#origin#');
    newParagraph(expansion);
}

function newParagraph(value) {
    var par = createP(value);
    var r = floor(random(100, 255));
    var g = floor(random(150, 255));
    var b = floor(random(200, 255));
    par.style('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
    par.class('text');
}

function obtainedData(data){
    console.log(JSON.stringify(data));
    var holder = document.createElement("TEXTAREA")
    const formatter = document.createTextNode(JSON.stringify(data, null, '\t'));
    holder.appendChild(formatter);
    holder.style = ("z-index: auto; position: relative; line-height: 17.1429px; font-size: 12px; transition: none 0s ease 0s; background: transparent !important; width:100%; height: auto;");
    document.body.appendChild(holder);
    // newParagraph(JSON.stringify(data, null, 3));
    // return data;
}

function createDetails(){
    var holder = document.createElement("DETAILS");
    var summary = document.createElement("SUMMARY");
    summary.innerHTML = "Help";
    var paragraph = document.createElement("P");
    holder.appendChild(summary);
    holder.appendChild(paragraph);

}