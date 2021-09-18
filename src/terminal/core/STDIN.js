import Event from './Event';

const STDIN = (function(){
    let _input;
    let _waiting = false;

    async function input(){
        _input = false;
        _waiting = true;
        Event.emit("print","( enter input )","yellow");
        while(true){
            await new Promise(wait => {
                setTimeout(wait, 100);
            })
            if(_input){
                break;
            }
        }
        Event.emit("removeLastOutput");
        Event.emit("print", " Input received!", "green");   
        _waiting = false;
        return _input;
    }

    function shove_input(value){
        _input = value;
    }

    function isWaiting(){
        return !!_waiting;
    }

    return {
        input,
        isWaiting,
        shove_input
    }
})()

export default STDIN;