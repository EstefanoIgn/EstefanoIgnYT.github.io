const hamburguerIcon = document.querySelector('.nav__hamburguer');
const navOverlay = document.querySelector('.nav__overlay');
let currentDropDown = navOverlay;



hamburguerIcon.addEventListener('click', () =>{
    hamburguerIcon.classList.toggle('nav__hamburguer--open');

    navOverlay.classList.toggle('nav__overlay--show');
})

navOverlay.addEventListener('click',(e) =>{
    e.preventDefault();
    const currentElement = e.target;
    // console.log(e.target.classList.value);

    if (isActive(currentElement, 'nav__parent')){

        const subMenu = currentElement.parentElement.children[1];
        console.log(subMenu);


        if(window.innerWidth < 768){
            let height = (subMenu.clientHeight == 0) ? subMenu.scrollHeight : 0;
            console.log(subMenu.clientHeight);
            subMenu.style.height = `${height}px`;

        }else{
            if(!isActive(subMenu,'nav__inner--show')){
                closeDropdown(currentDropDown);
            }
            subMenu.classList.toggle('nav__inner--show');
            currentDropDown = subMenu;
        }
    }


})

function isActive(element,string){
    return element.classList.value.includes(string)
}

function closeDropdown(currentDropDown){
    if(isActive(currentDropDown,'nav__inner--show')){
        currentDropDown.classList.remove('nav__inner--show')
    }
}
window.addEventListener('resize', () =>{
    closeDropdown(currentDropDown);
    if(window.innerWidth < 768){
        const navInners = document.querySelectorAll('.nav__inner');
        navInners.forEach(navInner => {
            navInner.style.height = '';
        })
    }
})