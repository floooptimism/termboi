import commands from '../commands';

// import commands from bin
import help from '../bin/help';
import ModuleHandler from '../bin/module';
import clear from '../bin/clear';

commands.register_command('help','Shows this help information.',help);
commands.register_command('module', 'Module Manager', ModuleHandler);
commands.register_command('clear',"Clears terminal.",clear);