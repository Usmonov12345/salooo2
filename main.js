// let sum = 0;

// for (let i =b; i>=a; i++){
//     console.log(i);
// }


// function maii(a){

// if(typeof a=== "string"){
//     return Number(a)
// }

// if(typeof a=== "string"){
//     return String(a)
// }
// }
// console.log(maii('1'));

// let array = []

// function users(id,name,age,gender){
//     let person = []
//     let newobj = []
//     newobj.id = id
//     newobj.name= name
//     newobj.age=age
//     newobj.gender= gender
//     person.push(newobj)
//     return newobj
// }
// let Toxir = users(1,'Toxir,',18 ,'male')

// console.log(Toxir);


function users(...Toxir){
    for(let i =0; i<Toxir.length;i++){

        let newobj = {}
        newobj.id = Toxir[0]
        newobj.id = Toxir[1]
        newobj.id = Toxir[2]

        return Toxir
    }
}

let user = users(1,'Toxir','salim',18)
console.log(user);