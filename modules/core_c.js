function echo (System, args){
    System.STDOUT.print(args);
}

function open_url(System, args){
    window.open(args);
}

const main = (function(){
    const commands = [
        {name: 'echo', desc: 'Displays text', func: echo},
        {name: 'open_url', desc: 'Opens a url', func: open_url}
    ];

    return {
        name: "Core",
        commands
    }
})();

export default main;
