function check_if_string(string){
    let actual_string = null;

    let istring = false;
    let isquote = string.indexOf("'");
    if(isquote > -1){
        isquote = string.indexOf('"');
        let s = string.slice(1);
        let isendquote = s.indexOf("'");
        if(isendquote > -1){
            actual_string = s.slice(0,isendquote);
            return actual_string
        }
    }
    isquote = string.indexOf('"');
    if(isquote > -1){
        let s = string.slice(1);
        let isendquote = s.indexOf('"');
        if(isendquote > -1){
            actual_string = s.slice(0,isendquote);
            return actual_string
        }
    }

    return false;
} 

//TODO takes the flag from the argument
// "'bratva'".match(/["'])(?:(?!\1)[^\\]|\\.)*\1/)
function take_stringless_args(string){
    const reg = /\s?(-\w*)\s*(\w*\b)\s?/g
    let res = string.matchAll(reg)
}

