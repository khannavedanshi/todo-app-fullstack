//selecting elements 

let select_inputfield=document.querySelector('.todo_entry')
let select_add_btn=document.querySelector('.add_btn')
let select_task_display_area=document.querySelector('.task_display_area')

 

// window.addEventListener('DOMContentLoaded',async(e)=>{

//     let response=await fetch("http://localhost:1000/refresh");

//   let data= await response.json();

//     for(let x of data){
        
//         let createDiv=document.createElement('div');
//         createDiv.textContent=x.task;
//         select_task_display_area.appendChild(createDiv);





//     }
    

// })
   


select_add_btn.addEventListener('click',async (e)=>{
     e.preventDefault(); 
    let taskText=select_inputfield.value.trim();
    //               

    //UPDATIONS
     if (select_inputfield.value.trim() === "") return;                                                                                 

    let response=await fetch('http://localhost:1000/create',
        {

            method:'POST' ,
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                task:taskText,
                status:'pending'
            })

    })


//  accepts backend request in frontend                                    
      let savedTask = await response.json();




   
   

    let create_taskrow=document.createElement('div')
    create_taskrow.classList.add('task_row')
  
        // create checkbox
    
     let create_checkbox=document.createElement('input')
    create_checkbox.type='checkbox';
    create_checkbox.classList.add('checkbox');
    // let task_card=document.querySelector('.task_display_area');


    // create text 

    let create_text_container=document.createElement('span')
    create_text_container.type='text'
    create_text_container.classList.add('text')
    create_text_container.textContent=select_inputfield.value


    // create delete button

    let create_btn=document.createElement('button')
    create_btn.classList.add('delete_btn')
    create_btn.textContent="Delete"



create_taskrow.appendChild(create_checkbox);
create_taskrow.appendChild(create_text_container);
create_taskrow.appendChild(create_btn);

select_task_display_area.appendChild(create_taskrow);
select_inputfield.value="";


create_btn.addEventListener('click', async () => {

try
{    await fetch(`http://localhost:1000/delete/${savedTask._id}`,{
        method:'DELETE'
    }
);
console.log("Delete button clicked");
    create_taskrow.remove();
    console.log(savedTask);
}catch(error){
    console.log(error);
}
});





}









)




window.addEventListener('DOMContentLoaded',async(e)=>{

     select_task_display_area.innerHTML = ''; 

    let response=await fetch("http://localhost:1000/refresh");

  let data= await response.json();

//   data aane k bad aur loop chalne se  phle screen clean kren





    for(let x of data){
        
      let createDiv=document.createElement('div');
      createDiv.classList.add('task_row');

      createDiv.classList.add('fade_in_animation');
      

      let checkbox=document.createElement('input')
      checkbox.type='checkbox';
      checkbox.classList.add('checkbox')


      let dlt_button=document.createElement('button');
      dlt_button.textContent='Delete';
      dlt_button.classList.add('delete_btn');

     dlt_button.addEventListener('click', async () => {
try
{    await fetch(`http://localhost:1000/delete/${x._id}`,{
        method:'DELETE'
    }
);
console.log(x);
console.log("Hi i am  delete button");
   createDiv.remove();
}catch(error){
    console.log(error);
}
});



      let span=document.createElement('span');
      span.textContent=x.task;
      span.classList.add('text')  




      createDiv.appendChild(checkbox);
       createDiv.appendChild(span);
         createDiv.appendChild(dlt_button);

         select_task_display_area.appendChild(createDiv); 

    }
    

});

























