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

(function() {
    'use strict';

    console.log("Idleon Tools Started");

    //Remove useless padding
    document.getElementById("content-container-inner").style.padding = "0px";

    //Create a global var to store everything so we can access it from console.
    var IS = window.IS = {};

    //Retrieve the game element and the bounding client rect
    IS.game = document.getElementById('openfl-content');
    IS.box = IS.game.getBoundingClientRect();
    IS.canvas = IS.game.childNodes[0];

    console.log("Idleon Tools Elements Retrieved");

    //Test
    IS.vsc = document.createElement('div');
    IS.vsc.classList.add('vsc-controller');
    IS.vsc.setAttribute('style', 'position: absolute; z-index: 1');
    IS.game.insertBefore(IS.vsc, IS.game.firstChild);
    IS.shadowRoot = IS.vsc.attachShadow({ mode: 'open' });
    IS.styleElement = document.createElement('style');
    // IS.styleElement.textContent = `
    //       @import "chrome-extension://nffaoalbilbmmfgbnbgppjihopabppdk/shadow.css";
    // `;
    IS.styleElement.textContent = `
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

    IS.shadowRoot.querySelector(".draggable").addEventListener(
      "mousedown",
      (e) => {
        //runAction(e.target.dataset["action"], false, e);
        handleDrag(false, e);
        e.stopPropagation();
      },
      true
    );

    IS.shadowRoot
      .querySelector("#controller")
      .addEventListener("click", (e) => e.stopPropagation(), false);
    IS.shadowRoot
      .querySelector("#controller")
      .addEventListener("mousedown", (e) => e.stopPropagation(), false);

    function handleDrag(video, e) {
        const controller = video.vsc.div;
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

        video.classList.add("vcs-dragging");
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
            video.classList.remove("vcs-dragging");
        };

        parentElement.addEventListener("mouseup", stopDragging);
        parentElement.addEventListener("mouseleave", stopDragging);
        parentElement.addEventListener("mousemove", startDragging);
    }


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
    button1.addEventListener('pointerdown', (e) => {console.log("button1"); e.preventDefault(); e.stopPropagation(); });

    var button2 = document.createElement('button');
    button2.setAttribute('data-action', 'slower');
    button2.textContent = '−';
    button2.addEventListener('pointerdown', () => {console.log("button2");});

    var button3 = document.createElement('button');
    button3.setAttribute('data-action', 'faster');
    button3.textContent = '+';
    button3.addEventListener('pointerdown', () => {console.log("button3");});

    var button4 = document.createElement('button');
    button4.setAttribute('data-action', 'advance');
    button4.setAttribute('class', 'rw');
    button4.textContent = '»';
    button4.addEventListener('pointerdown', () => {console.log("button4");});

    var button5 = document.createElement('button');
    button5.setAttribute('data-action', 'display');
    button5.setAttribute('class', 'hideButton');
    button5.textContent = '×';
    button5.addEventListener('pointerdown', () => {console.log("button5");});

    // Append span elements to the div
    divElement.appendChild(span1);
    divElement.appendChild(span2);

    // Append buttons to the span with id 'controls'
    span2.appendChild(button1);
    span2.appendChild(button2);
    span2.appendChild(button3);
    span2.appendChild(button4);
    span2.appendChild(button5);




    IS.shadowRoot.appendChild(IS.styleElement);
    IS.shadowRoot.appendChild(divElement);

    //Define some global vars
    var B_GrindTimeRatio = { "X": 0.57, "Y": 0.53 };
    var B_Codex = { "X": 0.743750, "Y": 0.940559 };
    var B_Items = { "X": 0.605208, "Y": 0.940559 };
    var B_StorageInCodex = { "X": 0.585417, "Y": 0.361888 };
    var B_DepositAll = { "X": 0.094792, "Y": 0.381119 };

    console.log("Idleon Tools Global vars declared");

    //Simulate mouse event function
    IS.simulateMouseEvent = function(element, eventName, coordX, coordY) {
        element.dispatchEvent(new MouseEvent(eventName, {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: coordX,
            clientY: coordY,
            button: 0
        }));
    };

    //Simulate mouse event function by screen game window ratio (0 - 1.0)
    IS.simulateMouseEventRatio = function(element, eventName, ratio) {
        IS.box = IS.game.getBoundingClientRect(); //Update it just in case
        var coordX = IS.box.left + (IS.box.right - IS.box.left) * ratio.X;
        var coordY = IS.box.top + (IS.box.bottom - IS.box.top) *ratio.Y;
        element.dispatchEvent(new MouseEvent(eventName, {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: coordX,
            clientY: coordY,
            button: 0
        }));
    };

    //Simulate mouse click function by screen game window ratio (0 - 1.0)
    IS.simulateMouseClickRatio = function(element, ratio) {
        IS.box = IS.game.getBoundingClientRect(); //Update it just in case
        var coordX = IS.box.left + (IS.box.right - IS.box.left) * ratio.X;
        var coordY = IS.box.top + (IS.box.bottom - IS.box.top) *ratio.Y;
        IS.simulateMouseEvent(IS.game, "mousedown", coordX, coordY);
        IS.simulateMouseEvent(IS.game, "mouseup", coordX, coordY);
        IS.simulateMouseEvent(IS.game, "click", coordX, coordY);
    };

    IS.sleep = function(ms) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }

    //////////////////
    /// AutoClickGrindTime
    //////////////////
    IS.startAutoClickGrindTime = async function() {
        IS.autoClickGrindTimeEnabled = true;
        while(IS.autoClickGrindTimeEnabled){
            IS.simulateMouseClickRatio(IS.game, B_GrindTimeRatio);
            await IS.sleep(7500);
        }
    };

    IS.stopAutoClickGrindTime = function() {
        IS.autoClickGrindTimeEnabled = false;
    };

    //////////////////
    /// AutoDepositAllCombat
    //////////////////
    IS.startAutoDepositAllCombat = async function() {
        IS.startAutoDepositAllCombatEnabled = true;
        while(IS.startAutoDepositAllCombatEnabled){
            IS.simulateMouseClickRatio(IS.game, B_Codex);
            await IS.sleep(500);
            IS.simulateMouseClickRatio(IS.game, B_StorageInCodex);
            await IS.sleep(500);
            IS.simulateMouseClickRatio(IS.game, B_DepositAll);
            await IS.sleep(500);
            IS.simulateMouseClickRatio(IS.game, B_Items); //To close
            await IS.sleep(60000); //Each minute
        }
    };

    IS.stopAutoDepositAllCombat = function() {
        IS.startAutoDepositAllCombatEnabled = false;
    };
})();