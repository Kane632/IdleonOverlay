// ==UserScript==
// @name         Idleon Tools
// @namespace    http://tampermonkey.net/
// @version      0.10
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
    // GLOBAL VARS
    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    ITG.CurrentMouse = { "X": 0.0, "Y": 0.0 };

    ITG.B_GrindTimeRatio = { "X": 0.57, "Y": 0.53 };
    ITG.B_Codex = { "X": 0.743750, "Y": 0.940559 };
    ITG.B_Items = { "X": 0.605208, "Y": 0.940559 };
    ITG.B_StorageInCodex = { "X": 0.585417, "Y": 0.361888 };
    ITG.B_DepositAll = { "X": 0.094792, "Y": 0.381119 };
    ITG.B_ToggleAutoAttack = { "X": 0.462500, "Y": 0.938811 };
    ITG.B_ColoNextWave = { "X": 0.355208, "Y": 0.106209 };
    ITG.B_RestartBoss = { "X": 0.243789, "Y": 0.132812 };

    ITG.B_W1Colo = { "X": 0.733333, "Y": 0.419580 };
    ITG.B_W1ColoEnterUp = { "X": 0.677083, "Y": 0.419580 };
    ITG.B_W1ColoEnterLow = { "X": 0.677083, "Y": 0.307692 };
    ITG.B_W1ColoExit = { "X": 0.770833, "Y": 0.629371 };

    ITG.B_W2Colo = { "X": 0.760417, "Y": 0.506993 };
    ITG.B_W2ColoEnterUp = { "X": 0.820833, "Y": 0.223776 };
    ITG.B_W2ColoEnterLow = { "X": 0.820833, "Y": 0.314685 };
    ITG.B_W2ColoExit = { "X": 0.898958, "Y": 0.349650 };
    ITG.B_W2ClickerShinyFish = { "X": 0.060417, "Y": 0.804196 };

    ITG.B_W3Colo = { "X": 0.703125, "Y": 0.529720 };
    ITG.B_W3ColoEnter = { "X": 0.771875, "Y": 0.491259 };
    ITG.B_W3ColoExit = { "X": 0.106250, "Y": 0.783217 };

    ITG.B_W3Boss = { "X": 0.089674, "Y": 0.756392 };
    ITG.B_W3BossItemsStart = { "X": 0.556770, "Y": 0.791364 };
    ITG.B_W3BossItemsEnd = { "X": 0.968370, "Y": 0.792784 };
    ITG.B_W3BossEnterPortal = { "X": 0.710417, "Y": 0.618881 };
    ITG.B_W3BossEnterButton = { "X": 0.766667, "Y": 0.449301 };
    ITG.B_W3BossExitPortal = { "X": 0.955208, "Y": 0.484266 };

    ITG.B_W5Boss = { "X": 0.7177777920765959, "Y": 0.5051244509516838 }
    ITG.B_W5BossEnterPortal = { "X": 0.4183948575730473, "Y": 0.4355783308931186 }
    ITG.B_W5BossEnterButton = { "X": 0.47687130420235113, "Y": 0.2613469985358712 }
    ITG.B_W5BossExitPortal = { "X": 0.17831198162315895, "Y": 0.7459736456808199 }

    ITG.B_W6FarmingCollectAll = { "X": 0.1042, "Y": 0.2357 }
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
    }

    ITG.B_PlayerMenu = { "X": 0.888542, "Y": 0.935315};
    ITG.B_PlayerMenuLeft = { "X": 0.295833, "Y": 0.750000};
    ITG.B_PlayerMenuRight = { "X": 0.755208, "Y": 0.750000};
    ITG.B_PlayerMenuP1 = { "X": 0.333333, "Y": 0.332168};
    ITG.B_PlayerMenuP2 = { "X": 0.517708, "Y": 0.332168};
    ITG.B_PlayerMenuP3 = { "X": 0.717708, "Y": 0.332168};
    ITG.B_PlayerMenuP4 = { "X": 0.333333, "Y": 0.580420};
    ITG.B_PlayerMenuP5 = { "X": 0.517708, "Y": 0.580420};
    ITG.B_PlayerMenuP6 = { "X": 0.717708, "Y": 0.580420};

    ITG.keyNameToKeyCodeMap = {
        'a': 65, 'b': 66, 'c': 67, 'd': 68, 'e': 69, 'f': 70, 'g': 71, 'h': 72, 'i': 73, 'j': 74, 
        'k': 75, 'l': 76, 'm': 77, 'n': 78, 'o': 79, 'p': 80, 'q': 81, 'r': 82, 's': 83, 't': 84, 
        'u': 85, 'v': 86, 'w': 87, 'x': 88, 'y': 89, 'z': 90,
        '0': 48, '1': 49, '2': 50, '3': 51, '4': 52, '5': 53, '6': 54, '7': 55, '8': 56, '9': 57,
        'Escape': 27, 'Enter': 13, 'Backspace': 8, 'Tab': 9, 'Ctrl': 17, 'Shift': 16
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
            // Get the position of ITE.game relative to the viewport
            const gameRect = ITE.game.getBoundingClientRect();

            // Calculate the coordinates relative to ITE.game
            const clampX = clamp(ITG.CurrentMouse.X, 0, gameRect.right);
            const clampY = clamp(ITG.CurrentMouse.Y, 0, gameRect.bottom);

            const ratioX = clampX / gameRect.width;
            const ratioY = clampY / gameRect.height;

            // Output the relative coordinates to the console
            console.log(`Mouse coordinates relative to ITE.game: { "X": ${ratioX.toFixed(4)}, "Y": ${ratioY.toFixed(4)} }`);
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
        let box = ITE.game.getBoundingClientRect(); //Update it just in case
        return { "X": box.left + (box.right - box.left) * ratio.X, "Y": box.top + (box.bottom - box.top) * ratio.Y };
    }

    //Simulate mouse click function by screen game window ratio (0 - 1.0)
    ITF.simulateMouseClickRatio = async function(ratio, delayAfter = 0) {
        let coords = ITF.calculateCords(ratio)
        ITF.simulateMouseEvent("mousedown", coords.X, coords.Y);
        ITF.simulateMouseEvent("mouseup", coords.X, coords.Y);
        ITF.simulateMouseEvent("click", coords.X, coords.Y);
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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    // GAME FUNCTIONS
    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    //////////////////
    /// AutoClickGrindTime
    //////////////////
    ITF.setEnabledAutoClickGrindTime = async function (isEnabled) {
        if (ITG.autoClickGrindTimeEnabled == isEnabled) //Ignore as it already is the same state
        {
            return;
        }

        if (ITG.autoClickGrindTimeEnabled && !isEnabled)
        {
            ITG.autoClickGrindTimeEnabled = false;
            console.log("ITF.setEnabledAutoClickGrindTime stopped.");
            return;
        }

        //Remaining case start it.
        ITG.autoClickGrindTimeEnabled = isEnabled;
        console.log("ITF.setEnabledAutoClickGrindTime started.");

        while (ITG.autoClickGrindTimeEnabled) {
            await ITF.simulateMouseClickRatio(ITG.B_GrindTimeRatio, 7500);
        }
    };

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
            await ITF.simulateMouseClickRatio(ITG.B_Codex, 500);
            await ITF.simulateMouseClickRatio(ITG.B_StorageInCodex, 500);
            await ITF.simulateMouseClickRatio(ITG.B_DepositAll, 500);
            await ITF.simulateMouseClickRatio(ITG.B_Items, 60000); //To close and wait one more minute
        }
    };

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
            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenu, 500); //Open player menu
            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenuLeft, 500); //Ensure is first page
            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenuP2, 2000); //Click first archer
            await ITF.simulateKeyPress('Enter', 2000); //Send Key 'Enter' to claim afk time

            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenu, 500); //Open player menu
            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenuRight, 500); //Ensure is second page
            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenuP2, 2000); //Click second archer
            await ITF.simulateKeyPress('Enter', 2000); //Send Key 'Enter' to claim afk time

            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenu, 500); //Open player menu
            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenuRight, 500); //Ensure is second page
            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenuP4, 2000); //Click third and last archer
            await ITF.simulateKeyPress('Enter', 2000); //Send Key 'Enter' to claim afk time

            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenu, 500); //Open player menu
            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenuLeft, 500); //Ensure is first page
            await ITF.simulateMouseClickRatio(ITG.B_PlayerMenuP1, 2000); //Click active character

            //Sleep for 100 seconds in order to start again with a 2 min mark. 
            // Also add the 2 seconds from the last Enter key that is not needed plus an extra 13 seconds just in case
            await ITF.sleep(115000) 
        }
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
	        await ITF.simulateMouseClickRatio(ITG.B_ToggleAutoAttack, 150); //Start auto
            //The orb duration is about 155 seconds at lvl 312. In W1 maybe we can squeeze two runs per orb.
            //155 seconds Minus (13) = 142 seconds → half each round = 71 seconds → 71 seconds * 10 next wave spam = 710
            for (let i = 0; i < 710; ++i)
            {
                await ITF.simulateMouseClickRatio(ITG.B_ColoNextWave, 100); //Next Wave Spam
            }

            await ITF.simulateMouseClickRatio(ITG.B_ToggleAutoAttack, 100); //Stop auto
            await ITF.simulateMouseClickRatio(ITG.B_W1ColoExit, 2850); //Click Exit Portal
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
	        await ITF.simulateMouseClickRatio(ITG.B_ToggleAutoAttack, 150); //Start auto
            //The orb duration is about 155 seconds at lvl 312. In W2 we cannot squeze two runs per orb as the this colo is slower... 1 run per orb better.
            //155 seconds Minus (13) = 142 seconds → full duration each round = 144 seconds → 144 seconds * 10 next wave spam = 1440
            for (let i = 0; i < 1440; ++i)
            {
                await ITF.simulateMouseClickRatio(ITG.B_ColoNextWave, 100); //Next Wave Spam
            }

            await ITF.simulateMouseClickRatio(ITG.B_ToggleAutoAttack, 100); //Stop auto
            await ITF.simulateMouseClickRatio(ITG.B_W2ColoExit, 2850); //Click Exit Portal
        }
    };

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
	        await ITF.simulateMouseClickRatio(ITG.B_ToggleAutoAttack, 150); //Start auto
            //The orb duration is about 155 seconds at lvl 312. In W3 maybe we could squeeze two runs per orb but we will wait to ensure always a full orb when opening chests
            //155 seconds Minus (13) = 142 seconds → full duration each round = 144 seconds → 144 seconds * 10 next wave spam = 1440
            for (let i = 0; i < 1350; ++i)
            {
                await ITF.simulateMouseClickRatio(ITG.B_ColoNextWave, 100); //Next Wave Spam
            }

            await ITF.simulateMouseClickRatio(ITG.B_ToggleAutoAttack, 100); //Stop auto
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
            await ITF.simulateMouseClickRatio(ITG.B_W5Boss, 9500);
            await ITF.simulateMouseClickRatio(ITG.B_W5BossExitPortal, 750); //Click Exit Portal
            await ITF.simulateKeyPress('w', 2000); //Try to go through the portal with the W key and wait for the map to change
        }
    };

    //////////////////
    /// AutoBossW5
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
        await ITF.simulateMouseClickRatio(ITG.B_W6FarmingPlants["R1C2"], 10);
    };

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
            top: 0; /* Adjusted to be in the top left corner */
            left: 0; /* Adjusted to be in the top left corner */
            width: 15px; /* Small mode default width */
            height: 10px; /* Small mode default height */
            background-color: rgba(0, 0, 0, 0.5);
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex; /* To center content */
            align-items: center; /* Center content vertically */
            justify-content: center; /* Center content horizontally */
            overflow: hidden; /* Hide children overflow */
        }

        .dashboard-switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
            border-radius: 4px;
        }
          
        .dashboard-switch input { 
            opacity: 0;
            width: 0;
            height: 0;
        }

        .dashboard-button {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
        }

        .dashboard-button button{
            display: block;
            width: 25%;
            height: 100%;
            border-radius: 4px;
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
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
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
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }

        .checkbox-container {
            display: flex;
            align-items: center; /* Aligns the checkbox and label vertically */
            gap: 8px; /* Adds some space between the checkbox and the label text */
            padding: 2px 0px;
        }
        
        .checkbox-label {
            color: white;
            /* Your styles for the label text */
        }
    `;

    ITE.shadowRoot.appendChild(ITE.styleElement);

    ITE.overlayDiv = document.createElement('div');
    ITE.overlayDiv.setAttribute('id', 'overlay');
    ITE.overlayDiv.style.userSelect = 'none';

    ITE.contentDiv = document.createElement('div');
    ITE.contentDiv.style.display = 'none';

    ITE.W1ColoCheckbox = createCheckbox(ITF.setEnabledAutoColoW1, "W1 Colo")
    ITE.contentDiv.appendChild(ITE.W1ColoCheckbox);
    ITE.W2ColoCheckbox = createCheckbox(ITF.setEnabledAutoColoW2, "W2 Colo")
    ITE.contentDiv.appendChild(ITE.W2ColoCheckbox);
    ITE.W3ColoCheckbox = createCheckbox(ITF.setEnabledAutoColoW3, "W3 Colo")
    ITE.contentDiv.appendChild(ITE.W3ColoCheckbox);

    ITE.W3BossCheckbox = createCheckbox(ITF.setEnabledAutoBossW3, "W3 Boss")
    ITE.contentDiv.appendChild(ITE.W3BossCheckbox);
    ITE.W5BossCheckbox = createCheckbox(ITF.setEnabledAutoBossW5, "W5 Boss")
    ITE.contentDiv.appendChild(ITE.W5BossCheckbox);

    ITE.W6FarmingToggleLockButton = createButton(ITF.w6ToggleFarmingLock, "W6 Farming Toggle Lock (Only clicks all plants)")
    ITE.contentDiv.appendChild(ITE.W6FarmingToggleLockButton);
    ITE.AutoW6FarmingCollectAllCheckbox = createCheckbox(ITF.setEnabledAutoW6FarmingCollectAll, "W6 Farming Auto Collect")
    ITE.contentDiv.appendChild(ITE.AutoW6FarmingCollectAllCheckbox);

    ITE.AutoDepositAllCombatCheckbox = createCheckbox(ITF.setEnabledAutoDepositAllCombat, "Auto combat deposit")
    ITE.contentDiv.appendChild(ITE.AutoDepositAllCombatCheckbox);

    ITE.AutoClickGrindTimeCheckbox = createCheckbox(ITF.setEnabledAutoClickGrindTime, "Grind Time Spam")
    ITE.contentDiv.appendChild(ITE.AutoClickGrindTimeCheckbox);

    ITE.AutoArcher2MClaimCheckbox = createCheckbox(ITF.setEnabledAutoArcher2MClaim, "Archer 2M claim")
    ITE.contentDiv.appendChild(ITE.AutoArcher2MClaimCheckbox);

    ITE.AutoW2ClickerShinyFishCheckbox = createCheckbox(ITF.setEnabledAutoW2ClickerShinyFish, "W2 Shiny Fish Claim")
    ITE.contentDiv.appendChild(ITE.AutoW2ClickerShinyFishCheckbox);

    ITE.overlayDiv.appendChild(ITE.contentDiv);

    ITF.maximizeOverlay = function(event) {
        const gameRect = ITE.game.getBoundingClientRect();
        ITE.overlayDiv.style.width = gameRect.width + 'px';
        ITE.overlayDiv.style.height = gameRect.height + 'px';
        ITE.contentDiv.style.display = 'block'; // Show the content when big
    }
    
    ITF.minimizeOverlay = function(event) {
        ITE.overlayDiv.style.width = 15 + 'px';
        ITE.overlayDiv.style.height = 10 + 'px';
        ITE.contentDiv.style.display = 'none'; // Hide the content when small
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

    //Disabled this for now because it also blocks the scripts simulated mouse events
    //window.addEventListener('mousedown', ITF.stopMousePropagation, true);
    //window.addEventListener('mouseup', ITF.stopMousePropagation, true);
    //window.addEventListener('click', ITF.stopMousePropagation, true);

    ITE.shadowRoot.appendChild(ITE.overlayDiv);
})();