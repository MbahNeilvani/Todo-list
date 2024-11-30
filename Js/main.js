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

// LOCALSTORAGE
document.querySelector('.add').addEventListener('click', put)
document.querySelector('#software').innerText = localStorage.getItem('learned')

if (!localStorage.getItem('learned')){
    localStorage.getItem('learned', 0)
}

function put(){
    let write = document.querySelector('.same').value
    // write += " "
    localStorage.setItem('learned', write)
    document.querySelector('#software').innerText = localStorage.getItem('learned')
}







// document.querySelector('button').addEventListener('click', addAnotherOne)

// function addAnotherOne(){
//    let botScoreVal = Number(localStorage.getItem('botScore') )
//    botScoreVal += 1
//    localStorage.setItem('botScore', botScoreVal)
// }

