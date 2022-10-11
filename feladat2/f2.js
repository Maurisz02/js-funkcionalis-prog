
let tomb = [];
let szazLabu = []

class Szazlabu{
    #labakSzama;

    constructor(labakSzama){
        this.#labakSzama = labakSzama;
    }

    kiir(){
        console.log(this.#labakSzama+" lábú százlábú");
        return this.#labakSzama+" lábú százlábú";
    }

};

function labakbolSzazlabuk(labakTomb){

    labakTomb.forEach((e,index)=>{
        let sz = new Szazlabu(e);
        szazLabu.push(sz);
    });

    szazLabu.forEach((e)=>{
        e.kiir();
    })

};

function szazlabuMegjelenites(id,szLista){
    let ul = document.getElementById(id);
    szLista.forEach((e)=>{
        let li = document.createElement('li');
        li.innerHTML = e.kiir();
        ul.appendChild(li);
    });
};

document.addEventListener("DOMContentLoaded",()=>{
    for(let i = 0; i < 20; i++){
        let rnd = Math.floor(Math.random() * 29)+1;
        tomb[i] = rnd;
     }
 
     tomb.forEach((e,index)=>{
         console.log(index+1+". "+e);
     });
 
  let ujTomb = tomb.filter(e => e%5==0);
  ujTomb.forEach((e,index)=>{
     console.log(index+1+". "+e);
     });

     document.getElementById('valogatBtn').addEventListener('click',()=>{
        ujtomb = [];
        ujTomb = tomb.filter(e => e%5==0);
        ujTomb.forEach((e,index)=>{
            console.log(index+1+". "+e);
            });
     });

     document.getElementById('addBtn').addEventListener('click',()=>{
        let num = parseInt(document.getElementById('szam').value);
        tomb.push(num);
        console.log(tomb);
     });

     labakbolSzazlabuk(tomb);

     szazlabuMegjelenites('sorolas',szazLabu);

});