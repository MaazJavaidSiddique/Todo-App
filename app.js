var list = document.getElementById('list');
var todo_item = document.getElementById('todo_value');
function addTodo(){
   

    
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value)
    li.setAttribute("class","liClass")
    li.appendChild(liText)


    var deleteButton = document.createElement("button");
    var deleteButtonText = document.createTextNode("Delete");
    deleteButton.appendChild(deleteButtonText)
    deleteButton.setAttribute("class","button1")
    deleteButton.setAttribute("onclick","deleteItem(this)")
    

    var editButton = document.createElement("button");
    var editButtonText= document.createTextNode("Edit")
    editButton.setAttribute("class","button1")
    editButton.appendChild(editButtonText);
   
    editButton.setAttribute("onclick","editItem(this)");

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    list.appendChild(li)
    
    todo_item.value="";
    
    
}


function deleteItem(e){
   e.parentNode.remove()
    
}
function DeleteAll(){
    list.innerHTML="";
}
function editItem(e){
    var val =e.parentNode.firstChild.nodeValue;

    // var editValue = prompt("Enter edit value",val)
    // e.parentNode.firstChild.nodeValue= editValue;
    var a =todo_item.parentNode.childNodes[1]
    a.value=val
    e.parentNode.remove();
    // val= a.value;

}
