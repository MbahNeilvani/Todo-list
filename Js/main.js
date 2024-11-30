const btn = document.querySelector('.btn-a');
const btnB = document.querySelector('.btn-b');
const menu = document.querySelector('#menu');
const status = document.querySelector('.status');
const hamMenu = document.querySelector('.ham-menu')
const hamburger = document.querySelector('#hamburger')
const offScreenMenu = document.querySelector('#off-screen-menu-a');

btn.addEventListener('click', () => {
    menu.classList.toggle('active'); 
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

hamMenu.addEventListener('click', ()=> {
    menu.classList.toggle('active')
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

btnB.addEventListener('click', () =>{
    status.classList.toggle('active')
})

document.querySelector('#project').innerText = localStorage.getItem('message')

if (!localStorage.getItem('message')){
    localStorage.getItem('message', 0)
}

document.querySelector('button').addEventListener('click', addAnotherOne)

function addAnotherOne(){
   let botScoreVal = Number(localStorage.getItem('botScore') )
   botScoreVal += 1
   localStorage.setItem('botScore', botScoreVal)
}
