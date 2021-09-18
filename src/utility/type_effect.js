
export default async function type_effect(element,text, delay){
    if(delay <= 0){
        element.innerHTML = text;
        return;
    }

    for(let i =0; i < text.length; i++){
        element.innerHTML += text[i];
        await new Promise(wait =>{
            setTimeout(wait, delay);
        })
    }
}