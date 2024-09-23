const btn = document.querySelector('.btn-a');
// const hammenu = document.querySelector('.burger')
const things = document.querySelector('#thing');
const offScreenMenu = document.querySelector('#off-screen-menu-a');


btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    offScreenMenu.classList.toggle('active'); 
    things.classList.toggle('active');
})

hammenu.addEventListener('click', ()=> {
    alert('working')
    hammenu.classList.toggle('active')
})
