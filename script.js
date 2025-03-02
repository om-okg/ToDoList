const input=document.querySelector(".ipbox");
const button=document.querySelector(".add");
const todolist=document.querySelector(".todo");

button.addEventListener("click", addTodo);
todolist.addEventListener("click",deleteitem)

function addTodo(event){
    event.preventDefault();

    const todoDiv=document.createElement("div");
    todoDiv.classList.add("to_container");

    const todoItem=document.createElement("li");
    todoItem.classList.add("to_item");
    todoItem.innerText=input.value;
    todoDiv.appendChild(todoItem);

    const deleteB=document.createElement("button")
    deleteB.classList.add("to_delete");
    deleteB.innerHTML='<i class="fa-solid fa-trash"></i>';
    todoDiv.appendChild(deleteB);

    const completeB=document.createElement("button")
    completeB.classList.add("to_complete");
    completeB.innerHTML='<i class="fa-solid fa-check"></i>'
    todoDiv.appendChild(completeB);

    todolist.appendChild(todoDiv)
    
    input.value="";

}

function deleteitem(event){
    const item=event.target;
    if (item.classList[0]==="to_delete"){
        const delItem=item.parentElement;
        delItem.remove();
    }
    if (item.classList[0]==="to_complete"){
        const delItem=item.parentElement;
        delItem.classList.toggle("completed");
    }
    

}

