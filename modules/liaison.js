var i_liaison = (function(){

    const agents = [
        'FX1503',
        'LE1024',
        'BR9522',
        'TI8493'
    ];

    function list(System, args){
        agents.forEach((elem)=>{
            System.STDOUT.print(elem +'\n','green');
        });
    }

    function liaison(System, args){
        if(args.trim() == ''){
            System.STDOUT.print("Enter 'liaison help' for additional information.");
            return;
        }
    
        const format_arg = args.split(/\s*\s/g).filter(function(elem){return elem != ''});
        
        switch(format_arg[0]){
            case 'list':
                list(System, format_arg.slice(1));
                break;
        }
    
    }

    return liaison
    
})();

const main = (function(){
    const commands = [
        {name: 'liaison', desc: 'Liaison Subject Intelligence', func: i_liaison}
    ];

    return {
        name: 'Liaison',
        commands
    };
})();
