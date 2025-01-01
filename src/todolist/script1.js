document.addEventListener("DOMContentLoaded",()=>{
    const todoinput=document.getElementById("todo-input");
    const add=document.getElementById("add-task");
    const todolist=document.getElementById("Heading");
    let tasks = JSON.parse(localStorage.getItem('tasks'))||[];
    tasks.forEach(task=> {renderTask(task)
    
    });
    add.addEventListener('click',()=>{
        const task=todoinput.value.trim()
        if(task==="") return;
        const newtask={
            id:Date.now(),
            completed:false,
            Text:task
        }
        tasks.push(newtask);
        saveTasks();
        renderTask(newtask);
        todoinput.value="";
        console.log(newtask);
        
    })
    function renderTask(task){
        const li=document.createElement('li')
        todolist.appendChild(li)
        li.setAttribute("data-id",task.id)
        if (task.completed) li.classList.add("completed");
        li.innerHTML = `
        <span>${task.Text}</span>
        <button>Delete</button>`
        li.addEventListener('click',(e)=>{
            if(e.target.tagName==='BUTTON') return;
            task.completed=!task.completed
            li.classList.toggle('completed')
            saveTasks();
            
        })
        li.querySelector('button').addEventListener('click',(e)=>{
            e.stopPropagation()
            tasks=tasks.filter(t=> t.id!==tasks.id)
            li.remove();
            saveTasks();
        })
        
    }
    function saveTasks() {
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    })