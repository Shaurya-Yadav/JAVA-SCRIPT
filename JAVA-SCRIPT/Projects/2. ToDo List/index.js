let list = [
    {
        item: 'Complete JS',
        dueDate: '30/12/2025'
    },
    {
        item: 'Go to NewYear',
        dueDate: '30/12/2025'
    }        
    ];
display();

function add(){
    let inputElement = document.querySelector('#input');
    let dateElement = document.querySelector('#date');
    let itm = inputElement.value;
    let date = dateElement.value;
    list.push({item: itm, dueDate: date});
    inputElement.value = '';
    dateElement.value = '';

    display();
}

function display(){
    let containerElement = document.querySelector('.container');

    let html = ''

    for(let i=0; i< list.length; i++){
        let{item,dueDate} = list[i];
        html += `
          <span>${item}</span>
          <span>${dueDate}</span>
          <button class="del" onclick="list.splice(${i});
          display();">Delete</button> 
        `;
    }
    containerElement.innerHTML = html;    
}