

let submitBtnEl=document.querySelector('#btn11');
submitBtnEl.addEventListener('click',function add(){
    document.querySelector('.login').style.display = "none";
     document.querySelector('#profilePage').style.display = "inline-block";
    
   let inputName1=document.getElementById("inputFromName").value;
    let inputAGE =document.getElementById("inputFromage").value;
    let Id =document.getElementById("inputFromId").value;
   


let ProfileName = document.querySelector('#ProfileName');
let ProfileID = document.querySelector('#ProfileID');
let Profileclz = document.querySelector('#ProfileCollage');
let ProfileAge = document.querySelector('#Profileage');

let country = document.querySelector('#country');
let Relation = document.querySelector('#Relation');
let Religon = document.querySelector('#Religon');
class others {
    constructor(){
        this.collage = "Govt. bangla collage";
        this.country = "Bangladeshi";
        this.Relation = "Single";
        this.Religon = "Islam";

    }
}
class studentprofile extends others{
    constructor(name,id,age){
        super();
        this.name= name;
        this.id = id;
        this.age = age;
        
       

    }
}

let newStudent = new studentprofile(inputName1,inputAGE,Id);
ProfileName.innerText=newStudent.name;
ProfileID.innerText =newStudent.id;
ProfileAge.innerText =newStudent.age;
country.innerText = newStudent.country;;
Relation.innerText = newStudent.Relation;
Profileclz.innerText =newStudent.collage;
Religon.innerText =newStudent.Religon;
})
document.querySelector('#button2').addEventListener('click',(e)=>{
    document.querySelector('.login').style.display = "inline-block";
    document.querySelector('#profilePage').style.display = "none";
  document.getElementById("inputFromName").value='';
    document.getElementById("inputFromage").value='0';
    document.getElementById("inputFromId").value='0';
})