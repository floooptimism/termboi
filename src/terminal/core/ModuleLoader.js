import commands from '../commands';

import STDOUT from './STDOUT';


export default (function(){
    
    function fetch_module(method,url, asyn=false){
        const con = new XMLHttpRequest();
        con.onreadystatechange = function(){
            let status = con.status;
            let state = con.readyState;
            if(state == 1){
                STDOUT.print("Downloading resource...\n\n",'yellow');
                return;
            }
            if(state == 4){
                if(status == 404){
                    STDOUT.print(`Problems fetching resource '${url}', Please try again.\n\n`, 'red');
                    return;
                }else if(status == 200){
                    STDOUT.print(`Resource downloaded.\n\n`,'green');
                    load_module(con.response);
                    return;
                }else{
                    STDOUT.print(`Problems fetching resource '${url}', Please try again.\n\n`, 'red');
                }
            }
        }
        con.open(method, url, asyn);
        

        con.send(null);
       
        

    }; //fetches module from the network
    
    function register_module_commands(module){
        STDOUT.print(`⚫ Loading '${module.name}' module.\n\n`,'#495d61');
        module.commands.forEach(command =>{
            commands.register_command(command.name, command.desc, command.func);
            STDOUT.print(`=====>\tCommand `, '#495d61');STDOUT.print(`'${command.name}' `,'#32af8c');STDOUT.print('added. ','#495d61');STDOUT.print('✔\n', '#25ab3c')
        })
    };
    
    function initialize_module_runtime(module_string){
        const evaluated_string = new Function(module_string + '\nreturn main;');
        let mod;
        try{
            mod = evaluated_string();
        }catch(err){
            STDOUT.print("'main' is not defined in the downloaded resource. Please check the name and try again.", 'red');
            return false;
        }
        register_module_commands(mod);
        STDOUT.print(`\n* Module '${mod.name}' loaded.\n\n`, 'green');
        return true;
    }

    function initialize_module_build_time(module){
        register_module_commands(module);
        STDOUT.print(`\n🟢 Module '${module.name}' loaded.\n\n`, '#1a9c42');
        return true;
    }

    function load_module(module){
        if(typeof(module) == 'string') initialize_module_runtime(module);
        else initialize_module_build_time(module)
    }

    return {
        load_module,
        fetch_module
    }

})()