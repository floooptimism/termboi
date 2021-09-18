import i_liaison from './bin/liaison';

const main = (function(){
    const commands = [
        {name: 'liaison', desc: 'Liaison Subject Intelligence', func: i_liaison}
    ];

    return {
        name: 'Liaison',
        commands
    };
})();
