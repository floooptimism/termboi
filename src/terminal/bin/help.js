import commands from '../commands'; // i need command info

function help(System, args){
    const command_infos = commands.get_commands_info();
    const command_entries = Object.entries(command_infos);

    command_entries.forEach(element => {
        System.STDOUT.print_block(`${element[0]}`,'#32af8c','30%');System.STDOUT.print_block(`${element[1]}\n`,'#a7a9ad','70%');
})

}
export default help;
