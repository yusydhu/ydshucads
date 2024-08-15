let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthitems = items.length - 1; 

next.onclick = function(){
    if(active + 1 >  lengthitems ){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadslider();
}
function reloadslider(){
    let chekleft = items[active].offsetleft;
    list.style.left = -chekleft + 'px';
}