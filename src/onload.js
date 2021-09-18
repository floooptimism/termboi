import typer from './utility/type_effect';
import add_element from './utility/add_element';

export default async function (callback){
    const parent = document.getElementById('intro');

    const header = add_element(parent, 'span');
    await typer(header,"Terminal 0x01",80);
    header.id = 'header';

    const element = add_element(parent,'p');
    await typer(element,"Press any key to boot the terminal.",80);
    element.id = 'proceed';
    element.classList.add('blink');
    element.style.cursor = 'pointer';

    const test = new Function('console.log("bruh")');
    test();

    callback();
}