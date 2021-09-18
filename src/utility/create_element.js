export default function (element, text, classes){
    const el = document.createElement(element);
    const txt = document.createTextNode(text? text: '');
    if(classes) el.classList.add(...classes.split(' '));
    el.appendChild(txt);

    return el;

}