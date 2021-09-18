
const STDOUT = (function(){
    let _output;
    let _terminal_output_slow_async;
    let _terminal_output;
    let _terminal_clear;
    let _terminal_formatted_output;
    let _command;

    function print(){
        let args = [...arguments]
        _output = args[0];
        _terminal_output(...arguments);
    }

    async function print_slow_async(){
        let args = [...arguments]
        _output = args[0];
        await _terminal_output_slow_async(...arguments);
    }

    function print_block(){
        let args = [...arguments];
        _output = args[0];
        _terminal_formatted_output(...arguments);
    }


    function clear_terminal(){
        _terminal_clear();
    }

    // register handlers

    function register_output(handler){
        _terminal_output = handler;
    }

    function register_clear(handler){
        _terminal_clear = handler;
    }

    function register_output_slow_async(handler){
        _terminal_output_slow_async = handler;
    }

    function register_formatted_output(handler){
        _terminal_formatted_output = handler;
    }


    return {
        print_block,        register_formatted_output,
        print,              register_output,
        print_slow_async,   register_output_slow_async,
        clear_terminal,     register_clear
        
    }
})()

export default STDOUT;