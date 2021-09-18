import ModuleLoader from '../core/ModuleLoader';
import STDOUT from '../core/STDOUT';


function load(System, args){
    if(args.length < 1){
        System.STDOUT.print('"module load" requires 1 argument.\n');
        return;
    }

    ModuleLoader.fetch_module('GET',args[0], true);

}

function help(System){
    System.STDOUT.print('\n\n\nUSAGE: module <command>\n\n','#26949e');
    System.STDOUT.print('COMMANDS:\n');
    System.STDOUT.print_block('load <url>','green','30%');System.STDOUT.print_block('Downloads and loads the module. (Accepts a url pointing to a valid JS file specifically made for this console)\n\nEX : module load http://some-domain.com/some-module.js','','70%');STDOUT.print('\n');
}

function show_help(System){
    System.STDOUT.print('Type "module help" for a list of commands.\n');
}


export default function(System, args){
    if(args.trim() == ''){
        show_help(System);
        return;
    }

    const formatted_args = args.split(/\s*\s/g).filter(elem => { return elem != ''});

    switch(formatted_args[0]){
        case 'load':
            load(System, formatted_args.slice(1));
            break;
        case 'help':
            help(System);
            break;
        default:
            show_help(System);
    }

    return;

}   

