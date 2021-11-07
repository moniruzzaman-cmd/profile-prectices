






function add() {





    
let ProfileName = document.querySelector('#ProfileName');
let ProfileID = document.querySelector('#ProfileID');
let Profileclz = document.querySelector('#ProfileCollage');
let ProfileAge = document.querySelector('#Profileage');

let country = document.querySelector('#country');
let Relation = document.querySelector('#Relation');
let Religon = document.querySelector('#Religon');


var inputName1=document.getElementById("inputFromName").value;
const inputAGE =document.getElementById("inputFromage").value;
const Id =document.getElementById("inputFromId").value;




    
    let showerror = document.querySelector('#inputFromName').value;
  
   
    
    if( !showerror) {
        
       let hedingTitle= document.querySelector('.firstHeading');
       hedingTitle.innerHTML="Type name";
       hedingTitle.style.color="red"
        
 
    }else if(showerror){

        document.querySelector('.login').style.display = "none";
        document.querySelector('#profilePage').style.display = "inline-block";
 

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
      
 
 
    var newStudent = new studentprofile(inputName1,inputAGE,Id);
    inputName1=newStudent.name;
    ProfileName.innerText=newStudent.name;
    ProfileID.innerText =newStudent.id;
    ProfileAge.innerText =newStudent.age;
    country.innerText = newStudent.country;;
    Relation.innerText = newStudent.Relation;
    Profileclz.innerText =newStudent.collage;
    Religon.innerText =newStudent.Religon;



  
    }
  
 }
 

let submitBtnEl=document.querySelector('#btn11');
submitBtnEl.addEventListener('click', add );

document.querySelector('#button2').addEventListener('click',(e)=>{
    document.querySelector('.login').style.display = "inline-block";
    document.querySelector('#profilePage').style.display = "none";
    add();
  document.getElementById("inputFromName").value='';
    document.getElementById("inputFromage").value='';
    document.getElementById("inputFromId").value='';
   
})



 