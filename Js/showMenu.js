let toggleMenuElement =document.getElementById('toggle-menu');
let mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click', ()=>{
	mainMenuElement.classList.toggle('main-menu_show');
})