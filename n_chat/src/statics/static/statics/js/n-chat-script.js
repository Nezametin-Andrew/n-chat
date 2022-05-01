function showChat(){ 
    let chat = document.querySelector('.main-block-n-chat-wrapper');
    chat.style.display = 'block';
    let chatContainer = document.querySelector('.main-block-n-chat-container');

    if (!('name' in localStorage) && !('msg' in localStorage)){
        let msgBlock = document.createElement('div');
        msgBlock.classList.add('title-n-chat');
        msgBlock.innerText = 'Представьтесь и начните чат!'
        chatContainer.appendChild(msgBlock);
    }    
 }


function createBtn(data){
    let arr = [];

    for (let i = 0; i < data.length; i++){
        var el = document.createElement(data[i]['el']);
        el.classList.add(data[i]['class']);
        
        if ('attribute' in data[i]){
            let attribute = data[i]['attribute'];
            
            for (let j = 0; j < attribute.length; j++){
                el.setAttribute(data[i]['attribute'][j]['key'], data[i]['attribute'][j]['value'])
            }
        }

        arr.push(el);
    }
    
    for (let i = arr.length - 1; i !== 0; i--){
        arr[i - 1].appendChild(arr[i]);
    }
    arr[0].addEventListener('click', () => {
        showChat();
    })
    return arr[0]

}




document.addEventListener('DOMContentLoaded', function(){

    fetch('http://localhost:8000/statics/', {headers:{'Referer': window.location.href}})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let body = document.querySelector('body');
        
        if ('btn' in data) 
            body.appendChild(createBtn(data.btn));
        
    })

});