var nav = document.querySelector('section .nav');
var main = document.querySelector('section .main-content')
var tog = document.querySelector('.toggle-icon');
var userMenu = document.querySelector('.usermenu');
var max = document.querySelector('.max');
var min = document.querySelector('.min');

function toggleMinMax(){
    max.classList.toggle('active');
    min.classList.toggle('active');
    console.log(max);
} 

function showSearch(){
    document.querySelector('.search-bar').style.width = '250px'
}

function hideSearch(){
    document.querySelector('.search-bar').style.width = '0px'
}

function toggleUserMenu(){
    userMenu.classList.toggle('active');
}

var show = 0;

function showHideProfile(){
    var profile = document.querySelector('.profile');
    if(profile.style.height=='0px'){
        profile.style.height='75px'
    }
    else{
        profile.style.height='0px';
    }

    if(show==0){
        show=1;
        showHideProfile();
    }
}

function toggleNav(){
    nav.classList.toggle("active");
    main.classList.toggle('active');
    tog.classList.toggle("active");
}


let bars = document.querySelectorAll('section .nav .menu-group ul .bar');
let select = document.querySelector('.selected');
let showMenu = document.querySelector('.show');

bars.forEach((i)=>{
    i.addEventListener('click',()=>{
        let len = i.childNodes.length;

        select.classList.remove('selected');
        i.classList.add('selected');
        select = i;


        if(len==5){

            if(i==showMenu){
                i.classList.toggle('show');
                return;
            }


            showMenu.classList.remove('show');
            i.classList.add('show');
            showMenu = i;

        }

        if(len==3){
            showMenu.classList.remove('show');
        }


    })
})
