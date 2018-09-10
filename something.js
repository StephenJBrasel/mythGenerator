// A2Z F16
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F16

// Tracery by Kate Compton
// https://github.com/galaxykate/tracery

var grammar;

// Here is the grammar
var data = {
    tale: {
        "story": ["#[favoriteFood:#food#][hero:#character#][villain:#monster#]composition#"],
        "composition": [
            "#heroOrigin# #heroDescription# #heroMeetsVillian# #heroVSVillian# #heroEnd#",
            "#heroOrigin# #heroDescription# #heroDescription# #heroMeetsVillian# #heroVSVillian# #heroEnd#",
            "#heroOrigin# #heroDescription# #heroMeetsVillian# #heroVSVillian# #heroEnd#"
        ],
        "heroOrigin": [
            "Once upon a time, there was #heroADJ.a# #hero#.",
            "In the beginning, there was #hero.capitalize#.",
            "On a #darkADJ# and #stormyADJ# night, #hero.a# appeared."],
        "heroDescription": [
            "And that #hero# was very #adj#.",
            "And the #hero# liked #favoriteFood#.",
            "The #hero# was very #adj#."
        ],
        "heroMeetsVillian": [
            "Then the #hero# met a #adj# #adj# #villain#."
        ],
        "heroVSVillian": [
            "And she killed the #villain#."
        ],
        "heroEnd": [
            "And then the #hero# ate #favoriteFood# and she was so #adj# and she was #adj#."
        ],
        // //1st adjective in list = adj.a if quantity = 1 else adj.some(?)
        // "adjectiveOrderList": [ //(2^numAdjCategories) - 1, 2^8-1 = 255
        //     'quantity',
        //     'opinion',
        //     'size',
        //     'age', //millenia, century, decade, year, month, week, day, 
        //     // period(dawn, morning, afternoon, twilight, dusk, evening, night, witching hour, small hours), 
        //     // hour, quarter(15 til), minute, second
        //     'shape', //including height and weight
        //     'colour',
        //     'origin', //nationality/planetality/systemality
        //     'material',
        //     'purpose' // or qualifier
        // ],
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
        "goodADJ":[
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
        "heroADJ":[
            'brave',
            'bold',
            'amazing',
            'incredible'
        ],
        "emotiveADJ":[
            // anger, contempt, disgust, fear, joy, sadness and surprise
            '#angryADJ#',
            '#contemptADJ#',
            '#disgustADJ#',
            '#fearADJ#',
            '#happyADJ#', 
            '#sadADJ#',
            '#surpriseADJ#'
        ],
        "badADJ":[
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
        "contemptADJ":[
            'contemptuous'
        ],
        "disgustADJ":[
            'disgusted'
        ],
        "fearADJ":[
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
        "surpriseADJ":[
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
        "food":[
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
        "humanMonster":[
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
        "fantasyAnimalSmall":[
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
    }
}

function setup() {
    noCanvas();
    var name = 'tale';
    // Make the grammar
    grammar = tracery.createGrammar(data[name]);

    // // A button to generate a new sentence
    //   var button = select('#generate');
    //   button.mousePressed(generate);
    // // A button to clear everything
    //   var clear = select('#clearAll');
    //   clear.mousePressed(clearAll);
}

// Remove everything
function clearAll() {
    var elements = selectAll('.text');
    for (var i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
}

function generate() {
    var expansion = grammar.flatten('#story#');
    var par = createP(expansion);
    var r = floor(random(100, 255));
    var g = floor(random(150, 255));
    var b = floor(random(200, 255));
    par.style('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
    par.class('text');
}