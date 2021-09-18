export default async function(element, delay){
    let data = element.innerText
    for(let i = element.innerText.length - 2; i >= 0; i--){
        if(i == 1 ) break;
        element.innerText = data.slice(0, i);
        await new Promise(wait =>{
            setTimeout(wait, delay)
        })
    }
    element.style.visibility = 'hidden';
}