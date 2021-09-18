import ModuleLoader from '../core/ModuleLoader';
import Core from '../../../modules/core_c';

// for testing
import jobby from '../../../module_src/job_search/module';

ModuleLoader.load_module(Core);
ModuleLoader.load_module(jobby);
