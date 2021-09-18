import STDOUT from './terminal/core/STDOUT';
import STDIN from './terminal/core/STDIN';
import Event from './terminal/core/Event';

import terminal from './terminal/terminal';
import command from './terminal/commandRunner';
import parser from './terminal/commandParser';
import history from './terminal/commandHistory';

import './terminal/init/register_commands.js';


import typer from './utility/type_effect';
import remove_typer_effect from './utility/type_effect_remove';

STDOUT.register_output_slow_async(terminal.print_slow_async);
STDOUT.register_output(terminal.print);
STDOUT.register_clear(terminal.clear_terminal);
STDOUT.register_formatted_output(terminal.print_block)


Event.subscribe_async('print_slow',STDOUT.print_slow_async);
Event.subscribe('print',STDOUT.print);
Event.subscribe('removeLastOutput',terminal.removeLastOutput);

async function switch_to_boot(){
        let proceed = document.getElementById('proceed');
        proceed.removeEventListener('click',switch_to_boot);
    document.removeEventListener('keydown',switch_to_boot);
    

    let intro = document.getElementById('intro');
    let header = document.getElementById('header');
    // await remove_typer_effect(document.getElementById('proceed'), 80)
    // await remove_typer_effect(document.getElementById('header'), 80);

    await Promise.all([remove_typer_effect(proceed, 30),
                    remove_typer_effect(header, 80) ])
    proceed.remove();
    header.remove();

    const boot_text = add_element(intro,'p');
    await typer(boot_text, "Booting terminal",40);
    await typer(boot_text, ".........", 300);
    const init_text = add_element(intro, 'p');
    await typer(init_text, "Initializing modules",40);
    await typer(init_text, ".........", 300);


    document.getElementById('intro').remove();
    boot();
}


async function boot(){

    document.getElementById('terminal').style.display = 'block';

    document.addEventListener('keydown',(e)=>{
        if(document.activeElement == terminal_input){
            if(e.key == "Enter"){
                if(STDIN.isWaiting()){
                    STDIN.shove_input(terminal_input.value);
                }else{
                    let input_command = terminal_input.value;
                    history.push_command(input_command);

                    terminal.echo_input(input_command);
                    const parsed_input = parser.parse(input_command);
                    command.run(parsed_input);
                }
            }
        }
    })
    
    document.addEventListener('keydown',(e)=>{
        if(document.activeElement == terminal_input){
            if(e.key == "Tab"){
                e.preventDefault();
            }
        }
    });

    document.addEventListener('keydown',(e)=>{
        if(document.activeElement == terminal_input){
            if(e.key == "ArrowUp"){
                e.preventDefault()
                terminal_input.value = history.move_up();
            }else if(e.key == "ArrowDown"){
                e.preventDefault()
                terminal_input.value = history.move_down();
            }
        }
    })

    await STDOUT.print_slow_async("Liaison Terminal v0.8.0\n\n",'#396ac3',20);

    await import('./terminal/init/init_modules')

}

import onload from './onload';
import add_element from './utility/add_element';

onload(function(){
    document.addEventListener('keydown',switch_to_boot)
    document.getElementById('proceed').addEventListener('click',switch_to_boot);
});

// boot();