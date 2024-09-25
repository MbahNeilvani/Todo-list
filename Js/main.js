const btn = document.querySelector('.btn-a');
// const hammenu = document.querySelector('.burger')
const offScreenMenu = document.querySelector('#off-screen-menu-a');
// const downbtn = document.querySelector('.down')
const menu = document.querySelector('#menu');


btn.addEventListener('click', () => {
    menu.classList.toggle('active'); 
    // alert('working')
    // btn.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    // downbtn.classList.toggle('active')
})

hammenu.addEventListener('click', ()=> {
    alert('working')
    hammenu.classList.toggle('active')
})
