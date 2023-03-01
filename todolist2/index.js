addbutton=document.getElementById("add-button");
input=document.querySelector(".todo-input");
todocontainer=document.getElementById("todo-container");

addbutton.addEventListener("click",add);

function add(){
    let todo=document.createElement("div");
    todo.classList.add("todo");
    let li=document.createElement("li");
    li.innerText=`${input.value}`;
    todo.appendChild(li);

    let checkbutton=document.createElement("button");
    checkbutton.classList.add("todo-check");
    checkbutton.innerHTML=`<i class="fa-sharp fa-solid fa-check"></i>`;
    todo.appendChild(checkbutton);

    let deletebutton=document.createElement("button");
    deletebutton.classList.add("todo-delete");
    deletebutton.innerHTML=`<i class="fa-solid fa-circle-minus"></i>`;
    todo.appendChild(deletebutton);

    if(input.value=="")
    {
        alert("please enter task");
    }
    else
    {
        todocontainer.appendChild(todo);
    }
    input.value="";
};

todocontainer.addEventListener("click",(e)=>{
    let target=e.target;
    if(target.classList.contains("todo-delete"))
    {
        target.parentElement.remove();
    }
    if(target.classList.contains("todo-check"))
    {
        target.parentElement.classList.toggle("completed");
    }
});



