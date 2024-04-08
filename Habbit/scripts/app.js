"use strict";

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';

/* page */
const page = {
    menu: document.querySelector('.menu__list')
}


/* utils */

// Данная функция загружает данные и кладет их в habbits
function loadData() {
    const habbitsString = localStorage.getItem('HABBIT_KEY');
    const habbitArray = JSON.parse(habbitsString);
    if (Array.isArray(habbitArray)) {
        habbits = habbitArray;
    }
}

// Данная функция выгружает данные из habbits 
function saveData() {
    localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

/* render */
function rerenderMenu(activeHabbit) {
    if (!activeHabbit) {
        return;
    }
    for (const habbit of habbits) {
        const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
        if (!existed) {
            // создание
            const element = document.createElement('button');
            element.setAttribute("menu-habbit-id", habbit.id);
            element.classList.add('menu__item');
            element.addEventListener('click', () => rerender(habbit.id));
            element.innerHTML = `<img src="./images/${habbit.icon}.png" alt="${habbit.name}" />`;
            if (activeHabbit.id === habbit.id) {
              element.classList.add("menu__item_active");
            }
            page.menu.appendChild(element);
            continue;
        }
        if (activeHabbit.id === habbit.id) {
            existed.classList.add("menu__item_active");
        } else {
            existed.classList.remove("menu__item_active");
        }
    }
}

function rerender(activeHabbitId) {
    const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId)
    rerenderMenu(activeHabbit);
}

// Загрузили наши данные, init
(() => {
    loadData();
    rerender(habbits[0].id)
})()