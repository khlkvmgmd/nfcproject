var nav = document.getElementById('navLox')
var header = document.getElementById('header')
var how_it_work = document.querySelector('.how_it_work')
var advantages = document.querySelector('.advantages')
var connection = document.querySelector('.connection')

var navMenuLinks = document.querySelectorAll('.nav_menu_link li')

var logo = document.querySelector('.logo')

var authorization_wrapper = document.querySelector('.authorization_wrapper')
var open_authorization = 0

// Подписки

var connection_descr = document.querySelector('.connection_descr span')
function showDescr(event){
    event.stopPropagation()
    console.log(event.target.id);
    const m = ['1569₽','1.490₽', ' 1.236₽']
    if(m[parseInt(event.target.id)] !== undefined) connection_descr.innerText = m[parseInt(event.target.id)]
    
}

// Навигационное меню

function scrollToTop(){
    window.scrollTo(0, 0)
}

window.addEventListener('scroll', function(){
    var scroll = window.scrollY
    var currentElement = -1
    // console.log(scroll);
    if (scroll > 0){
        nav.classList.add('sasi')
        header.classList.add('sasi')
    }
    else{
        nav.classList.remove('sasi')
        header.classList.remove('sasi')
    }



    if (scroll > (how_it_work.offsetTop-60) && scroll <= (advantages.offsetTop-60)){
        currentElement = 0
    }
    else if (scroll > (advantages.offsetTop-60) && scroll <= (connection.offsetTop-60)){
        currentElement = 1    
    }
    else if (scroll >  (connection.offsetTop-60)){
        currentElement = 2    
    }
    else{
        currentElement = -1    
    }

    for (let i = 0; i < 3; i++) {
        if (currentElement != -1){
            if (i === currentElement){
                navMenuLinks[i].classList.add('bold')
            }
            else{
                navMenuLinks[i].classList.remove('bold')
            }
        }
        else{
            navMenuLinks[i].classList.remove('bold')
        }
    }
}) 
function consultByTel(event){
    if(!open_authorization){
        authorization_wrapper.classList.add('open')
        open_authorization = 1
        document.body.classList.add('open')
    }
    else{
        authorization_wrapper.classList.remove('open')
        open_authorization = 0
        document.body.classList.remove('open')
    }
}
