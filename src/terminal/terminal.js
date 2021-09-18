import create_element from '../utility/create_element';

const terminal = (function(){
    const terminal = document.getElementsByClassName('terminal')[0];

    function echo_input(command){
        const e = document.createElement('p');
        const content = document.createTextNode(`> ${command}`);
        e.appendChild(content);
        terminal.appendChild(e);

        clear_input();
        scrollToBottom();
    }


    function print(output,color){
        const e = create_element('span', `${output}`);
        
        if(color){
            e.style.color = color;
        }

        terminal.appendChild(e);

        clear_input();
        scrollToBottom();
    }

    function print_block(output,color,width){
        const e = create_element('span',`${output}`);
        e.style.display = 'inline-block';
        e.style.width = `${width}`;
        if(color) e.style.color = color;

        terminal.appendChild(e);
        
        clear_input();
        scrollToBottom();
    }

    async function print_slow_async(output, color, timeout){
        const e = document.createElement('span');
        if(color){
            e.style.color = color;
        }
        
        terminal.appendChild(e);

        for(let i = 0; i < output.length; i++){
            await new Promise(wait => {
                let br = output[i]
                terminal.lastElementChild.innerText += br;
                setTimeout(wait, timeout ? timeout: 15);
            });
        }

        clear_input();
        scrollToBottom();

    }

    function removeLastOutput(){
        terminal.lastElementChild.remove();
    }

    function scrollToBottom(){
        const height = terminal.scrollHeight;
        terminal.scrollTo(0, height + 1000);
    }

    function clear_input(){
        terminal_input.value = '';
    }

    function clear_terminal(){
        terminal.innerHTML = "";
        clear_input();
    }


    return {
        echo_input,
        print,
        scrollToBottom,
        clear_input,
        clear_terminal,
        removeLastOutput,
        print_slow_async,
        print_block
    }
})()

export default terminal;