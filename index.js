document.querySelector('.header-burger').addEventListener('click', function(){
    document.querySelector('.header-list').classList.toggle('header-menu-active');
    document.querySelector('.header-burger').classList.toggle('header-burger-active');
    document.querySelector('body').classList.toggle('scroll-lock');
});
document.querySelector('.celebrate-button').addEventListener('click', function(){
    document.querySelector('.popups').classList.add('popup-active');
    document.querySelector('body').classList.add('scroll-lock');
});
document.querySelector('.popup-close-button').addEventListener('click', function(){
    document.querySelector('.popups').classList.remove('popup-active');
    document.querySelector('body').classList.remove('scroll-lock');
});
document.querySelector('.popup-next-button').addEventListener('click', function(){
    document.querySelector('.popups').classList.remove('popup-active');
    document.querySelector('body').classList.remove('scroll-lock');
});

const headerClass = document.querySelector('.header');
const headerBody = document.querySelector('.header-wrapper');
const callback = function(entries, observer){
    if(entries[0].isIntersecting){
        headerBody.classList.remove('_header-scroll');
    } else{
        headerBody.classList.add('_header-scroll');
    }
}
const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerClass);

new Swiper('.review-block-slider',{
    speed: 1000,
    loop: true,
    simulateTouch: true,
    pagination: {
        el: '.review-slider-pagination',
        clickable: true,
    },
});