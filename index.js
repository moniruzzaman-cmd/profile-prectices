
let inputName =prompt("type your name");
let inputAGE =prompt("type your age");
let inputId =prompt("type your collage id no.");
// let inputrelgon =prompt("type your religion");



let ProfileName = document.querySelector('#ProfileName');
let ProfileID = document.querySelector('#ProfileID');
let Profileclz = document.querySelector('#ProfileCollage');
let ProfileAge = document.querySelector('#Profileage');

let country = document.querySelector('#country');
let Relation = document.querySelector('#Relation');
let Religon = document.querySelector('#Religon');

class studentprofile{
    constructor(name,id,age){
        this.name= name;
        this.id = id;
        this.age = age;
        this.collage = "Govt. bangla collage";
        this.country = "Bangladeshi";
        this.Relation = "Single";
        this.Religon = "Islam";

    }
}

let newStudent = new studentprofile(inputName,inputId,inputAGE);
ProfileName.innerText=newStudent.name;
ProfileID.innerText =newStudent.id;
ProfileAge.innerText =newStudent.age;
country.innerText = newStudent.country;;
Relation.innerText = newStudent.Relation;
Profileclz.innerText =newStudent.collage;
Religon.innerText =newStudent.Religon;
