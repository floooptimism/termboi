
const commands = (function(){
    let _commands = {

    };

    let _command_info = {

    }

    function register_command(command_name, command_description, handler){
        _commands[command_name] = handler;
        _command_info[command_name] = command_description;
    }

    function getCommands(){
        return _commands;
    }

    function get_commands_info(){
        return _command_info;
    }

    return {
        getCommands,
        register_command,
        get_commands_info
    }
})()

export default commands;