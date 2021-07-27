console.log("this is javascript");
shownotes();
let addbtn=document.getElementById('addbtn');
addbtn.addEventListener("click",function(e)
{
    let addtxt=document.getElementById('addtxt');
    let notes=localStorage.getItem("notes");
    if(notes==null){
    notesobj=[];
    }
    else
    {
        notesobj=JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addtxt.value="";
    console.log(notesobj);
    shownotes();
})

function shownotes()
{
    let notes=localStorage.getItem("notes");
    if(notes==null){
     notesobj=[];
    }
    else
    {
        notesobj=JSON.parse(notes);
    }
    let html="";
    notesobj.forEach(function(element,index) {
        html+=`<div class="notecard mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</button>
        
        </div>
      </div>`;
        
    });
    let notesElm=document.getElementById("notes");
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
      } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
      }
}
function deleteNode(index) {
    //   console.log("I am deleting", index);
    
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    
      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      shownotes();
    }