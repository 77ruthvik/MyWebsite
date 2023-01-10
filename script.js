let scroll = document.body;
let nav_bar = document.getElementById('nav');
let details = document.getElementById('details');
let details2 = document.getElementById('details2');
let text = 'My name is Ruthvik Penumatcha.';
let text2 = 'I am A Final Year Computer Engineering Student at Toronto Metropolitan University.';
let arr = document.getElementById('arrow');
let intro = document.getElementById('intro');
let about_me = document.getElementById('about-me');
let i = 0;
let j = 0;
let type_speed = 100;

//scroll.addEventListener('wheel', checkScroll);
window.addEventListener('scroll', checkScroll);

//Check If the Page is scrolling Down
function checkScroll(event) {
    //console.log(window.scrollY);
    if(window.scrollY > 20){
        nav_bar.style = "background: rgba(190, 190, 190, 0.5); transition: 1s; box-shadow: 5px 5px 5px grey;";
        arr.style = "visibility: visible; transition: 0.5s;";
    }
    if(window.scrollY == 0){
        nav_bar.style = "font-size: 20px; transition: 1s;";
        arr.style = "visibility: hidden; transition: 0.5s;";
    }

    if(window.scrollY>=668 && window.scrollY<900){
        
    }

    if(window.scrollY > (intro.offsetTop+intro.offsetHeight) && window.scrollY < (about_me.offsetTop+about_me.offsetHeight)){
        if(i < text.length){
            details.innerHTML = details.innerHTML+text.charAt(i);
            i++;
            setTimeout(type, type_speed);
        }
        if(i==text.length && j < text2.length){
            //type_rev();
            details2.innerHTML = details2.innerHTML+text2.charAt(j);
            j++;
            setTimeout(type, type_speed);
        }
    }
    if(window.scrollY < (intro.offsetTop+intro.offsetHeight) || window.scrollY > (about_me.offsetTop+about_me.offsetHeight)){
        i=0;
        j=0;
        details.innerHTML = '';
        details2.innerHTML = '';
    }
    //console.log(window.scrollY);
}

function type() {
    if(window.scrollY>=668){
        if(i < text.length){
            details.innerHTML = details.innerHTML+text.charAt(i);
            i++;
            setTimeout(type, type_speed);
        }
        if(i==text.length && j < text2.length){
            //type_rev();
            details2.innerHTML = details2.innerHTML+text2.charAt(j);
            j++;
            setTimeout(type, type_speed);
        }
    }
}

function type_rev() {
    if(window.scrollY > 660){
        if(i>=0){
            details.innerHTML = details.innerHTML.substring(0, i-1)+'|';
            i--;
            setTimeout(type_rev, type_speed);
        }
        if(i==0){
            type();
        }
    }
}

type();

arr.addEventListener('click', (event)=> {
    window.scrollTo(0,0);
});

about_me.onscroll = function () {
    console.log('here');
};