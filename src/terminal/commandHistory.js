export default (function(){
    let history = [];
    let index = null;

    const max = 10;

    function push_command(command){
        if(history.length < max){
            index = history.push(command);
        }else{
            history.shift();
            index = history.push(command);
        }
    }

    function move_up(){
        if(index > 0){
            index -= 1;   
        }
        return history[index] ? history[index]:'';
    }

    function move_down(){
        if(index < history.length - 1 ){
            index += 1;
        }
        return history[index] ? history[index]:'';
    }

    return {
        push_command,
        move_up,
        move_down
    }
    
})()