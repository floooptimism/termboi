import echo from './bin/echo';
import open_url from './bin/open_url';

const main = (function(){
    const commands = [
        {name: 'echo', desc: 'Displays text', func: echo},
        {name: 'open_url', desc: 'Opens a url', func: open_url}
    ]

    return {
        name: "Core module",
        commands
    }
})();


export default main;
