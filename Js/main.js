const hamMenu = document.querySelector('.btn-a');
const things = document.querySelector('#thing');
const offScreenMenu = document.querySelector('.off-screen-menu-a');


hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active'); 
    things.classList.toggle('active')
})  
