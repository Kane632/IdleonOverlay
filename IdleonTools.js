// ==UserScript==
// @name         Idleon Tools
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
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
    var ITE = window.ITE = {}; //Elements
    var ITF = window.ITF = {}; //Functions
    var ITG = window.ITG = {}; //Globals

    //Retrieve the game element and the bounding client rect
    ITE.game = document.getElementById('openfl-content');
    ITE.canvas = ITE.game.childNodes[0];

    console.log("Idleon Tools Elements Retrieved");

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    // GLOBAL VARS
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    ITG.B_GrindTimeRatio = { "X": 0.57, "Y": 0.53 };
    ITG.B_Codex = { "X": 0.743750, "Y": 0.940559 };
    ITG.B_Items = { "X": 0.605208, "Y": 0.940559 };
    ITG.B_StorageInCodex = { "X": 0.585417, "Y": 0.361888 };
    ITG.B_DepositAll = { "X": 0.094792, "Y": 0.381119 };

    console.log("Idleon Tools Global vars declared");

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    // HELPER FUNCTIONS
    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Simulate mouse event function
    ITF.simulateMouseEvent = function (eventName, x, y) {
        document.getElementById('openfl-content').dispatchEvent(new MouseEvent(eventName, {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y,
            button: 0
        }));
    };

    ITF.calculateCords = function(ratio) {
        var box = ITE.game.getBoundingClientRect(); //Update it just in case
        return { "X": box.left + (box.right - box.left) * ratio.X, "Y": box.top + (box.bottom - box.top) * ratio.Y };
    }

    //Simulate mouse click function by screen game window ratio (0 - 1.0)
    ITF.simulateMouseClickRatio = function (ratio) {
        var coords = ITF.calculateCords(ratio)
        ITF.simulateMouseEvent("mousedown", coords.X, coords.Y);
        ITF.simulateMouseEvent("mouseup", coords.X, coords.Y);
        ITF.simulateMouseEvent("click", coords.X, coords.Y);
    };

    ITF.sleep = function (ms) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    // GUI
    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Test
    ITE.vsc = document.createElement('div');
    ITE.vsc.classList.add('vsc-controller');
    ITE.vsc.setAttribute('style', 'position: absolute; z-index: 1');
    ITE.game.insertBefore(ITE.vsc, ITE.game.firstChild);
    ITE.shadowRoot = ITE.vsc.attachShadow({ mode: 'open' });
    ITE.styleElement = document.createElement('style');
    ITE.styleElement.textContent = `
        * {
        line-height: 1.8em;
        font-family: sans-serif;
        font-size: 13px;
        }

        :host(:hover) #controls {
        display: inline;
        }

        #controller {
        position: absolute;
        top: 0;
        left: 0;

        background: black;
        color: white;

        border-radius: 6px;
        padding: 4px;
        margin: 10px 10px 10px 15px;

        cursor: default;
        z-index: 9999999;
        }

        #controller:hover {
        opacity: 0.7;
        }

        #controller:hover > .draggable {
        margin-right: 0.8em;
        }

        #controls {
        display: none;
        }

        #controller.dragging {
        cursor: -moz-grabbing;
        opacity: 0.7;
        }

        #controller.dragging #controls {
        display: inline;
        }

        .draggable {
        cursor: -moz-grab;
        }

        .draggable:active {
        cursor: -moz-grabbing;
        }

        button {
        opacity: 1;
        cursor: pointer;
        color: black;
        background: white;
        font-weight: normal;
        border-radius: 5px;
        padding: 1px 5px 3px 5px;
        font-size: 14px;
        line-height: 14px;
        border: 0px solid white;
        font-family: "Lucida Console", Monaco, monospace;
        margin: 0px 2px 2px 2px;
        transition: background 0.2s, color 0.2s;
        }

        button:focus {
        outline: 0;
        }

        button:hover {
        opacity: 1;
        background: #2196f3;
        color: #ffffff;
        }

        button:active {
        background: #2196f3;
        color: #ffffff;
        font-weight: bold;
        }

        button.rw {
        opacity: 0.65;
        }

        button.hideButton {
        opacity: 0.65;
        margin-right: 2px;
        }
    `;

    var divElement = document.createElement('div');
    divElement.setAttribute('id', 'controller');
    divElement.setAttribute('style', 'top: 42px; left: 196px; opacity: 0.3;');
    divElement.setAttribute('class', '');

    // Create span elements for the inner content
    var span1 = document.createElement('span');
    span1.setAttribute('data-action', 'drag');
    span1.setAttribute('class', 'draggable');
    span1.textContent = '1.80';

    var span2 = document.createElement('span');
    span2.setAttribute('id', 'controls');

    var button1 = document.createElement('button');
    button1.setAttribute('data-action', 'rewind');
    button1.setAttribute('class', 'rw');
    button1.textContent = '«';
    button1.addEventListener('pointerdown', (e) => { console.log("button1"); e.preventDefault(); e.stopPropagation(); });

    var button2 = document.createElement('button');
    button2.setAttribute('data-action', 'slower');
    button2.textContent = '−';
    button2.addEventListener('pointerdown', () => { console.log("button2"); });

    var button3 = document.createElement('button');
    button3.setAttribute('data-action', 'faster');
    button3.textContent = '+';
    button3.addEventListener('pointerdown', () => { console.log("button3"); });

    var button4 = document.createElement('button');
    button4.setAttribute('data-action', 'advance');
    button4.setAttribute('class', 'rw');
    button4.textContent = '»';
    button4.addEventListener('pointerdown', () => { console.log("button4"); });

    var button5 = document.createElement('button');
    button5.setAttribute('data-action', 'display');
    button5.setAttribute('class', 'hideButton');
    button5.textContent = '×';
    button5.addEventListener('pointerdown', () => { console.log("button5"); });

    // Append span elements to the div
    divElement.appendChild(span1);
    divElement.appendChild(span2);

    // Append buttons to the span with id 'controls'
    span2.appendChild(button1);
    span2.appendChild(button2);
    span2.appendChild(button3);
    span2.appendChild(button4);
    span2.appendChild(button5);




    ITE.shadowRoot.appendChild(ITE.styleElement);
    ITE.shadowRoot.appendChild(divElement);







    ITE.shadowRoot.querySelector(".draggable").addEventListener(
        "mousedown",
        (e) => {
            //runAction(e.target.dataset["action"], false, e);
            handleDrag(false, e);
            e.stopPropagation();
        },
        true
    );

    ITE.shadowRoot
        .querySelector("#controller")
        .addEventListener("click", (e) => e.stopPropagation(), false);
    ITE.shadowRoot
        .querySelector("#controller")
        .addEventListener("mousedown", (e) => e.stopPropagation(), false);

    function handleDrag(video, e) {
        const controller = ITE.vsc;
        const shadowController = controller.shadowRoot.querySelector("#controller");

        // Find nearest parent of same size as video parent.
        var parentElement = controller.parentElement;
        while (
            parentElement.parentNode &&
            parentElement.parentNode.offsetHeight === parentElement.offsetHeight &&
            parentElement.parentNode.offsetWidth === parentElement.offsetWidth
        ) {
            parentElement = parentElement.parentNode;
        }

        //video.classList.add("vcs-dragging");
        shadowController.classList.add("dragging");

        const initialMouseXY = [e.clientX, e.clientY];
        const initialControllerXY = [
            parseInt(shadowController.style.left),
            parseInt(shadowController.style.top)
        ];

        const startDragging = (e) => {
            let style = shadowController.style;
            let dx = e.clientX - initialMouseXY[0];
            let dy = e.clientY - initialMouseXY[1];
            style.left = initialControllerXY[0] + dx + "px";
            style.top = initialControllerXY[1] + dy + "px";
        };

        const stopDragging = () => {
            parentElement.removeEventListener("mousemove", startDragging);
            parentElement.removeEventListener("mouseup", stopDragging);
            parentElement.removeEventListener("mouseleave", stopDragging);

            shadowController.classList.remove("dragging");
            //video.classList.remove("vcs-dragging");
        };

        parentElement.addEventListener("mouseup", stopDragging);
        parentElement.addEventListener("mouseleave", stopDragging);
        parentElement.addEventListener("mousemove", startDragging);
    }













    

    //////////////////
    /// AutoClickGrindTime
    //////////////////
    ITF.startAutoClickGrindTime = async function () {
        ITG.autoClickGrindTimeEnabled = true;
        while (ITG.autoClickGrindTimeEnabled) {
            ITF.simulateMouseClickRatio(ITG.B_GrindTimeRatio);
            await ITF.sleep(7500);
        }
    };

    ITF.stopAutoClickGrindTime = function () {
        ITG.autoClickGrindTimeEnabled = false;
    };

    //////////////////
    /// AutoDepositAllCombat
    //////////////////
    ITF.startAutoDepositAllCombat = async function () {
        ITG.startAutoDepositAllCombatEnabled = true;
        while (ITG.startAutoDepositAllCombatEnabled) {
            ITF.simulateMouseClickRatio(ITG.B_Codex);
            await ITF.sleep(500);
            ITF.simulateMouseClickRatio(ITG.B_StorageInCodex);
            await ITF.sleep(500);
            ITF.simulateMouseClickRatio(ITG.B_DepositAll);
            await ITF.sleep(500);
            ITF.simulateMouseClickRatio(ITG.B_Items); //To close
            await ITF.sleep(60000); //Each minute
        }
    };

    ITF.stopAutoDepositAllCombat = function () {
        ITG.startAutoDepositAllCombatEnabled = false;
    };
})();