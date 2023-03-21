function showLects(){
    document.querySelector('.menu').classList.toggle('noactive')
}

function navshow(){
    if (document.getElementById('navbarBasicExample').style.display == 'block'){
        document.getElementById('navbarBasicExample').style.display = 'none';
    }

    else{
        document.getElementById('navbarBasicExample').style.display = 'block';
    }
}


let nav = document.querySelector('.navbar');
if(nav){
    window.addEventListener('scroll',()=>{
        if(window.scrollY == 0) nav.classList.remove('moved')
        else nav.classList.add('moved')
    })
}
