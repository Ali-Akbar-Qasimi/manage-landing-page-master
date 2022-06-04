

let nav = document.querySelector('nav');
let menu = document.querySelector('.menu');
let links = document.querySelector('.links')

menu.addEventListener('click',()=>{
    nav.classList.toggle('show')
})

links.addEventListener('click',()=>{
    nav.classList.remove('show')
})


// testimonials slider codes

let navigators = document.querySelectorAll('.dot');
let slide = document.querySelector('.testimonials-card-container');
let slideIndex = 0
let card = document.querySelector('.testimonials-card');

navigators.forEach((navigator,index)=>{
    navigator.addEventListener('click',(e)=>{
        slideIndex = index
        for (let i = 0; i < navigators.length; i++) {
            navigators[i].classList.remove('active')
        }
        console.log(index)
        if(slideIndex == 1){
            slide.style.transform = `translateX(-${slideIndex*card.offsetWidth+40}px)`;
        }else if(slideIndex == 2){
            slide.style.transform = `translateX(-${slideIndex*card.offsetWidth+80}px)`;
        }else if(slideIndex == 3){
            slide.style.transform = `translateX(-${slideIndex*card.offsetWidth+120}px)`;
        }else{
            slide.style.transform = `translateX(-${slideIndex*card.offsetWidth}px)`;
        }
        navigators[slideIndex].classList.add('active')
    })
})

// slider slides automatically after 3 seconds
setInterval(() => {
    for (let i = 0; i < navigators.length; i++) {
        navigators[i].classList.remove('active')
    }
    slideIndex++
    if(slideIndex >= 4){
        slideIndex = 0
    }
    if(slideIndex == 1){
        slide.style.transform = `translateX(-${slideIndex*card.offsetWidth+40}px)`;
    }else if(slideIndex == 2){
        slide.style.transform = `translateX(-${slideIndex*card.offsetWidth+80}px)`;
    }else if(slideIndex == 3){
        slide.style.transform = `translateX(-${slideIndex*card.offsetWidth+120}px)`;
    }else{
        slide.style.transform = `translateX(-${slideIndex*card.offsetWidth}px)`;
    }
    navigators[slideIndex].classList.add('active')
}, 3000);