let typingcontent=document.getElementById('typing_content');
let addingcontent=document.getElementById('adding_content');
let todos=document.getElementById('todo');

addingcontent.addEventListener('click',function(){
    let paragraph=document.createElement('p');
    paragraph.innerText=typingcontent.value;
    todo.appendChild(paragraph);
    paragraph.classList.add('para_styling');
    // typingcontent.value='';
    paragraph.addEventListener('click',function(){
        
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener('dblclick',function(){
        todos.removeChild(paragraph);
        
    })
})

