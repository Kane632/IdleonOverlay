// ==UserScript==
// @name         Idleon Tools
// @namespace    http://tampermonkey.net/
// @version      0.26
// @description  Bad Lava F
// @author       Kane
// @match        https://www.legendsofidleon.com/ytGl5oc/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=legendsofidleon.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    console.log("Idleon Tools Started");

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    // START CODE
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //Remove useless padding
    document.getElementById("content-container-inner").style.padding = "0px";

    //Create a global var to store everything so we can access it from console.
    let ITE = window.ITE = {}; //Elements
    let ITF = window.ITF = {}; //Functions
    let ITG = window.ITG = {}; //Globals

    //Retrieve the game element and the bounding client rect
    ITE.game = document.getElementById('openfl-content');
    ITE.canvas = ITE.game.childNodes[0];

    console.log("Idleon Tools Elements Retrieved");

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    // GLOBAL VARS - MISC
    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    ITG.M_ShopData = {
        "W1": {
            "nomwich": {"buy": false, "count": 1},
            "hotdog": {"buy": false, "count": 1},
            "cheezy-pizza": {"buy": false, "count": 1},
            "cue-tape": {"buy":  true, "count": 1},
            "small-mana-potion": {"buy": false, "count": 1},
            "small-strength-potion": {"buy": false, "count": 1},
            "small-life-potion": {"buy": false, "count": 1},
            "small-speed-potion": {"buy": false, "count": 1},
            "crude-oil": {"buy": true, "count": 1},
            "weapon-upgrade-stone-1": {"buy": false, "count": 1},
            "armor-upgrade-stone-1": {"buy": false, "count": 1},
            "tool-upgrade-stone-1": {"buy": false, "count": 1},
            "pugilist-demise": {"buy": false, "count": 1},
            "power-statue": {"buy": false, "count": 1},
            "sculpting-tools": {"buy": false, "count": 1},
            "target-stamp": {"buy": false, "count": 1},
            "shield-stamp": {"buy": false, "count": 1},
            "mana-stamp": {"buy": false, "count": 1},
            "bummo-bag": {"buy": false, "count": 1},
            "storage-chest-2": {"buy": false, "count": 1},
            "storage-chest-6": {"buy": false, "count": 1},
            "storage-chest-7": {"buy": false, "count": 1},
            "basketball": {"buy": false, "count": 1},
            "darts": {"buy": false, "count": 1},
            "bottled-town-teleport": {"buy": false, "count": 1},
            "talent-point-reset-fragment": {"buy": false, "count": 1},
        },
        "W1b": {
            "hotdog": {"buy": false, "count": 1},
            "cheezy-pizza": {"buy": false, "count": 1},
            "cranberry-jam": {"buy": false, "count": 1},
            "average-strength-potion": {"buy": false, "count": 1},
            "small-exp-potion": {"buy": false, "count": 1},
            "armor-upgrade-stone-2": {"buy": false, "count": 1},
            "vitality-stamp": {"buy": false, "count": 1},
            "tarantulight": {"buy": false, "count": 1},
            "silver-antique": {"buy":  true, "count": 1},
            "capitalist-case": {"buy":  true, "count": 3},
            "storage-chest-8": {"buy": false, "count": 1},
            "storage-chest-12": {"buy": false, "count": 1},
            "bottled-town-teleport": {"buy": false, "count": 1},
            "talent-point-reset-fragment": {"buy": false, "count": 1},
        },
        "W2": {
            "kebab-sticks": {"buy": false, "count": 1},
            "meat-pie": {"buy": false, "count": 1},
            "saucy-weiner": {"buy":  true, "count": 1},
            "golden-doubloon": {"buy":  true, "count": 1},
            "bobjoepickle": {"buy":  true, "count": 1},
            "weapon-upgrade-stone-2": {"buy": false, "count": 1},
            "armor-upgrade-stone-2": {"buy": false, "count": 1},
            "tool-upgrade-stone-2": {"buy": false, "count": 1},
            "average-strength-potion": {"buy": false, "count": 1},
            "average-speed-potion": {"buy": false, "count": 1},
            "average-life-potion": {"buy": false, "count": 1},
            "wealthy-wallet": {"buy": false, "count": 1},
            "storage-chest-9": {"buy": false, "count": 1},
            "storage-chest-10": {"buy": false, "count": 1},
            "storage-chest-13": {"buy": false, "count": 1},
            "storage-chest-15": {"buy": false, "count": 1},
            "guilding-tools": {"buy": false, "count": 1},
            "vendor-stamp": {"buy": false, "count": 1},
            "bottled-town-teleport": {"buy": false, "count": 1},
            "talent-point-reset-fragment": {"buy": false, "count": 1},
            "secret-map": {"buy": false, "count": 1},
        },
        "W2b": {
            "copper-twine": {"buy": false, "count": 1},
            "wormie-weights": {"buy": false, "count": 1},
            "leafy-vines": {"buy": false, "count": 1},
            "one-pound-of-steel": {"buy": false, "count": 1},
            "dynamite": {"buy": false, "count": 1},
            "needledrop": {"buy": false, "count": 1},
            "not-dynamite": {"buy": false, "count": 1},
            "tool-upgrade-stone-1": {"buy": false, "count": 1},
            "tool-upgrade-stone-2": {"buy": false, "count": 1},
            "matty-bag-stamp": {"buy": false, "count": 1},
            "clover-stamp": {"buy": false, "count": 1},
            "cattleprod-token": {"buy": false, "count": 1},
            "talent-point-reset-fragment": {"buy": false, "count": 1},
        },
        "W3": {
            "mountain-bread": {"buy": false, "count": 1},
            "yeti-ham": {"buy": false, "count": 1},
            "sheepie-dairy": {"buy": false, "count": 1},
            "cardboard-traps": {"buy": false, "count": 1},
            "wax-skull": {"buy": false, "count": 1},
            "weapon-upgrade-stone-3": {"buy": false, "count": 1},
            "armor-upgrade-stone-3": {"buy": false, "count": 1},
            "tool-upgrade-stone-3": {"buy": false, "count": 1},
            "decent-strength-potion": {"buy": false, "count": 1},
            "decent-speed-potion": {"buy": false, "count": 1},
            "decent-life-potion": {"buy": false, "count": 1},
            "prosperous-pouch": {"buy": false, "count": 1},
            "storage-chest-16": {"buy": false, "count": 1},
            "storage-chest-17": {"buy": false, "count": 1},
            "storage-chest-18": {"buy": false, "count": 1},
            "storage-chest-19": {"buy": false, "count": 1},
            "storage-chest-20": {"buy": false, "count": 1},
            "storage-chest-21": {"buy": false, "count": 1},
            "bottled-town-teleport": {"buy": false, "count": 1},
            "talent-point-reset-fragment": {"buy": false, "count": 1},
            "damaged-cog": {"buy": false, "count": 1},
            "bottled-world-town-teleport": {"buy": false, "count": 1},
            "anvil-reset-whetstone": {"buy": false, "count": 1},
        },
        "W4": {
            "pile-of-processor-chips": {"buy": false, "count": 1},
            "strung-jewels": {"buy": false, "count": 1},
            "cupcake": {"buy": false, "count": 1},
            "spicy-space-ribs": {"buy": false, "count": 1},
            "sappy-dna-splicer": {"buy": false, "count": 1},
            "weapon-upgrade-stone-4": {"buy": false, "count": 1},
            "armor-upgrade-stone-4": {"buy": false, "count": 1},
            "tool-upgrade-stone-4": {"buy": false, "count": 1},
            "potent-strength-potion": {"buy": false, "count": 1},
            "potent-speed-potion": {"buy": false, "count": 1},
            "potent-life-potion": {"buy": false, "count": 1},
            "potent-exp-potion": {"buy": false, "count": 1},
            "sack-of-success": {"buy": false, "count": 1},
            "egg-stamp": {"buy": false, "count": 1},
            "spice-stamp": {"buy": false, "count": 1},
            "sigil-stamp": {"buy": false, "count": 1},
            "blue-tome-pages": {"buy": false, "count": 1},
        },
        "W5": {
            "lemon-slice": {"buy": false, "count": 1},
            "grilled-cheese-nomwich": {"buy": false, "count": 1},
            "magma-barrel": {"buy":  true, "count": 1},
            "weapon-upgrade-stone-5": {"buy": false, "count": 1},
            "armor-upgrade-stone-5": {"buy": false, "count": 1},
            "tool-upgrade-stone-5": {"buy": false, "count": 1},
            "refinery-stamp": {"buy": false, "count": 1},
            "treasure-totebag": {"buy": false, "count": 1},
            "red-tome-pages": {"buy": false, "count": 1},
        },
        "W6": {
            "bonejoepickle": {"buy":  true, "count": 1},
            "crop-transfer-ticket": {"buy":  true, "count": 1},
            "raw-nigiri": {"buy": false, "count": 1},
            "dumpling": {"buy": false, "count": 1},
            "plasma-barrel": {"buy":  true, "count": 1},
            "weapon-upgrade-stone-6": {"buy": false, "count": 1},
            "armor-upgrade-stone-6": {"buy": false, "count": 1},
            "tool-upgrade-stone-6": {"buy": false, "count": 1},
            "forge-stamp": {"buy": false, "count": 1},
            "rucksack-of-riches": {"buy": false, "count": 1},
            "storage-chest-26": {"buy": false, "count": 1},
            "storage-chest-27": {"buy": false, "count": 1},
            "storage-chest-28": {"buy": false, "count": 1},
        },
    }

    ITG.M_CardData = {
        "0": {
            "name": "blunder hills",
            "scroll": 0,
            "startY": 0.3257,
        },
        "1": {
            "name": "yum-yum desert",
            "scroll": 0,
            "startY": 0.5518,
        },
        "2": {
            "name": "easy resources",
            "scroll": 1,
            "startY": 0.4654,
        },
        "3": {
            "name": "medium resources",
            "scroll": 2,
            "startY": 0.3728,
        },
        "4": {
            "name": "frostbite tundra",
            "scroll": 3,
            "startY": 0.4497,
        },
        "5": {
            "name": "hard resources",
            "scroll": 4,
            "startY": 0.3621 ,
        },
        "6": {
            "name": "hyperion nebula",
            "scroll": 5,
            "startY": 0.5016,
        },
        "7": {
            "name": "smoulderin plateau",
            "scroll": 6,
            "startY": 0.4122,
        },
        "8": {
            "name": "spirited valley",
            "scroll": 7,
            "startY": 0.3260,
        },
        "9": {
            "name": "shimmerifin deep",
            "scroll": 7,
            "startY": 0.5549,
        },
        "10": {
            "name": "dungeons",
            "scroll": 8,
            "startY": 0.4577,
        },
        "11": {
            "name": "bosses and nightmares",
            "scroll": 9,
            "startY": 0.4467,
        },
        "12": {
            "name": "events",
            "scroll": 10,
            "startY": 0.6410,
        },
        "startX": 0.4346,
        "ratioOffsetX": 0.0325,
        "ratioOffsetY": 0.0794,
        "maxScroll": 10,
        "cardsPerRow": 8,
    }

    //Helper card positions index per group
    // 00 - 01 - 02 - 03 - 04 - 05 - 06 - 07
    // 08 - 09 - 10 - 11 - 12 - 13 - 14 - 15
    // 16 - 17 - 18 - 19 - 20 - 21 - 22 - 23
    // 24 - 25 - 26 - 27 - 28 - 29 - 30 - 31
    // 32 - 33 - 34 - 35 - 36 - 37 - 38 - 39
    // and so on...

    ITG.M_CardPresets = {
        //https://docs.google.com/spreadsheets/d/1at-y9t5ohYky33nOLoSxHYeyRX-3T91paj-nTSHrB3c/edit?gid=1826222324#gid=1826222324
        //AlmostPsycho's sampling sheet
        "rare-drops-db-dk": ["11-25", "11-8", "0-14", "11-5", "8-12", "7-2", "11-24", "9-11"],
        "candy-setup-monster-mats-db": ["11-5", "11-24", "8-12", "11-25", "9-11", "7-0", "8-4", "11-27"],
        "afk-fight-gmush-db": ["", "", "", "", "", "", "", ""], //use "akf-mk-dmg"
        "mana-snapshot": ["", "", "", "", "", "", "", ""],
        "hp-snapshot": ["", "", "", "", "", "", "", ""],
        //chopping, mining, fishing and catching are the same
        "chopping": ["11-4", "8-7", "5-20", "11-15", "8-2", "7-12", "6-12", "11-18"],
        "mining": ["11-4", "8-7", "5-20", "11-15", "8-2", "7-12", "6-12", "11-18"],
        "fishing": ["11-4", "8-7", "5-20", "11-15", "8-2", "7-12", "6-12", "11-18"],
        "catching": ["11-4", "8-7", "5-20", "11-15", "8-2", "7-12", "6-12", "11-18"],
        "vman-sampling": ["", "", "", "", "", "", "", ""],
        "trapping-efficiency-bm": ["", "", "", "", "", "", "", ""],
        "trapping-xp-vman": ["", "", "", "", "", "", "", ""],
        "lab": ["11-4", "8-7", "5-20", "11-15", "8-2", "7-12", "6-6", "11-18"],
        "laddle": ["", "", "", "", "", "", "", ""],
        //https://docs.google.com/spreadsheets/d/19GM0RDazB4k7z4nHrKOeiKRw41w1nB4y7K7C5tlPVDs/edit?gid=145697753#gid=145697753
        //W7 guide sheet by Trickzbunny
        "akf-mk-dmg": ["11-27", "11-26", "11-5", "11-3", "8-4", "7-0", "6-9", "11-24"],
        "crystal-active-xp": ["1-8", "0-10", "2-11", "12-0", "11-22", "11-9", "7-8", "6-3"],
        "max-damage": ["9-1", "8-0", "7-7", "4-5", "4-14", "11-2", "11-19", "11-26"],
        "empty": [], // To clear out preset cards
    }

    ITG.M_DefaultCardPresets = [
        {"preset":"0", cards: ITG.M_CardPresets["akf-mk-dmg"]}, //Combat AFK
        {"preset":"1", cards: ITG.M_CardPresets["crystal-active-xp"]}, //Combat Active XP
        {"preset":"2", cards: ITG.M_CardPresets["candy-setup-monster-mats-db"]}, //Combat AFK Drops (has MK)
        {"preset":"3", cards: ITG.M_CardPresets["rare-drops-db-dk"]}, // Combat drops (No MK, instead more DR for rare drops)
        {"preset":"4", cards: ITG.M_CardPresets["empty"]}, // Filler
        {"preset":"5", cards: ITG.M_CardPresets["lab"]}, //Lab - filler
        {"preset":"6", cards: ITG.M_CardPresets["chopping"]}, //Skill
    ]

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    // GLOBAL VARS - MOUSE BUTTONS POSITIONS
    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    ITG.CurrentMouse = { "X": 0.0, "Y": 0.0 };
    ITG.SavedMouse = { "X": -1, "Y": -1 };

    ITG.B_BarAutoAttack = { "X": 0.4619, "Y": 0.9378 };
    ITG.B_BarAttacks = { "X": 0.5300, "Y": 0.9315 }; //Also binded as Q
    ITG.B_BarItems = { "X": 0.6089, "Y": 0.9391 }; //Also binded as I
    ITG.B_BarTalents = { "X": 0.6783, "Y": 0.9410 }; //Also binded as T
    ITG.B_BarCodex = { "X": 0.7451, "Y": 0.9296 }; //Also binded as C
    ITG.B_BarMap = { "X": 0.8070, "Y": 0.9331 }; //Also binded as M
    ITG.B_BarPlayers = { "X": 0.888542, "Y": 0.935315};

    ITG.B_CodexQuests = { "X": 0.4599, "Y": 0.1818 };
    ITG.B_CodexHints = { "X": 0.5371, "Y": 0.1850 };
    ITG.B_CodexQuickRef = { "X": 0.6197, "Y": 0.1787 };
    ITG.B_CodexCards = { "X": 0.7013, "Y": 0.1818 };
    ITG.B_CodexFamily = { "X": 0.7777, "Y": 0.1834 };
    ITG.B_CodexFriends = { "X": 0.8594, "Y": 0.1787 };
    ITG.B_CodexGuild = { "X": 0.9339, "Y": 0.1818 };

    ITG.B_CodexQuickRefAnvil = { "X": 0.4750, "Y": 0.3365 };
    ITG.B_CodexQuickRefStorage = { "X": 0.5842, "Y": 0.3318 };
    ITG.B_CodexQuickRefStamps = { "X": 0.6996, "Y": 0.3254 };
    ITG.B_CodexQuickRefTasks = { "X": 0.8105, "Y": 0.3270 };
    ITG.B_CodexQuickRefObols = { "X": 0.9251, "Y": 0.3318 };
    ITG.B_CodexQuickRefAlchemy = { "X": 0.4732, "Y": 0.5290 };
    ITG.B_CodexQuickRefClickers = { "X": 0.5824, "Y": 0.5275 };
    ITG.B_CodexQuickRefArcade = { "X": 0.6969, "Y": 0.5275 };
    ITG.B_CodexQuickRefConstruction = { "X": 0.8070, "Y": 0.5322 };
    ITG.B_CodexQuickRefGaming = { "X": 0.9339, "Y": 0.5306 };
    ITG.B_CodexQuickRef3dPrinter = { "X": 0.4776, "Y": 0.6884 };
    ITG.B_CodexQuickRefSneaking = { "X": 0.5833, "Y": 0.6900 };
    ITG.B_CodexQuickRefSpelunking = { "X": 0.6969, "Y": 0.6916 };
    
    ITG.B_CodexCardsSets = {
        "Open": { "X": 0.3858, "Y": 0.2876 },
        "Close": { "X": 0.0584, "Y": 0.2876 },
        "PreviousPage": { "X": 0.1000, "Y": 0.8477 },
        "NextPage": { "X": 0.3664, "Y": 0.8477 },
        "0": { "X": 0.3504, "Y": 0.6054 },
        "1": { "X": 0.3504, "Y": 0.6935 },
        "2": { "X": 0.3522, "Y": 0.7800 },
    };

    ITG.B_CodexCardsFilter = {
        "Open": { "X": 0.3867, "Y": 0.4261 },
        "Close": { "X": 0.0593, "Y": 0.4308 },
        "PreviousPage": { "X": 0.1027, "Y": 0.1791 },
        "NextPage": { "X": 0.3646, "Y": 0.1791 },
        "R0C0": { "X": 0.1115, "Y": 0.2483 },
        "R0C1": { "X": 0.2602, "Y": 0.2483 },
        "R1C0": { "X": 0.1115, "Y": 0.3380 },
        "R1C1": { "X": 0.2602, "Y": 0.3380 },
        "R2C0": { "X": 0.1115, "Y": 0.4119 },
        "R2C1": { "X": 0.2602, "Y": 0.4119 },
        "R3C0": { "X": 0.1115, "Y": 0.4984 },
        "R3C1": { "X": 0.2602, "Y": 0.4984 },
        "R4C0": { "X": 0.1115, "Y": 0.5771 },
        "R4C1": { "X": 0.2602, "Y": 0.5771 },
        "R5C0": { "X": 0.1115, "Y": 0.6652 },
        "R5C1": { "X": 0.2602, "Y": 0.6652 },
        "R6C0": { "X": 0.1115, "Y": 0.7407 },
        "R6C1": { "X": 0.2602, "Y": 0.7407 },
        "R7C0": { "X": 0.1115, "Y": 0.8257 },
        "R7C1": { "X": 0.2602, "Y": 0.8257 },
    };

    ITG.B_CodexCardsEquippedSlots = {
        "0": { "X": 0.7299, "Y": 0.6144 },
        "1": { "X": 0.8048, "Y": 0.6175 },
        "2": { "X": 0.8745, "Y": 0.6207 },
        "3": { "X": 0.9494, "Y": 0.6097 },
        "4": { "X": 0.7308, "Y": 0.7774 },
        "5": { "X": 0.7969, "Y": 0.7758 },
        "6": { "X": 0.8745, "Y": 0.7758 },
        "7": { "X": 0.9388, "Y": 0.7821 },
    };

    ITG.B_CodexCardsPresets = {
        "0": { "X": 0.7246, "Y": 0.4326 },
        "1": { "X": 0.7625, "Y": 0.4326 },
        "2": { "X": 0.8004, "Y": 0.4326 },
        "3": { "X": 0.8357, "Y": 0.4326 },
        "4": { "X": 0.8727, "Y": 0.4326 },
        "5": { "X": 0.9133, "Y": 0.4326 },
        "6": { "X": 0.9494, "Y": 0.4326 },
    };

    ITG.B_AnvilCraftTab = { "X": 0.3285, "Y": 0.1881 };
    ITG.B_AnvilProduceTab = { "X": 0.5336, "Y": 0.1913 };
    ITG.B_AnvilQuickDeposit = { "X": 0.4528, "Y": 0.1834 };

    ITG.B_ChestDepositAll = { "X": 0.0943, "Y": 0.3478 };

    ITG.B_ColoNextWave = { "X": 0.355208, "Y": 0.106209 };
    ITG.B_RestartBoss = { "X": 0.243789, "Y": 0.132812 };

    ITG.B_PlayerMenu = {
        "Left": { "X": 0.295833, "Y": 0.750000},
        "Right": { "X": 0.755208, "Y": 0.750000},
        "P1": { "X": 0.333333, "Y": 0.332168},
        "P2": { "X": 0.517708, "Y": 0.332168},
        "P3": { "X": 0.717708, "Y": 0.332168},
        "P4": { "X": 0.333333, "Y": 0.580420},
        "P5": { "X": 0.517708, "Y": 0.580420},
        "P6": { "X": 0.717708, "Y": 0.580420},
    }

    ITG.B_EzAccess = {
        "BossKeys": { "X": 0.3622, "Y": 0.3144 },
        "ColosseumTickets": { "X": 0.3658, "Y": 0.4122 },
        "W1": { "X": 0.2399, "Y": 0.7373 },
        "W1b": { "X": 0.2800, "Y": 0.7373 },
        "W2": { "X": 0.3245, "Y": 0.7342 },
        "W2b": { "X": 0.3672, "Y": 0.7373 },
        "W3": { "X": 0.2372, "Y": 0.8149 },
        "W4": { "X": 0.2818, "Y": 0.8085 },
        "W5": { "X": 0.3271, "Y": 0.8101 },
        "W6": { "X": 0.3734, "Y": 0.8085 },
    };
    
    ITG.B_QuickShop = { "X": 0.3209, "Y": 0.8307 };
    ITG.B_ShopSlots = {
        "0": { "X": 0.3405, "Y": 0.3465 },
        "0-": { "X": 0.4865, "Y": 0.3070 },
        "0+": { "X": 0.5461, "Y": 0.3038 },

        "1": { "X": 0.3396, "Y": 0.4763 },
        "1-": { "X": 0.4865, "Y": 0.4367 },
        "1+": { "X": 0.5470, "Y": 0.4367 },

        "2": { "X": 0.3432, "Y": 0.6155 },
        "2-": { "X": 0.4856, "Y": 0.5744 },
        "2+": { "X": 0.5461, "Y": 0.5744 },

        "3": { "X": 0.3405, "Y": 0.7468 },
        "3-": { "X": 0.4865, "Y": 0.7025 },
        "3+": { "X": 0.5452, "Y": 0.7041 },
    };

    ITG.B_Inv = {
        "R0C0": { "X": 0.7074, "Y": 0.3294 },
        "R0C1": { "X": 0.7815, "Y": 0.3204 },
        "R0C2": { "X": 0.8614, "Y": 0.3228 },
        "R0C3": { "X": 0.9352, "Y": 0.3179 },
        "R1C0": { "X": 0.7064, "Y": 0.4576 },
        "R1C1": { "X": 0.7843, "Y": 0.4564 },
        "R1C2": { "X": 0.8591, "Y": 0.4533 },
        "R1C3": { "X": 0.9359, "Y": 0.4588 },
        "R2C0": { "X": 0.7027, "Y": 0.5936 },
        "R2C1": { "X": 0.7809, "Y": 0.5893 },
        "R2C2": { "X": 0.8591, "Y": 0.5978 },
        "R2C3": { "X": 0.9311, "Y": 0.5948 },
        "R3C0": { "X": 0.7027, "Y": 0.7265 },
        "R3C1": { "X": 0.7894, "Y": 0.7235 },
        "R3C2": { "X": 0.8550, "Y": 0.7211 },
        "R3C3": { "X": 0.9332, "Y": 0.7259 },
    };

    ITG.B_InvBag = {
        "0": { "X": 0.6792, "Y": 0.1850 },
        "1": { "X": 0.7271, "Y": 0.1801 },
        "2": { "X": 0.7754, "Y": 0.1850 },
        "3": { "X": 0.8189, "Y": 0.1874 },
        "4": { "X": 0.8713, "Y": 0.1922 },
        "5": { "X": 0.9141, "Y": 0.1850 },
        "6": { "X": 0.9638, "Y": 0.1838 },
    };

    ITG.B_W1Colo = { "X": 0.733333, "Y": 0.419580 };
    ITG.B_W1ColoEnterUp = { "X": 0.677083, "Y": 0.419580 };
    ITG.B_W1ColoEnterLow = { "X": 0.677083, "Y": 0.307692 };
    ITG.B_W1ColoExit = { "X": 0.770833, "Y": 0.629371 };

    ITG.B_W2Colo = { "X": 0.760417, "Y": 0.506993 };
    ITG.B_W2ColoEnterUp = { "X": 0.820833, "Y": 0.223776 };
    ITG.B_W2ColoEnterLow = { "X": 0.820833, "Y": 0.314685 };
    ITG.B_W2ColoExit = { "X": 0.898958, "Y": 0.349650 };
    ITG.B_W2ClickerShinyFish = { "X": 0.060417, "Y": 0.804196 };

    ITG.B_W2WeeklyBoss = {
        "1": { "X": 0.6381, "Y": 0.5554 },
        "2": { "X": 0.6399, "Y": 0.6772 },
        "3": { "X": 0.6364, "Y": 0.7848 },
    }

    ITG.B_W2AlchemyBubbles = {
        "O1": { "X": 0.1453, "Y": 0.5212 },
        "O1U": { "X": 0.5045, "Y": 0.7335 },
        "O2": { "X": 0.0936, "Y": 0.4420 },
        "O2U": { "X": 0.5018, "Y": 0.6828 },
        "O3": { "X": 0.1640, "Y": 0.3850 },
        "O3U": { "X": 0.5125, "Y": 0.6258 },
        "O4": { "X": 0.0998, "Y": 0.3010 },
        "O4U": { "X": 0.5053, "Y": 0.5339 },
        "O5": { "X": 0.1489, "Y": 0.1917 },
        "O5U": { "X": 0.5018, "Y": 0.4579 },
        "O6": { "X": 0.1070, "Y": 0.5117 },
        "O6U": { "X": 0.5045, "Y": 0.7272 },
        "O7": { "X": 0.1667, "Y": 0.4293 },
        "O7U": { "X": 0.5045, "Y": 0.6828 },
        "O8": { "X": 0.1649, "Y": 0.3279 },
        "O8U": { "X": 0.5053, "Y": 0.5688 },
        "O9": { "X": 0.1132, "Y": 0.2646 },
        "O9U": { "X": 0.5045, "Y": 0.5070 },
        "O10": { "X": 0.1373, "Y": 0.1695 },
        "O10U": { "X": 0.5036, "Y": 0.4515 },
        "O11": { "X": 0.1310, "Y": 0.5244 },
        "O11U": { "X": 0.5089, "Y": 0.7335 },
        "O12": { "X": 0.1275, "Y": 0.4325 },
        "O12U": { "X": 0.5036, "Y": 0.6670 },
        "O13": { "X": 0.1631, "Y": 0.3438 },
        "O13U": { "X": 0.5045, "Y": 0.5830 },
        "O14": { "X": 0.1123, "Y": 0.2994 },
        "O14U": { "X": 0.5053, "Y": 0.5434 },
        "O15": { "X": 0.1168, "Y": 0.2028 },
        "O15U": { "X": 0.5053, "Y": 0.4547 },
        "O16": { "X": 0.0847, "Y": 0.5054 },
        "O16U": { "X": 0.5053, "Y": 0.7272 },
        "O17": { "X": 0.1524, "Y": 0.4436 },
        "O17U": { "X": 0.5053, "Y": 0.6812 },
        "O18": { "X": 0.1007, "Y": 0.3501 },
        "O18U": { "X": 0.5053, "Y": 0.5941 },
        "O19": { "X": 0.1613, "Y": 0.2978 },
        "O19U": { "X": 0.5053, "Y": 0.5402 },
        "O20": { "X": 0.1186, "Y": 0.1965 },
        "O20U": { "X": 0.5000, "Y": 0.4515 },
        "O21": { "X": 0.1453, "Y": 0.5133 },
        "O21U": { "X": 0.5053, "Y": 0.7272 },
        "O22": { "X": 0.0972, "Y": 0.4547 },
        "O22U": { "X": 0.5107, "Y": 0.6828 },
        "O23": { "X": 0.1703, "Y": 0.3691 },
        "O23U": { "X": 0.5018, "Y": 0.6195 },
        "O24": { "X": 0.0990, "Y": 0.2963 },
        "O24U": { "X": 0.5018, "Y": 0.5276 },
        "O25": { "X": 0.1524, "Y": 0.1854 },
        "O25U": { "X": 0.5000, "Y": 0.4484 },
        "O26": { "X": 0.1043, "Y": 0.5086 },
        "O26U": { "X": 0.5089, "Y": 0.7335 },
        "O27": { "X": 0.1685, "Y": 0.4547 },
        "O27U": { "X": 0.5071, "Y": 0.6828 },
        "O28": { "X": 0.1631, "Y": 0.3248 },
        "O28U": { "X": 0.5080, "Y": 0.5656 },
        "O29": { "X": 0.1114, "Y": 0.2646 },
        "O29U": { "X": 0.5053, "Y": 0.5101 },
        "O30": { "X": 0.1373, "Y": 0.1759 },
        "O30U": { "X": 0.5071, "Y": 0.4547 },
        "O31": { "X": 0.0829, "Y": 0.5006 },
        "O31U": { "X": 0.5098, "Y": 0.7288 },
        "O32": { "X": 0.1524, "Y": 0.4436 },
        "O32U": { "X": 0.5107, "Y": 0.6812 },
        "O33": { "X": 0.0954, "Y": 0.3660 },
        "O33U": { "X": 0.5053, "Y": 0.5909 },
        "O34": { "X": 0.1560, "Y": 0.2963 },
        "O34U": { "X": 0.5036, "Y": 0.5307 },
        "O35": { "X": 0.1221, "Y": 0.2044 },
        "O35U": { "X": 0.5027, "Y": 0.4484 },

        "G1": { "X": 0.3440, "Y": 0.5054 },
        "G1U": { "X": 0.6961, "Y": 0.7304 },
        "G2": { "X": 0.2763, "Y": 0.4198 },
        "G2U": { "X": 0.6970, "Y": 0.6702 },
        "G3": { "X": 0.3271, "Y": 0.3406 },
        "G3U": { "X": 0.6952, "Y": 0.5878 },
        "G4": { "X": 0.3485, "Y": 0.2266 },
        "G4U": { "X": 0.6925, "Y": 0.4705 },
        "G5": { "X": 0.2950, "Y": 0.1759 },
        "G5U": { "X": 0.6916, "Y": 0.4515 },
        "G6": { "X": 0.2915, "Y": 0.4864 },
        "G6U": { "X": 0.6952, "Y": 0.7256 },
        "G7": { "X": 0.3458, "Y": 0.4610 },
        "G7U": { "X": 0.6978, "Y": 0.7018 },
        "G8": { "X": 0.3128, "Y": 0.3723 },
        "G8U": { "X": 0.6978, "Y": 0.6163 },
        "G9": { "X": 0.3057, "Y": 0.2582 },
        "G9U": { "X": 0.6961, "Y": 0.5054 },
        "G10": { "X": 0.3449, "Y": 0.1790 },
        "G10U": { "X": 0.6889, "Y": 0.4547 },
        "G11": { "X": 0.3476, "Y": 0.5181 },
        "G11U": { "X": 0.6996, "Y": 0.7240 },
        "G12": { "X": 0.3690, "Y": 0.4103 },
        "G12U": { "X": 0.7023, "Y": 0.6575 },
        "G13": { "X": 0.3048, "Y": 0.3612 },
        "G13U": { "X": 0.6970, "Y": 0.6004 },
        "G14": { "X": 0.2950, "Y": 0.2582 },
        "G14U": { "X": 0.6934, "Y": 0.5054 },
        "G15": { "X": 0.3316, "Y": 0.1774 },
        "G15U": { "X": 0.6934, "Y": 0.4547 },
        "G16": { "X": 0.3423, "Y": 0.5086 },
        "G16U": { "X": 0.7005, "Y": 0.7256 },
        "G17": { "X": 0.2710, "Y": 0.4515 },
        "G17U": { "X": 0.6996, "Y": 0.6923 },
        "G18": { "X": 0.3369, "Y": 0.3802 },
        "G18U": { "X": 0.6925, "Y": 0.6179 },
        "G19": { "X": 0.3022, "Y": 0.2868 },
        "G19U": { "X": 0.6996, "Y": 0.5276 },
        "G20": { "X": 0.3387, "Y": 0.1949 },
        "G20U": { "X": 0.6978, "Y": 0.4515 },
        "G21": { "X": 0.3396, "Y": 0.4959 },
        "G21U": { "X": 0.6978, "Y": 0.7304 },
        "G22": { "X": 0.2745, "Y": 0.4183 },
        "G22U": { "X": 0.6934, "Y": 0.6622 },
        "G23": { "X": 0.3280, "Y": 0.3485 },
        "G23U": { "X": 0.6916, "Y": 0.5798 },
        "G24": { "X": 0.3512, "Y": 0.2297 },
        "G24U": { "X": 0.6818, "Y": 0.4737 },
        "G25": { "X": 0.2977, "Y": 0.1854 },
        "G25U": { "X": 0.6809, "Y": 0.4531 },
        "G26": { "X": 0.2977, "Y": 0.4864 },
        "G26U": { "X": 0.7085, "Y": 0.7256 },
        "G27": { "X": 0.3414, "Y": 0.4484 },
        "G27U": { "X": 0.6872, "Y": 0.6955 },
        "G28": { "X": 0.3093, "Y": 0.3755 },
        "G28U": { "X": 0.6845, "Y": 0.6084 },
        "G29": { "X": 0.3128, "Y": 0.2662 },
        "G29U": { "X": 0.7005, "Y": 0.5070 },
        "G30": { "X": 0.3280, "Y": 0.1822 },
        "G30U": { "X": 0.6880, "Y": 0.4579 },
        "G31": { "X": 0.3476, "Y": 0.5244 },
        "G31U": { "X": 0.7050, "Y": 0.7335 },
        "G32": { "X": 0.3654, "Y": 0.4119 },
        "G32U": { "X": 0.6925, "Y": 0.6448 },
        "G33": { "X": 0.3057, "Y": 0.3406 },
        "G33U": { "X": 0.6880, "Y": 0.5925 },
        "G34": { "X": 0.3022, "Y": 0.2709 },
        "G34U": { "X": 0.6943, "Y": 0.5022 },
        "G35": { "X": 0.3423, "Y": 0.1980 },
        "G35U": { "X": 0.7157, "Y": 0.4642 },

        "P1": { "X": 0.5356, "Y": 0.5133 },
        "P1U": { "X": 0.3717, "Y": 0.7240 },
        "P2": { "X": 0.4644, "Y": 0.4547 },
        "P2U": { "X": 0.3690, "Y": 0.6907 },
        "P3": { "X": 0.5294, "Y": 0.3755 },
        "P3U": { "X": 0.3734, "Y": 0.6195 },
        "P4": { "X": 0.4920, "Y": 0.2757 },
        "P4U": { "X": 0.3708, "Y": 0.5196 },
        "P5": { "X": 0.5258, "Y": 0.1885 },
        "P5U": { "X": 0.3663, "Y": 0.4515 },
        "P6": { "X": 0.5053, "Y": 0.5355 },
        "P6U": { "X": 0.3681, "Y": 0.7319 },
        "P7": { "X": 0.5517, "Y": 0.4626 },
        "P7U": { "X": 0.3645, "Y": 0.7066 },
        "P8": { "X": 0.5169, "Y": 0.3549 },
        "P8U": { "X": 0.3663, "Y": 0.6004 },
        "P9": { "X": 0.5490, "Y": 0.2376 },
        "P9U": { "X": 0.3565, "Y": 0.4975 },
        "P10": { "X": 0.4947, "Y": 0.1949 },
        "P10U": { "X": 0.3761, "Y": 0.4531 },
        "P11": { "X": 0.5125, "Y": 0.5577 },
        "P11U": { "X": 0.3654, "Y": 0.7304 },
        "P12": { "X": 0.4848, "Y": 0.4499 },
        "P12U": { "X": 0.3681, "Y": 0.6907 },
        "P13": { "X": 0.5419, "Y": 0.3802 },
        "P13U": { "X": 0.3690, "Y": 0.6274 },
        "P14": { "X": 0.5339, "Y": 0.2836 },
        "P14U": { "X": 0.3699, "Y": 0.5228 },
        "P15": { "X": 0.5098, "Y": 0.2028 },
        "P15U": { "X": 0.3654, "Y": 0.4515 },
        "P16": { "X": 0.5312, "Y": 0.5418 },
        "P16U": { "X": 0.3681, "Y": 0.7272 },
        "P17": { "X": 0.4777, "Y": 0.4674 },
        "P17U": { "X": 0.3645, "Y": 0.7082 },
        "P18": { "X": 0.5446, "Y": 0.4040 },
        "P18U": { "X": 0.3770, "Y": 0.6004 },
        "P19": { "X": 0.4840, "Y": 0.3026 },
        "P19U": { "X": 0.3797, "Y": 0.5497 },
        "P20": { "X": 0.5232, "Y": 0.2266 },
        "P20U": { "X": 0.3752, "Y": 0.4689 },
        "P21": { "X": 0.5303, "Y": 0.5006 },
        "P21U": { "X": 0.3717, "Y": 0.7272 },
        "P22": { "X": 0.4626, "Y": 0.4705 },
        "P22U": { "X": 0.3672, "Y": 0.6892 },
        "P23": { "X": 0.5196, "Y": 0.3786 },
        "P23U": { "X": 0.3699, "Y": 0.6163 },
        "P24": { "X": 0.4875, "Y": 0.2883 },
        "P24U": { "X": 0.3699, "Y": 0.5196 },
        "P25": { "X": 0.5134, "Y": 0.1949 },
        "P25U": { "X": 0.3734, "Y": 0.4436 },
        "P26": { "X": 0.5116, "Y": 0.5402 },
        "P26U": { "X": 0.3663, "Y": 0.7335 },
        "P27": { "X": 0.4831, "Y": 0.4563 },
        "P27U": { "X": 0.3645, "Y": 0.6923 },
        "P28": { "X": 0.5410, "Y": 0.3802 },
        "P28U": { "X": 0.3672, "Y": 0.6210 },
        "P29": { "X": 0.5410, "Y": 0.2836 },
        "P29U": { "X": 0.3628, "Y": 0.5196 },
        "P30": { "X": 0.5107, "Y": 0.2012 },
        "P30U": { "X": 0.3708, "Y": 0.4547 },
        "P31": { "X": 0.5036, "Y": 0.5339 },
        "P31U": { "X": 0.3699, "Y": 0.7335 },
        "P32": { "X": 0.5517, "Y": 0.4721 },
        "P32U": { "X": 0.3672, "Y": 0.7034 },
        "P33": { "X": 0.5134, "Y": 0.3596 },
        "P33U": { "X": 0.3672, "Y": 0.5830 },
        "P34": { "X": 0.5383, "Y": 0.2503 },
        "P34U": { "X": 0.3717, "Y": 0.4800 },
        "P35": { "X": 0.4929, "Y": 0.1933 },
        "P35U": { "X": 0.3699, "Y": 0.4531 },

        "Y1": { "X": 0.6622, "Y": 0.4864 },
        "Y1U": { "X": 0.5588, "Y": 0.7208 },
        "Y2": { "X": 0.7290, "Y": 0.4214 },
        "Y2U": { "X": 0.5659, "Y": 0.6654 },
        "Y3": { "X": 0.6693, "Y": 0.3343 },
        "Y3U": { "X": 0.5553, "Y": 0.5719 },
        "Y4": { "X": 0.7317, "Y": 0.2757 },
        "Y4U": { "X": 0.5624, "Y": 0.5181 },
        "Y5": { "X": 0.6987, "Y": 0.1917 },
        "Y5U": { "X": 0.5642, "Y": 0.4563 },
        "Y6": { "X": 0.7157, "Y": 0.5022 },
        "Y6U": { "X": 0.5597, "Y": 0.7272 },
        "Y7": { "X": 0.6604, "Y": 0.4278 },
        "Y7U": { "X": 0.5517, "Y": 0.6670 },
        "Y8": { "X": 0.7335, "Y": 0.3786 },
        "Y8U": { "X": 0.5624, "Y": 0.6226 },
        "Y9": { "X": 0.6898, "Y": 0.3058 },
        "Y9U": { "X": 0.5624, "Y": 0.5339 },
        "Y10": { "X": 0.6925, "Y": 0.1854 },
        "Y10U": { "X": 0.5642, "Y": 0.4610 },
        "Y11": { "X": 0.6925, "Y": 0.5117 },
        "Y11U": { "X": 0.5570, "Y": 0.7272 },
        "Y12": { "X": 0.7442, "Y": 0.4404 },
        "Y12U": { "X": 0.5624, "Y": 0.6765 },
        "Y13": { "X": 0.6720, "Y": 0.3406 },
        "Y13U": { "X": 0.5561, "Y": 0.5909 },
        "Y14": { "X": 0.6898, "Y": 0.2424 },
        "Y14U": { "X": 0.5570, "Y": 0.4927 },
        "Y15": { "X": 0.7504, "Y": 0.1806 },
        "Y15U": { "X": 0.5597, "Y": 0.4436 },
        "Y16": { "X": 0.7228, "Y": 0.4911 },
        "Y16U": { "X": 0.5606, "Y": 0.7272 },
        "Y17": { "X": 0.6551, "Y": 0.4214 },
        "Y17U": { "X": 0.5561, "Y": 0.6638 },
        "Y18": { "X": 0.7014, "Y": 0.3438 },
        "Y18U": { "X": 0.5561, "Y": 0.5846 },
        "Y19": { "X": 0.7228, "Y": 0.2440 },
        "Y19U": { "X": 0.5624, "Y": 0.4753 },
        "Y20": { "X": 0.6765, "Y": 0.1743 },
        "Y20U": { "X": 0.5624, "Y": 0.4420 },
        "Y21": { "X": 0.6569, "Y": 0.4848 },
        "Y21U": { "X": 0.5561, "Y": 0.7193 },
        "Y22": { "X": 0.7255, "Y": 0.4262 },
        "Y22U": { "X": 0.5624, "Y": 0.6606 },
        "Y23": { "X": 0.6729, "Y": 0.3343 },
        "Y23U": { "X": 0.5624, "Y": 0.5703 },
        "Y24": { "X": 0.7281, "Y": 0.2820 },
        "Y24U": { "X": 0.5668, "Y": 0.5149 },
        "Y25": { "X": 0.7014, "Y": 0.1759 },
        "Y25U": { "X": 0.5659, "Y": 0.4563 },
        "Y26": { "X": 0.7183, "Y": 0.4943 },
        "Y26U": { "X": 0.5624, "Y": 0.7240 },
        "Y27": { "X": 0.6586, "Y": 0.4357 },
        "Y27U": { "X": 0.5606, "Y": 0.6670 },
        "Y28": { "X": 0.7299, "Y": 0.3897 },
        "Y28U": { "X": 0.5588, "Y": 0.6242 },
        "Y29": { "X": 0.6978, "Y": 0.2963 },
        "Y29U": { "X": 0.5561, "Y": 0.5418 },
        "Y30": { "X": 0.6863, "Y": 0.1949 },
        "Y30U": { "X": 0.5713, "Y": 0.4452 },
        "Y31": { "X": 0.6925, "Y": 0.5086 },
        "Y31U": { "X": 0.5588, "Y": 0.7240 },
        "Y32": { "X": 0.7424, "Y": 0.4357 },
        "Y32U": { "X": 0.5517, "Y": 0.6717 },
        "Y33": { "X": 0.6729, "Y": 0.3533 },
        "Y33U": { "X": 0.5561, "Y": 0.5862 },
        "Y34": { "X": 0.6907, "Y": 0.2392 },
        "Y34U": { "X": 0.5588, "Y": 0.4785 },
        "Y35": { "X": 0.7317, "Y": 0.1917 },
        "Y35U": { "X": 0.5588, "Y": 0.4499 },
    }

    ITG.B_W3Colo = { "X": 0.703125, "Y": 0.529720 };
    ITG.B_W3ColoEnter = { "X": 0.771875, "Y": 0.491259 };
    ITG.B_W3ColoExit = { "X": 0.106250, "Y": 0.783217 };

    ITG.B_W3Boss = { "X": 0.089674, "Y": 0.756392 };
    ITG.B_W3BossItemsStart = { "X": 0.556770, "Y": 0.791364 };
    ITG.B_W3BossItemsEnd = { "X": 0.968370, "Y": 0.792784 };
    ITG.B_W3BossEnterPortal = { "X": 0.710417, "Y": 0.618881 };
    ITG.B_W3BossEnterButton = { "X": 0.766667, "Y": 0.449301 };
    ITG.B_W3BossExitPortal = { "X": 0.955208, "Y": 0.484266 };

    ITG.B_W3CogsPreviousPage = { "X": 0.0185, "Y": 0.5857 };
    ITG.B_W3CogsNextPage = { "X": 0.1290, "Y": 0.5912 };
    ITG.B_W3CogsTrashToggle = { "X": 0.6734, "Y": 0.0713 };
    ITG.B_W3CogsCogShelfToggle = { "X": 0.3136, "Y": 0.0670 };
    ITG.B_W3CogsUltimateCog = { "X": 0.3039, "Y": 0.7152 };
    ITG.B_W3Cogs = {
        "0": { "X": 0.0253, "Y": 0.1789 },
        "1": { "X": 0.0746, "Y": 0.1777 },
        "2": { "X": 0.1233, "Y": 0.1801 },
        "3": { "X": 0.0267, "Y": 0.2647 },
        "4": { "X": 0.0743, "Y": 0.2672 },
        "5": { "X": 0.1233, "Y": 0.2696 },
        "6": { "X": 0.0253, "Y": 0.3512 },
        "7": { "X": 0.0736, "Y": 0.3518 },
        "8": { "X": 0.1246, "Y": 0.3530 },
        "9": { "X": 0.0253, "Y": 0.4412 },
        "10": { "X": 0.0729, "Y": 0.4388 },
        "11": { "X": 0.1297, "Y": 0.4425 },
        "12": { "X": 0.0243, "Y": 0.5126 },
        "13": { "X": 0.0736, "Y": 0.5210 },
        "14": { "X": 0.1270, "Y": 0.5186 },    
    };

    ITG.B_W5Boss = { "X": 0.7177777920765959, "Y": 0.5051244509516838 };
    ITG.B_W5BossEnterPortal = { "X": 0.4183948575730473, "Y": 0.4355783308931186 };
    ITG.B_W5BossEnterButton = { "X": 0.47687130420235113, "Y": 0.2613469985358712 };
    ITG.B_W5BossExitPortal = { "X": 0.17831198162315895, "Y": 0.7459736456808199 };
    ITG.B_W5GamingHarvestAll = { "X": 0.7150, "Y": 0.0469 };
    ITG.B_W5GamingShovel = { "X": 0.6360, "Y": 0.1559 };
    ITG.B_W5Cave15Search = { "X": 0.5115, "Y": 0.2020 };
    ITG.B_W5GamingStartGrid = { "X": 0.0512, "Y": 0.2539 };
    ITG.B_W5GamingEndGrid = { "X": 0.7407, "Y": 0.7979 };
    ITG.B_W5GamingPlants = {
        "R0C0": { "X": 0.0893, "Y": 0.2799 },
        "R0C1": { "X": 0.1389, "Y": 0.2780 },
        "R0C2": { "X": 0.1933, "Y": 0.2787 },
        "R0C3": { "X": 0.2586, "Y": 0.2744 },
        "R0C4": { "X": 0.3212, "Y": 0.2726 },
        "R0C5": { "X": 0.3830, "Y": 0.2750 },
        "R0C6": { "X": 0.4442, "Y": 0.2774 },
        "R0C7": { "X": 0.4990, "Y": 0.2756 },
        "R0C8": { "X": 0.5585, "Y": 0.2780 },
        "R0C9": { "X": 0.6163, "Y": 0.2799 },
        "R0C10": { "X": 0.6714, "Y": 0.2750 },
        "R0C11": { "X": 0.7210, "Y": 0.2793 },

        "R1C0": { "X": 0.0893, "Y": 0.3482 },
        "R1C1": { "X": 0.1389, "Y": 0.3482 },
        "R1C2": { "X": 0.1933, "Y": 0.3482 },
        "R1C3": { "X": 0.2586, "Y": 0.3482 },
        "R1C4": { "X": 0.3212, "Y": 0.3482 },
        "R1C5": { "X": 0.3830, "Y": 0.3482 },
        "R1C6": { "X": 0.4442, "Y": 0.3482 },
        "R1C7": { "X": 0.4990, "Y": 0.3482 },
        "R1C8": { "X": 0.5585, "Y": 0.3482 },
        "R1C9": { "X": 0.6163, "Y": 0.3482 },
        "R1C10": { "X": 0.6714, "Y": 0.3482 },
        "R1C11": { "X": 0.7210, "Y": 0.3482 },

        "R2C0": { "X": 0.0893, "Y": 0.4388 },
        "R2C1": { "X": 0.1389, "Y": 0.4388 },
        "R2C2": { "X": 0.1933, "Y": 0.4388 },
        "R2C3": { "X": 0.2586, "Y": 0.4388 },
        "R2C4": { "X": 0.3212, "Y": 0.4388 },
        "R2C5": { "X": 0.3830, "Y": 0.4388 },
        "R2C6": { "X": 0.4442, "Y": 0.4388 },
        "R2C7": { "X": 0.4990, "Y": 0.4388 },
        "R2C8": { "X": 0.5585, "Y": 0.4388 },
        "R2C9": { "X": 0.6163, "Y": 0.4388 },
        "R2C10": { "X": 0.6714, "Y": 0.4388 },
        "R2C11": { "X": 0.7210, "Y": 0.4388 },

        "R3C0": { "X": 0.0893, "Y": 0.5186 },
        "R3C1": { "X": 0.1389, "Y": 0.5186 },
        "R3C2": { "X": 0.1933, "Y": 0.5186 },
        "R3C3": { "X": 0.2586, "Y": 0.5186 },
        "R3C4": { "X": 0.3212, "Y": 0.5186 },
        "R3C5": { "X": 0.3830, "Y": 0.5186 },
        "R3C6": { "X": 0.4442, "Y": 0.5186 },
        "R3C7": { "X": 0.4990, "Y": 0.5186 },
        "R3C8": { "X": 0.5585, "Y": 0.5186 },
        "R3C9": { "X": 0.6163, "Y": 0.5186 },
        "R3C10": { "X": 0.6714, "Y": 0.5186 },
        "R3C11": { "X": 0.7210, "Y": 0.5186 },

        "R4C0": { "X": 0.0893, "Y": 0.6214 },
        "R4C1": { "X": 0.1389, "Y": 0.6214 },
        "R4C2": { "X": 0.1933, "Y": 0.6214 },
        "R4C3": { "X": 0.2586, "Y": 0.6214 },
        "R4C4": { "X": 0.3212, "Y": 0.6214 },
        "R4C5": { "X": 0.3830, "Y": 0.6214 },
        "R4C6": { "X": 0.4442, "Y": 0.6214 },
        "R4C7": { "X": 0.4990, "Y": 0.6214 },
        "R4C8": { "X": 0.5585, "Y": 0.6214 },
        "R4C9": { "X": 0.6163, "Y": 0.6214 },
        "R4C10": { "X": 0.6714, "Y": 0.6214 },
        "R4C11": { "X": 0.7210, "Y": 0.6214 },

        "R5C0": { "X": 0.0893, "Y": 0.6963 },
        "R5C1": { "X": 0.1389, "Y": 0.6963 },
        "R5C2": { "X": 0.1933, "Y": 0.6963 },
        "R5C3": { "X": 0.2586, "Y": 0.6963 },
        "R5C4": { "X": 0.3212, "Y": 0.6963 },
        "R5C5": { "X": 0.3830, "Y": 0.6963 },
        "R5C6": { "X": 0.4442, "Y": 0.6963 },
        "R5C7": { "X": 0.4990, "Y": 0.6963 },
        "R5C8": { "X": 0.5585, "Y": 0.6963 },
        "R5C9": { "X": 0.6163, "Y": 0.6963 },
        "R5C10": { "X": 0.6714, "Y": 0.6963 },
        "R5C11": { "X": 0.7210, "Y": 0.6963 },
    };

    ITG.B_W6FarmingCollectAll = { "X": 0.1042, "Y": 0.2357 };
    ITG.B_W6FarmingHandymanTools = { "X": 0.0809, "Y": 0.3280 };
    ITG.B_W6FarmingInstaGrow = { "X": 0.0396, "Y": 0.3663 };
    ITG.B_W6FarmingHandymanToolsBack = { "X": 0.0746, "Y": 0.5182 };
    ITG.B_W6FarmingPlants = {
        "R0C0": { "X": 0.2442, "Y": 0.7306 },
        "R0C1": { "X": 0.3360, "Y": 0.7306 },
        "R0C2": { "X": 0.4208, "Y": 0.7306 },
        "R0C3": { "X": 0.5139, "Y": 0.7306 },
        "R0C4": { "X": 0.6057, "Y": 0.7306 },
        "R0C5": { "X": 0.6951, "Y": 0.7306 },
        "R0C6": { "X": 0.7803, "Y": 0.7306 },
        "R0C7": { "X": 0.8771, "Y": 0.7306 },
        "R0C8": { "X": 0.9582, "Y": 0.7306 },

        "R1C0": { "X": 0.2442, "Y": 0.5117 },
        "R1C1": { "X": 0.3360, "Y": 0.5117 },
        "R1C2": { "X": 0.4208, "Y": 0.5117 },
        "R1C3": { "X": 0.5139, "Y": 0.5117 },
        "R1C4": { "X": 0.6057, "Y": 0.5117 },
        "R1C5": { "X": 0.6951, "Y": 0.5117 },
        "R1C6": { "X": 0.7803, "Y": 0.5117 },
        "R1C7": { "X": 0.8771, "Y": 0.5117 },
        "R1C8": { "X": 0.9582, "Y": 0.5117 },

        "R2C0": { "X": 0.2442, "Y": 0.3177 },
        "R2C1": { "X": 0.3360, "Y": 0.3177 },
        "R2C2": { "X": 0.4208, "Y": 0.3177 },
        "R2C3": { "X": 0.5139, "Y": 0.3177 },
        "R2C4": { "X": 0.6057, "Y": 0.3177 },
        "R2C5": { "X": 0.6951, "Y": 0.3177 },
        "R2C6": { "X": 0.7803, "Y": 0.3177 },
        "R2C7": { "X": 0.8771, "Y": 0.3177 },
        "R2C8": { "X": 0.9582, "Y": 0.3177 },

        "R3C0": { "X": 0.2442, "Y": 0.1105 },
        "R3C1": { "X": 0.3360, "Y": 0.1105 },
        "R3C2": { "X": 0.4208, "Y": 0.1105 },
        "R3C3": { "X": 0.5139, "Y": 0.1105 },
        "R3C4": { "X": 0.6057, "Y": 0.1105 },
        "R3C5": { "X": 0.6951, "Y": 0.1105 },
        "R3C6": { "X": 0.7803, "Y": 0.1105 },
        "R3C7": { "X": 0.8771, "Y": 0.1105 },
        "R3C8": { "X": 0.9582, "Y": 0.1105 },
    };

    ITG.B_W7SpelunkingDescend = { "X": 0.1086, "Y": 0.1572 };

    ITG.keyNameToKeyCodeMap = {
        'a': 65, 'b': 66, 'c': 67, 'd': 68, 'e': 69, 'f': 70, 'g': 71, 'h': 72, 'i': 73, 'j': 74, 
        'k': 75, 'l': 76, 'm': 77, 'n': 78, 'o': 79, 'p': 80, 'q': 81, 'r': 82, 's': 83, 't': 84, 
        'u': 85, 'v': 86, 'w': 87, 'x': 88, 'y': 89, 'z': 90,
        '0': 48, '1': 49, '2': 50, '3': 51, '4': 52, '5': 53, '6': 54, '7': 55, '8': 56, '9': 57,
        'Escape': 27, 'Enter': 13, 'Backspace': 8, 'Tab': 9, 'Ctrl': 17, 'Shift': 16,

        // Function keys
        'F1': 112, 'F2': 113, 'F3': 114, 'F4': 115, 'F5': 116, 'F6': 117, 
        'F7': 118, 'F8': 119, 'F9': 120, 'F10': 121, 'F11': 122, 'F12': 123,

        // Arrow keys
        'ArrowUp': 38, 'ArrowDown': 40, 'ArrowLeft': 37, 'ArrowRight': 39,

        // Insert, Delete, Home, End
        'Insert': 45, 'Delete': 46, 'Home': 36, 'End': 35,

        // Page Up / Page Down (Scroll up/down)
        'PageUp': 33, 'PageDown': 34,

        // Numpad keys
        'Numpad0': 96, 'Numpad1': 97, 'Numpad2': 98, 'Numpad3': 99, 'Numpad4': 100,
        'Numpad5': 101, 'Numpad6': 102, 'Numpad7': 103, 'Numpad8': 104, 'Numpad9': 105,
        'NumpadDecimal': 110, 'NumpadAdd': 107, 'NumpadSubtract': 109, 
        'NumpadMultiply': 106, 'NumpadDivide': 111, 'NumpadEnter': 13
    };
    console.log("Idleon Tools Global vars declared");

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    // HELPER FUNCTIONS
    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    function clamp(number, min, max) {
      return Math.max(min, Math.min(number, max));
    }

    // Update mouse coordinates on every mouse move
    window.addEventListener('mousemove', (event) => {
        ITG.CurrentMouse.X = event.clientX;
        ITG.CurrentMouse.Y = event.clientY;
    });

    window.addEventListener('keyup', (event) => {
        if (event.key === 'Home') {
            // Calculate the coordinates relative to ITE.game. Subtract game rect x and y positions
            const ratio = ITF.getCurrentMouseRatio();

            console.log(`Mouse coordinates relative to ITE.game: { "X": ${ratio.X.toFixed(4)}, "Y": ${ratio.Y.toFixed(4)} }`);
        }
        else if (event.key === 'PageUp') {
            ITF.saveCurrentMouseRatio();
        }
        else if (event.key === 'PageDown') {
            ITF.clearSavedMouseRatio();
        }
        else if (event.ctrlKey && event.code === 'Numpad7') {
            const gameRect = ITE.game.getBoundingClientRect();

            const ratio = ITF.getCurrentMouseRatio();
            const cordX = gameRect.left + gameRect.width * ratio.X;
            const cordY = gameRect.top + gameRect.height * ratio.Y;

            ITF.simulateMouseEvent("mousedown", cordX, cordY);
            console.log(`MouseDown event at coordinates relative to ITE.game: { "X": ${ratio.X.toFixed(4)}, "Y": ${ratio.Y.toFixed(4)} }`);
        }
        else if (event.ctrlKey && event.code === 'Numpad8') {
            const gameRect = ITE.game.getBoundingClientRect();

            const ratio = ITF.getCurrentMouseRatio();
            const cordX = gameRect.left + gameRect.width * ratio.X;
            const cordY = gameRect.top + gameRect.height * ratio.Y;

            ITF.simulateMouseEvent("mouseup", cordX, cordY);
            console.log(`MouseUp event at coordinates relative to ITE.game: { "X": ${ratio.X.toFixed(4)}, "Y": ${ratio.Y.toFixed(4)} }`);
        }
        else if (event.ctrlKey && event.code === 'Numpad9') {
            const gameRect = ITE.game.getBoundingClientRect();

            const ratio = ITF.getCurrentMouseRatio();
            const cordX = gameRect.left + gameRect.width * ratio.X;
            const cordY = gameRect.top + gameRect.height * ratio.Y;

            ITF.simulateMouseEvent("click", cordX, cordY);
            console.log(`Click event at coordinates relative to ITE.game: { "X": ${ratio.X.toFixed(4)}, "Y": ${ratio.Y.toFixed(4)} }`);
        }
        else if (event.ctrlKey && event.code === 'NumpadAdd') {
            const gameRect = ITE.game.getBoundingClientRect();

            const ratio = ITF.getCurrentMouseRatio();
            const cordX = gameRect.left + gameRect.width * ratio.X;
            const cordY = gameRect.top + gameRect.height * ratio.Y;

            ITF.simulateMouseEvent("mousedown", cordX, cordY);
            ITF.simulateMouseEvent("mouseup", cordX, cordY);
            console.log(`Full mouse click event at coordinates relative to ITE.game: { "X": ${ratio.X.toFixed(4)}, "Y": ${ratio.Y.toFixed(4)} }`);
        }
        else if (event.ctrlKey && event.code === 'Numpad0')
        {
            ITF.utilityDepositAll();
        }
        else if (event.ctrlKey && event.code === 'NumpadSubtract')
        {
            ITF.setEnabledAutoPickupAndDepositAll();
        }
        else if (event.shiftKey && event.code === 'NumpadMultiply')
        {
            ITF.maximizeOverlay({});
        }
        else if (event.shiftKey && event.code === 'NumpadDivide')
        {
            ITF.minimizeOverlay({});
        }
    });

    ITF.sleep = function (ms) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }

    //Simulate mouse event function
    ITF.simulateMouseEvent = function (eventName, x, y) {
        ITE.game.dispatchEvent(new MouseEvent(eventName, {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y,
            button: 0
        }));
    };

    ITF.calculateCords = function(ratio) {
        let gameRect = ITE.game.getBoundingClientRect(); //Update it just in case
        return { "X": gameRect.left + gameRect.width * ratio.X, "Y": gameRect.top + gameRect.height * ratio.Y };
    }

    ITF.getCurrentMouseRatio = function() {
        const gameRect = ITE.game.getBoundingClientRect();
        const ratioX = clamp(ITG.CurrentMouse.X - gameRect.left, 0, gameRect.right) / gameRect.width;
        const ratioY = clamp(ITG.CurrentMouse.Y - gameRect.top, 0, gameRect.bottom) / gameRect.height;
        return { "X": ratioX, "Y": ratioY };
    }

    //Simulate mouse click function by screen game window ratio (0 - 1.0)
    ITF.simulateMouseClickRatio = async function(ratio, delayAfter = 0, delayHold = 0, repeat = 1, repeatDelay = -1) {
        if (ratio == null && ITF.isSavedMouseRatioValid())
        {
            ratio = ITF.getSavedMouseRatio();
            console.log(`Ratio was null. Using saved mouse coordinates for simulateMouseClickRatio: { "X": ${ratio.X.toFixed(4)}, "Y": ${ratio.Y.toFixed(4)} }`);
        }

        let coords = ITF.calculateCords(ratio)

        for (let i = 0; i < repeat; ++i)
        {
            ITF.simulateMouseEvent("mousedown", coords.X, coords.Y);
            if (delayHold > 0)
            {
                await ITF.sleep(delayHold);
            }
            ITF.simulateMouseEvent("mouseup", coords.X, coords.Y);

            if (repeatDelay >= 0)
            {
                await ITF.sleep(repeatDelay);
            }
            else
            {
                await ITF.sleep(delayAfter);
            }
        }
    };

    //Simulate mouse click function by current mouse position
    ITF.simulateMouseClick = async function(delayAfter = 0, delayHold = 0, repeat = 1, repeatDelay = -1) {
        const ratio = ITF.getCurrentMouseRatio();
        await ITF.simulateMouseClickRatio(ratio, delayAfter, delayHold, repeat, repeatDelay);
    };

    //Simulate mouse down function by screen game window ratio (0 - 1.0)
    ITF.simulateMouseDownRatio = async function(ratio, delayAfter = 0) {
        let coords = ITF.calculateCords(ratio)
        ITF.simulateMouseEvent("mousedown", coords.X, coords.Y);
        await ITF.sleep(delayAfter);
    };

    //Simulate mouse down function by current mouse position
    ITF.simulateMouseDown = async function(delayAfter = 0) {
        const ratio = ITF.getCurrentMouseRatio();
        await ITF.simulateMouseDownRatio(ratio, delayAfter);
    };

    //Simulate mouse up function by screen game window ratio (0 - 1.0)
    ITF.simulateMouseUpRatio = async function(ratio, delayAfter = 0) {
        let coords = ITF.calculateCords(ratio)
        ITF.simulateMouseEvent("mouseup", coords.X, coords.Y);
        await ITF.sleep(delayAfter);
    };

    //Simulate mouse up function by current mouse position
    ITF.simulateMouseUp = async function(delayAfter = 0) {
        const ratio = ITF.getCurrentMouseRatio();
        await ITF.simulateMouseUpRatio(ratio, delayAfter);
    };

    //Simulate mouse move function by screen game window ratio (0 - 1.0)
    ITF.simulateMouseMoveRatio = async function(ratio, delayAfter = 0) {
        let coords = ITF.calculateCords(ratio)
        ITF.simulateMouseEvent("mousemove", coords.X, coords.Y);
        await ITF.sleep(delayAfter);
    };

    ITF.simulateMouseClicksInRangeRatios = async function(startRatio, endRatio, clicksAmount, clickDelay = 10, delayAfter = 0)
    {
        let xRatioDiff = endRatio.X - startRatio.X;
        let yRatioDiff = endRatio.Y - startRatio.Y;
        let xDeltaRatioPerClick = xRatioDiff / clicksAmount;
        let yDeltaRatioPerClick = yRatioDiff / clicksAmount;

        for (let i = 0; i < clicksAmount; ++i) {
            let xDeltaRatio = xDeltaRatioPerClick * i;
            let yDeltaRatio = yDeltaRatioPerClick * i;

            let finalRatio = { "X": startRatio.X + xDeltaRatio, "Y": startRatio.Y + yDeltaRatio };

            await ITF.simulateMouseClickRatio(finalRatio, clickDelay);
        }

        await ITF.sleep(delayAfter);
    }

    ITF.simulateMouseClicksInGridRangeRatios = async function(startRatio, endRatio, clicksPerRow, clicksPerColumn, clickDelay = 10, delayAfter = 0)
    {
        let xRatioDiff = endRatio.X - startRatio.X;
        let yRatioDiff = endRatio.Y - startRatio.Y;
        let xDeltaRatioPerClick = xRatioDiff / clicksPerRow;
        let yDeltaRatioPerClick = yRatioDiff / clicksPerColumn;

        // How many rows are there (clicks per column)
        for (let i = 0; i < clicksPerColumn; ++i) {
            let yDeltaRatio = yDeltaRatioPerClick * i;

            // How many columns are there (clicks per row)
            for (let j = 0; j < clicksPerRow; ++j) {
                let xDeltaRatio = xDeltaRatioPerClick * j;

                let finalRatio = { "X": startRatio.X + xDeltaRatio, "Y": startRatio.Y + yDeltaRatio };

                await ITF.simulateMouseClickRatio(finalRatio, clickDelay);
            }
        }

        await ITF.sleep(delayAfter);
    }

    ITF.simulateMouseDrag = async function(startRatio, endRatio, duration, eventsPerSecond = 30, delayAfter = 0)
    {
        // Calculate start and end coordinates
        const startCoords = ITF.calculateCords(startRatio);
        const endCoords = ITF.calculateCords(endRatio);

        // Calculate the interval (in milliseconds) between events based on eventsPerSecond
        const interval = 1000 / eventsPerSecond;

        // Calculate the number of steps based on duration and desired framerate (e.g., 60fps)
        const steps = Math.floor(duration / interval);
        const deltaX = (endCoords.X - startCoords.X) / steps;
        const deltaY = (endCoords.Y - startCoords.Y) / steps;

        //console.log("EventsPerSecond: " + eventsPerSecond + " interval: " + interval + " steps: " + steps);

        // Simulate mouse down at start position
        ITF.simulateMouseEvent("mousedown", startCoords.X, startCoords.Y);

        for (let currentStep = 0; currentStep < steps; ++currentStep) {
            // Calculate the current position
            const currentX = startCoords.X + deltaX * currentStep;
            const currentY = startCoords.Y + deltaY * currentStep;

            // Simulate mouse move event at current position
            ITF.simulateMouseEvent("mousemove", currentX, currentY);
            
            //console.log("LoopStep: " + currentStep + " currentX: " + currentX + " currentY: " + currentY);

            // Continue dragging
            await ITF.sleep(interval);
        }

        // Simulate mouse up at end position
        //ITF.simulateMouseEvent("mouseup", endCoords.X, endCoords.Y);
        ITF.simulateMouseEvent("click", endCoords.X, endCoords.Y);

        await ITF.sleep(delayAfter);
    }

    //Simulate wheel event function. Sends one or more WheelEvent events at the given
    //client coordinates. `count` controls how many wheel ticks to send.
    //`isHorizontal` controls axis (false=vertical, true=horizontal).
    //`deltaDirection` controls direction: negative=up/left, positive=down/right.
    ITF.simulateWheelEvent = async function (eventName, clientX, clientY, count = 1, isHorizontal = false, deltaDirection = 1, intervalMs = 75) {
        // Clamp count
        const ticks = Math.max(1, Math.floor(count));
        // Normalize deltaDirection to -1 or 1
        const dir = Math.sign(deltaDirection) || 1;
        const delta = 100 * dir; // 100px per tick in the given direction

        for (let i = 0; i < ticks; ++i) {
            const ev = new WheelEvent(eventName, {
                view: window,
                bubbles: true,
                cancelable: true,
                clientX: clientX,
                clientY: clientY,
                // Standard wheel deltaMode: 0 (pixels). Direction controlled by sign.
                deltaX: isHorizontal ? delta : 0,
                deltaY: isHorizontal ? 0 : delta,
                deltaMode: 0
            });

            ITE.game.dispatchEvent(ev);

            // Small pause between ticks so the target can react (and to allow stop checks)
            if (i < ticks - 1) await ITF.sleep(intervalMs);
        }
    };

    // Simulate mouse wheel at a given ratio inside the game window.
    // `ratio` is an object {X: 0..1, Y: 0..1}. `count` is number of wheel ticks.
    // `isHorizontal` controls axis (false=vertical, true=horizontal).
    // `deltaDirection` controls direction: negative=up/left, positive=down/right.
    ITF.simulateMouseWheelRatio = async function(ratio, count = 1, delayAfter = 0, isHorizontal = false, deltaDirection = 1, intervalMs = 75) {
        if (ratio == null) return;
        let coords = ITF.calculateCords(ratio);

        // Move mouse to the target location first so any mouse-over state is correct
        ITF.simulateMouseEvent("mousemove", coords.X, coords.Y);

        await ITF.sleep(20);

        // Send wheel events
        await ITF.simulateWheelEvent('wheel', coords.X, coords.Y, count, isHorizontal, deltaDirection, intervalMs);

        if (delayAfter > 0)
        {
            await ITF.sleep(delayAfter);
        }
    };

    // Scroll down (vertical, positive direction)
    ITF.simulateScrollDown = async function(ratio, count = 1, delayAfter = 0, intervalMs = 75) {
        return ITF.simulateMouseWheelRatio(ratio, count, delayAfter, false, 1, intervalMs);
    };

    // Scroll up (vertical, negative direction)
    ITF.simulateScrollUp = async function(ratio, count = 1, delayAfter = 0, intervalMs = 75) {
        return ITF.simulateMouseWheelRatio(ratio, count, delayAfter, false, -1, intervalMs);
    };

    // Scroll right (horizontal, positive direction)
    ITF.simulateScrollRight = async function(ratio, count = 1, delayAfter = 0, intervalMs = 75) {
        return ITF.simulateMouseWheelRatio(ratio, count, delayAfter, true, 1, intervalMs);
    };

    // Scroll left (horizontal, negative direction)
    ITF.simulateScrollLeft = async function(ratio, count = 1, delayAfter = 0, intervalMs = 75) {
        return ITF.simulateMouseWheelRatio(ratio, count, delayAfter, true, -1, intervalMs);
    };

    ITF.getCurrentMouseRatio = function() {
        const gameRect = ITE.game.getBoundingClientRect();

        const ratioX = clamp(ITG.CurrentMouse.X - gameRect.left, 0, gameRect.right) / gameRect.width;
        const ratioY = clamp(ITG.CurrentMouse.Y - gameRect.top, 0, gameRect.bottom) / gameRect.height;

        return { "X": ratioX, "Y": ratioY };
    }

    ITF.saveCurrentMouseRatio = function() {
        ITG.SavedMouse = ITF.getCurrentMouseRatio();
        console.log(`Saved mouse coordinates relative to ITE.game: { "X": ${ITG.SavedMouse.X.toFixed(4)}, "Y": ${ITG.SavedMouse.Y.toFixed(4)} }`);
    }

    ITF.clearSavedMouseRatio = function() {
        ITG.SavedMouse = { "X": -1, "Y": -1 };
        console.log(`Cleared saved mouse coordinates`);
    }

    ITF.getSavedMouseRatio = function() {
        return ITG.SavedMouse;
    }

    ITF.isSavedMouseRatioValid = function() {
        return ITG.SavedMouse.X >= 0 && ITG.SavedMouse.Y >= 0;
    }

    ITF.simulateKeyEvent = function(keyName, event) {
        const keyCode = ITG.keyNameToKeyCodeMap[keyName] || 0; // Default to 0 if keyName not found
        const keyboardEvent = new KeyboardEvent(event, {
            key: keyName,
            keyCode: keyCode, // This is for demonstration; in practice, this might not have the desired effect
            which: keyCode, // Similarly deprecated and for demonstration
            altKey: false,
            ctrlKey: false,
            shiftKey: false,
            metaKey: false,
            bubbles: true, // Event should bubble for visibility
            cancelable: true
            });

        ITE.game.dispatchEvent(keyboardEvent);
    }

    // Function to simulate a key event
    ITF.simulateKeyPress = async function(keyName, delayAfter = 0) {
        ITF.simulateKeyEvent(keyName, 'keydown')
        ITF.simulateKeyEvent(keyName, 'keyup')
        await ITF.sleep(delayAfter);
    }

    // Group: Orange, Green, Purple, Yellow (Or, O, G, P, Y)
    // Page: 1, 2, 3, ...
    // Index: 1, 2, 3, 4 or 5
    ITF.getAlchemyBubbleButton = function(group, page, index, isUpgrade) {
        const bubblesPerPage = 5;

        const groupLower = group.toLowerCase();
        var bubbleStr = "";
        if (groupLower == "orange" || groupLower == "o")
            bubbleStr += "O";
        else if (groupLower == "green" || groupLower == "g")
            bubbleStr += "G";
        else if (groupLower == "purple" || groupLower == "p")
            bubbleStr += "P";
        else if (groupLower == "yellow" || groupLower == "y")
            bubbleStr += "Y";

        bubbleStr += ((page - 1) * bubblesPerPage + index).toString();

        if (isUpgrade)
            bubbleStr += "U";

        return ITG.B_W2AlchemyBubbles[bubbleStr];
    }

    console.log("Idleon Tools Helper functions declared");

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    // DEBUG FUNCTIONS
    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Function to attach event listeners to ITE.game for debugging events
    ITF.attachEventDebugListeners = function() {
        // Define a handler function that logs event details
        function logEventDetails(event) {
            console.log(`Event Type: ${event.type}`);
            console.log(`isTrusted: ${event.isTrusted}`);
            if (event.type.startsWith('key')) {
                console.log(`Key: ${event.key}`);
                console.log(`KeyCode (deprecated): ${event.keyCode}`);
                console.log(`Shift: ${event.shiftKey}`);
                console.log(`Ctrl: ${event.ctrlKey}`);
                console.log(`Alt: ${event.altKey}`);
                console.log(`Meta: ${event.metaKey}`);
            } else if (event.type.startsWith('mouse')) {
                console.log(`Button: ${event.button}`);
                console.log(`ClientX: ${event.clientX}`);
                console.log(`ClientY: ${event.clientY}`);
            }
            // Prevent the event from doing its default action
            // event.preventDefault();
            console.log('----------------------');
        }

        // Attach the event listener for various event types
        const eventTypes = ['keydown', 'keyup', 'mousedown', 'mouseup', 'mousemove', 'click'];
        eventTypes.forEach(type => {
            window.addEventListener(type, logEventDetails);
        });

        console.log('Debug event listeners attached to window');
    }

    // Call the function to attach the event listeners
    //ITF.attachEventDebugListeners();

    console.log("Idleon Tools Debug functions declared");

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    // GAME FUNCTIONS
    // https://patorjk.com/software/taag/#p=display&f=Blocks&t=MISC&x=none&v=4&h=4&w=80&we=false
    //////////////////////////////////////////////////////////////////////////////////////////////////////////

//  .----------------.  .----------------.  .----------------.  .----------------. 
// | .--------------. || .--------------. || .--------------. || .--------------. |
// | | ____    ____ | || |     _____    | || |    _______   | || |     ______   | |
// | ||_   \  /   _|| || |    |_   _|   | || |   /  ___  |  | || |   .' ___  |  | |
// | |  |   \/   |  | || |      | |     | || |  |  (__ \_|  | || |  / .'   \_|  | |
// | |  | |\  /| |  | || |      | |     | || |   '.___`-.   | || |  | |         | |
// | | _| |_\/_| |_ | || |     _| |_    | || |  |`\____) |  | || |  \ `.___.'\  | |
// | ||_____||_____|| || |    |_____|   | || |  |_______.'  | || |   `._____.'  | |
// | |              | || |              | || |              | || |              | |
// | '--------------' || '--------------' || '--------------' || '--------------' |
//  '----------------'  '----------------'  '----------------'  '----------------' 

    //////////////////
    /// AutoDepositAllCombat
    //////////////////
    ITF.setEnabledAutoDepositAllCombat = async function (isEnabled) {
        if (ITG.autoDepositAllCombatEnabled == isEnabled) //Ignore as it already is the same state
        {
            return;
        }

        if (ITG.autoDepositAllCombatEnabled && !isEnabled)
        {
            ITG.autoDepositAllCombatEnabled = false;
            console.log("ITF.setEnabledAutoDepositAllCombat stopped.");
            return;
        }

        //Remaining case start it.
        ITG.autoDepositAllCombatEnabled = isEnabled;
        console.log("ITF.setEnabledAutoDepositAllCombat started.");

        while (ITG.autoDepositAllCombatEnabled) {
            await ITF.simulateMouseClickRatio(ITG.B_BarCodex, 500);
            await ITF.simulateMouseClickRatio(ITG.B_CodexQuickRefStorage, 500);
            await ITF.simulateMouseClickRatio(ITG.B_ChestDepositAll, 500);
            await ITF.simulateMouseClickRatio(ITG.B_BarItems, 60000); //To close and wait one more minute
        }
    };

    //////////////////
    /// AutoArchers2MClaim
    //////////////////
    ITF.setEnabledAutoArcher2MClaim = async function (isEnabled) {
        if (ITG.AutoArcher2MClaimEnabled == isEnabled) //Ignore as it already is the same state
        {
            return;
        }

        if (ITG.AutoArcher2MClaimEnabled && !isEnabled)
        {
            ITG.AutoArcher2MClaimEnabled = false;
            console.log("ITF.setEnabledAutoArcher2MClaim stopped.");
            return;
        }

        //Remaining case start it.
        ITG.AutoArcher2MClaimEnabled = isEnabled;
        console.log("ITF.setEnabledAutoArcher2MClaim started.");

        while (ITG.AutoArcher2MClaimEnabled) {
            await ITF.simulateMouseClickRatio(ITG.B_BarPlayers, 500); //Open player menu
            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenu["Left"], 500); //Ensure is first page
            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenu["P2"], 2000); //Click first archer
            await ITF.simulateKeyPress('Enter', 2000); //Send Key 'Enter' to claim afk time

            await ITF.simulateMouseClickRatio(ITG.B_BarPlayers, 500); //Open player menu
            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenu["Right"], 500); //Ensure is second page
            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenu["P2"], 2000); //Click second archer
            await ITF.simulateKeyPress('Enter', 2000); //Send Key 'Enter' to claim afk time

            await ITF.simulateMouseClickRatio(ITG.B_BarPlayers, 500); //Open player menu
            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenu["Right"], 500); //Ensure is second page
            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenu["P4"], 2000); //Click third and last archer
            await ITF.simulateKeyPress('Enter', 2000); //Send Key 'Enter' to claim afk time

            await ITF.simulateMouseClickRatio(ITG.B_BarPlayers, 500); //Open player menu
            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenu["Left"], 500); //Ensure is first page
            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenu["P1"], 2000); //Click active character

            //Sleep for 100 seconds in order to start again with a 2 min mark. 
            // Also add the 2 seconds from the last Enter key that is not needed plus an extra 13 seconds just in case
            await ITF.sleep(115000) 
        }
    };

    //////////////////
    /// DepositAll
    //////////////////
    ITF.utilityDepositAll = async function () {
        await ITF.simulateMouseClickRatio(ITG.B_BarCodex, 250);
        await ITF.simulateMouseClickRatio(ITG.B_CodexQuickRefStorage, 250);
        await ITF.simulateMouseClickRatio(ITG.B_ChestDepositAll, 250);
        await ITF.simulateMouseClickRatio(ITG.B_BarItems, 250);
    };

    //////////////////
    /// PickupAndDepositAll
    //////////////////
    ITF.setEnabledAutoPickupAndDepositAll = async function () {
        if (ITG.autoPickupAndDepositAllEnabled)
        {
            ITG.autoPickupAndDepositAllEnabled = false;
            console.log("ITF.setEnabledAutoPickupAndDepositAll stopped.");
            return;
        }

        //Remaining case start it.
        ITG.autoPickupAndDepositAllEnabled = true;
        console.log("ITF.setEnabledAutoPickupAndDepositAll started.");
        
        while (ITG.autoPickupAndDepositAllEnabled) 
        {
            let ratio = ITF.getCurrentMouseRatio();
            await ITF.simulateMouseClickRatio(ITG.B_BarCodex, 200);
            await ITF.simulateMouseClickRatio(ITG.B_CodexQuickRefStorage, 200);
            await ITF.simulateMouseClickRatio(ITG.B_ChestDepositAll, 200);
            await ITF.simulateMouseClickRatio(ITG.B_BarItems, 200);
            await ITF.simulateMouseMoveRatio(ratio, 200); // Move mouse back to the original position
            await ITF.simulateMouseDownRatio(ratio, 200);
            await ITF.simulateMouseDownRatio(ratio, 200);
        }
    };

    //////////////////
    /// DepositAll Hotkey
    //////////////////
    ITG.DepositAllHotkeyHandler = null;
    // Loop control state
    ITG.depositAllLoopRunning = false;
    ITG.depositAllLoopLastToggle = 0; // debounce toggles

    // Start the automatic click+deposit loop
    ITF.startDepositAllLoop = async function() {
        if (ITG.depositAllLoopRunning) return; // already running
        ITG.depositAllLoopRunning = true;
        let ratio;
        if (ITF.isSavedMouseRatioValid()) {
            ratio = ITF.getSavedMouseRatio();
            console.log(`DepositAll loop started at saved mouse position: { "X": ${ratio.X.toFixed(4)}, "Y": ${ratio.Y.toFixed(4)} }. Press Shift + D to stop.`);
        }
        else
        {
            ratio = ITF.getCurrentMouseRatio();
            console.log(`DepositAll loop started at current mouse position: { "X": ${ratio.X.toFixed(4)}, "Y": ${ratio.Y.toFixed(4)} }. Press Shift + D to stop.`);
        }

        while (ITG.depositAllLoopRunning) {
            // Click at current mouse position (simulated) and hold
            await ITF.simulateMouseClickRatio(ratio, 100, 500);

            // Then deposit all
            await ITF.utilityDepositAll();
            await ITF.sleep(500); // small delay after deposit
        }

        console.log("DepositAll loop stopped");
    };

    ITF.stopDepositAllLoop = function() {
        if (!ITG.depositAllLoopRunning) return;
        ITG.depositAllLoopRunning = false;
    };

    ITF.setEnableDepositAllHotkeysCheckbox = async function(isEnabled) {
        if (ITG.EnableDepositAllHotkeys === isEnabled) {
            return; // Already in the desired state
        }

        ITG.EnableDepositAllHotkeys = isEnabled;

        if (isEnabled) {
            // Create and add the event listener
            ITG.DepositAllHotkeyHandler = async function(event) {
                // Normalize key
                const key = (event.key || '').toLowerCase();

                if (key !== 'd') return; // we only care about D

                // If Shift+D -> toggle loop (debounced)
                if (event.shiftKey) {
                    const now = Date.now();
                    if (now - ITG.depositAllLoopLastToggle < 500) return; // debounce
                    ITG.depositAllLoopLastToggle = now;

                    if (ITG.depositAllLoopRunning) {
                        ITF.stopDepositAllLoop();
                    } else {
                        ITF.startDepositAllLoop();
                    }

                    // Prevent the game from receiving this keypress
                    return;
                }

                // Plain D: only trigger single deposit if loop is not running
                if (!ITG.depositAllLoopRunning) 
                {
                    await ITF.utilityDepositAll();
                }
            };

            window.addEventListener('keydown', ITG.DepositAllHotkeyHandler);
            console.log("DepositAll hotkeys enabled (press 'd' to deposit all; Shift + d toggles auto-click+deposit loop)");
        } else {
            // Remove the event listener
            if (ITG.DepositAllHotkeyHandler) {
                window.removeEventListener('keydown', ITG.DepositAllHotkeyHandler);
                ITG.DepositAllHotkeyHandler = null;
            }

            // Ensure the loop is stopped when disabling
            if (ITG.depositAllLoopRunning) {
                ITF.stopDepositAllLoop();
            }

            console.log("DepositAll hotkeys disabled");
        }
    }

    ITF.shopHasAnythingToDailyBuy = function(shopKey) {
        let shopInfo = ITG.M_ShopData[shopKey];
        for (let itemName in shopInfo) 
        {
            if (shopInfo[itemName].buy)
            {
                return true;
            }
        }

        return false;
    }

    ITF.shopCountItemsToDailyBuy = function(shopKey) {
        let shopInfo = ITG.M_ShopData[shopKey];
        let count = 0
        for (let itemName in shopInfo) 
        {
            if (shopInfo[itemName].buy)
            {
                count += 1;
            }
        }

        return count;
    }

    ITF.dailyQuickAccess = async function() {
        await ITF.simulateKeyPress('Escape', 350); //Close any open menu
        await ITF.simulateKeyPress('c', 350); //Codex
        await ITF.simulateMouseClickRatio(ITG.B_CodexQuickRef, 350); //Quick Ref
        await ITF.simulateMouseClickRatio(ITG.B_EzAccess["BossKeys"], 350);
        await ITF.simulateMouseClickRatio(ITG.B_EzAccess["ColosseumTickets"], 350);
        let QuickBuyClicked = false;

        const shopNames = Object.keys(ITG.M_ShopData);
        for (let i = 0; i < shopNames.length; ++i)
        {
            let shopKey = shopNames[i];
            let shopInfo = ITG.M_ShopData[shopKey];

            console.log(`Checking shop ${shopKey} for daily buys. HasAnthingToBuy: ${ITF.shopHasAnythingToDailyBuy(shopKey)}`);

            //If shop has nothing to daily buy return
            if (ITF.shopHasAnythingToDailyBuy(shopKey) == false)
            {
                console.log(`Skipping shop ${shopKey} as nothing to daily buy.`);
                continue;
            }

            console.log(`Accessing shop ${shopKey} as it has something to daily buy.`);
            await ITF.simulateMouseClickRatio(ITG.B_EzAccess[shopKey], 350); //Open shop

            //Enable quick buy the first time only
            if (!QuickBuyClicked)
            {
                console.log(`Enabling quick buy for the first time.`);
                await ITF.simulateMouseClickRatio(ITG.B_QuickShop, 150);
                QuickBuyClicked = true;
            }

            const itemNames = Object.keys(shopInfo);
            const itemsCount = itemNames.length;
            let itemsToBuyCount = ITF.shopCountItemsToDailyBuy(shopKey);
            console.log(`Shop ${shopKey} has ${itemsCount} items, ${itemsToBuyCount} of which need to be daily bought.`);

            await ITF.simulateMouseMoveRatio(ITG.B_ShopSlots["0"], 150); //Move mouse to first shop slot so the first scroll registers correctly

            itemsToBuyLoop: while (itemsToBuyCount > 0)
            {
                for (let k = 0; k <= itemsCount - 4; ++k)
                {
                    if (shopInfo[itemNames[k]].buy)
                    {
                        await ITF.simulateMouseClickRatio(ITG.B_ShopSlots["0+"], 150); //Max it
                        await ITF.simulateMouseClickRatio(ITG.B_ShopSlots["0"], 150, 0, shopInfo[itemNames[k]].count, 150); //Buy it
                        console.log(`Bought item ${itemNames[k]} from shop ${shopKey}. ItemIndex: ${k} of ${itemsCount}`);
                        itemsToBuyCount -= 1;

                        if (itemsToBuyCount <= 0)
                        {
                            break itemsToBuyLoop;
                        }
                    }
                    else
                    {
                        console.log(`Skipping item ${itemNames[k]} from shop ${shopKey} as it does not need to be daily bought. ItemIndex: ${k} of ${itemsCount}`);
                    }

                    //Always scroll down except for last three items
                    await ITF.simulateScrollDown(ITG.B_ShopSlots["0"], 1, 150); //Scroll down
                }
                
                for (let k = 1; k < 4; ++k)
                {
                    if (shopInfo[itemNames[itemsCount - k]].buy)
                    {
                        await ITF.simulateMouseClickRatio(ITG.B_ShopSlots[`${k}+`], 150); //Max it
                        await ITF.simulateMouseClickRatio(ITG.B_ShopSlots[`${k}`], 150, 0, shopInfo[itemNames[itemsCount - k]].count, 150); //Buy it
                        console.log(`_Bought item ${itemNames[itemsCount - k]} from shop ${shopKey}. ItemIndex: ${itemsCount - k} of ${itemsCount}`);
                        itemsToBuyCount -= 1;
                    }
                    else
                    {
                        console.log(`_Skipping item ${itemNames[itemsCount - k]} from shop ${shopKey} as it does not need to be daily bought. ItemIndex: ${itemsCount - k} of ${itemsCount}`);
                    }
                }
            }
            

            if (i < shopNames.length - 1)
            {
                let foundMoreToBuy = false;
                for (let k = i + 1; k < shopNames.length && !foundMoreToBuy; ++k)
                {
                    if (ITF.shopHasAnythingToDailyBuy(shopNames[k]))
                    {
                        console.log(`There is more to buy in shop ${shopNames[k]}. Continuing to next shop.`);
                        await ITF.simulateKeyPress('Escape', 350); //Close any open menu
                        await ITF.simulateKeyPress('c', 350); //Codex
                        await ITF.simulateMouseClickRatio(ITG.B_CodexQuickRef, 350); //Quick Ref
                        foundMoreToBuy = true;
                    }
                }

                if (!foundMoreToBuy)
                {
                    console.log(`There is no more shops with items to daily buy. Finishing daily quick access.`);
                    break;
                }
            }
        }

        await ITF.simulateKeyPress('Escape', 500); //Close any open menu
    }

    //Returns card ratio based on group and index. Ensure that the scroll position is correct before using this.
    ITF.getCardRatio = function(group, index) {
        let indexInt = parseInt(index);
        let ratioX = ITG.M_CardData["startX"];
        let ratioY = ITG.M_CardData[group]["startY"];
        ratioX += ITG.M_CardData["ratioOffsetX"] * (indexInt % ITG.M_CardData["cardsPerRow"]);
        ratioY += ITG.M_CardData["ratioOffsetY"] * Math.floor(indexInt / ITG.M_CardData["cardsPerRow"]);
        return {"X": ratioX, "Y": ratioY};
    }

    ITF.setupCards = async function(cardSetups) {
        const scrollPosition = ITF.getCardRatio("0", "0"); //Top left card position so that scroll registers in a correct position

        await ITF.simulateKeyPress('Escape', 350); //Close any open menu
        await ITF.simulateKeyPress('c', 350); //Codex
        await ITF.simulateMouseClickRatio(ITG.B_CodexCards, 350); //Cards

        await ITF.simulateMouseMoveRatio(scrollPosition, 150); //Move mouse to any card position so the scroll registers correctly
        await ITF.simulateScrollUp(scrollPosition, ITG.M_CardData["maxScroll"], 75); //Scroll to top

        let currentScroll = 0;

        for (let i = 0; i < cardSetups.length; ++i)
        {
            let setup = cardSetups[i];
            let preset = setup.preset;
            let cards = setup.cards;
            console.log(`Setting up card set ${i + 1} of ${cardSetups.length}. Using preset ${preset}, equipping cards: ${cards.join(", ")}`);

            //Select Preset
            await ITF.simulateMouseClickRatio(ITG.B_CodexCardsPresets[setup.preset], 350); //Select preset selection

            //unequip all cards first
            for (const [key, value] of Object.entries(ITG.B_CodexCardsEquippedSlots))
            {
                console.log(`Unequipping card from slot ${key}`);
                await ITF.simulateMouseClickRatio(value, 150); //Click card to unequip
            }

            await ITF.simulateMouseMoveRatio(scrollPosition, 150); //Move mouse to any card position so the scroll registers correctly

            //Equip cards
            for (var card of cards)
            {
                const cardInfo = card.split("-");
                const group = cardInfo[0];
                const index = cardInfo[1];

                //Reset scroll if in last position
                if (currentScroll == ITG.M_CardData["maxScroll"])
                {
                    console.log("Resetting scroll level as we were in the last position.")
                    await ITF.simulateMouseMoveRatio(scrollPosition, 150); //Move mouse to any card position so the scroll registers correctly
                    await ITF.simulateScrollUp(scrollPosition, ITG.M_CardData["maxScroll"], 75); //Scroll to top
                    currentScroll = 0;
                }

                //Move to scroll target
                const scrollTarget = ITG.M_CardData[group]["scroll"];
                const scrollDiff = scrollTarget - currentScroll;
                for (let s = 0; s < Math.abs(scrollDiff); ++s)
                {
                    if (scrollDiff > 0) //Need to scroll down
                    {
                        await ITF.simulateScrollDown(scrollPosition, 1, 75);
                    }
                    else if (scrollDiff < 0) //Need to scroll up
                    {
                        await ITF.simulateScrollUp(scrollPosition, 1, 75);
                    }
                }

                currentScroll = scrollTarget;

                //Calculate card ratio and click to equip
                const cardRatio = ITF.getCardRatio(group, index);
                console.log(`Equipping card ${card} at ratio X: ${cardRatio.X.toFixed(4)}, Y: ${cardRatio.Y.toFixed(4)}`);
                await ITF.simulateMouseClickRatio(cardRatio, 250, 0, 2, 500); //Click card to equip (two times to select and use)
            }

            console.log(`Finished setting up card set ${i + 1} of ${cardSetups.length}. Preset slot used ${preset}, cards equipped: ${cards.join(", ")}`);
        }
    }

    ITF.setupDefaultCardPresets = async function()
    {
        await ITF.setupCards(ITG.M_DefaultCardPresets);
    }

//  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.   .----------------. 
// | .--------------. || .--------------. || .--------------. || .--------------. || .--------------. | | .--------------. |
// | | _____  _____ | || |     ____     | || |  _______     | || |   _____      | || |  ________    | | | |     __       | |
// | ||_   _||_   _|| || |   .'    `.   | || | |_   __ \    | || |  |_   _|     | || | |_   ___ `.  | | | |    /  |      | |
// | |  | | /\ | |  | || |  /  .--.  \  | || |   | |__) |   | || |    | |       | || |   | |   `. \ | | | |    `| |      | |
// | |  | |/  \| |  | || |  | |    | |  | || |   |  __ /    | || |    | |   _   | || |   | |    | | | | | |     | |      | |
// | |  |   /\   |  | || |  \  `--'  /  | || |  _| |  \ \_  | || |   _| |__/ |  | || |  _| |___.' / | | | |    _| |_     | |
// | |  |__/  \__|  | || |   `.____.'   | || | |____| |___| | || |  |________|  | || | |________.'  | | | |   |_____|    | |
// | |              | || |              | || |              | || |              | || |              | | | |              | |
// | '--------------' || '--------------' || '--------------' || '--------------' || '--------------' | | '--------------' |
//  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'   '----------------' 

    //////////////////
    /// AutoColoW1
    //////////////////
    ITF.setEnabledAutoColoW1 = async function (isEnabled) {
        if (ITG.autoColoW1Enabled == isEnabled) //Ignore as it already is the same state
        {
            return;
        }

        if (ITG.autoColoW1Enabled && !isEnabled)
        {
            ITG.autoColoW1Enabled = false;
            console.log("ITF.setEnabledAutoColoW1 stopped.");
            return;
        }

        //Remaining case start it.
        ITG.autoColoW1Enabled = isEnabled;
        console.log("ITF.setEnabledAutoColoW1 started.");
        
        while (ITG.autoColoW1Enabled) 
        {
            await ITF.simulateMouseClickRatio(ITG.B_W1Colo, 6000); //Click Colosseum
            await ITF.simulateMouseClickRatio(ITG.B_W1ColoEnterUp, 2000); //Enter Colosseum. First try to enter with the button Y location from when we already completed one colosseum
            await ITF.simulateMouseClickRatio(ITG.B_W1ColoEnterLow, 2000); //Enter Colosseum. Just in case click the lower one (This will only work the first time we enter the map)
            await ITF.simulateMouseClickRatio(ITG.B_BarAutoAttack, 150); //Start auto
            //The orb duration is about 155 seconds at lvl 312. In W1 maybe we can squeeze two runs per orb.
            //155 seconds Minus (13) = 142 seconds → half each round = 71 seconds → 71 seconds * 10 next wave spam = 710
            for (let i = 0; i < 710; ++i)
            {
                await ITF.simulateMouseClickRatio(ITG.B_ColoNextWave, 100); //Next Wave Spam
            }

            await ITF.simulateMouseClickRatio(ITG.B_BarAutoAttack, 100); //Stop auto
            await ITF.simulateMouseClickRatio(ITG.B_W1ColoExit, 2850); //Click Exit Portal
        }
    };

//  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.   .----------------. 
// | .--------------. || .--------------. || .--------------. || .--------------. || .--------------. | | .--------------. |
// | | _____  _____ | || |     ____     | || |  _______     | || |   _____      | || |  ________    | | | |    _____     | |
// | ||_   _||_   _|| || |   .'    `.   | || | |_   __ \    | || |  |_   _|     | || | |_   ___ `.  | | | |   / ___ `.   | |
// | |  | | /\ | |  | || |  /  .--.  \  | || |   | |__) |   | || |    | |       | || |   | |   `. \ | | | |  |_/___) |   | |
// | |  | |/  \| |  | || |  | |    | |  | || |   |  __ /    | || |    | |   _   | || |   | |    | | | | | |   .'____.'   | |
// | |  |   /\   |  | || |  \  `--'  /  | || |  _| |  \ \_  | || |   _| |__/ |  | || |  _| |___.' / | | | |  / /____     | |
// | |  |__/  \__|  | || |   `.____.'   | || | |____| |___| | || |  |________|  | || | |________.'  | | | |  |_______|   | |
// | |              | || |              | || |              | || |              | || |              | | | |              | |
// | '--------------' || '--------------' || '--------------' || '--------------' || '--------------' | | '--------------' |
//  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'   '----------------' 

    //////////////////
    /// W2SpamPostOfficeSimpleShippin
    //////////////////
    ITF.spamPostOfficeSimpleShippin = async function (count = 1) {
        if (ITG.spamPostOfficeSimpleShippinRunning)
        {
            return; 
        }

        let B_Pen = { "X": 0.0497, "Y": 0.8249 }
        let B_Order = { "X": 0.1132, "Y": 0.7394 }

        ITG.spamPostOfficeSimpleShippinRunning = true;
        console.log("ITF.spamPostOfficeSimpleShippin started. Count: " + count);

        for (var i = 0; i < count; i++) {
            await ITF.simulateMouseClickRatio(B_Order, 10);
            await ITF.simulateMouseClickRatio(B_Pen, 10);
            await ITF.simulateMouseClickRatio(B_Order, 10);
            if (i % 1000 == 0)
            {
                console.log("Post Office simple shippin loop: " + i);
            }
        }

        ITG.spamPostOfficeSimpleShippinRunning = false;
        console.log("ITF.spamPostOfficeSimpleShippin ended. Count: " + count);
    };

    //////////////////
    /// AutoW2ClickerShinyFish
    //////////////////
    ITF.setEnabledAutoW2ClickerShinyFish = async function (isEnabled) {
        if (ITG.AutoW2ClickerShinyFishEnabled == isEnabled) //Ignore as it already is the same state
        {
            return;
        }

        if (ITG.AutoW2ClickerShinyFishEnabled && !isEnabled)
        {
            ITG.AutoW2ClickerShinyFishEnabled = false;
            console.log("ITF.setEnabledAutoW2ClickerShinyFish stopped.");
            return;
        }

        //Remaining case start it.
        ITG.AutoW2ClickerShinyFishEnabled = isEnabled;
        console.log("ITF.setEnabledAutoW2ClickerShinyFish started.");

        while (ITG.AutoW2ClickerShinyFishEnabled) {
            await ITF.simulateMouseClickRatio(ITG.B_W2ClickerShinyFish, (3 * 60 + 0) * 1000); //Click Shiny Fish
        }
    };

    //////////////////
    /// AutoColoW2
    //////////////////
    ITF.setEnabledAutoColoW2 = async function (isEnabled) {
        if (ITG.autoColoW2Enabled == isEnabled) //Ignore as it already is the same state
        {
            return;
        }

        if (ITG.autoColoW2Enabled && !isEnabled)
        {
            ITG.autoColoW2Enabled = false;
            console.log("ITF.setEnabledAutoColoW2 stopped.");
            return;
        }

        //Remaining case start it.
        ITG.autoColoW2Enabled = isEnabled;
        console.log("ITF.setEnabledAutoColoW2 started.");
        
        while (ITG.autoColoW2Enabled) 
        {
            await ITF.simulateMouseClickRatio(ITG.B_W2Colo, 6000); //Click Colosseum
            await ITF.simulateMouseClickRatio(ITG.B_W2ColoEnterUp, 2000); //Enter Colosseum. First try to enter with the button Y location from when we already completed one colosseum
            await ITF.simulateMouseClickRatio(ITG.B_W2ColoEnterLow, 2000); //Enter Colosseum. Just in case click the lower one (This will only work the first time we enter the map)
            await ITF.simulateMouseClickRatio(ITG.B_BarAutoAttack, 150); //Start auto
            //The orb duration is about 155 seconds at lvl 312. In W2 we cannot squeze two runs per orb as the this colo is slower... 1 run per orb better.
            //155 seconds Minus (13) = 142 seconds → full duration each round = 144 seconds → 144 seconds * 10 next wave spam = 1440
            for (let i = 0; i < 1440; ++i)
            {
                await ITF.simulateMouseClickRatio(ITG.B_ColoNextWave, 100); //Next Wave Spam
            }

            await ITF.simulateMouseClickRatio(ITG.B_BarAutoAttack, 100); //Stop auto
            await ITF.simulateMouseClickRatio(ITG.B_W2ColoExit, 2850); //Click Exit Portal
        }
    };

    //////////////////
    /// WeeklyBossBattle
    //////////////////
    ITF.w2WeeklyBossBattle = async function (rotationStr) {
        console.log("ITF.w2WeeklyBossBattle started with rotation:", rotationStr);
        
        // Extract all numbers (1, 2, 3) from the input string, ignoring everything else
        const bossNumbers = rotationStr.match(/[1-3]/g) || [];
        
        if (bossNumbers.length === 0) {
            console.warn("No valid boss numbers (1-3) found in rotation string");
            return;
        }
        
        console.log("Extracted boss sequence:", bossNumbers);
        
        // Click each boss in the sequence
        for (let i = 0; i < bossNumbers.length; i++) {
            const bossNum = bossNumbers[i];
            
            if (!ITG.B_W2WeeklyBoss[bossNum]) {
                console.warn(`Invalid boss number: ${bossNum}`);
                continue;
            }
            
            console.log(`Clicking boss ${bossNum} (${i + 1}/${bossNumbers.length})`);
            await ITF.simulateMouseClickRatio(ITG.B_W2WeeklyBoss[bossNum], 50); // 50ms delay between clicks
        }
        
        console.log("ITF.w2WeeklyBossBattle completed.");
    }

//  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.   .----------------. 
// | .--------------. || .--------------. || .--------------. || .--------------. || .--------------. | | .--------------. |
// | | _____  _____ | || |     ____     | || |  _______     | || |   _____      | || |  ________    | | | |    ______    | |
// | ||_   _||_   _|| || |   .'    `.   | || | |_   __ \    | || |  |_   _|     | || | |_   ___ `.  | | | |   / ____ `.  | |
// | |  | | /\ | |  | || |  /  .--.  \  | || |   | |__) |   | || |    | |       | || |   | |   `. \ | | | |   `'  __) |  | |
// | |  | |/  \| |  | || |  | |    | |  | || |   |  __ /    | || |    | |   _   | || |   | |    | | | | | |   _  |__ '.  | |
// | |  |   /\   |  | || |  \  `--'  /  | || |  _| |  \ \_  | || |   _| |__/ |  | || |  _| |___.' / | | | |  | \____) |  | |
// | |  |__/  \__|  | || |   `.____.'   | || | |____| |___| | || |  |________|  | || | |________.'  | | | |   \______.'  | |
// | |              | || |              | || |              | || |              | || |              | | | |              | |
// | '--------------' || '--------------' || '--------------' || '--------------' || '--------------' | | '--------------' |
//  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'   '----------------' 

    //////////////////
    /// AutoColoW3
    //////////////////
    ITF.setEnabledAutoColoW3 = async function (isEnabled) {
        if (ITG.autoColoW3Enabled == isEnabled) //Ignore as it already is the same state
        {
            return;
        }

        if (ITG.autoColoW3Enabled && !isEnabled)
        {
            ITG.autoColoW3Enabled = false;
            console.log("ITF.setEnabledAutoColoW3 stopped.");
            return;
        }

        //Remaining case start it.
        ITG.autoColoW3Enabled = isEnabled;
        console.log("ITF.setEnabledAutoColoW3 started.");
        
        while (ITG.autoColoW3Enabled) 
        {
            await ITF.simulateMouseClickRatio(ITG.B_W3Colo, 6000); //Click Colosseum
            await ITF.simulateMouseClickRatio(ITG.B_W3ColoEnter, 2000); //Enter Colosseum
            await ITF.simulateMouseClickRatio(ITG.B_BarAutoAttack, 150); //Start auto
            //The orb duration is about 155 seconds at lvl 312. In W3 maybe we could squeeze two runs per orb but we will wait to ensure always a full orb when opening chests
            //155 seconds Minus (13) = 142 seconds → full duration each round = 144 seconds → 144 seconds * 10 next wave spam = 1440
            for (let i = 0; i < 1350; ++i)
            {
                await ITF.simulateMouseClickRatio(ITG.B_ColoNextWave, 100); //Next Wave Spam
            }

            await ITF.simulateMouseClickRatio(ITG.B_BarAutoAttack, 100); //Stop auto
            await ITF.simulateMouseClickRatio(ITG.B_W3ColoExit, 13850); //Click Exit Portal and wait for orb cooldown
        }
    };

    //////////////////
    /// AutoBossW3
    //////////////////
    ITF.setEnabledAutoBossW3 = async function (isEnabled) {
        if (ITG.autoBossW3Enabled == isEnabled) //Ignore as it already is the same state
        {
            return;
        }

        if (ITG.autoBossW3Enabled && !isEnabled)
        {
            ITG.autoBossW3Enabled = false;
            console.log("ITF.setEnabledAutoBossW3 stopped.");
            return;
        }

        //Remaining case start it.
        ITG.autoBossW3Enabled = isEnabled;
        console.log("ITF.setEnabledAutoBossW3 started.");
        
        while (ITG.autoBossW3Enabled) 
        {
            await ITF.simulateMouseClickRatio(ITG.B_W3BossEnterPortal, 450); //Click Enter Portal   
            await ITF.simulateMouseClickRatio(ITG.B_W3BossEnterButton, 2500); //Click Enter Button  
            await ITF.simulateMouseClickRatio(ITG.B_W3Boss, 12000); //Boss
            await ITF.simulateMouseDrag(ITG.B_W3BossItemsStart, ITG.B_W3BossItemsEnd, 750, 30, 100);
            await ITF.simulateMouseClickRatio(ITG.B_W3BossItemsEnd, 25);
            await ITF.simulateMouseClickRatio(ITG.B_W3BossItemsEnd, 25);
            await ITF.simulateMouseClickRatio(ITG.B_W3BossItemsEnd, 2000);
            await ITF.simulateMouseDrag(ITG.B_W3BossItemsStart, ITG.B_W3BossItemsEnd, 750, 30, 100);
            await ITF.simulateMouseClickRatio(ITG.B_W3BossItemsEnd, 25);
            await ITF.simulateMouseClickRatio(ITG.B_W3BossItemsEnd, 25);
            await ITF.simulateMouseClickRatio(ITG.B_W3BossItemsEnd, 2000);
            await ITF.simulateMouseClickRatio(ITG.B_W3BossExitPortal, 750); //Click Exit Portal
            await ITF.simulateKeyPress('w', 3250); //Try to go through the portal with the W key and wait for the map to change
        }
    };

    //////////////////
    /// W3fillCogPages
    //////////////////
    ITF.fillCogPages = async function (pageCount = 1) {
        if (ITG.fillCogPagesRunning)
        {
            return;
        }

        let maxPageCount = 8;
        let cogsPerPage = 15;

        ITG.fillCogPagesRunning = true;
        console.log("ITF.fillCogPages started. Pagecount: " + pageCount);

        //Ensure we are at the first page
        await ITF.simulateMouseClickRatio(ITG.B_W3CogsPreviousPage, 50, 0, maxPageCount - 1); //-1 because these are transitions not page count really

        //Toggle trash to clear cogs
        await ITF.simulateMouseClickRatio(ITG.B_W3CogsTrashToggle, 50);

        //Clear all cogs until pageCount
        for (let x = 0; x < pageCount; x++) {
            for (let y = 0; y < 15; y++) {
                await ITF.simulateMouseClickRatio(ITG.B_W3Cogs[y.toString()], 50);
            }
            
            if (x + 1 < pageCount)
            {
                await ITF.simulateMouseClickRatio(ITG.B_W3CogsNextPage, 50);
            }
        }

        //Disable trash mode and go back to first page
        await ITF.simulateMouseClickRatio(ITG.B_W3CogsTrashToggle, 50);
        await ITF.simulateMouseClickRatio(ITG.B_W3CogsPreviousPage, 50, 0, pageCount - 1); //-1 because these are transitions not page count really

        //Fill all cogs
        await ITF.simulateMouseClickRatio(ITG.B_W3CogsCogShelfToggle, 750);
        for (let x = 0; x < pageCount * cogsPerPage; x++)
        {
            await ITF.simulateMouseClickRatio(ITG.B_W3CogsUltimateCog, 125);
        }
        await ITF.simulateMouseClickRatio(ITG.B_W3CogsCogShelfToggle, 750);

        ITG.fillCogPagesRunning = false;
        console.log("ITF.fillCogPages ended. Pagecount: " + pageCount);
    };

//  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.   .----------------. 
// | .--------------. || .--------------. || .--------------. || .--------------. || .--------------. | | .--------------. |
// | | _____  _____ | || |     ____     | || |  _______     | || |   _____      | || |  ________    | | | |   _    _     | |
// | ||_   _||_   _|| || |   .'    `.   | || | |_   __ \    | || |  |_   _|     | || | |_   ___ `.  | | | |  | |  | |    | |
// | |  | | /\ | |  | || |  /  .--.  \  | || |   | |__) |   | || |    | |       | || |   | |   `. \ | | | |  | |__| |_   | |
// | |  | |/  \| |  | || |  | |    | |  | || |   |  __ /    | || |    | |   _   | || |   | |    | | | | | |  |____   _|  | |
// | |  |   /\   |  | || |  \  `--'  /  | || |  _| |  \ \_  | || |   _| |__/ |  | || |  _| |___.' / | | | |      _| |_   | |
// | |  |__/  \__|  | || |   `.____.'   | || | |____| |___| | || |  |________|  | || | |________.'  | | | |     |_____|  | |
// | |              | || |              | || |              | || |              | || |              | | | |              | |
// | '--------------' || '--------------' || '--------------' || '--------------' || '--------------' | | '--------------' |
//  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'   '----------------' 

//  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.   .----------------. 
// | .--------------. || .--------------. || .--------------. || .--------------. || .--------------. | | .--------------. |
// | | _____  _____ | || |     ____     | || |  _______     | || |   _____      | || |  ________    | | | |   _______    | |
// | ||_   _||_   _|| || |   .'    `.   | || | |_   __ \    | || |  |_   _|     | || | |_   ___ `.  | | | |  |  _____|   | |
// | |  | | /\ | |  | || |  /  .--.  \  | || |   | |__) |   | || |    | |       | || |   | |   `. \ | | | |  | |____     | |
// | |  | |/  \| |  | || |  | |    | |  | || |   |  __ /    | || |    | |   _   | || |   | |    | | | | | |  '_.____''.  | |
// | |  |   /\   |  | || |  \  `--'  /  | || |  _| |  \ \_  | || |   _| |__/ |  | || |  _| |___.' / | | | |  | \____) |  | |
// | |  |__/  \__|  | || |   `.____.'   | || | |____| |___| | || |  |________|  | || | |________.'  | | | |   \______.'  | |
// | |              | || |              | || |              | || |              | || |              | | | |              | |
// | '--------------' || '--------------' || '--------------' || '--------------' || '--------------' | | '--------------' |
//  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'   '----------------' 

    //////////////////
    /// W5GamingHarvestAll
    //////////////////
    ITF.setEnabledAutoW5GamingHarvestAll = async function (isEnabled) {
        if (ITG.autoW5GamingHarvestAllEnabled == isEnabled) //Ignore as it already is the same state
        {
            return;
        }

        if (ITG.autoW5GamingHarvestAllEnabled && !isEnabled)
        {
            ITG.autoW5GamingHarvestAllEnabled = false;
            console.log("ITF.setEnabledAutoW5GamingHarvestAll stopped.");
            return;
        }

        //Remaining case start it.
        ITG.autoW5GamingHarvestAllEnabled = isEnabled;
        console.log("ITF.setEnabledAutoW5GamingHarvestAll started.");

        while (ITG.autoW5GamingHarvestAllEnabled) {
            await ITF.simulateMouseUpRatio(ITG.B_W5GamingHarvestAll, 200);
        }
    };

    //////////////////
    /// W5GamingHarvestNuggets
    //////////////////
    ITF.setEnabledAutoW5GamingHarvestNuggets = async function (isEnabled) {
        if (ITG.autoW5GamingHarvestNuggetsEnabled == isEnabled) //Ignore as it already is the same state
        {
            return;
        }

        if (ITG.autoW5GamingHarvestNuggetsEnabled && !isEnabled)
        {
            ITG.autoW5GamingHarvestNuggetsEnabled = false;
            console.log("ITF.setEnabledAutoW5GamingHarvestNuggets stopped.");
            return;
        }

        //Remaining case start it.
        ITG.autoW5GamingHarvestNuggetsEnabled = isEnabled;
        console.log("ITF.setEnabledAutoW5GamingHarvestNuggets started.");

        const rows = 6
        const columns = 12

        while (ITG.autoW5GamingHarvestNuggetsEnabled) {
            //Iterate the gaming board to grab chemical plants
            await ITF.simulateMouseClicksInGridRangeRatios(ITG.B_W5GamingStartGrid, ITG.B_W5GamingEndGrid, 20, 8);

            //Click harvest all
            await ITF.simulateMouseUpRatio(ITG.B_W5GamingHarvestAll, 200);

            //Click shovel
            await ITF.simulateMouseUpRatio(ITG.B_W5GamingShovel, 200);
        }
    };


    //////////////////
    /// W5Cave15Search
    //////////////////
    ITF.setEnabledAutoW5Cave15Search = async function (isEnabled) {
        if (ITG.autoW5Cave15SearchEnabled == isEnabled) //Ignore as it already is the same state
        {
            return;
        }

        if (ITG.autoW5Cave15SearchEnabled && !isEnabled)
        {
            ITG.autoW5Cave15SearchEnabled = false;
            console.log("ITF.setEnabledAutoW5Cave15Search stopped.");
            return;
        }

        //Remaining case start it.
        ITG.autoW5Cave15SearchEnabled = isEnabled;
        console.log("ITF.setEnabledAutoW5Cave15Search started.");

        while (ITG.autoW5Cave15SearchEnabled) {
            await ITF.simulateMouseUpRatio(ITG.B_W5Cave15Search, 100);
        }
    };

    //////////////////
    /// AutoBossW5
    //////////////////
    ITF.setEnabledAutoBossW5 = async function (isEnabled) {
        if (ITG.autoBossW5Enabled == isEnabled) //Ignore as it already is the same state
        {
            return;
        }

        if (ITG.autoBossW5Enabled && !isEnabled)
        {
            ITG.autoBossW5Enabled = false;
            console.log("ITF.setEnabledAutoBossW5 stopped.");
            return;
        }

        //Remaining case start it.
        ITG.autoBossW5Enabled = isEnabled;
        console.log("ITF.setEnabledAutoBossW5 started.");
        
        while (ITG.autoBossW5Enabled) 
        {
            await ITF.simulateMouseClickRatio(ITG.B_W5BossEnterPortal, 1000); 
            await ITF.simulateMouseClickRatio(ITG.B_W5BossEnterButton, 2500);
            await ITF.simulateMouseClickRatio(ITG.B_W5Boss, 8750);
            await ITF.simulateMouseClickRatio(ITG.B_W5BossExitPortal, 750); //Click Exit Portal
            await ITF.simulateKeyPress('w', 2000); //Try to go through the portal with the W key and wait for the map to change
        }
    };

//  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.   .----------------. 
// | .--------------. || .--------------. || .--------------. || .--------------. || .--------------. | | .--------------. |
// | | _____  _____ | || |     ____     | || |  _______     | || |   _____      | || |  ________    | | | |    ______    | |
// | ||_   _||_   _|| || |   .'    `.   | || | |_   __ \    | || |  |_   _|     | || | |_   ___ `.  | | | |  .' ____ \   | |
// | |  | | /\ | |  | || |  /  .--.  \  | || |   | |__) |   | || |    | |       | || |   | |   `. \ | | | |  | |____\_|  | |
// | |  | |/  \| |  | || |  | |    | |  | || |   |  __ /    | || |    | |   _   | || |   | |    | | | | | |  | '____`'.  | |
// | |  |   /\   |  | || |  \  `--'  /  | || |  _| |  \ \_  | || |   _| |__/ |  | || |  _| |___.' / | | | |  | (____) |  | |
// | |  |__/  \__|  | || |   `.____.'   | || | |____| |___| | || |  |________|  | || | |________.'  | | | |  '.______.'  | |
// | |              | || |              | || |              | || |              | || |              | | | |              | |
// | '--------------' || '--------------' || '--------------' || '--------------' || '--------------' | | '--------------' |
//  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'   '----------------' 

    //////////////////
    /// W6FarmingCollectAll
    //////////////////
    ITF.setEnabledAutoW6FarmingCollectAll = async function (isEnabled) {
        if (ITG.autoW6FarmingCollectAllEnabled == isEnabled) //Ignore as it already is the same state
        {
            return;
        }

        if (ITG.autoW6FarmingCollectAllEnabled && !isEnabled)
        {
            ITG.autoW6FarmingCollectAllEnabled = false;
            console.log("ITF.setEnabledAutoW6FarmingCollectAll stopped.");
            return;
        }

        //Remaining case start it.
        ITG.autoW6FarmingCollectAllEnabled = isEnabled;
        console.log("ITF.setEnabledAutoW6FarmingCollectAll started.");

        while (ITG.autoW6FarmingCollectAllEnabled) {
            await ITF.simulateMouseClickRatio(ITG.B_W6FarmingCollectAll, 500);
        }
    };

    //////////////////
    /// ToggleFarmingLock
    //////////////////
    ITF.w6ToggleFarmingLock = async function () {
        const rows = 4
        const columns = 9

        await ITF.sleep(250)

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                let coordinateString = "R" + i + "C" + j
                await ITF.simulateMouseClickRatio(ITG.B_W6FarmingPlants[coordinateString], 10);
            }
        }

        //Click again behind the button to lock/unlock it again
        await ITF.simulateMouseClickRatio({ "X": 0.5138, "Y": 0.6263 }, 10);
    };

    ITG.w6FarmingHotkeyHandler = null;
    ITF.setW6EnableFarmingHotkeysCheckbox = function(isEnabled) {
        const columns = 9

        if (ITG.w6EnableFarmingHotkeys === isEnabled) {
            return; // Already in the desired state
        }

        ITG.w6EnableFarmingHotkeys = isEnabled;

        if (isEnabled) {
            // Create and add the event listener
            ITG.w6FarmingHotkeyHandler = async function(event) {
                if (event.key === 'f' || event.key === 'F') {
                    for (let j = 0; j < columns; j++) {
                        let coordinateString = "R0C" + j
                        await ITF.simulateMouseClickRatio(ITG.B_W6FarmingPlants[coordinateString], 25);
                    }
                }
            };
            window.addEventListener('keydown', ITG.w6FarmingHotkeyHandler);
            console.log("W6 Farming hotkeys enabled (press 'f' to click all bottom row columns)");
        } else {
            // Remove the event listener
            if (ITG.w6FarmingHotkeyHandler) {
                window.removeEventListener('keydown', ITG.w6FarmingHotkeyHandler);
                ITG.w6FarmingHotkeyHandler = null;
            }
            console.log("W6 Farming hotkeys disabled");
        }
    };

    ITF.W6InstantGrowAndCollect = async function (count = 1) {
        const columns = 9

        if (ITG.W6InstantGrowAndCollectEnabled == true) {
            return; // Already running
        }

        ITG.W6InstantGrowAndCollectEnabled = true;

        for (let i = 0; i < count; i++) {
            await ITF.simulateMouseClickRatio(ITG.B_W6FarmingHandymanTools, 25);
            await ITF.simulateMouseClickRatio(ITG.B_W6FarmingInstaGrow, 25);
            
            for (let j = 0; j < columns; j++) {
                let coordinateString = "R0C" + j
                await ITF.simulateMouseClickRatio(ITG.B_W6FarmingPlants[coordinateString], 25);
            }

            await ITF.sleep(500);

            await ITF.simulateMouseClickRatio(ITG.B_W6FarmingHandymanToolsBack, 25);
            await ITF.simulateMouseClickRatio(ITG.B_W6FarmingCollectAll, 25);

            await ITF.sleep(250);
        }

        ITG.W6InstantGrowAndCollectEnabled = false;
    };

//  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.   .----------------. 
// | .--------------. || .--------------. || .--------------. || .--------------. || .--------------. | | .--------------. |
// | | _____  _____ | || |     ____     | || |  _______     | || |   _____      | || |  ________    | | | |   _______    | |
// | ||_   _||_   _|| || |   .'    `.   | || | |_   __ \    | || |  |_   _|     | || | |_   ___ `.  | | | |  |  ___  |   | |
// | |  | | /\ | |  | || |  /  .--.  \  | || |   | |__) |   | || |    | |       | || |   | |   `. \ | | | |  |_/  / /    | |
// | |  | |/  \| |  | || |  | |    | |  | || |   |  __ /    | || |    | |   _   | || |   | |    | | | | | |      / /     | |
// | |  |   /\   |  | || |  \  `--'  /  | || |  _| |  \ \_  | || |   _| |__/ |  | || |  _| |___.' / | | | |     / /      | |
// | |  |__/  \__|  | || |   `.____.'   | || | |____| |___| | || |  |________|  | || | |________.'  | | | |    /_/       | |
// | |              | || |              | || |              | || |              | || |              | | | |              | |
// | '--------------' || '--------------' || '--------------' || '--------------' || '--------------' | | '--------------' |
//  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'   '----------------' 

    //////////////////
    /// W7 Spelunking Hotkeys
    //////////////////
    ITG.w7SpelunkingHotkeyHandler = null;
    ITF.setW7EnableSpelunkingHotkeysCheckbox = function(isEnabled) {
        if (ITG.w7EnableSpelunkingHotkeys === isEnabled) {
            return; // Already in the desired state
        }

        ITG.w7EnableSpelunkingHotkeys = isEnabled;

        if (isEnabled) {
            // Create and add the event listener
            ITG.w7SpelunkingHotkeyHandler = async function(event) {
                if (event.key === 'd' || event.key === 'D') {
                    await ITF.simulateMouseClickRatio(ITG.B_W7SpelunkingDescend, 0);
                }
            };
            window.addEventListener('keydown', ITG.w7SpelunkingHotkeyHandler);
            console.log("W7 Spelunking hotkeys enabled (press 'd' to descend)");
        } else {
            // Remove the event listener
            if (ITG.w7SpelunkingHotkeyHandler) {
                window.removeEventListener('keydown', ITG.w7SpelunkingHotkeyHandler);
                ITG.w7SpelunkingHotkeyHandler = null;
            }
            console.log("W7 Spelunking hotkeys disabled");
        }
    }

    console.log("Idleon Tools Game functions declared");

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    // GUI FUNCTIONS
    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    function createCheckbox(onChangeCallback, labelText) {
        // Create a container for the checkbox and label text
        let container = document.createElement('div');
        container.setAttribute('class', 'checkbox-container');

        // Create label element
        let label = document.createElement('label');
        label.setAttribute('class', 'dashboard-switch');
        
        // Create the checkbox input
        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');

        // Create the slider span
        let span = document.createElement('span');
        span.setAttribute('class', 'slider');
        
        // Append the checkbox and slider to the label
        label.appendChild(input);
        label.appendChild(span);

        // Add an event listener for the checkbox state change
        input.addEventListener('change', function(event) {
            if (typeof onChangeCallback === 'function') {
                ITF.minimizeOverlay();
                onChangeCallback(this.checked); // Pass the checked status and name to the callback
            }
            event.stopPropagation();
            event.stopImmediatePropagation();
        });

        // Create a text label
        var text = document.createElement('span');
        text.setAttribute('class', 'checkbox-label');
        text.textContent = labelText; // Set the text content to the passed labelText

        // Append the label and text to the container
        container.appendChild(label);
        container.appendChild(text);

        return container;
    }

    function createButton(onClickedCallback, labelText) {
        // Create a container for the checkbox and label text
        let container = document.createElement('div');
        container.setAttribute('class', 'checkbox-container');

        // Create label element
        let label = document.createElement('label');
        label.setAttribute('class', 'dashboard-button');
        
         // Create the button element
        let button = document.createElement('button');
        button.setAttribute('class', 'custom-button');
        
        // Append the checkbox and slider to the label
        label.appendChild(button);

        // Add an event listener for the button click event
        button.addEventListener('click', function(event) {
            if (typeof onClickedCallback === 'function') {
                ITF.minimizeOverlay();
                onClickedCallback();
            }
            event.stopPropagation();
            event.stopImmediatePropagation();
        });

        // Create a text label
        var text = document.createElement('span');
        text.setAttribute('class', 'checkbox-label');
        text.textContent = labelText; // Set the text content to the passed labelText

        // Append the label and text to the container
        container.appendChild(label);
        container.appendChild(text);

        return container;
    }

    console.log("Idleon Tools GUI functions declared");

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    // GUI
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    ITE.mainDiv = document.createElement('div');
    ITE.mainDiv.setAttribute('style', 'position: absolute; z-index: 1');
    ITE.game.insertBefore(ITE.mainDiv, ITE.game.firstChild);
    ITE.shadowRoot = ITE.mainDiv.attachShadow({ mode: 'open' });
    ITE.styleElement = document.createElement('style');
    ITE.styleElement.textContent = `
        #overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 1280px; /* Fixed base width */
            height: 720px; /* Fixed base height */
            background-color: rgba(0, 0, 0, 0.5);
            cursor: pointer;
            transform-origin: top left; /* Scale from top-left corner */
            transition: none; /* Remove transition for immediate scaling */
            overflow: visible; /* Allow content to be visible during scaling */
        }
        
        #overlay.minimized {
            width: 15px;
            height: 10px;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border-radius: 4px;
            transform: none !important; /* No scaling when minimized */
        }

        #overlay .minimized-indicator {
            width: 8px;
            height: 8px;
            background: #888;
            border-radius: 50%;
            display: block;
        }

        .dashboard-switch {
            position: relative;
            display: inline-block;
            width: 44px; /* Smaller switch */
            height: 24px; /* Smaller switch */
            border-radius: 4px;
            flex-shrink: 0; /* Prevent switch from shrinking */
        }
          
        .dashboard-switch input { 
            opacity: 0;
            width: 0;
            height: 0;
        }

        .dashboard-button {
            position: relative;
            display: inline-block;
            width: 44px; /* Match checkbox width */
            height: 24px; /* Match checkbox height */
            flex-shrink: 0; /* Prevent button from shrinking */
        }

        .dashboard-button button{
            display: block;
            width: 100%; /* Full width of container */
            height: 100%;
            border-radius: 4px;
            background-color: #ccc;
            border: none;
            cursor: pointer;
        }

        .dashboard-button button:hover {
            background-color: #aaa;
        }
          
        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 34px;
        }
          
        .slider:before {
            position: absolute;
            content: "";
            height: 18px; /* Smaller slider circle */
            width: 18px; /* Smaller slider circle */
            left: 3px;
            bottom: 3px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 50%;
        }
          
        input:checked + .slider {
            background-color: #2196F3;
        }
          
        input:focus + .slider {
            box-shadow: 0 0 1px #2196F3;
        }
          
        input:checked + .slider:before {
            -webkit-transform: translateX(20px); /* Adjusted for smaller size */
            -ms-transform: translateX(20px);
            transform: translateX(20px);
        }

        .checkbox-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 6px;
            padding: 3px 0px;
            width: 100%; /* Take full width of column */
            box-sizing: border-box;
        }

        .checkbox-label {
            color: white;
            flex: 1 1 auto;
            text-align: left;
            white-space: nowrap; /* Prevent wrapping */
            overflow: hidden;
            text-overflow: ellipsis; /* Show ... if too long */
            font-size: 0.9em; /* Slightly smaller text */
            line-height: 1.2;
        }

        .columns-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr); /* 4 columns */
            grid-template-rows: auto auto; /* 2 rows */
            gap: 24px;
            width: 1280px;
            padding: 20px;
            position: absolute;
            left: 0;
            top: 20px;
            box-sizing: border-box;
        }

        .column {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            background-color: rgba(0, 0, 0, 0.3);
            padding: 12px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .column-title {
            color: #FFD700;
            font-weight: bold;
            margin-bottom: 12px;
            font-size: 1.4em;
            text-align: center;
            padding-bottom: 8px;
            border-bottom: 2px solid rgba(255, 215, 0, 0.3);
        }
    `;

    ITE.shadowRoot.appendChild(ITE.styleElement);

    ITE.overlayDiv = document.createElement('div');
    ITE.overlayDiv.setAttribute('id', 'overlay');
    ITE.overlayDiv.classList.add('minimized'); // Start in minimized state
    ITE.overlayDiv.style.userSelect = 'none';

    // 1. Create minimized indicator
    ITE.minimizedIndicator = document.createElement('div');
    ITE.minimizedIndicator.setAttribute('class', 'minimized-indicator');
    ITE.overlayDiv.appendChild(ITE.minimizedIndicator);

    // 2. Create contentDiv and columnsContainer
    ITE.contentDiv = document.createElement('div');
    ITE.contentDiv.style.display = 'none'; // Hidden by default (minimized)
    ITE.overlayDiv.appendChild(ITE.contentDiv);

    // Create columns container
    ITE.columnsContainer = document.createElement('div');
    ITE.columnsContainer.setAttribute('class', 'columns-container');

    // Create each column
    ITE.utilitiesColumn = document.createElement('div');
    ITE.utilitiesColumn.setAttribute('class', 'column');
    ITE.w1Column = document.createElement('div');
    ITE.w1Column.setAttribute('class', 'column');
    ITE.w2Column = document.createElement('div');
    ITE.w2Column.setAttribute('class', 'column');
    ITE.w3Column = document.createElement('div');
    ITE.w3Column.setAttribute('class', 'column');
    ITE.w4Column = document.createElement('div');
    ITE.w4Column.setAttribute('class', 'column');
    ITE.w5Column = document.createElement('div');
    ITE.w5Column.setAttribute('class', 'column');
    ITE.w6Column = document.createElement('div');
    ITE.w6Column.setAttribute('class', 'column');
    ITE.w7Column = document.createElement('div');
    ITE.w7Column.setAttribute('class', 'column');

    // Add titles
    ITE.utilitiesColumn.appendChild(Object.assign(document.createElement('div'), {className: 'column-title', textContent: 'Utilities'}));
    ITE.w1Column.appendChild(Object.assign(document.createElement('div'), {className: 'column-title', textContent: 'World 1'}));
    ITE.w2Column.appendChild(Object.assign(document.createElement('div'), {className: 'column-title', textContent: 'World 2'}));
    ITE.w3Column.appendChild(Object.assign(document.createElement('div'), {className: 'column-title', textContent: 'World 3'}));
    ITE.w4Column.appendChild(Object.assign(document.createElement('div'), {className: 'column-title', textContent: 'World 4'}));
    ITE.w5Column.appendChild(Object.assign(document.createElement('div'), {className: 'column-title', textContent: 'World 5'}));
    ITE.w6Column.appendChild(Object.assign(document.createElement('div'), {className: 'column-title', textContent: 'World 6'}));
    ITE.w7Column.appendChild(Object.assign(document.createElement('div'), {className: 'column-title', textContent: 'World 7'}));

    // Utilities
    ITE.AutoDepositAllCombatCheckbox = createCheckbox(ITF.setEnabledAutoDepositAllCombat, "Auto combat deposit")
    ITE.utilitiesColumn.appendChild(ITE.AutoDepositAllCombatCheckbox);

    ITE.AutoArcher2MClaimCheckbox = createCheckbox(ITF.setEnabledAutoArcher2MClaim, "Archer 2M claim")
    ITE.utilitiesColumn.appendChild(ITE.AutoArcher2MClaimCheckbox);

    ITE.EnableDepositAllHotkeysCheckbox = createCheckbox(ITF.setEnableDepositAllHotkeysCheckbox, "DepositAll Hotkey")
    ITE.utilitiesColumn.appendChild(ITE.EnableDepositAllHotkeysCheckbox);

    // W1
    ITE.W1ColoCheckbox = createCheckbox(ITF.setEnabledAutoColoW1, "Colo")
    ITE.w1Column.appendChild(ITE.W1ColoCheckbox);

    // W2
    ITE.W2ColoCheckbox = createCheckbox(ITF.setEnabledAutoColoW2, "Colo")
    ITE.w2Column.appendChild(ITE.W2ColoCheckbox);

    ITE.AutoW2ClickerShinyFishCheckbox = createCheckbox(ITF.setEnabledAutoW2ClickerShinyFish, "Shiny Fish Claim")
    ITE.w2Column.appendChild(ITE.AutoW2ClickerShinyFishCheckbox);

    // W3
    ITE.W3ColoCheckbox = createCheckbox(ITF.setEnabledAutoColoW3, "Colo")
    ITE.w3Column.appendChild(ITE.W3ColoCheckbox);

    ITE.W3BossCheckbox = createCheckbox(ITF.setEnabledAutoBossW3, "Boss")
    ITE.w3Column.appendChild(ITE.W3BossCheckbox);

    // W4

    // W5
    ITE.W5BossCheckbox = createCheckbox(ITF.setEnabledAutoBossW5, "Boss")
    ITE.w5Column.appendChild(ITE.W5BossCheckbox);

    ITE.AutoW5GamingHarvestAllCheckbox = createCheckbox(ITF.setEnabledAutoW5GamingHarvestAll, "Gaming Auto Harvest")
    ITE.w5Column.appendChild(ITE.AutoW5GamingHarvestAllCheckbox);

    ITE.AutoW5GamingHarvestNuggetsCheckbox = createCheckbox(ITF.setEnabledAutoW5GamingHarvestNuggets, "Gaming Auto Nuggets")
    ITE.w5Column.appendChild(ITE.AutoW5GamingHarvestNuggetsCheckbox);

    ITE.AutoW5Cave15SearchCheckbox = createCheckbox(ITF.setEnabledAutoW5Cave15Search, "Cave 15 Auto Search")
    ITE.w5Column.appendChild(ITE.AutoW5Cave15SearchCheckbox);

    // W6
    ITE.W6FarmingToggleLockButton = createButton(ITF.w6ToggleFarmingLock, "Farming Toggle Lock (Only clicks all plants)")
    ITE.w6Column.appendChild(ITE.W6FarmingToggleLockButton);
    ITE.AutoW6FarmingCollectAllCheckbox = createCheckbox(ITF.setEnabledAutoW6FarmingCollectAll, "Farming Auto Collect")
    ITE.w6Column.appendChild(ITE.AutoW6FarmingCollectAllCheckbox);
    ITE.W6EnableFarmingHotkeysCheckbox = createCheckbox(ITF.setW6EnableFarmingHotkeysCheckbox, "Farming Hotkeys")
    ITE.w6Column.appendChild(ITE.W6EnableFarmingHotkeysCheckbox);

    // W7
    ITE.W7EnableSpelunkingHotkeysCheckbox = createCheckbox(ITF.setW7EnableSpelunkingHotkeysCheckbox, "Spelunking Hotkeys")
    ITE.w7Column.appendChild(ITE.W7EnableSpelunkingHotkeysCheckbox);

    // Append columns to columns container
    ITE.columnsContainer.appendChild(ITE.utilitiesColumn);
    ITE.columnsContainer.appendChild(ITE.w1Column);
    ITE.columnsContainer.appendChild(ITE.w2Column);
    ITE.columnsContainer.appendChild(ITE.w3Column);
    ITE.columnsContainer.appendChild(ITE.w4Column);
    ITE.columnsContainer.appendChild(ITE.w5Column);
    ITE.columnsContainer.appendChild(ITE.w6Column);
    ITE.columnsContainer.appendChild(ITE.w7Column);

    // Clear contentDiv and append columns container
    ITE.contentDiv.innerHTML = '';
    ITE.contentDiv.appendChild(ITE.columnsContainer);

    console.log("Idleon Tools GUI created");

    ITF.scaleOverlay = function() {
        const baseWidth = 1280;
        const baseHeight = 720;
        const gameRect = ITE.game.getBoundingClientRect();
        
        // Calculate scale to fit the game window while maintaining aspect ratio
        const scaleX = gameRect.width / baseWidth;
        const scaleY = gameRect.height / baseHeight;
        const scale = Math.min(scaleX, scaleY); // Use the smaller scale to ensure it fits
        
        ITE.overlayDiv.style.transform = `scale(${scale})`;
    };

    ITF.maximizeOverlay = function(event) {
        ITE.overlayDiv.classList.remove('minimized');
        ITE.contentDiv.style.display = 'block';
        ITE.minimizedIndicator.style.display = 'none';
        ITF.scaleOverlay();
    }
    
    ITF.minimizeOverlay = function(event) {
        ITE.overlayDiv.classList.add('minimized');
        ITE.contentDiv.style.display = 'none';
        ITE.minimizedIndicator.style.display = 'block';
    }

    ITF.stopMousePropagation = function(event) {
        if (ITE.contentDiv.style.display === 'block') {
            event.stopPropagation();
        }
    }

    ITE.overlayDiv.addEventListener('mouseenter', ITF.maximizeOverlay);
    ITE.overlayDiv.addEventListener('mouseleave', ITF.minimizeOverlay);
    window.addEventListener('keyup', (event) => {
        if ((event.key === 'Escape' || event.keyCode === 27) && ITE.contentDiv.style.display === 'block') {
            ITF.minimizeOverlay();
            event.stopPropagation();
        }
    });
    window.addEventListener('resize', function() {
        if (ITE.contentDiv.style.display === 'block') {
            ITF.scaleOverlay();
        }
    });

    //Disabled this for now because it also blocks the scripts simulated mouse events
    //window.addEventListener('mousedown', ITF.stopMousePropagation, true);
    //window.addEventListener('mouseup', ITF.stopMousePropagation, true);
    //window.addEventListener('click', ITF.stopMousePropagation, true);

    ITE.shadowRoot.appendChild(ITE.overlayDiv);

    console.log("Idleon Tools GUI overlay events added");
})();