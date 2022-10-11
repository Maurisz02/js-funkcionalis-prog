

function fuggveny (param1,param2){
    console.log(param1);
}

let masikFv = function (param1,param2){
    console.log(param2);
}


function osszeHasonlit(a,b){
    if(a < b){
        return -1;
    }else if(a > b){
        return 1;
    }else{
        return 0;
    }
}

let t = [4, 78, 71, -99];
//t.sort(osszeHasonlit);
/*
t.sort((a,b)=>{
    if(a < b){
        return -1;
    }else if(a > b){
        return 1;
    }else{
        return 0;
    }
});*/
console.log(t);

t.sort((a,b)=>{return a - b});
console.log(t);

//t = t.filter((e)=>{return e > 0;});
t = t.filter(e => e > 0);
t = t.filter(e => Math.abs(e) > 0);
console.log(t);

t = t.map(e => e*e);//e.toFixed(2);
console.log(t);

t.forEach((e,index)=>{
    console.log(index,e);
});







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
