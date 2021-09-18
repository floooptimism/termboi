import STDOUT from './core/STDOUT';
import STDIN from './core/STDIN';
import Event from './core/Event';

import commands from './commands';

const command = (function(){
    let _commands = commands.getCommands();

    const System = {
        STDOUT,
        STDIN,
        Event
    }

    Object.freeze(System);

    function run(command){
        console.log('run', '  ', command)
        let args = undefined;
        if(typeof(command) == "object"){
            if(command.length > 1){
                args = command[1];
            }else{
            }

            if(_commands[command[0]]){
                _commands[command[0]](System, args);
            }else{
                STDOUT.print(`"${command[0]}" is an unknown command. Enter `);STDOUT.print("help ",'green');STDOUT.print("for more information.")
            }
        }else{
            if(command == ''){
                return;
            }
        }
    }

    return {
        run
    }


})()

export default command;
