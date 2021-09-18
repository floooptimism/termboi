

const Event = (function(){
    const _events = {};
    const _async_events = {};

    function emit(event){
        _events[event](...[...arguments].slice(1));
    }

    async function emit_async(event){
        await _async_events[event](...[...arguments].slice(1));
    }

    function subscribe(event, handler){
        _events[event] = handler;
    }

    function subscribe_async(event, handler){
        _async_events[event] = handler;
    }

    return {
        emit,
        emit_async,
        subscribe,
        subscribe_async
    }
})()

export default Event;