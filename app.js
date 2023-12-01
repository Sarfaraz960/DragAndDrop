let draggedItem = null;

document.querySelectorAll('.box').forEach(box => 
  {
  box.addEventListener('dragstart', dragStart)
  box.addEventListener('dragend', dragEnd)
  box.addEventListener('dragover', dragOver)
  box.addEventListener('dragenter', dragEnter)
  box.addEventListener('dragleave', dragLeave)
  box.addEventListener('drop', dragDrop)
});

function dragStart(event)
{
  draggedItem = event.target;
  event.target.style.opacity = '0.5';
}

function dragEnd(event){
  event.target.style.opacity = '1';
}

function dragOver(event)
{
  event.preventDefault();
}

function dragEnter(event)
 {
  event.preventDefault();
  if(event.target !== draggedItem && event.target.classList.contains('box'))
  {
    event.target.style.background = 'lightgreen';
  }
}

function dragLeave(event) {
  if(event.target !== draggedItem && event.target.classList.contains('box'))
  {
    event.target.style.background = '';
  }
}

function dragDrop(event){
  event.preventDefault();
  if(event.target !== draggedItem && event.target.classList.contains('box'))
  {
    let temp = event.target.innerHTML;
    event.target.innerHTML = draggedItem.innerHTML;
    draggedItem.innerHTML =temp;
    event.target.style.background = '';
  }
}
