const hamMenu = document.querySelector('.btn-a');

const offScreenMenu = document.querySelector('.off-screen-menu-a');

hamMenu.addEventListener('click', () => {
    alert('working')
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active'); 
})  
