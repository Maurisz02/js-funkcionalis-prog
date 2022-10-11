

function fuggveny (param1,param2){
    console.log(param1);
}

let masikFv = function (param1,param2){
    console.log(param2);
}

//let init = function (){
  //  console.log('Page loaded')
//}

/*
document.addEventListener('DOMContentLoaded',function(){
    console.log('Page loaded')

    document.getElementById('szinez').addEventListener('click', function(){
        document.body.style.backgroundColor = 'lightblue';
    });
});*/

// ====
document.addEventListener('DOMContentLoaded',() => {
    console.log('Page loaded');

    let idozito;

    document.getElementById('szinez').addEventListener('click',()=>{
        document.body.style.backgroundColor = 'lightblue';

        setTimeout(()=>{
            document.body.style.backgroundColor = 'black';
        },2000);

        
        if(idozito !== undefined){
            clearInterval(idozito);
        }

        idozito = setInterval(()=>{
            console.log(document.body.style.backgroundColor);
        },1000);

    });
});
