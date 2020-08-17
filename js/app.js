
/**
 * PRESIDENT FUNCTIONALITY
 * initial variable declarations
 */
const presidentsDiv = document.querySelector('.presidents');
const onlineList = document.querySelector('.online-users');
const otherList = document.querySelector('.other-users');


/**
 * creating arrays for status type and pushing respective users
 */
const onlinePresidents = [];
const idlePresidents = [];
const awayPresidents = [];

presidents.forEach((pres) => {
    if (pres.isOnline) {
        onlinePresidents.push(pres.name);
    } else
    if (pres.isIdle) {
        idlePresidents.push(pres.name);
    } else {
        awayPresidents.push(pres.name);
    }
});


/**
 * dynamically generate presidents with online status
 */
onlinePresidents.forEach((pres) => {
    onlineList.innerHTML += `<li><div class="online status"></div><p>${pres}</p></li>`
});
idlePresidents.forEach((pres) => {
    otherList.innerHTML += `<li><div class="idle status"></div><p>${pres}</p></li>`
});
awayPresidents.forEach((pres) => {
    otherList.innerHTML += `<li><div class="away status"></div><p>${pres}</p></li>`
});












/**
 * CHAT INTERFACE FUNCTIONALITY
 */
const formInput = document.querySelector('form input');
const sendBtn = document.querySelector('button');
formInput.addEventListener('keyup', () => {
    if (formInput.value !== '') {
        sendBtn.style.opacity = '1';
        sendBtn.style.pointerEvents = 'auto';
    } else {
        sendBtn.style.opacity = '.4';
        sendBtn.style.pointerEvents = 'none';
    }
});


/**
 * Add active class for president names
 */
const presItems = document.querySelectorAll('.president-list li')
const presList = document.querySelector('.president-list')
presList.addEventListener('click', (e) => {
    iterateClass(presItems, "active", e);
});

/**
 * functionality for status change
 */
const statusDiv = document.querySelector('.status-div');
statusDiv.addEventListener('click', () => {
    statusToggle.classList.toggle('active-status-toggle');
})

const statusToggle = document.querySelector('.status-options-div');
const statusIcon = document.querySelector('.status-icon');
const statusText = document.querySelector('.status-div p');
statusToggle.addEventListener('click', (e) => {
    if (e.target.textContent === 'Online') {
        statusToggle.classList.remove('active-status-toggle');
        statusText.textContent = 'Online';
        statusIcon.style.backgroundColor = '#94F6D3';
    } else
    if (e.target.textContent === 'Away') {
        statusToggle.classList.remove('active-status-toggle');
        statusText.textContent = 'Away';
        statusIcon.style.backgroundColor = '#CFD8D4';
    }
});










/**
 * Chat functionality
 */

const userInput = document.querySelector('form input');
const form = document.querySelector('form');
const chatUI = document.querySelector('.chat-ui');

 form.addEventListener('submit', (e) => {
     e.preventDefault();
     const message = userInput.value;
     chatUI.innerHTML += 
     `
     <div class="chat-card">
     <h1>Dustin Usey</h1>
     <p>${message}</p>
     `
     userInput.value = '';
 })