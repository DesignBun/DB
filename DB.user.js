// ==UserScript==
// @name         DB
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  try to take over the world!
// @author       You
// @match        https://designbundles.net/*
// @icon         https://www.google.com/s2/favicons?domain=designbundles.net
// @homepage     https://github.com/DesignBun/DB
// @updateURL    https://github.com/DesignBun/DB/raw/main/DB.user.js
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_addValueChangeListener
// @grant GM_setClipboard
// @grant unsafeWindow
// @grant window.close
// @grant window.focus
// @grant window.onurlchange
// ==/UserScript==

let pause = 5000; // Пауза между кликами
let Ts = 2000 // Пауза перед запуском скрипта
let T = pause; // Первая пауза
let i = 0 ; // Нумерация элемента
let now = 0; // на каком клике находимся сейчас
setTimeout(() => {
    //alert("Hello");
    //debugger
    let count = prompt('Сколько Кликов делать?', 0);
    let card = document.querySelectorAll('.product-box');
    function myLoop() {
        setTimeout(() => {
            //debugger
            let fav = card[i].querySelector('.product-box__social');
            let favStyle = window.getComputedStyle(fav);
            let cart = card[i].querySelector('.product-box__add-cart');
            let cartStyle = window.getComputedStyle(cart);
            console.log(favStyle.getPropertyValue('background-color') + cartStyle.getPropertyValue('background-color') );
            if ((favStyle.getPropertyValue('background-color') == 'rgb(255, 255, 255)') &
                ( cartStyle.getPropertyValue('background-color') == 'rgb(76, 197, 251)' ) & count > 0) {
                let pin = card[i].querySelector('.-pinterest');
                pin.click();
                fav.click();
                now++;
                console.log(`Выполнил кликов ${now}`);
                //debugger;
                T = pause;
                if (now >= count) { i = 9999; };
            } else {
                if (now >= count) { i = 9999; };
                T = 100;
                //alert("-");
            }
            i++;
            if (i < 36) {
                myLoop();
            } else { alert(`Выполнил кликов ${now}`); }

        }, Math.random() * T + T);
    }
    myLoop();
}, Math.random() * Ts + Ts);
document.addEventListener('keydown', function(event) {
    if (event.code == 'ControlRight') {
        i = 9999;
        alert('Программа отменена');
        alert(`Выполнил кликов ${now}`);
    }
});


