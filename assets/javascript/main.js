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


function payWayShow(){
    let clicko = document.getElementById("selectedShow");
    clicko.classList.toggle("active");
    let iconro = document.getElementById("iconro");
    iconro.classList.toggle("active");
    let paySection = document.getElementById("section");
    paySection.classList.toggle("active");
}
function payouts(){
    try{
        let clicko = document.getElementById("selectedShow");
        let payo = document.getElementById("payWay");
        let ta = document.getElementById("taxs");
        let elese = document.querySelectorAll(".paywayo");
        elese.forEach((ele)=>{
            ele.addEventListener("click",()=>{
                let pa1 = ele.querySelectorAll(".togeto")[0];
                let ta1 = ele.querySelectorAll(".togeto")[1];
                payo.innerHTML = pa1.textContent
                ta.innerHTML = ta1.textContent
                elese.forEach((el)=>{
                    el.classList.remove("active")
                })
                ele.classList.add("active")
            })
        })
    }catch(e){

    }
}
payouts()