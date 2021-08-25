// ==UserScript==
// @name         DB
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  try to take over the world!
// @author       You
// @match        https://designbundles.net/search?search=*
// @icon         https://www.google.com/s2/favicons?domain=designbundles.net
// @homepage     https://github.com/DesignBun/DB
// @updateURL    https://github.com/DesignBun/DB/raw/main/DB.user.js
// @grant        none
// ==/UserScript==

let pause = 5000; // Пауза между кликами
let T = pause; // Первая пауза
setTimeout(() => {
    //alert("Hello");
    let count = prompt('Сколько Кликов делать?', 1);
    let now = 0;
    let card = document.querySelectorAll('div.search-body__products-row > div');
    let i = 0 ;
    function myLoop() {
        setTimeout(() => {
            let fav = card[i].querySelector('.product-box__social');
            let favStyle = window.getComputedStyle(fav);
            let cart = card[i].querySelector('.product-box__add-cart');
            let cartStyle = window.getComputedStyle(cart);
            console.log(favStyle.getPropertyValue('background-color') + cartStyle.getPropertyValue('background-color') );
            if ((favStyle.getPropertyValue('background-color') == 'rgb(255, 255, 255)') & ( cartStyle.getPropertyValue('background-color') == 'rgb(76, 197, 251)' ) ) {
                let pin = card[i].querySelector('.-pinterest');
                pin.click();
                fav.click();
                now++;
                console.log(`Выполнил кликов ${now}`);
                //debugger;
                T = pause;
                if (now >= count) { i = 9999; };
            } else {
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
}, Math.random() * 2000 + 2000);
