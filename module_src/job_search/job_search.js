import jobby from './src/bin/jobby';

const main = (function (){

    const name = "jobby"

    let commands = [
        {name:"jobby", desc:"Job Search Tool", func:jobby}
    ]

    return {
        name,
        commands
    }

})()

console.log(typeof(main));

export default main;