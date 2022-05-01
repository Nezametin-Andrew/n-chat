let head = document.querySelector('head');
let css = document.createElement('link');
let script = document.createElement('script');


css.setAttribute('rel', 'stylesheet');
css.setAttribute('href', 'http://localhost:8000/static/statics/css/n-chat-style.css');

script.setAttribute('src', 'http://localhost:8000/static/statics/js/n-chat-script.js');

head.appendChild(css);
head.appendChild(script);

